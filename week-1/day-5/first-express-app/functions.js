const helloWorld = () => {
    console.log('Hello World!');
}

const getAnimal = () => {
    const animal = ['Lion', 'Chicken', 'Pangolin', 'Cat', 'Rat', 'Penguin' ];
    return animal[Math.floor(Math.random() * 5)];
}

module.exports = [getAnimal, helloWorld];