import functions from './syntax'

test("Check Strings", () =>{
    expect(functions.isString('hello world')).toBe(true);
    expect(functions.isString(42)).toBe(false);
    expect(functions.isString(true)).toBe(false);
});

test("Check Numbers", () =>{
    expect(functions.isNum(42)).toBe(true);
    expect(functions.isNum('234')).toBe(false);
    expect(functions.isNum(true)).toBe(false);
});

test("Check Bools", () =>{
    expect(functions.isBool(false)).toBe(true);
    expect(functions.isBool(42)).toBe(false);
    expect(functions.isBool('test')).toBe(false);
});