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

  // Compile JS string
  let sources = '';
  for (let i = 0; i < assets.length; i++) {
    const src = assets[i].replace(/^\//, '');
    sources += `  '${src}': import('./${src}'),${i < assets.length - 1 ? '\n' : ''}`;
  }

  fs.writeFileSync(path.join(srcDirectory, 'assets.js'), `export default {\n${sources}\n};\n`);
});
