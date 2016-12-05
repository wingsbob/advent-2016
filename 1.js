const turns = {
  NORTH: {
    L: 'WEST',
    R: 'EAST'
  },
  SOUTH: {
    L: 'EAST',
    R: 'WEST'
  },
  WEST: {
    L: 'SOUTH',
    R: 'NORTH'
  },
  EAST: {
    L: 'NORTH',
    R: 'SOUTH'
  }
};

const distanceToCoOrdinates = {
  NORTH: [1, 1],
  SOUTH: [1, -1],
  WEST: [0, -1],
  EAST: [0, 1]
};

module.exports = (input) =>
  input.split(',')
    .map(instruction => instruction.match(/([LR])(\d+)/).slice(1))
    .map(([turnDirection, distance], index, collection) =>
      [
        collection.slice(0, index + 1).reduce((facingDirection, [turn]) =>
          turns[facingDirection][turn], 'NORTH'),
        distance
      ]
    )
    .reduce((coOrdinates, [direction, distance]) => {
      const [index, factor] = distanceToCoOrdinates[direction];

      coOrdinates[index] += distance * factor;
      return coOrdinates;
    }, [0, 0])
    .reduce((totalDistance, coOrd) => totalDistance + Math.abs(coOrd), 0);
