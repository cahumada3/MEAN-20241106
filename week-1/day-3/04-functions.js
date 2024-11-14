/**
 * a function is equivalent to a method in other languages
 * 
 * a function can take in paramter(s) and return value
 * it DOES NOT have to do either of those, but it can 
 * 
 * a fucntion in JS is always hoisted!!
 * meaning, you can decalre them ANYWHERE in your code and call them from ANYWHERE
 * 
 * there are a few different ways to declare a function, all of which do the same thing
 */

print();

//basic function declaration
function print() {
    console.log("My function worked!");
}

print();

//taking in paramters
function params(first, second) {
    console.log("First: " + first + " Second: " + second);
}

params(1,2);
params([1, 2, 3], {name: "Laurel"});

//returning a vlalue
function returning(num) {
    return 5 + num;
}

console.log(returning(6));

let returnVal = returning(87);
console.log(returnVal);

function firstWay(param1, param2) {
    return param1 + param2;
}

console.log(firstWay(1,2));

//using lambda notation
secondWay = (param1, param2) => { return param1 + param2 }
console.log(secondWay(3, 5));
