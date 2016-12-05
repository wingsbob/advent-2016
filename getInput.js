const rp = require('request-promise-native');

module.exports = (day) =>
  rp({
    uri: `http://adventofcode.com/2016/day/${day}/input`,
    headers: {
      Cookie: '_gat=1; session=53616c7465645f5ff2cacca681dc59dbc5519bf7ba1e9ccf6ae7603b596632f02e006982379bda139b53231135b3c490; _ga=GA1.2.880196673.1480960251'
    }
  });
