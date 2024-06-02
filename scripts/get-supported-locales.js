const fs = require('fs/promises');

const getSupportedLocales = async () => {
  const files = await fs.readdir('./dist/iit-szg/browser');
  return files.filter(file => file.length === 2);
};

module.exports = getSupportedLocales;
