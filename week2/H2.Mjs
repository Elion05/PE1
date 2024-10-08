import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let teller = 0;
let gemiddelde = 0;
do{

    let getal = parseFloat(await userInput.question(' voer een getal in. '));
    //teller = teller + 1//
    teller++;
    gemiddelde += getal;

}while((gemiddelde/teller) <= 25)
    console.log('het gemiddelde is' + gemiddelde)