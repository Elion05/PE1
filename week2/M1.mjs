import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal2; 
let getal1;
let som = 0;
do{
    getal1 = parseFloat(await userInput.question("geef een getal in. "))
   
    if(getal1 > 0) {
        som += getal1;
    }

}while(getal1 != 0);

console.log(som)