import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});


for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(" FizzBuzz " + i );
    }else if(i % 3 == 0)
            console.log(" Fizz " +  i )
            else if(i % 5 == 0)
            console.log(" Buzz "  +  i ) 
    }
