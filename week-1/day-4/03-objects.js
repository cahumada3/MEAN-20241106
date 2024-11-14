/**
 * objects are simple and lightweight in JS
 * we're working in the context of OOP 
 * objects are very flexible
 * they're set sof key value pairs
 */

let album1 = {
    title: "Graduation",
    artist: "Ye",
    releaseYear: 2007
}

console.log(album1);

console.log(album1.artist)

album1.artist = 'Kanye';
console.log(album1);

album1.lable = 'Def Jam Recordings'

console.log(album1);

delete album1.lable;
console.log(album1);

//properties can be objects, arrays, etc.
album1.members = ['Steven Hu', 'Jeffrey Stewart', 'David Kennamer'];
console.log(album1);
console.log(album1.members[1]); 

//properties can be fucntions as well
album1.play = () => { console.log('Music, Lyrics & Drums!!'); }

console.log(album1);
album1.play();

let album2 = {
    title: 'Folklore',
    artist: 'Taylor Swift',
    releaseYear: '2020',
    members: [
        {
            name: 'Lauren Dudgeon',
            instruments: [
                'Vocals',
                'Guitar',
                'Flute'
            ]
        }, 
        {
            name: 'Jody Nguyen',
            instruments: [
                'Electric Guitar',
                'Triangle',
                'Drums'
            ]
        } 
    ] 
}

console.log(album2);

//trying to get flute from first member
console.log(album2.members[0].instruments[2]);

// printing all the instruments for each member
for(let member of album2.members) {
    for(let instrument of member.instruments) {
        console.log(instrument);
    }
}

/**
 * object equality
 * == and === wont determine if two objects are equal the way we might like
 */

const obj1 = {name: 'Caroline'};
const obj2 = {name: 'Caroline'};

// both of these are false, because they are different instances in memeory 
console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(Object.is(obj1, obj2));

function checkEquality(o1, o2) {
    return (o1.name === o2.name) ? true : false;
}

console.log(checkEquality(obj1, obj2));

const obj3 = {
    name: 'Caroline',
    equals: function(o) {
        if(this.name === o.name)
            return true;
        return false;
    }
}

// if you use lambda, you can NOT use (.this) 
// const obj3 = {
//     name: 'Caroline',
//     equals: (o) => {
//         if(obj3.name === o.name)
//             return true;
//         return false;
//     }
// }
const obj4 = {name: 'Caroline'};

console.log(obj3.equals(obj4));

/**
 * Object Destrcuturing
 * in JS sometimes we want to copy an object to a new instance and/or break it out into variables
 * rather than having it point to the same object
 * 
 * using the spread operator ...
 */

let originalObj = {
    id: 1,
    name: 'Apple',
    color: 'red'
}

//doing this just points to theh same object
let newObject = originalObj;

//using spread...
//you can add properties to the new object 
newObject = {...originalObj, newProperty: 10};

console.log(originalObj);
console.log(newObject);

newObject.color = 'purple';

console.log(originalObj);
console.log(newObject);

const anotherObj = {id: 1, name: 'Computer'};
console.log(anotherObj);

//Object.freeze() prevents you from making changes to the object properties
//once you freeze, theres no way back!
Object.freeze(anotherObj);
anotherObj.id = 3;
console.log(anotherObj);

//Object.defineProperty() allows you to be more granular/reverse control over an objects modification
//Defining properties are more granular
const anotherObj2 = {id: 2, name: 'Keyboard'};
console.log(anotherObj2);

//making id property not writeable
Object.defineProperty(anotherObj2, 'id', {
    writable : false
});
anotherObj2.id = 12;
console.log(anotherObj2);

//we can change the if property to be writable
Object.defineProperty(anotherObj2, 'id', {
    writable : true
});
anotherObj2.id = 12;
console.log(anotherObj2);