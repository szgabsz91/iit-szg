#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

function byteAt(str, index) {
  if (typeof str === 'string') {
    return index >= str.length ? 0 : str.charCodeAt(index) & 0xff;
  } else {
    return index >= str.byteLength ? 0 : str[index] & 0xff;
  }
}

function wordAt(str, index, endian) {
  let word = 0;
  if (endian === 1) {
    for (let i = 0; i < 4; i++) {
      word += byteAt(str, index + i) << (24 - 8 * i);
    }
  } else {
    for (let i = 0; i < 4; i++) {
      word += byteAt(str, index + i) << (8 * i);
    }
  }
  return word;
}

function arrayBufferToWords32(buffer, endian) {
  const size = (buffer.byteLength + 3) >>> 2;
  const words32 = [];
  const view = new Uint8Array(buffer);
  for (let i = 0; i < size; i++) {
    words32[i] = wordAt(view, i * 4, endian);
  }
  return words32;
}

// Rotate a 32b number left `count` position
function rol32(a, count) {
  return (a << count) | (a >>> (32 - count));
}

function fk(index, b, c, d) {
  if (index < 20) {
    return [(b & c) | (~b & d), 0x5a827999];
  }

  if (index < 40) {
    return [b ^ c ^ d, 0x6ed9eba1];
  }

  if (index < 60) {
    return [(b & c) | (b & d) | (c & d), 0x8f1bbcdc];
  }

  return [b ^ c ^ d, 0xca62c1d6];
}

function add32to64(a, b) {
  const low = (a & 0xffff) + (b & 0xffff);
  const high = (a >>> 16) + (b >>> 16) + (low >>> 16);
  return [high >>> 16, (high << 16) | (low & 0xffff)];
}

function add32(a, b) {
  return add32to64(a, b)[1];
}

function word32ToByteString(word) {
  let str = '';
  for (let i = 0; i < 4; i++) {
    str += String.fromCharCode((word >>> (8 * (3 - i))) & 0xff);
  }
  return str;
}

function words32ToByteString(words32) {
  return words32.reduce((str, word) => str + word32ToByteString(word), '');
}

function byteStringToHexString(str) {
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    const b = byteAt(str, i);
    hex += (b >>> 4).toString(16) + (b & 0x0f).toString(16);
  }
  return hex.toLowerCase();
}

function _sha1(words32, len) {
  const w = [];
  let [a, b, c, d, e] = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  words32[len >> 5] |= 0x80 << (24 - (len % 32));
  words32[(((len + 64) >> 9) << 4) + 15] = len;

  for (let i = 0; i < words32.length; i += 16) {
    const [h0, h1, h2, h3, h4] = [a, b, c, d, e];

    for (let j = 0; j < 80; j++) {
      if (j < 16) {
        w[j] = words32[i + j];
      } else {
        w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      }

      const [f, k] = fk(j, b, c, d);
      const temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
      [e, d, c, b, a] = [d, c, rol32(b, 30), a, temp];
    }

    [a, b, c, d, e] = [add32(a, h0), add32(b, h1), add32(c, h2), add32(d, h3), add32(e, h4)];
  }

  return byteStringToHexString(words32ToByteString([a, b, c, d, e]));
}

const sha1Binary = buffer => {
  const words32 = arrayBufferToWords32(buffer, 1);
  return _sha1(words32, buffer.byteLength * 8);
};

const removeHost = url => {
  let newUrl = url;
  newUrl = newUrl.substring(newUrl.indexOf('/') + 1);
  newUrl = newUrl.substring(newUrl.indexOf('/') + 1);
  return newUrl.substring(newUrl.indexOf('/') + 1);
};

const processFile = async (rootFolder, url) => {
  const relativePath = url.startsWith('http') ? removeHost(url) : url.substring(1);
  const file = path.resolve(rootFolder, relativePath);
  const content = await fs.readFile(file);
  return await sha1Binary(content);
};

(async () => {
  const rootFolder = `./dist/iit-szg/browser`;
  const ngswJsonFile = path.resolve(rootFolder, 'ngsw.json');
  const ngswJsonContent = await fs.readFile(ngswJsonFile, 'UTF-8');
  const ngswJsonObject = JSON.parse(ngswJsonContent);
  const hashTable = ngswJsonObject.hashTable;

  for (const [url, originalHash] of Object.entries(hashTable)) {
    const newHash = await processFile(rootFolder, url);

    if (originalHash !== newHash) {
      console.log(`The hash of ${url} changed from ${originalHash} to ${newHash}`);
      hashTable[url] = newHash;
    }
  }

  const newNgswJsonObject = {
    ...ngswJsonObject,
    hashTable
  };
  const newNgswJsonContent = JSON.stringify(newNgswJsonObject, null, 2);
  await fs.writeFile(ngswJsonFile, newNgswJsonContent, { encoding: 'UTF-8' });
})();
