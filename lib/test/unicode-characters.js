'use strict';

var test = require('tape');

var unicodeCharacters = require('../unicode-characters.js');

test('unicodeCharacters', function (t) {
  t.equal(unicodeCharacters().lea, '\\e600');
  t.equal(unicodeCharacters().med, '\\e68d');
  t.end();
});