import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

for (let teller = 1; teller <= 10 ; teller++){
    console.log(teller * 5)
} 
