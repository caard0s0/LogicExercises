// Coding Challenge #1

/* 
Mark and John are trying to compare the BMI (Body Mass Index), 
which is calculated using the formula:

First Formula: BMI = mass / height ** 2;
Second Formula: BMI = mass / (height * height);

OBS: mass in KG and height in METER.


YOUR TASKS: 
1. Store Mark's and John's mass and height in variables;
2. Calculate both their BMIs using the formula (you can even implement both versions);
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has higher BMI than John;


TEST DATA:
Data: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
*/

// 1.
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// 2.
const BMIMarkFirstFormula = (markMass / markHeight ** 2).toFixed(2);
console.log(BMIMarkFirstFormula);

const BMIJohnSecondFormula = (johnMass / (johnHeight * johnHeight)).toFixed(2);
console.log(BMIJohnSecondFormula);

// 3.
const markHigherBMI = BMIMarkFirstFormula > BMIJohnSecondFormula;
console.log(markHigherBMI);



// Coding Challenge #2

/*
Use the BMI example from (Challenge #1), and the code you already wrote, and
improve it.


YOUR TASKS:
1. Print a nice output to the console, saying who has the higher BMI. 
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!";

2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!";
*/

// 1. 2.
BMIMarkFirstFormula;
BMIJohnSecondFormula;

if (BMIMarkFirstFormula > BMIJohnSecondFormula) {
    console.log(`Mark's BMI ${BMIMarkFirstFormula} is higher than John's ${BMIJohnSecondFormula}!`);
} else {
    console.log(`John's BMI ${BMIJohnSecondFormula} is higher than Mark's ${BMIMarkFirstFormula}!`);
};