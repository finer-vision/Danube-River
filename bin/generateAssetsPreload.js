#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

function getFiles(directory, allFiles = []) {
  const files = fs.readdirSync(directory, {withFileTypes: true});

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(directory, file.name);
    const fileParts = filePath.split('.');
    const fileExtension = fileParts[fileParts.length - 1];

    if (file.isDirectory()) {
      allFiles.push(...getFiles(filePath, allFiles));
      continue;
    }

    if (file.name.startsWith('.') || !allowedExtensions.includes(fileExtension)) {
      continue;
    }

    allFiles.push(filePath);
  }

  return allFiles;
}

const srcDirectory = path.resolve(__dirname, '..', 'src');
const files = [...new Set(getFiles(path.join(srcDirectory, 'assets')).map(file => file.replace(srcDirectory, '')))];
fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'assets.json'), JSON.stringify(files, null, 2));
