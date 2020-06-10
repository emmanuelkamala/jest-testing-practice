
import { capitalize, sum, reverse } from './practice'


test(`capitalize 'now' to equal 'Now'`, () => {
  expect(capitalize('now')).toBe('Now');
});

test('adds 2 plus 2 to equal 4', () => {
  expect(sum(2,2)).toBe(4);
});

test(`reverse 'this' to equal 'siht'`, () => {
  expect(reverse('this')).toBe('siht');
})
