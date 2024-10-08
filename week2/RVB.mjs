import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


// fibonacci//
let maxgetal = parseFloat(await userInput.question('Van waar wil je de Finobacci rij beginnen? '));

let a= 0; //eerste getal in de rij van Fibonacci//
let b= 1; // tweede getal in de rij van Fibonacci//

console.log(a);   //print het eerste getal

while(b <= maxgetal){
    console.log(b);
    let temp = b; //sla het huidige getal op//
    b = a + b;    //bereken de volgende getal//
    a = temp;      // update a met het vorige 'b'
}