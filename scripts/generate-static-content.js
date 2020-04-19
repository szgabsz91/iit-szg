#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const supportedLocaleIds = ['en', 'hu'];
const metadataJsonPath = path.resolve('src', 'assets-source', 'metadata.json');

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

console.log('Generating static content...');

(async () => {
  const metadata = JSON.parse(await readFile(metadataJsonPath, 'UTF-8'));
  const requiredLocaleId = process.argv[2];
  const localeIds = requiredLocaleId ? [requiredLocaleId] : supportedLocaleIds;
  localeIds.forEach(async supportedLocaleId => {
    await generateMetadataForLocale(metadata, supportedLocaleId);
  });
})();
