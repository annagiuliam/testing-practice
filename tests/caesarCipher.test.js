const caesarCipher = require('../code/caesarCipher');

test('works with lower and upper case', () => {
    expect(caesarCipher("aBc", 2)).toBe("cDe");
})

test('works final letters of alphabet', () => {
    expect(caesarCipher("Zoo", 10)).toBe("Jyy");
})

test('ignores numbers and special characters', () => {
    expect(caesarCipher("Za!8BYo", 5)).toBe("Ef!8GDt");
})