import calculator from './My Calculator'

test('Check calculator.stringToNum', () => {
    expect(calculator.stringToNum('1')).toBe(1);
    expect(calculator.stringToNum('2')).toBe(2);
    expect(calculator.stringToNum('-3')).toBe(-3);
});

test('Check calculator.parseInput', () => {
    expect(calculator.parseInput([1, '+', 1])).toStrictEqual([1, '+', 1]);
    expect(calculator.parseInput([1, '+', 1, '+'])).toStrictEqual([1, '+', 1]);
    expect(calculator.parseInput(['-', 1, '+', 1, '='])).toStrictEqual([1, '+', 1]);

});

test('Check calculator.doMath', () => {
    expect(calculator.doArithmetic(1, 3, '+')).toBe(4);
    expect(calculator.doArithmetic(2, 3, '-')).toBe(-1);
    expect(calculator.doArithmetic(2, 3, '*')).toBe(6);
    expect(calculator.doArithmetic(2, 2, '/')).toBe(1);
});

test('Check calculator.calculate', () => {
    expect(calculator.calculate([1, 3, '+', 3])).toBe(16);
    expect(calculator.calculate([1, '-', 3])).toBe(-2);
    expect(calculator.calculate([9, '/', 3, 4, 5])).toBe(9 / 345);
    expect(calculator.calculate([2, '*', 3, '+', 2, '='])).toBe(8);
    expect(calculator.calculate([2, 9, 8, 3, 4, '*', 3, 2, 9, 4, 0, '+', 2])).toBe(29834 * 32940 + 2);
});



