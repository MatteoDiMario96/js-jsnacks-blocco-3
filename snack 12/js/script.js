// Snack5
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// - Mi creo una funzione con argomento parolaA e parolaB
//     - SE le parole sono uguali 
//         - Stampa entrambe le parole 
    
//     - Altrimenti SE la parolaA è piu lunga 
//         -Scrivi lei 
    
//     - Altrimenti SE la parolaB è più lunga 
//         - Scrivi lei 



// - Chiedo all'utente la parolaUtenteA

// - Chiedo all'utente la parolaUtenteB

// - Richiamo la funzione con argomento ( parolaUtenteA e parolaUtenteB)


function lunghezzaParole (parolaA, parolaB){
    if(parolaA.length == parolaB.length){
        console.log(parolaA, parolaB)
    } else if (parolaA.length > parolaB.length){
        console.log(parolaA)
    } else if(parolaB.length > parolaA.length){
        console.log(parolaB)
    }
}

const parolaUtenteA = prompt("Dammi la prima parola");
const parolaUtenteB = prompt("Dammi la seconda parola");

lunghezzaParole(parolaUtenteA,parolaUtenteB)
