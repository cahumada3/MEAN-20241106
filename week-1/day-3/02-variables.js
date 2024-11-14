//VARIABLES IN JS

/**
 * variables in JS are not typed
 * i.e., they can store any value, and that value's type can change after the fact
 */

var temp = 1;
console.log(temp);
temp = "abc";
console.log(temp);
temp = [1, 2, 3];
console.log(temp);

/**
 * 3 main ways to declare a variable in JS - var, let, const
 *      var - global or function scoped depending on where you declare it
 *            its declaration is accessible ANYWHERE in our program, even before the declaration
 *            bottom line -- DONT USE IT
 * 
 *      let - blocked scoped
 *      const - blocked scope, but value can NOT be changed (similar to final keyword in java)
 *  
 */ 

var a = 1;
let b = 2;
const c = 3;

console.log(a);

//when i print buriedVar, it's undefined -- the declaration was hoisted, the initialization was not
console.log(buriedVar);

//here, we have access to the buried var, even before the block in which it was decalred
//also, the redeclared a replaecs the original one, even though they're in a different scope
if(true) {
    if (true) {
        var a = 10;
        console.log(a);
        if(true) {
            var buriedVar = 10;
        }
    }
}

function changeA() {
    var a = 20;
}

changeA();

console.log(a);

//better to use let instead of var
//like var, let can be assigned with a new value
//however, let workd like a variable ought to, in that its declaration is not accessible prior
//also, it follows scope rules, in that it ceases to exist when it's out of scope

//we can't do this because x has yet to be declared
//console.log(x);
let x = 11;
x = 12;
console.log(x);

//can't redeclare x in the same scope
//let x = 13;

let z = 200;
console.log(z);


// you CAN redeclare via let at a new scope, but might end up being confusing, try to avoid
if(true) {
    //this runs into a temporal problem, because the z declared below hasn't arrived yet
    //console.log(z);
    let z = 100;
    console.log(z);
}
console.log(z);


//const -- works just like let, but once initialized, the value can NOT be changed
const myConst = 4;
//myConst = 5; //cant do this!!

console.log(myConst);

// you CAN change array values or object properties
const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
myArray[0] = 11;
console.log(myArray);

const myObject = { id: 3, name: "Caroline" };
console.log(myObject);
myObject.id = 7;
console.log(myObject);
// myObject = {color: "blue"}; //cant do this either!!

//let myObject = { id: 3, name: "Caroline", color: "blue" }; //cant do this!!

console.log(myObject);

let myObject1 = { id: 3, name: "Caroline" };
myObject1 = { id: 3, name: "Caroline", color: "blue" };

console.log(myObject1);

