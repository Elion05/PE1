import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});


let getal = parseFloat(await userInput.question('geef een getal. '));

if(getal < 1)
for(let i = 2; i < getal; i++){
if(getal % i === 0)
    console.log("is een priemgetal")
}