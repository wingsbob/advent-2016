const moveToCoOrdinates = {
  U: [1, -1],
  D: [1, 1],
  L: [0, -1],
  R: [0, 1]
};

const coOrdsToNumber = {
  0: [1, 4, 7],
  1: [2, 5, 8],
  2: [3, 6, 9]
};

const bonusCoOrdsToNumber = {
  0: { 2: '5' },
  1: {
    1: '2',
    2: '6',
    3: 'A'
  },
  2: ['1', '3', '7', 'B', 'D'],
  3: {
    1: '4',
    2: '8',
    3: 'C'
  },
  4: {
    2: '9'
  }
};

const validBonusLocations = [
  [0, 2],
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [3, 1],
  [3, 2],
  [3, 3],
  [4, 2]
];

const checkForOutOfBounds = (coOrdinates, bonusPoints) =>
  bonusPoints ?
    validBonusLocations.some(([x, y]) => x === coOrdinates[0] && y === coOrdinates[1]) :
    coOrdinates.every(ele => ele >= 0 && ele <= 2);

const getLatestPosition = (startLocation, moveSet, bonusPoints) =>
  moveSet.replace(/\s/gi, '').split('')
    .map(move => moveToCoOrdinates[move])
    .reduce(
      (previousLocation, [index, factor]) => {
        const potentialNewLocation = previousLocation.slice();

        potentialNewLocation[index] += factor;

        return checkForOutOfBounds(potentialNewLocation, bonusPoints) ?
          potentialNewLocation : previousLocation;
      },
      startLocation);

module.exports = (input, bonusPoints) =>
  input
    .split('\n')
    .filter(line => !!line)
    .map(
      (moves, index, collection) =>
        getLatestPosition(
          collection.slice(0, index)
            .reduce(getLatestPosition, bonusPoints ? [0, 2] : [1, 1], bonusPoints),
          moves,
          bonusPoints
        )
    )
    .reduce((code, [x, y]) => `${code}${(bonusPoints ? bonusCoOrdsToNumber : coOrdsToNumber)[x][y]}`, '');
