// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userChoice = prompt("Pari o Dispari?");
const userNum = parseInt(prompt("Scegli un numero da 1 a 5"))
console.log(userChoice)
console.log(userNum)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const randomCPU = Math.floor(Math.random() * 5) + 1
console.log(randomCPU)

// Sommiamo i due numeri

const sum = userNum + randomCPU;
console.log(sum)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEven(sum) {
    if(sum % 2 === 0) {
        return true; 
    }
    return false;
}

// Dichiariamo chi ha vinto.

if (userChoice.toLowerCase() === 'pari') {
    if(isEven(sum) === true){
        console.log('Hai Vinto')
    } else {
        console.log('Hai Perso')
    }

} else if(isEven(sum) === false){
    if (userChoice.toLowerCase() === 'dispari'){
    console.log('hai vinto')
    }
    else{
        console.log('hai perso')
    }
}
