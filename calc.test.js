const { add, subtract, multiply, divide } = require('./calc');

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});
test('division by zero throws error', () => {
  expect(() => divide(4, 0)).toThrow("Division by zero");
});