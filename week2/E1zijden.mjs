import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let zijde1 = parseFloat(await userInput.question(' geef zijde 1. '));
let zijde2 = parseFloat(await userInput.question(' geef zijde 2 . '));


let som = 0;

som = zijde1 * zijde2;
console.log(' De oppervlate is ' + som)