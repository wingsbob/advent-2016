const rp = require('request-promise-native');
const { Cookie } = require('./config.json');

module.exports = day =>
  rp({
    uri: `http://adventofcode.com/2016/day/${day}/input`,
    headers: {
      Cookie
    }
  });
