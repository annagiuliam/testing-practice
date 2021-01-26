const { TestScheduler } = require('jest');
const reverseString = require('../code/reverseString');

test('hello to be olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('hello world to be dlrow olleh', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
})

test('"" to be ""', ()=> {
    expect(reverseString('""')).toBe('""');
})