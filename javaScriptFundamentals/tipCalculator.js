// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.


YOUR TASKS:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
It's not allowed to use an if/else statement.

2. Print a string to the console containing the bill value, the tip, and the final value(bill + tip).
Example: “The bill was 275, the tip was 41.25, and the total value 316.25”.


TEST DATA:
Data: Test for bill values 275, 40 and 430.
*/

// 1.
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(tip);

// 2.
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}.`);



// Coding Challenge #6

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.


YOUR TASKS:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data below.

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before.

4. Bonus: Create an array 'total' containing the total values, so the bill + tip.


TEST DATA: 
Data: 125, 555 and 44.
*/

// 1.
const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(calcTip(100));

// 2.
const bills = [125, 555, 44];

// 3.
const tips = []; 

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
}
console.log(tips);

// 4.
const total = [];

for (let i = 0; i < bills.length; i++) {
    total[i] = bills[i] + tips[i];
}
console.log(total);



// Coding Challenge #8

/*
Let's improve Steven's tip calculator even more, this time using loops!


YOUR TASKS:
1. Create an array 'bills' containing all 10 test bill values.

2. Create empty arrays for the tips and the totals ('tips' and 'totals').

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!.


TEST DATA:
Data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52.
*/

// 1.
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2.
const tipsArray = [];
const totalsArray = [];

// 3.
for (let i = 0; i < billsArray.length; i++) {
    tipsArray.push(calcTip(billsArray[i]));
    totalsArray.push(tipsArray[i] + billsArray[i]);
}

console.log(tipsArray);
console.log(totalsArray);

// 4. 4.1.
let sum = 0;
for (let i = 0; i < totalsArray.length; i++) {
    sum += totalsArray[i];
}
console.log(sum);

// 4.2.
const calcAverage = function(arr) {
    return sum / arr.length;
}

// 4.3.
const averageBills = calcAverage(totalsArray);
console.log(averageBills);