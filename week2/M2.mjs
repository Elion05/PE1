import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});


for(let i = 1; i < 5; i++){

    for(let j = 0; j < i; j++){
        process.stdout.write("*")
        //console.log('*')
    }
    console.log();
}