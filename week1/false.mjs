import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { run } from 'node:test';
const userInput = readline.createInterface({input, output});


let jeGetal = parseFloat(await userInput.question('geef een getal in: '));
console.log(jeGetal)
if(jeGetal >= 18){
    console.log(' een fantastische punt! ');
}else if(jeGetal >= 16){
    console.log(' een mooie punt ');
}else if(jeGetal >= 14){
    console.log(' geslaagd met onderscheiding. ');
}else if(jeGetal >= 10){
    console.log(' geslaagd ');
}else if(jeGetal >= 8){
    console.log(' getolereerd ');
}else{
    console.log(' niet geslaagd ');
}