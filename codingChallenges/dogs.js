// Coding Challenge #16

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.


YOUR TASKS:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters).

2. Create an array with both Julia's (corrected) and Kate's data.

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶").

4. Run the function for both test datasets.


TEST DATA:
Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3].
Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4].
*/

const checkDogs = function (dogsJulia, dogsKate) {
    // 1.
    const dogsJuliaCopyCorrected = dogsJulia.slice();
    dogsJuliaCopyCorrected.splice(0, 1);
    dogsJuliaCopyCorrected.splice(-2);

    // 2.
    const allDogsAges = dogsJuliaCopyCorrected.concat(dogsKate);

    // 3.
    allDogsAges.forEach((dogAge, i) => {
        if (dogAge >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    })
};

// 4.
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('///////////////////////////////');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



// Coding Challenge #17

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.


YOUR TASKS:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old).

3. Calculate the average human age of all adult dogs.

4. Run the function for both test datasets.


TEST DATA:
Data 1: [5, 2, 4, 1, 15, 8, 3].
Data 2: [16, 6, 10, 5, 6, 1, 4].
*/

console.log('///////////////////////////////');

const calcAverageHumanAge = function (ages) {
    // 1.
    const humanAges = ages.map(function (dogAge) {
        if (dogAge <= 2) {
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    });
    console.log(humanAges);

    // 2.
    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);

    // 3.
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    console.log(average);
}

// 4.
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);



// Coding Challenge #18

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!


TEST DATA:
Data 1: [5, 2, 4, 1, 15, 8, 3].
Data 2: [16, 6, 10, 5, 6, 1, 4].
*/

console.log('///////////////////////////////');

// 1.
const calcAverageHumanAgeChaining = ages => ages
    .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAgeChaining([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeChaining([16, 6, 10, 5, 6, 1, 4]));



// Coding CHallenge #19

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).


YOUR TASKS:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Formula:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg).

2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array.

3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!".

5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false).

6. Log to the console whether there is any dog eating an okay amount of food
(just true or false).

7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.).

8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects).


HINTS:
Use many different tools to solve these challenges, you can use the summary
lecture to choose between them.

Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.
*/

console.log('///////////////////////////////////////////////');

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(curObj => curObj.recommendedFood = Math.trunc((curObj.weight ** 0.75 * 28)));
console.log(dogs);


// 2.
const sarahObj = dogs.find(curObj => curObj.owners.includes('Sarah'));
console.log(sarahObj);
console.log(`Sarah's dog is eating too ${sarahObj.curFood > sarahObj.recommendedFood ? 'much' : 'little'}`);


// 3.
const ownersEatTooMuch = dogs.filter(curObj => curObj.curFood > curObj.recommendedFood).flatMap(curObj => curObj.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(curObj => curObj.curFood < curObj.recommendedFood).flatMap(curObj => curObj.owners);
console.log(ownersEatTooLittle);


// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);


// 5.
console.log(dogs.some(curObj => curObj.curFood === curObj.recommendedFood));


// 6.
const checkEatingOkay = curObj => curObj.curFood > curObj.recommendedFood * 0.9 && curObj.curFood < curObj.recommendedFood * 1.10;
console.log(dogs.some(checkEatingOkay));


// 7.
console.log(dogs.filter(checkEatingOkay));


// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);