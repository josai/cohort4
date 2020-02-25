// define attributes / variables
// number
// string
// boolean
// array
// dictionary / objects
// undefined
// sample if / else
// functions
// parameters
// returns
// arrays
// add to the front
// add to the end
// update values
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value

const functions = {

    isNum: (num) => {
        if ((typeof num) === 'number'){
            return true
        } else {
            return false
        }
    },

    isString: (str) => {
        // string
        if ((typeof str) === 'string') {
            return true;
        } else {
            return false;
        }
    },

    isBool: (bool) => {
        if ((typeof bool) === 'boolean'){
            return true;
        } else {
            return false;
        }
    },

    addArray: (a, x) => {
        // add element to an array
        a.push(x); // add to the front
        const newA = [x].concat(a); // add to the end
        return newA;
    },

    addOneToArray: (a) => {
        // for loop 
        // for each element in the array add one
        let newA = [];
        for (let index = 0; index < a.length; index++) {
            let element = a[index]  + 1;
            newA.push(element);
        }
        return newA;
    },

    isUndefined: (a) => {
        if ((typeof a) === 'undefined') {
            return true;
        } else {
            return false;
        };
    },

    doWhile: (x, y) => {
        // do while
        do {
            x = x + 1;
        }
        while (x < y);
        return x;
    },

    addOne: (x, i, a) => {
        a[i] = x + 1;
    },

    addToEach: (a) => {
        // forEach (with array and function)
        // adds one to each element in array
        a.forEach(functions.addOne);
        return a;
    },

    getDictItem: (d, key) => {
        // lookup key to retrieve value
        return d[key];
    }

}

export default functions;