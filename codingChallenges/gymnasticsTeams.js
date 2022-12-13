// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins a trophy!


YOUR TASKS:
1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score).

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, 
a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. 

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy.


TEST DATA:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
*/

// 1.
const dolphinsAverageScore = Number(((97 + 112 + 101) / 3).toFixed(2));
console.log(dolphinsAverageScore);

const koalasAverageScore = Number(((109 + 95 + 123) / 3).toFixed(2));
console.log(koalasAverageScore);

// 2. 3. 4.
if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
    console.log(`Dolphins score ${dolphinsAverageScore} is higher than Koalas ${koalasAverageScore}. Dolphins team won! 🎉`);
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore > 100) {
    console.log(`Koalas score ${koalasAverageScore} is higher than Dolphins ${dolphinsAverageScore}. Koalas team won! 🎉`);
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore > 100) {
    console.log('There was a draw! both teams have the same amount of points.');
} else {
    console.log('No team won the trophy 😭');
}



// Coding Challenge #5

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!


YOUR TASKS:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.

2. Use the function to calculate the average for both teams.

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)".

4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.

5. Ignore draws this time.


TEST DATA:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.
*/

// 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2.
const averageDolphins = calcAverage(85, 54, 41);
console.log(averageDolphins);

const averageKoalas = calcAverage(23, 34, 27);
console.log(averageKoalas);

// 3. 4. 5.
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) 🎉`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}) 🎉`);
    } else {
        console.log('No team wins!');
    }
}

checkWinner(averageDolphins, averageKoalas);