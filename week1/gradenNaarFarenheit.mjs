import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let gradenCelcius = await userInput.question('hoeveel graden Celcius is het? ');
console.log(gradenCelcius);
let gradenFarenheit = (gradenCelcius * 9 / 5) + 32;
console.log(' het is ' + gradenFarenheit + ' Farenheit ');
