// scripts/post-export.js   
const fs = require('fs');   
const path = require('path');   
   
const directory = path.join(__dirname, '../out');   
   
function renameFilesToLowerCase(dir) {   
  fs.readdirSync(dir).forEach((file) => {   
    const fullPath = path.join(dir, file);   
    if (fs.lstatSync(fullPath).isDirectory()) {   
      renameFilesToLowerCase(fullPath);   
    } else if (file.endsWith('.html')) {   
      const lowerCaseFile = file.toLowerCase();   
      if (file !== lowerCaseFile) {   
        fs.renameSync(fullPath, path.join(dir, lowerCaseFile));   
        console.log(`Renamed ${file} to ${lowerCaseFile}`);   
      }   
    }   
  });   
}   
   
renameFilesToLowerCase(directory);   
   