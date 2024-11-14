/**
 * Javascript still has data types, we just dont declare them
 * 
 *      Primitives:
 *          - number - whole and decimal numbers, positive or negative (-1, 5.6, -12321)
 *          - string - zero or more alphanumeric characters ('c', "256", '478_+ghjy')
 *                   - there is no char in JS
 *                   - strings are like arrays, where you can use array-like functiuons to 
 *                     substring them, find characters at certain indicies
 *          - boolean - true/false, "true" is NOT boolean
 *          - null - object type, means an object with no assigned value
 *          - BigInt (huge numbers, you decalre with an 'n', ex. 5n)
 *          - Symbol (more of JS identifier) - creates an object in memory we can retrieve view key
 *          - undefined - a variable has been declared but not instantiated
 * 
 *      Non-primitive:
 *          - objects - inlcudes arrays
 *          - arrays
 *          - functions, etc.
 *         
 * 
 */

console.log(typeof 123);
console.log(typeof '123');
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [1, 2, 3]);
console.log(typeof {name: "caroline"});

// built in function in JS for casting to a specific data type
let z = Boolean(12);
console.log(typeof z);

let x = Number("string");
console.log(typeof x);

let y = BigInt(2);
console.log(typeof y);

let num = 12;
let myBool = Boolean(num);
console.log(myBool)

num = !!num; //12 = !!12 -> !false -> true
console.log(num);

/**
 * Type Coercion
 *      bascially when JS tries to manually convert your data types
 */
let num1 = 5;
let num2 = '10';
let num3 = '5' == 5;

//JS can decide between making num1 and num2 both strings or both numbers
let sum1 = num1 + num2; //strings wins out and num1 is coerced into being a string
console.log(sum1)
console.log('Sum1 = ' + sum1);

console.log('num3: ' + num3);

let sum2 = num1 + Number(num2);
console.log('Sum2 = ' + sum2);

/**
 * Template Literals (aka template strings)
 *      - strings that are created with ticks(``)
 *      - they print exactly as they appear
 * 
 */

let myName = 'Winston';

//can reference variables in template literals with string interpolation ${var_name}
let newStr = 
`Here is a list of ${myName}'s favorite foods:
        1. Sushi
        2. Chipotle
        3. Chocolate cake`;

console.log(newStr);