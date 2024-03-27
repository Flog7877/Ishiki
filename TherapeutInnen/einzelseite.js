let ab = "Anfrage per Mailbox", nA = "k.A.";
let notFoundIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';


import { liste } from "../therapeutenBANK.js";

//console.log(liste);

let nameT = document.getElementById('NameDesTherapeuten').innerText;

let datenT = liste.filter(obj => {
    if (obj.therapeutenname === nameT) {
        return true;
    }

    return false;
})

/////////////////////

function aufspalten(arr){
    let ausgabe = '';
    for (let eintrag of arr) {
        ausgabe+= eintrag + '<br>';
    }

    return ausgabe;
}

function kassenText(input) {
    if (input === 'p') {
        return 'Therapeut*in für Privatversicherte';
    } else {
        return 'Therapeut*in für Gesetzl. sowie Privatversicherte';
    }
}

function jugendTherapeutinTest(arg) {
    if (arg.jugendtherapeutIn === true) {
        return 'Ja';
    }

    return 'Nein';
}

function todayDate() {
    let heuteTag = new Date();
    let jahr = heuteTag.getFullYear();
    let monat = heuteTag.getMonth();
    let tag = heuteTag.getDate();

    return Date.UTC(jahr, monat, tag);
}

function alterDesTherapeuten(datum) {
    let laengeJahr = 365 * 24 * 60 * 60 * 1000;
    let heute = todayDate();
    let jahre = (heute - datum) / laengeJahr;
    return Math.floor(jahre);
}

function hatAlter(eintragAlter) {
    if (isNaN(eintragAlter)) {
        return notFoundIcon + ' ' + nA;
    }

    return alterDesTherapeuten(eintragAlter) + 'Jahre';
}

function webTest(str) {
    if (str === '') {
        return notFoundIcon + ' Nicht vorhanden';
    }

    return `<a href="${str}" target="_blank">Link</a>`;

}

/////////////////////

let datensatz = datenT[0];

let altT = document.getElementById('alterTher');
altT.innerHTML = hatAlter(datensatz.therapeutenalter);

let tel = document.getElementById('telNummer');
tel.innerText = datensatz.telefonnummer;

let err = document.getElementById('erreichbarkeitT');
err.innerHTML = aufspalten(datensatz.erreichbarkeit);

let forM = document.getElementById('therForm');
forM.innerHTML = aufspalten(datensatz.therapieformen);

let kasseTher = document.getElementById('kasseT');
kasseTher.innerText = kassenText(datensatz.kasse);

let jug = document.getElementById('jugendTher');
jug.innerText = jugendTherapeutinTest(datensatz);

let webSeite = document.getElementById('webT');
webSeite.innerHTML = webTest(datensatz.website);

// es fehlen noch: Adresse und Spezifikationen...