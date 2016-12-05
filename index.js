const { argv } = require('yargs');
const getInput = require('./getInput');

const adventChallenges = [1, 2].reduce((solutions, day) => {
  const solution = require(`./adventSolutions/${day}`);
  const additional = {};

  additional[day] = input => solution(input, argv.bonusPoints);
  return Object.assign(additional, solutions);
}, {});

const day = argv.day || 1;

getInput(day)
  .then(adventChallenges[day])
  .then(result => console.log(result))
  .catch(e => console.error(e));
