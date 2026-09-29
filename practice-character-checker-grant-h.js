const input = require('readline-sync');
let favoriteMovie = input.question("What is your favorite movie? ");

let index = input.questionInt("Enter an index number to find the character at that position: ");
let character = favoriteMovie[index];
console.log("Your character is: " + character)