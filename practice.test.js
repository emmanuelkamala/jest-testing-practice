
import { capitalize, analyse, caesar, calculator, reverse } from './practice'

// Testing capitalize
test(`capitalize 'now' to equal 'Now'`, () => {
  expect(capitalize('now')).toBe('Now');
});


// Testing reverse
test(`reverse 'this' to equal 'siht'`, () => {
  expect(reverse('this')).toBe('siht');
})

// Testing calculator object functions
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


// Testing caesar cipher 

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


// Testing analyse object functions

describe('analyse', () => {
  it('finds the minimum value of an array', () => {
    expect(analyse([14, 2, 33, 17 ,21]).min).toBe(2);
  });
  it('finds the maximum value of an array', () => {
    expect(analyse([1, 9, 19, 17 ,6]).max).toBe(19);
  });
  it('correctly calculates the average of an array', () => {
    expect(analyse([1, 9, 10, 25 ,5]).average).toBe(10);
  });
  it('calculates averages when they are decimal number', () => {
    expect(analyse([1, 27, 8 ,9, 4, 7]).average).toBeCloseTo(9.33);
  });
  it('returns the length of the array', () => {
    expect(analyse([4, 4, 5, 90, 1 ,5]).length).toBe(6);
  });
  it('takes an array and returns an obect', () => {
      expect(analyse([6, 1, 15, 2])).toEqual({"average": 6, "length": 4, "max": 15, "min": 1});
  });
});