const {capitalize} = require('../src/index')

describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    })
    test('capitalizes a single character', () => {
        expect(capitalize('a')).toBe('A');
    })
    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
    })
    test('does not modify already capitalized string', () => {
        expect(capitalize('Hello')).toBe('Hello');
    })
});

describe('reverseString', () => {
    test('reverses a common string', () => {
        expect(capitalize('hello')).toBe('olleh');
    })
    test('capitalizes a single character', () => {
        expect(capitalize('a')).toBe('a');
    })
    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
    })
    test('reverses correctly a string with punctuation', () => {
        expect(capitalize('Hello!')).toBe('olleH!');
    })
});