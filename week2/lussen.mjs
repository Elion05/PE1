import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getalP = 1
while(getalP <= 99){
    console.log(getalP)
getalP += 1
}