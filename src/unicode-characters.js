const fs = require('fs');

var cached;

function unicodeCharacters() {
  if (!cached) {
    const iconsPath = require.resolve('keyrune/less/icons.less');
    const less = fs.readFileSync(iconsPath).toString();

    const matches = {};
    const regex = /\.\@\{ss-prefix\}-(\w+).+"(\\\w+)/g;
    var match;
    while (match = regex.exec(less)) {
      matches[match[1]] = match[2];
    }

    cached = matches;
  }

  return cached;
}

module.exports = unicodeCharacters;
