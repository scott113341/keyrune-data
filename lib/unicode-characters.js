'use strict';

var fs = require('fs');

var cached;

function unicodeCharacters() {
  if (!cached) {
    var iconsPath = require.resolve('keyrune/less/icons.less');
    var less = fs.readFileSync(iconsPath).toString();

    var matches = {};
    var regex = /\.\@\{ss-prefix\}-(\w+).+"(\\\w+)/g;
    var match;
    while (match = regex.exec(less)) {
      matches[match[1]] = match[2];
    }

    cached = matches;
  }

  return cached;
}

module.exports = unicodeCharacters;