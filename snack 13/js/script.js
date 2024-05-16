// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function numberReverse (number){
    let numberString = number + '';
    let reverseNumber = '';
    for(let i = numberString.length - 1; i >= 0; i--){
        reverseNumber += numberString[i]
        console.log(numberString[i])
    }
    return Number.parseInt(reverseNumber, 10);
}

const userNumber = Number.parseInt(prompt("Type a number"), 10);
console.log(userNumber)

console.log(numberReverse(userNumber))