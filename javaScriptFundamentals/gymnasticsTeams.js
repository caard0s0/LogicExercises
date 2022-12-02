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