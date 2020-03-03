import temp from './daily'

test('Test fahrenheit converter', () => {
    expect(temp.convertToFahrenheit(0)).toBe(32);
    expect(temp.convertToFahrenheit(10)).toBe(50);
});