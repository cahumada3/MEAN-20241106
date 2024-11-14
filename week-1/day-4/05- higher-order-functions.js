/**
 * Higher Order Fucntions
 *      we can store a function as a variable
 *      we can return a function from a function
 *      we can also use a function as a parameter in another function
 */

//storing a function as a variable
let storedFunction = function () {
    console.log('This is my stored fucntion');
}

storedFunction();

/**
 * lambda syntax [parameters]:
 *      - if you have no parameters, you MUST use empty parantheses
 *      - if you have one parameter, parantheses are optional
 *      - if you have more than one parameter, you MUST use parantheses
 * 
 * for the function code:
 *      - if you only have one line, you do NOT need curly braces
 *      - if you have more than one lines of code, you MUST use curly braces
 *      - if your function returns something, and you only have one line, you do NOT need the return key word
 *      - if your function returns something, and you have more than one line 
 *              OR you use curly braces, you MUST use the return key word
 * 
 */

function returnFunction() {
    return () => console.log('This is a function that returns a fucntion');
}

let myReturnedFucntion = returnFunction();
myReturnedFucntion();

//closure function - a returned function that contains some sort of context from the function that returned it 
function timesX(num) {
    return (x) => x * num;
}

let times5 = timesX(5);
let times10 = timesX(10);
console.log(times5(10));
console.log(times10(3));

/**
 * there are a seriese of higher-order functions for processing arrays that can make your life easier
 *      - similar to java stream api, but we dont need streams in JS
 *      - each of these requires a fucntion as a parameter
 * 
 * forEach()
 *      - is going to take in each element of an array, do something, return nothing
 */

let nums = [1, 2, 3, 4, 5];

//uses a call back function
nums.forEach(num => {
    num = num * num;
    console.log(num);
});



