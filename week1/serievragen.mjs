import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//vraag aan de gebruiker welke serie//

let mijnSerie = await userInput.question(' geef mij een serie. ')
console.log(mijnSerie)

switch(mijnSerie){

    case"The Simpsons":
        console.log(mijnSerie + " Vindt plaats in Springfield");
    break;
    case"One Piece":
         console.log(mijnSerie + " Vindt plaats in een grote wereld met 6 zeeën. ")  
    break;
    case"Attack on Titan":
        console.log(mijnSerie + " Vindt plaats in een post-apocalyptische wereld. ")
    break; 
    case"Stranger Things":
        console.log(mijnSerie + " Vindt plaats in Hawkins, Indiana. ")
    break;
    case"Breaking Bad":
        console.log(mijnSerie + ' Vindt plaats in Albuquerque, New Mexico. ')     
    break;
    case"Peaky Blinders":
        console.log(mijnSerie + ' Vindt plaats in Birmingham, England. ')
    break;
    default:
        console.log("ik ken de serie niet")
    break;
}   
