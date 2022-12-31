// Coding Challenge #13

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.


TEST DATA:
Data: (pasted to textarea, including spaces):

underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure


Should produce this output (5 separate console.log outputs):

underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅
*/

console.log('---------------------------------------------');
console.log('--------------- CHALLENGE #13 ---------------');
console.log('---------------------------------------------');

// 1.
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`camelCase: ${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
})