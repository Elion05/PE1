import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { ftruncateSync } from 'node:fs';
const userInput = readline.createInterface({input, output});

let taal = await userInput.question('geef je taal in. ')
if(taal == "nederlands"){
    console.log(' hallo! ');
}else if(taal == "frans"){
    console.log(' bonjour! ');
}else if(taal == "engels"){
    console.log(' hello! ')
}else if(taal == "albanees"){
    console.log('55')
}else{

}
    console.log(' taal niet herkend. ')