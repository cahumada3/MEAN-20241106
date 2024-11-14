/**
 * constructor functions
 * 
 * it can be helpful to "type" our objects or at least to have a structure for them
 * if we want to produce objects with similar properties/functionality 
 * 
 * however, objects dont work the same way as in actual OOP languages
 * we have to think about them more like products of functions
 */

let object = {name: 'Paul', age: 12};

// constructor function
function Animal(species, color, noise) {
    this.species = species;
    this.color = color;
    this.noise = noise;
    this.speak = () => console.log(this.noise);
}

let lion = new Animal('Lion', 'Tan', 'Roarrrrr!');
console.log(object);
console.log(lion);

lion.speak();

/**
 * inheritance in JS
 *      - is done using prototypes
 *      - attaching a constructor function's prototype to another function's prototype to establish a relationship
 */

function Dog(breed) {
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dog = new Dog('Husky');

console.log(dog);