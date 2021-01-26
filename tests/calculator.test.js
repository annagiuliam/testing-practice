const calculator = require('../code/calculator');

test('sum positives', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('sum negatives', () => {
    expect(calculator.add(-1, -3)).toBe(-4);
})

test('subtract positives', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test('subtract negatives', () => {
    expect(calculator.subtract(2, -4)).toBe(6);
})

test('multiply', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
})

test('divide by 0', () => {
    expect(calculator.divide(3, 0)).toBe("invalid");
})

test('divide', () => {
    expect(calculator.divide(8, 2)).toBe(4);
})