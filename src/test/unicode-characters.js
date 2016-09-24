const test = require('tape');

const unicodeCharacters = require('../unicode-characters.js');

test('unicodeCharacters', t => {
  t.equal(unicodeCharacters().lea, '\\e600');
  t.equal(unicodeCharacters().med, '\\e68d');
  t.end();
});
