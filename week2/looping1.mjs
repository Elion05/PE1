import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getalw = 0.01

while(getalw <= 1){
    console.log(getalw);
getalw += 0.1
}