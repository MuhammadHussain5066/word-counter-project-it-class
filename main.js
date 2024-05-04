#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentences",
        type: "input",
        message: "Enter the sentence to count words from:"
    }
]);
const count = answer.sentences.trim().split(" ");
console.log(count);
console.log(`The word count is ${count.length}`);
