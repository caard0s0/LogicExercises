// Coding Challenge #20

/*
YOUR TASKS:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h.

2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console.

3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console.

4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them.


TEST DATA:
Data car 1: 'BMW' going at 120 km/h.
Data car 2: 'Mercedes' going at 95 km/h.
*/

console.log('---------------------------------------------');
console.log('--------------- CHALLENGE #20 ---------------');
console.log('---------------------------------------------');

// 1.
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3.
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4.
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();

console.log(bmw);
console.log(mercedes);



// Coding Challenge #21

/*
YOUR TASKS:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl').

2. Add a getter called 'speedUS' which returns the current speed in mi/h 
(divide by 1.6).

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6).

4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.


TEST DATA:
Data car 1: 'Ford' going at 120 km/h.
*/

console.log('---------------------------------------------');
console.log('--------------- CHALLENGE #21 ---------------');
console.log('---------------------------------------------');

// 1.
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // 2.
    get speedUS() {
        return this.speed / 1.6;
    }

    // 3.
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};

// 4.
const ford = new CarCl('Ford', 120);

console.log(`Speed mi/h: ${ford.speedUS}`);

ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 100;
console.log(ford);



// Coding Challenge #22

/*
YOUR TASKS:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property).

2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'.

3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'.

4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%).


TEST DATA:
Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%.
*/

console.log('---------------------------------------------');
console.log('--------------- CHALLENGE #22 ---------------');
console.log('---------------------------------------------');

/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
*/

// 1.
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype.constructor = EV;
EV.prototype = Object.create(Car.prototype);

// 2.
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

// 3.
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`);
}

// 4.
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
tesla.accelerate();

console.log(tesla);



// Coding Challenge #23

/*
YOUR TASKS: 
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class.

2. Make the 'charge' property private.

3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!.


TEST DATA:
Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

console.log('---------------------------------------------');
console.log('--------------- CHALLENGE #23 ---------------');
console.log('---------------------------------------------');

class NewCarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};

// 1.
class EVCl extends NewCarCl {
    // 2.
    #charge;

    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge;
    };

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    };

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%.`);
        return this;
    }
};

// 3.
const rivian = new EVCl('Rivian', 120, 23);
rivian.chargeBattery(90).brake().brake().brake().accelerate().accelerate();
console.log(rivian);