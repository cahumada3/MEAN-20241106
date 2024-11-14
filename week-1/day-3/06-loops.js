/**
 * loops in JS function very similary to other programs
 * with a small exception regarding objects
 * 
 * we have: standard for, enahanced for (foreach), while, do-while
 */


/**
 * WHILE loop
 *      - executes as long as the condition is true
 *      - may never execute, if the condition starts false!
 */
let counter = 0;

while(counter < 5 ) {
    console.log(`While counter value is: ${counter}`);
    counter++;
}

/**
 * DO-WHILE loop
 *      - runs the code once ALWAYS
 *      - and then it checks to see if the condition is true
 *      - if it is true, it loops again
 */

counter = 0;
do {
    console.log(`Do-While counter value is: ${counter}`)
    counter++;
}
while (counter < 0);

/**
 * Standard FOR loop
 *      - loops through our code a fixed number of times
 *      - number can be based on items in an array or a number we give it
 *      - big advantage is not needing an external counter
 *      - we also can set ourselves up to have access to the index value of an array 
 */

for(let i = 0; i < 3; i++) {
    console.log(`For loop index value is: ${i}`);
}

let nums = [1, 2, 3, 6, 7];

for(let i = 0; i < nums.length; i++) {
    console.log(`Array value at index ${i} = ${nums[i]}`);
}

//careful with this! easy to create infinite loop!
//technically, each of the 3 paramters in a for loop CAN be optional
counter = 0;
for(;;) {
    counter++;
    console.log(counter);
    if(counter == 5)
        break;
}

/**
 * FOREACH enhanced for loop 
 *      - goes through every element of an array (or list in other languages)
 *      - and it does something for each one
 *      - we do not have to specify a counter or worry about how long the array is 
 */

let names = ['Jeffrey', 'Winston', 'Cole', 'Ben', 'Ian', 'Lauren'];

//creates a local variable via which we can refer to the currently-looked-at name
//for each name in the array, do this code
for(let name of names) {
    console.log(name)
}

const student = {
    id: 123,
    name: 'Paul Edson',
    grade: 'B+'
}

console.log(student);

//this does NOT work for objects, because they are not iterable like arrays
// for(let property of student) {
//     console.log(property);
// }

//to get access to the properties, we have to enumerate it
//by using let property IN instead of let property OF

//this doesn't quite return what we want... we get the property kets and not the values
for(let property in student) {
    console.log(property);
}

//to access the values...
//think of each property as an index in the student array
for(let property in student) {
    console.log(`Key: ${property}, Value: ${student[property]}`);
}