import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = await userInput.question('Wat is je naam? ');
console.log(jeNaam)

let jeleeftijd = await userInput.question('Hoe oud ben je? ');
console.log(jeleeftijd)

let jehaarkleur = await userInput.question('Wat is je haarkleur? ');
console.log(jehaarkleur)

console.log('hallo ' + jeNaam + ' ,Je bent '+ jeleeftijd + ' jaar oud, ' + 'en je hebt ' + jehaarkleur + ' haar ');
console.log( ' Aangenaam '  +  jeNaam  +  ' welkom bij VSC! ')

process.exit();