const { expect } = require('chai');
const solution2 = require('../adventSolutions/2');

describe('day 2', () => {
  it('Just going up gives 2', () => {
    expect(solution2('U')).to.equal('2');
  });
  it('Just going down gives 8', () => {
    expect(solution2('D')).to.equal('8');
  });
  it('Just going left gives 4', () => {
    expect(solution2('L')).to.equal('4');
  });
  it('Just going right gives 6', () => {
    expect(solution2('R')).to.equal('6');
  });
  it('going down then right gives 9', () => {
    expect(solution2('DR')).to.equal('9');
  });
  it('going right twice stops at gives 6', () => {
    expect(solution2('RR')).to.equal('6');
  });
  it('with 2 lines', () => {
    expect(solution2(`DR
      UU`)).to.equal('93');
  });
  it('with 3 lines', () => {
    expect(solution2(`DR
  UU
  DD`)).to.equal('939');
  });
  it('with 3 lines and empty lines', () => {
    expect(solution2(`DR
  UU

  DD`)).to.equal('939');
  });
  it('does crazy shit with lots of input', () => {
    const result = solution2(`ULL
RRDDD
LURDL
UUUUD`);

    expect(result).to.equal('1985');
  });
  it('works for the bonus', () => {
    expect(solution2('U', true)).to.equal('5');
  });
  it('works for the bonus', () => {
    expect(solution2('D', true)).to.equal('5');
  });
  it('works for the bonus', () => {
    expect(solution2('R', true)).to.equal('6');
  });
  it('does crazy shit with lots of input for the bonus', () => {
    const result = solution2(`ULL
RRDDD
LURDL
UUUUD`, true);

    expect(result).to.equal('5DB3');
  });
});
