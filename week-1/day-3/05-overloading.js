/**
 * overloading = more than one function with the same name but different parameters
 * 
 * THERE IS NO OVERLOADING IN JS!!!
 * 
 */

function overload(x) {
    console.log("My one parameter was: " + x);
}

// this no longer gives us the proper result after declaring the second overlod version
overload(10);

//this one overwrites the first overload function
function overload(x, y) {
    console.log("My two parameters are: " + x + y);
}
overload(10, 11);

//there are some work arounds for overloading
//one is to supply default value for parameters
function add(x, y, z) {
    return x + y + z;
}

console.log(add(1, 2, 3));
console.log(add(5));

function addWithDefaultValues(x = 5, y = 10, z = 20) {
    return x + y + z;
}

console.log(addWithDefaultValues());
console.log(addWithDefaultValues(5));
console.log(addWithDefaultValues(5, 6));
console.log(addWithDefaultValues(5, 6, 7));

console.log(addWithDefaultValues(z = 100)); //this still goes to the first variable
console.log(z);

//this will skip parameters by using undefined in their place and using their default value
console.log(addWithDefaultValues(undefined, undefined, 100));

function quadArea(h, w) {
    if(w == undefined) 
        return h * h;
    else 
        return h * w;
}

console.log(quadArea(2,4));
console.log(quadArea(2));

function quadAreaRedux(h, w = h) {
    return h * w;
}
//here, we use the first parameter value to assign the second, if its not supplied
console.log(quadAreaRedux(4));

//rest operator ...
//this operator collects the "rest" of the parameters into an array
//must be the final paramter in the list
function addAll(x, y, ...z) {
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("z = ");
    console.log(z);
    console.log(typeof z);
}

addAll(1, 2, 3, 4, 5);
console.log(typeof z);

addAll(1, 2, 3);
addAll(1,2);
addAll(1);
addAll();

//this function adds all the parameters together, no matter how many we have
//it also checks against the type for each one and discards itif its not a number
//kind of like safegaurd
function addAllRedux(x, y, ...z) {
    let sum = 0;
    if(typeof x == "number")
        sum += x;
    if(typeof y == "number")
        sum += y;
    if(z.length > 0 ) {
        for(let num of z) {
            if(typeof num == "number")
                sum += num;
        }
    }

    console.log(sum);
}

addAllRedux(3, 10, 7, 4);
addAllRedux(3, 10, 7, 4, "asdfasd", [1,2,3], 7);

