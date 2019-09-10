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
  for (let i = 0; i < files.length; i++) {
    files[i] = files[i].replace(srcDirectory, '');
  }
  fs.writeFileSync(path.join(srcDirectory, 'assets.json'), JSON.stringify(files, null, 2));
});
