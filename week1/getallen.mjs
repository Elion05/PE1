import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { run } from 'node:test';
const userInput = readline.createInterface({input, output});


let jeGetal1 = parseFloat(await userInput.question('Geef een getal in:'));
let jeGetal2 = parseFloat(await userInput.question('Geef nog getal in:'));
console.log(   ' je getal is ' + (jeGetal1 * jeGetal2));