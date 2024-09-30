import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
//vraag de gebruiker 2 getallen//

let getal1 = parseFloat(await userInput.question(" geef mij 1 getal. "));
let getal2 = parseFloat(await userInput.question("geef mij nog een getal. "));

if(getal1  > 0 && getal2 > 0)
{ console.log('beide getallen zijn positief. ')
}else if( getal1 < 0 && getal2 < 0){
console.log('getal 1 en getal 2 zijn negatief. ')
}else if(getal1 == 0 && getal2 == 0){
    console.log('beide getallen zijn gelijk aan 0. ')
}else if(getal1 < 0 && getal2 == 0){
    console.log('getal 1 is negatief en getal 2 is gelijk aan 0')
}else if (getal1 > 0 && getal < 0){
    console.log('getal 1 is groter dan 0 en getal 2 is negatief')
}