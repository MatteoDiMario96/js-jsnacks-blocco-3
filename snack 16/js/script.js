// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const palla = {
    nome: "palla",
    peso: 10,
}

const pesoModificato = Number.parseInt(prompt("Modifica il peso della palla!"), 10);
let i = 0
while(i < 1){
    if(pesoModificato < 1 || pesoModificato > 1000 || Number.isNaN(pesoModificato)){
        alert("Hai sbagliato ritenta!")
        Number.parseInt(prompt("Modifica il peso della palla!"), 10);
    } else {
        i++
    }
}

palla.peso = pesoModificato;