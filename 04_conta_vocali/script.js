/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const myFunction = (vocals) => {
    let arrayVocals = ['a', 'e', 'i', 'o', 'u']
    let newArray = []
    let text = vocals.split('')
    for(let i = 0; i < text.length; i++){
        if(arrayVocals.includes(text[i])){
            newArray.push(text[i])
        }
    }
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console
console.log(myFunction(word).length + ' ('+ myFunction(word) + ')');

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
