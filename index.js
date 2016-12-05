const {argv} = require('yargs');
const getInput = require('./getInput');
const adventChallenges = [1, 2].reduce((adventChallenges, day) => {
  adventChallenges[day] = require(`./${day}`);
  return adventChallenges;
}, {});

const day = argv.day || 1;

getInput(day)
  .then(adventChallenges[day])
  .then(result => console.log(result))
  .catch(e => console.error(e));
