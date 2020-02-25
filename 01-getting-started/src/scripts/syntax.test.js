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

test("Check addArray", () =>{
    expect(functions.addArray([0], 1)).toStrictEqual([1, 0, 1]);
    expect(functions.addArray([0], 2)).toStrictEqual([2, 0, 2]);
});


test("Check addOneToArray", () =>{
    expect(functions.addOneToArray([0, 1, 2])).toStrictEqual([1, 2, 3]);
    expect(functions.addOneToArray([1, 2, 3])).toStrictEqual([2, 3, 4]);
});

test("Check Undefined", () =>{
    expect(functions.isUndefined("test")).toBe(false);
    expect(functions.isUndefined([][0])).toBe(true);
});

test("Check doWhile", () =>{
    expect(functions.doWhile(0, 10)).toBe(10);
    expect(functions.doWhile(0, 50)).toBe(50);
});

test("Check addToEach", () =>{
    expect(functions.addToEach([0, 1, 2])).toStrictEqual([1, 2, 3]);
    expect(functions.addToEach([1, 2, 3])).toStrictEqual([2, 3, 4]);
});

test("Check getDictItem", () =>{
    expect(functions.getDictItem({"key":"value"}, 'key')).toBe("value");
    expect(functions.getDictItem({"num":0}, "num")).toBe(0);
});