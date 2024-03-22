//#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "Please Guess a number between 1 - 6:",
    }
]);
if (answers.userguessnumber === randomnumber) {
    console.log(" Congtatulation! you guessed right number.");
}
else {
    console.log(" You guessed wrong number! Better luck next time ");
}
