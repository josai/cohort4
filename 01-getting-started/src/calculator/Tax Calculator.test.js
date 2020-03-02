import calculator from './Tax Calculator'

test('Check calculate', () => {
    expect(taxCalculator.calculate(0)).toBe(1);
    expect(taxCalculator.calculate(0)).toBe(0);
});
