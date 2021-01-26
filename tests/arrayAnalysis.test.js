const arrayAnalysis = require('../code/arrayAnalysis');

test('analyze average', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).average).toBe(4);
})

test('analyze min', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).min).toBe(1);
})

test('analyze max', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).max).toBe(8);
})

test('analyze length', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).length).toBe(6);
})