// Coding Challenge #1

/* 
Mark and John are trying to compare the BMI (Body Mass Index), 
which is calculated using the formula:

First Formula: BMI = mass / height ** 2;
Second Formula: BMI = mass / (height * height);

OBS: mass in KG and height in METER.


TASKS: 
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
const BMIMarkFirstFormula = markMass / markHeight ** 2;
console.log(BMIMarkFirstFormula);

const BMIJohnSecondFormula = johnMass / (johnHeight * johnHeight);
console.log(BMIJohnSecondFormula);

// 3.
const markHigherBMI = BMIMarkFirstFormula > BMIJohnSecondFormula;
console.log(markHigherBMI);