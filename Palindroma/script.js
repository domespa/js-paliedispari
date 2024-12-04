// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma




function reverseWord(userWord) {
    userWord = userWord.toLowerCase();
    let wordReverse = "";
    for(let i = userWord.length - 1; i >= 0; i--) {
        wordReverse += userWord[i]
    } if(userWord !== wordReverse) {
        return false
    } else {
        return true
    }
}

const userWord = prompt("Inserisci una parola");
console.log(reverseWord(userWord));
// location.reload();

