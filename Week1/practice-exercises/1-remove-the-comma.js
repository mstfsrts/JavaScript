/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */

let myString = 'hello,this,is,a,difficult,to,read,sentence';

// First Solution //
let result = '';

// Iterate through each character of string in myString value
for (let i = 0; i < myString.length; i++) {
  //If the iterating character is a comma, replace it with a space
  if (myString[i] === ',') {
    result += ' ';
  }
  else {
    //If the iterating character is not a comma, keep it the same
    result += myString[i];
  }
}
result = myString;

// Second Solution //
//Replace commas with spaces to update the string
myString = myString.split(',').join(' ');

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');