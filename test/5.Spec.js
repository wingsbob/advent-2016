const { expect } = require('chai');
const solution5 = require('../adventSolutions/5');

describe('day 5', () => {
  it('gets the password from the doorId', () => {
    expect(solution5('abc')).to.equal('18f47a30');
  });
});
