const { expect } = require('chai');
const solution3 = require('../adventSolutions/3');

describe('day 3', () => {
  it('gives number of possible triangles', () => {
    expect(solution3('5 10 25')).to.equal(0);
  });
  it('gives number of possible triangles', () => {
    expect(solution3('6 30 25')).to.equal(1);
  });
  it('works for equilateral triangles', () => {
    expect(solution3('6 6 6')).to.equal(1);
  });
});
