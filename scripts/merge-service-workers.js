#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');
const getSupportedLocales = require('./get-supported-locales');

const rootFolder = './dist/iit-szg/browser';

const readJson = async file => {
  const content = await fs.readFile(file, 'UTF-8');
  return JSON.parse(content);
};

const mergeNgswJsonFiles = async supportedLocales => {
  console.log('Merging ngsw.json files');

  const firstLocale = supportedLocales[0];
  const firstNgswJsonFile = path.resolve(rootFolder, firstLocale, 'ngsw.json');
  let newNgswJsonFileContentObject = await readJson(firstNgswJsonFile);
  await deleteFile(firstNgswJsonFile);
  let index = newNgswJsonFileContentObject.index.substring(0, newNgswJsonFileContentObject.index.lastIndexOf('/'));
  newNgswJsonFileContentObject = {
    ...newNgswJsonFileContentObject,
    index: index.substring(0, index.lastIndexOf('/') + 1)
  };

  for (let localeIndex = 1; localeIndex < supportedLocales.length; localeIndex++) {
    const locale = supportedLocales[localeIndex];
    const ngswJsonFile = path.resolve(rootFolder, locale, 'ngsw.json');
    const ngswJsonFileContentObject = await readJson(ngswJsonFile);
    await deleteFile(ngswJsonFile);

    newNgswJsonFileContentObject = {
      ...newNgswJsonFileContentObject,
      assetGroups: [
        {
          ...newNgswJsonFileContentObject.assetGroups[0],
          urls: [...newNgswJsonFileContentObject.assetGroups[0].urls, ...ngswJsonFileContentObject.assetGroups[0].urls]
        }
      ],
      hashTable: {
        ...newNgswJsonFileContentObject.hashTable,
        ...ngswJsonFileContentObject.hashTable
      }
    };
  }

  const newNgswJsonFile = path.resolve(rootFolder, 'ngsw.json');
  const newNgswJsonFileContentString = JSON.stringify(newNgswJsonFileContentObject, null, 2);
  await fs.writeFile(newNgswJsonFile, newNgswJsonFileContentString, { encoding: 'UTF-8' });
};

const isFolder = async file => {
  const lstat = await fs.lstat(file);
  return lstat.isDirectory();
};

const deleteFile = async file => {
  if (await isFolder(file)) {
    await fs.rmdir(file);
  } else {
    await fs.rm(file);
  }
};

const moveToRoot = async (relativePath, supportedLocales) => {
  console.log(`Moving ${relativePath} to root`);

  const firstLocale = supportedLocales[0];
  const oldPath = path.resolve(rootFolder, firstLocale, relativePath);
  const newPath = path.resolve(rootFolder, relativePath);
  await fs.rename(oldPath, newPath);

  for (let localeIndex = 1; localeIndex < supportedLocales.length; localeIndex++) {
    const locale = supportedLocales[localeIndex];
    const pathToDelete = path.resolve(rootFolder, locale, relativePath);
    await deleteFile(pathToDelete);
  }
};

const patchServiceWorker = async () => {
  const file = path.resolve(rootFolder, 'ngsw-worker.js');
  const content = await fs.readFile(file, 'UTF-8');
  const patchedContent = content.replace(
    'return this.handleFetch(this.adapter.newRequest(this.indexUrl), event);',
    `const locale = this.adapter.normalizeUrl(req.url).split("/")[1];
        const url = locale ? "/" + locale + "/index.html": "/index.html";
        return this.handleFetch(this.adapter.newRequest(url), event);`
  );
  await fs.writeFile(file, patchedContent, { encoding: 'UTF-8' });
};

(async () => {
  const supportedLocales = await getSupportedLocales();

  // Merge ngsw.json files
  await mergeNgswJsonFiles(supportedLocales);

  // Move service workers
  await moveToRoot('ngsw-worker.js', supportedLocales);
  await moveToRoot('safety-worker.js', supportedLocales);
  await moveToRoot('worker-basic.min.js', supportedLocales);

  // Patch service worker
  await patchServiceWorker();
})();
