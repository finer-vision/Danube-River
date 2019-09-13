#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const recursive = require('recursive-readdir');

const srcDirectory = path.resolve(__dirname, '..', 'src');
const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
recursive(path.join(srcDirectory, 'assets'), allowedExtensions, (err, files) => {
  if (err) {
    return console.error(err.message);
  }

  const assets = [];
  for (let i = 0; i < files.length; i++) {
    files[i] = files[i].replace(srcDirectory, '');

    // Check if extension is allowed
    let allowed = false;
    for (let j = 0; j < allowedExtensions.length; j++) {
      if (files[i].endsWith(allowedExtensions[j])) {
        allowed = true;
        break;
      }
    }

    if (!allowed) {
      continue;
    }

    assets.push(files[i]);
  }
  fs.writeFileSync(path.join(srcDirectory, 'assets.json'), JSON.stringify(assets, null, 2));
});
