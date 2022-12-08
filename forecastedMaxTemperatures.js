// Coding Challenge #9

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...".


YOUR TASKS:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!


TEST DATA:
Data 1: [17, 21, 23].
Data 2: [12, 5, -5, 0, 4].
*/

// 1. 2.
let output = [];
const printForecast = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        output += ` ... ${arr[i]}°C in ${i + 1} days`;
    }
    console.log(output);
}

printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);