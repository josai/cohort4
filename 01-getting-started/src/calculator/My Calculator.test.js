import calculator from './My Calculator'

test('check calculator.stringToNum', () => {
    expect(calculator.stringToNum('1')).toBe(1);
    expect(calculator.stringToNum('2')).toBe(2);
    expect(calculator.stringToNum('-3')).toBe(-3);
});

test('check calculator.calulate', () => {
    expect(calculator.calculate(['1', '+', '3'])).toBe(4);
   // expect(calculator.calculate(['1', '+', '3'])).toBe(4);
});