import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fruit = await userInput.question('Welk type fruit?');

let prijs = 0;

switch(fruit){
    case 'peer':
        prijs = 1.02;
        break;
    case 'appel':
        prijs = .98;
        break;
    case 'banaan':
        prijs = 1.12;
        break;
    case 'mango':
        prijs = 1.52;
        break;
    case 'meloen':
        prijs = 2.28;
        break;
    case 'druif':
        prijs = 1.30;
        break;
    case 'perzik':
        prijs = 0.98
        break;   
    case 'groene appel':
        prijs = 1
        break;
    case 'kokosnoot':
        prijs = 2
        break;
    case 'mandarijn':
        prijs = 0.20
        break;
    case 'papaja':
        prijs = 1.22
        break;
    case 'lychee':
        prijs = 0.50
        break;
    case 'avocado':
        prijs = 1.30
        break;
    case 'kiwi':
        prijs = 0.66
        break;
    default:
        console.log('Type fruit niet gekend');
}

console.log('De prijs van een '+ fruit +' is '+ prijs +'€');
