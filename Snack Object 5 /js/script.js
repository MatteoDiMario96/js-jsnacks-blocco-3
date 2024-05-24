// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

let finestreAperte ={
        tabs: ["Facebook", "Twitter", "GitHub", "Gmail", "Facebook", "GitHub", "Gmail", "Facebook", "GitHub", "Gmail"],
        attiviTab: 0
    };

const socials = [
    "Facebook",
    "Twitter",
    "Youtube"
];

const finestreSenzaSocial = togliSocial(finestreAperte.tabs);


function togliSocial(tabs){
    const nuoveFinestreAperte = tabs.filter((tab) => {
        let consentito = true;
        let i = 0;
        while(consentito === true && i < socials.length){
            console.log(i,socials[i])
            if(socials[i].toLowerCase() === tab.toLowerCase()){
                consentito = false;
            }
            i++;
        }
        return consentito;
    });

    return nuoveFinestreAperte;
}
