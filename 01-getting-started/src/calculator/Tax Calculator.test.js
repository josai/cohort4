import taxes from './Tax Calculator'

test('Check calculate', () => {
    expect(taxes.calculate(1)).toBe(0.15);
    expect(taxes.calculate(2)).toBe(0.3);
    expect(taxes.calculate(50000)).toBe(7630.35);
    expect(taxes.calculate(100000)).toBe(18541.11);
    expect(taxes.calculate(150000)).toBe(31211.10);
    expect(taxes.calculate(250000)).toBe(61796.26);
});