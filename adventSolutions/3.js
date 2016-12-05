module.exports = input =>
  input.split('\n')
    .filter(line => !!line)
    .map(line => line.split(' ')
      .filter(ele => !!ele)
      .map(ele => parseInt(ele, 10))
    )
    .filter((triangle) => {
      const largestSide = Math.max.apply(null, triangle);
      triangle.splice(triangle.indexOf(largestSide), 1);
      const otherSidesSum = triangle.reduce((total, side) => total + side);


      return otherSidesSum > largestSide;
    }).length;
