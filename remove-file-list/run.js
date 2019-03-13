// Useful to remove any misc. files from homebrew warnings.

var fs = require('fs');
var array = fs.readFileSync('./files.txt').toString().split("\n");

array.forEach(file => {
  try {
    fs.unlinkSync(file.trim())
  } catch(err) {
    console.error(err)
  }
})
