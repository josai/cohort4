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
    // defines three functions that check the type of a variable.
    // Returns true / false
    isString: (str) => {
        if ((typeof str) === 'string') {
            return true;
        } else {
            return false
        }
    },
    
    isNum: (num) => {
        if ((typeof num) === 'number'){
            return true
        } else {
            return false
        }
    },

    isBool: (bool) => {
        if ((typeof bool) === 'boolean'){
            return true
        } else {
            return false
        }
    }

}

export default functions;