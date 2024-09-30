import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 2;

while(getal != 15){
    console.log(getal);
    getal += 5;
}
