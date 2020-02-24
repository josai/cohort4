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
        // boolean
        if ((typeof bool) === 'boolean'){
            return true;
        } else {
            return false;
        }
    },

    isArray: (a) => {
        // array
        return false;
    },

    isDict: (a) => {
        return false;
    },

    isUndefined: (a) => {
        return false;
    },

    addFront: (a, x) => {
        return a;
    },

    addBack: (a, x) => {
        return a
    },

    updateValue: (a, x) => {
        return a;
    }



}

export default functions;