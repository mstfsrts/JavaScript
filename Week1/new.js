/* 
    Exercise 1: Calculate the Sum of Array Elements:
    Write a function calculateSum that takes an array of numbers as input and returns the sum of all the elements in the array.
*/

const totalNumbers = [6, 7, 8, 6, 6, 6, 9];

/* 
    Exercise 2: Calculate the Average of Array Elements:
    Write a function calculateAverage that takes an array of numbers as input and returns the average of all the elements in the array.
*/
function calAvg(averageNumbers) {
	let sum = 0;
	for (let i = 0; i < averageNumbers.length; i++) {
		sum += averageNumbers[i];
	}
	return sum / averageNumbers.length;
}

const averageNumbers = [6, 3, 48, 4, 12, 8, 16];
const average = calAvg(averageNumbers);
console.log("Average:", average);




/*
    Exercise 3: Find the Largest Number in an Array:
    Write a function findLargestNumber that takes an array of numbers as input and returns the largest number in the array.
*/

const largestNumbers = [3, 7, 9, 48, 6, 6, 18];