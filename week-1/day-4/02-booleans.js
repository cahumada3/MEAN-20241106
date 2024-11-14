let myBoolean = true;

console.log(myBoolean);
console.log(!myBoolean);

console.log(2 == 2);
console.log(2 != 2);

console.log(2 == '2'); //true

/**
 * JS usees coercion to make assumptions about what we're trying to compare
 * ex. i sthe URL parameter (string) equal to the numerical database ID for an object?
 * 
 * strict equality operator ===
 *      - compares not only the value but also the TYPE
 */
console.log(2  === '2'); //false

console.log(2 == '2' && typeof 2 == typeof '2');

console.log(2 != '2'); //false
console.log(2 !== '2'); //true

/**
 * Comparison Operators
 *      < less than
 *      > greater than
 *      <= less than or equal to 
 *      >= greater than or equal to
 *      == loosely equal
 *      === strict equal
 *      != loose not equal
 *      !== strict not equal
 * 
 * Logical Operators
 *      && and
 *      || or
 *      & bitwise and
 *      | bitwise or
 */

if(3 == '3' && false == !true) {
    console.log('True!');
} else {
    console.log("False!");
}

if(45 % 9 === 1 || 'abc'.charAt(1) === 'a' || !(true || false)) {
    console.log('True!');
} else {
    console.log('False!');
}

/**
 * Truthy and Falsy
 * 
 * everything in JS evaluates to either truthy or falsy
 * 
 * Falsy Values
 *      false(boolean)
 *      null
 *      undefined
 *      0
 *      -0
 *      0n
 *      -0n
 *      0.0
 *      "" or '' or ``
 *      NaN
 *      !(anthing that's true)
 * 
 * Truthy Values
 *      anything that is not falsy
 *      that includes ANY object or ANY array, whether they're empty or not
 */

let userName = 'Steven Woah mack';

if(userName) {
    console.log('Display the block!')
}


/**
 * there are shorthand operations that you can use wihth booleans
 * some are for returning valuies or assessing boolean questions
 * 
 * Ternany Operator
 */
let value;

if (2 > 1) 
    value = 'Yes';
else
    value = 'No';

console.log(value);

//(condtion) ? <value to return if true> : <value to return if false>
let value2 = (2 > 1) ? 'Yes' : 'No';
console.log(value2);

// these can stack, but be careful how you evaluate them
let value3 = (true) ? 'First' : (true) ? 'Second' : 'Third';
console.log(value3);

//(condtion) ? <value to return if true> : <value to return if false>
let value4 = (true) ? (((false) ? ((true) ? 'One' : 'Two') : 'Three')) : 'Four';

//let value4 = (false) ? ((true) ? 'One' : 'Three') : 'Four';
console.log(value4);