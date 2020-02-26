import calculator from './My Calculator'

test('Check calculator.stringToNum', () => {
    expect(calculator.stringToNum('1')).toBe(1);
    expect(calculator.stringToNum('2')).toBe(2);
    expect(calculator.stringToNum('-3')).toBe(-3);
});

test('Check calculator.doMath', () => {
    expect(calculator.doMath(1, 3, '+')).toBe(4);
    expect(calculator.doMath(2, 3, '-')).toBe(-1);
    expect(calculator.doMath(2, 3, '*')).toBe(6);
    expect(calculator.doMath(2, 2, '/')).toBe(1);
});

test('Check calculator.calculate', () => {
    expect(calculator.calculate([1, '+', 3])).toBe(4);
    expect(calculator.calculate([1, '-', 3])).toBe(-2);
    expect(calculator.calculate([9, '/', 3])).toBe(3);
    expect(calculator.calculate([2, '*', 3])).toBe(6);
});