#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const zipFolder = promisify(require('zip-folder'));

const lstat = promisify(fs.lstat);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const supportedLocaleIds = ['en', 'hu'];
const assetsSourceFolder = path.resolve('src', 'assets-source');
const metadataJsonPath = path.resolve(assetsSourceFolder, 'metadata.json');
const coursesSourceFolder = path.resolve(assetsSourceFolder, 'courses');
const assetsFolder = path.resolve('src', 'assets');

const keepOneLocaleInMetadata = (metadata, localeId) => {
  return {
    courses: metadata.courses.map(course => ({
      ...course,
      name: course.name[localeId],
      labs: course.labs.map(lab => ({
        ...lab,
        title: lab.title[localeId]
      }))
    }))
  };
};

const generateMetadataForLocale = (metadata, localeId) => {
  console.log('Generating metadata for locale', localeId);
  const targetMetadataJsonPath = path.resolve('src', `assets-${localeId}`, 'metadata.json');
  const targetMetadata = keepOneLocaleInMetadata(metadata, localeId);
  const targetMetadataContent = JSON.stringify(targetMetadata);
  return writeFile(targetMetadataJsonPath, targetMetadataContent, 'UTF-8');
}

const isFolder = async file => {
  const stat = await lstat(file);
  return stat.isDirectory();
}

const processCourseFolder = async courseFolder => {
  const labFolderNames = await readdir(courseFolder);
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
  const projectFolderNames = await readdir(labFolder);
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

const processProjectFolder = async projectFolder => {
  const relativePath = path.relative(assetsSourceFolder, projectFolder);
  console.log('Zipping folder', `assets/${relativePath}`);
  const targetFile = path.resolve(assetsFolder, relativePath) + '.zip';
  const parentFolder = path.resolve(targetFile, '..');
  await mkdir(parentFolder, { recursive: true });
  await zipFolder(projectFolder, targetFile);
}

console.log('Generating static content...');

(async () => {
  // metadata.json
  const metadata = JSON.parse(await readFile(metadataJsonPath, 'UTF-8'));
  const requiredLocaleId = process.argv[2];
  const localeIds = requiredLocaleId ? [requiredLocaleId] : supportedLocaleIds;
  localeIds.forEach(async supportedLocaleId => {
    await generateMetadataForLocale(metadata, supportedLocaleId);
  });

  // zip files
  const courseFolderNames = await readdir(coursesSourceFolder);
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
