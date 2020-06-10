
import { capitalize, caesar, calculator, reverse } from './practice'


test(`capitalize 'now' to equal 'Now'`, () => {
  expect(capitalize('now')).toBe('Now');
});


test(`reverse 'this' to equal 'siht'`, () => {
  expect(reverse('this')).toBe('siht');
})

test('adds 2 plus 2 to equal 4', () => {
  expect(calculator.add(2,2)).toBe(4);
});

test('subtract 4 minus 3 to equal 1', () => {
  expect(calculator.subtract(4,3)).toBe(1);
});

test('Multipy 4 times 3 to equal 12', () => {
  expect(calculator.multipy(4,3)).toBe(12);
});

test('Divide 28 by 4 to equal 7', () => {
  expect(calculator.divide(28,4)).toBe(7);
});


describe('caesar', () => {
  it('encrypts a lower case letter', () => {
      expect(caesar('a')).toBe('b');
  });
  it('encrypts a lower case letter', () => {
    expect(caesar('d')).toBe('e');
  });
  it('encrypts an Upper case letter', () => {
    expect(caesar('F')).toBe('G');
  });
  it('wraps z to a in lower case', () => {
    expect(caesar('z')).toBe('a');
  });
  it('wraps Z to A in upper case', () => {
    expect(caesar('Z')).toBe('A');
  });
  it('encrypts words', () => {
    expect(caesar('Chicken')).toBe('Dijdlfo');
  });
  it('encrypts sentences', () => {
    expect(caesar('a cat a hat')).toBe('b dbu b ibu');
  });
  it(`doesn't encrypt puctionation like ' and .`, () => {
    expect(caesar('Don\'t be a hero')).toBe('Epo\'u cf b ifsp');
  });
});
