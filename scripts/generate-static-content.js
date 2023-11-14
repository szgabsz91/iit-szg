#!/usr/bin/env node

const archiver = require('archiver');
const crypto = require('crypto');
const fs = require('fs/promises');
const minimist = require('minimist');
const path = require('path');

const { createWriteStream } = require('fs');
const { glob } = require('glob');

const supportedLocaleIds = ['en', 'hu'];
const assetsSourceFolder = path.resolve('src', 'assets-source');
const metadataJsonPath = path.resolve(assetsSourceFolder, 'metadata.json');
const coursesSourceFolder = path.resolve(assetsSourceFolder, 'courses');
const assetsFolder = path.resolve('src', 'assets');

const argv = minimist(process.argv.slice(2));

const keepOneLocaleInMetadata = (metadata, localeId) => {
  return {
    courses: metadata.courses.map(course => ({
      ...course,
      name: course.name[localeId],
      description: course.description[localeId],
      keywords: course.keywords[localeId],
      labs: course.labs.map(lab => ({
        index: lab.index,
        titles: {
          short: lab.shortTitle?.[localeId],
          long: lab.title[localeId]
        },
        description: lab.description[localeId],
        keywords: lab.keywords[localeId]
      }))
    }))
  };
};

const getMetadataJsonFilename = metadata => {
  if (argv.prod) {
    const metadataContent = JSON.stringify(metadata);
    const md5Hash = crypto.createHash('md5').update(metadataContent).digest('hex');
    return `metadata-${md5Hash}.json`;
  }

  return 'metadata.json';
};

const generateMetadataForLocale = (metadata, localeId) => {
  console.log('Generating metadata for locale', localeId);
  const targetMetadata = keepOneLocaleInMetadata(metadata, localeId);
  const targetMetadataContent = JSON.stringify(targetMetadata);
  const metadataJsonFilename = getMetadataJsonFilename(metadata);
  const targetMetadataJsonPath = path.resolve('src', `assets-${localeId}`, metadataJsonFilename);
  return Promise.all([
    fs.writeFile(targetMetadataJsonPath, targetMetadataContent, 'UTF-8'),
    fs.writeFile(
      path.resolve('src', 'app', 'constants', 'app.prod-constants.ts'),
      `export const METADATA_FILENAME = '${metadataJsonFilename}';\n`,
      'UTF-8'
    )
  ]);
};

const isFolder = async file => {
  const stat = await fs.lstat(file);
  return stat.isDirectory();
};

const processCourseFolder = async courseFolder => {
  const labFolderNames = await fs.readdir(courseFolder);
  labFolderNames
    .map(labFolderName => path.resolve(courseFolder, labFolderName))
    .forEach(async labFolder => {
      const shouldProcess = await isFolder(labFolder);
      if (!shouldProcess) {
        return;
      }
      await processLabFolder(labFolder);
    });
};

const processLabFolder = async labFolder => {
  const projectFolderNames = await fs.readdir(labFolder);
  projectFolderNames
    .map(projectFolderName => path.resolve(labFolder, projectFolderName))
    .forEach(async projectFolder => {
      const shouldProcess = await isFolder(projectFolder);
      if (!shouldProcess) {
        return;
      }
      processProjectFolder(projectFolder);
    });
};

const zipFolder = (sourceFolder, targetFile) => {
  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });
  const stream = createWriteStream(targetFile);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceFolder, false)
      .on('error', error => reject(error))
      .pipe(stream);

    stream.on('close', () => resolve());

    archive.finalize();
  });
};

const processProjectFolder = async projectFolder => {
  const relativePath = path.relative(assetsSourceFolder, projectFolder);
  console.log('Zipping folder', `assets/${relativePath}`);
  const targetFile = path.resolve(assetsFolder, relativePath) + '.zip';
  const parentFolder = path.resolve(targetFile, '..');
  await fs.mkdir(parentFolder, { recursive: true });
  await zipFolder(projectFolder, targetFile);
};

console.log('Generating static content...');

(async () => {
  // metadata.json
  const metadata = JSON.parse(await fs.readFile(metadataJsonPath, 'UTF-8'));
  const requiredLocaleId = argv._[0];
  const localeIds = requiredLocaleId ? [requiredLocaleId] : supportedLocaleIds;
  localeIds.forEach(async supportedLocaleId => {
    const metadataJsonFiles = await glob(path.resolve('src', `assets-${supportedLocaleId}`, 'metadata*.json'));
    for (const metadataJsonFile of metadataJsonFiles) {
      await fs.unlink(metadataJsonFile);
    }
    await generateMetadataForLocale(metadata, supportedLocaleId);
  });

  // zip files
  const courseFolderNames = await fs.readdir(coursesSourceFolder);
  courseFolderNames
    .map(courseFolderName => path.resolve(coursesSourceFolder, courseFolderName))
    .forEach(async courseFolder => {
      const shouldProcess = await isFolder(courseFolder);
      if (!shouldProcess) {
        return;
      }
      await processCourseFolder(courseFolder);
    });
})();
