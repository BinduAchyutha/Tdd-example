const add = require('./calculator');

describe("Calculator tests", () => {
    test('Empty String should return 0', () => {
      expect(add('')).toBe(0);
    });

    test('Single value should return single value', () => {
        expect(add('1')).toBe(1);
    });

    test('Two values should return sum of those two values', () => {
        expect(add('1, 2')).toBe(3);
    });

    test('Multiple values should return sum of those Multiple values', () => {
        expect(add('1,297465646,3,4,5,6,7,8,9,10')).toBe(297465699);
    });

    test('Delimeters check ', () => {
        expect(add('//;1;2;3')).toBe(6);
    });

    test('Negative values not allowed', () => {
        expect(add('-1,-1234')).toBe('Negatives are not allowed -1,-1234');
    });

    test('New Line delimeters check', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('Negative values with positive numbers not allowed', () => {
        expect(add('-1,-14\n6')).toBe('Negatives are not allowed -1,-14');
    });
})