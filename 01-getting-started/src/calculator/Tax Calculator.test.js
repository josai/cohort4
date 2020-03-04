import taxes from './Tax Calculator'

test('Check calculate', () => {
    expect(taxes.calculate(1)).toBe(0.15000000000000002);
    expect(taxes.calculate(2)).toBe(0.30000000000000004);
    expect(taxes.calculate(50000)).toBe(7580.629999999997);
    expect(taxes.calculate(100000)).toBe(20393.410000000003);
    expect(taxes.calculate(150000)).toBe(33393.41);
    expect(taxes.calculate(250000)).toBe(63804.5);
});