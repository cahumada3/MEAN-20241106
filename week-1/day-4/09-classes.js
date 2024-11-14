/**
 * classes in js are a relatively new feature
 * they introduce a lot familiar class syntax/concepts from other OOP languages
 * they make inheritance easier to understand
 */

class Vehicle {
    //properties/member/variable of our class
    //no need to indicate a type or assign a value (unless you want to)
    //when referring to a member, you must use this keyword beforehand

    color;

    //# makes your varaible private
    #year;

    //static properties belong to the class itself, NOT an instance
    static vehicleCount = 0;

    static getVehicleCount() {
        console.log(`Vehicle count is: ${Vehicle.vehicleCount}`);
    }

    constructor(color, year) {
        this.color = color;
        this.#year = year;

        //updating a static property
        //you MUST use the class syntax, even within the class <class name>.<prop name>
        Vehicle.vehicleCount++;
    }

    get getColor() {
        return this.color;
    }

    get getYear() {
        return this.#year;
    }

    set setYear(year) {
        if(typeof year === 'number' && year >= 1950 && year === Math.floor(year))
            this.#year = year;
        else
            throw new Error('Your year stinks!!');
    }
}

console.log(Vehicle.vehicleCount);

let vehicle = new Vehicle('Purple', 1980);
console.log(vehicle);

console.log(Vehicle.vehicleCount);

vehicle.setYear = 1990;
console.log(vehicle.getYear);


class Car extends Vehicle {
    make;
    model;

    constructor(color, year, make, model ) {
        super(color, year);
        //this.year = year;
        this.make = make;
        this.model = model;
        
    }
}

let car = new Car('Blue', 1999, 'Honda', 'Civic');
console.log(car);
Vehicle.getVehicleCount();