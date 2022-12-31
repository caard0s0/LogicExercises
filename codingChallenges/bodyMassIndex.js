// Coding Challenge #1

/* 
Mark and John are trying to compare the BMI (Body Mass Index), 
which is calculated using the formula:

First Formula: BMI = mass / height ** 2;
Second Formula: BMI = mass / (height * height);

OBS: mass in KG and height in METER.


YOUR TASKS: 
1. Store Mark's and John's mass and height in variables.

2. Calculate both their BMIs using the formula (you can even implement both versions).

3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has higher BMI than John.


TEST DATA:
Data: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
*/
console.log('--------------------------------------------');
console.log('--------------- CHALLENGE #1 ---------------');
console.log('--------------------------------------------');

// 1.
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// 2.
const BMIMarkFirstFormula = +(markMass / markHeight ** 2).toFixed(2);
console.log(`Mark's BMI - First Formula: ${BMIMarkFirstFormula}`);

const BMIJohnSecondFormula = +(johnMass / (johnHeight * johnHeight)).toFixed(2);
console.log(`John's BMI - Second Formula: ${BMIJohnSecondFormula}`);

// 3.
const markHigherBMI = BMIMarkFirstFormula > BMIJohnSecondFormula;
console.log(`Is mark's BMI greater than john's BMI?: ${markHigherBMI}!`);



// Coding Challenge #2

/*
Use the BMI example from (Challenge #1), and the code you already wrote, and
improve it.


YOUR TASKS:
1. Print a nice output to the console, saying who has the higher BMI. 
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!".
*/

console.log('--------------------------------------------');
console.log('--------------- CHALLENGE #2 ---------------');
console.log('--------------------------------------------');

// 1. 2.
BMIMarkFirstFormula;
BMIJohnSecondFormula;

if (BMIMarkFirstFormula > BMIJohnSecondFormula) {
    console.log(`Mark's BMI ${BMIMarkFirstFormula} is higher than John's ${BMIJohnSecondFormula}!`);
} else {
    console.log(`John's BMI ${BMIJohnSecondFormula} is higher than Mark's ${BMIMarkFirstFormula}!`);
};



// Coding Challenge #7

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! 

Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).


YOUR TASKS:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith).

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John's BMI (28.3) is higher than Mark's (23.9)!".


TEST DATA: 
Data: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
*/

console.log('--------------------------------------------');
console.log('--------------- CHALLENGE #7 ---------------');
console.log('--------------------------------------------');

// 1.
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    // 2.
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

const markBMI = Number(mark.calcBMI().toFixed(2));
console.log(`Mark's BMI: ${markBMI}`);


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    // 2.
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

const johnBMI = Number(john.calcBMI().toFixed(2));
console.log(`John's BMI: ${johnBMI}`);

// 3.
const higherOrSmallerBMI = markBMI > johnBMI ? 'is higher' : 'is smaller';
console.log(`${mark.fullName}'s BMI (${markBMI}) ${higherOrSmallerBMI} than ${john.fullName}'s BMI (${johnBMI})!`);