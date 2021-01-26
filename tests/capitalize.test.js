const { TestScheduler } = require('jest');
const capitalize = require('../code/capitalize');

test('hello to be Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('eLephanT to be Elephant', () => {
    expect(capitalize('eLephanT')).toBe('Elephant');
})

test('"" to be ""', ()=> {
    expect(capitalize('""')).toBe('""');
})