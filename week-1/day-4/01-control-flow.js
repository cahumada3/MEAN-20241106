/**
 * control flow refers to how the processor moves through our program
 * what lines of code it executes
 * does it skip around, make choices, etc. 
 * 
 * if, else, else if, break, continue, switch
 * 
 * function calls can control flow to some extent as well
 */

// if will execute the next line or block code ONCE the if condition is TRUE
if(2 > 1) {
    console.log('It was greater');
    console.log('Indeed... it was');
}

// if theres only one line conditional on the condition, then you dont need the curly braces
// you can even include it on the same line as the condition
if(2 > 1)  console.log('Yep, still greater');

// you dont need an else and can just use multiple if statements in a row
let myName = 'Jarrod Drake';

if(myName == 'Caroline')
    console.log('... Ahumada');
else 
console.log(`Just ${myName}`)

//guard clauses use ifs to eliminate errors and "outs" before getting into the main code of the fucntion 
function printString(str) {
    if(typeof str != "string")
        throw new Error('Not a string!');
    if(str.length < 5)
        throw new Error('Not long enough!');
    if(str.charAt(0) != 'A')
        throw new Error("Does not start with 'A'!");
    console.log('Valid string!');
}

printString('Abcdef');

/**
 * Switch Statement
 * we check the value of something non-boolean (value of a number, string, array)
 * depending on its value, we take any of several "cases" (branches)
 */

let num = 0;

switch(num) {
    case 0:
        console.log('num is 0');
        break;
    case 5:
        console.log('num is 5');
        break;
    case 17:
        console.log('num is 17');
        break;
    default:
        console.log('num is something else');
        break;
}

/**
 * break 
 *      - ends the loop or current block of code and moves on to whatever is next
 * continue 
 *      - "soft break" ends the CURRENT ITERATION of a loop and moves on to the next iteration
 * return 
 *      - exists a function and CAN but doesnt have to return a value
 */

//break in a loop
let counter = 0;

while(counter < 20) {
    counter++;
    if(counter == 15)
        break;
    console.log(counter);
}

// continue
counter = 0;

while(counter < 20) {
    counter++;
    if(counter == 10)
        continue;
    console.log(counter);
}

// return 
// returning a value
function doStuff(num) {
    if(num == 0)
        return num;
    else
        return 'num is not zero!';
}

console.log(doStuff(1));


// exiting the fucntion without returning a value
// equivalent to a "void" function in other languages
// we use return to exit when the first condition is true
function dontDoStuff(num) {
    if(num == 100) {
        console.log('It was 100!');
        return;
    }
    console.log('It wasnt 100');
}

dontDoStuff(100);
