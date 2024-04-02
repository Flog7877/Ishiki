let ab = "Anfrage per Mailbox", nA = "k.A.";
let notFoundIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';

const querryString = window.location.search;

const urlParameter = new URLSearchParams(querryString);

const nameT = urlParameter.get('name');


import { listeMAP } from "../therapeutenBANK.js";

//console.log(liste);

let liste = [];

Object.values(listeMAP).forEach(item => {
    liste.push(item);
})


let datenT = liste.filter(obj => {
    if (obj.seite === nameT) {
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

function kassenText(input, kosten) {

    let ausgabe1 = '';

    if (input === 'p') {
        ausgabe1 += 'Therapeut*in für Privatversicherte';
    } else  if (input === 'g'){
        ausgabe1 +='Therapeut*in für Gesetzl. sowie Privatversicherte';
    }

    if (kosten === true) {
        ausgabe1 += '<br><br><a href="../Infos/kostenerstattungsverfahren.html" target="_blank">KEV</a> wird angeboten'
    }
    
    return ausgabe1;
}

function jugendTherapeutinTest(arg) {
    if (arg.jugendtherapeutIn === true) {
        return 'Ja';
    }

    if (arg.jugendtherapeutInINK === true) {
        return 'Behandelt auch jugendliche Patient*innen'
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

    return alterDesTherapeuten(eintragAlter) + ' Jahre';
}

function webTest(str) {
    if (str === '') {
        return notFoundIcon + ' Nicht vorhanden';
    }

    return `<a href="${str}" target="_blank">Link</a>`;

}

/////////////////////

let datensatz = datenT[0];

console.log(datensatz);

let nameDisplay = document.getElementById('NameDesTherapeuten');
nameDisplay.innerText = datensatz.therapeutenname;

let altT = document.getElementById('alterTher');
altT.innerHTML = hatAlter(datensatz.therapeutenalter);

let tel = document.getElementById('telNummer');
tel.innerText = datensatz.telefonnummer;

let err = document.getElementById('erreichbarkeitT');
err.innerHTML = aufspalten(datensatz.erreichbarkeit);

let forM = document.getElementById('therForm');
forM.innerHTML = aufspalten(datensatz.therapieformen);

let kasseTher = document.getElementById('kasseT');
kasseTher.innerHTML = kassenText(datensatz.kasse, datensatz.kostenerstattungsverfahren);

let jug = document.getElementById('jugendTher');
jug.innerText = jugendTherapeutinTest(datensatz);

let webSeite = document.getElementById('webT');
webSeite.innerHTML = webTest(datensatz.website);

let addrT = document.getElementById('addr');
addrT.innerText = datensatz.adresse;

let karteHTML = document.getElementById('karteIFRAME');
karteHTML.innerHTML = `<iframe src="${datensatz.karte}" id="karte" class="karte" style="border: 1px solid black"></iframe><br>`;


// es fehlen noch: Adresse und Spezifikationen...

let test = document.getElementById('steckbrief');

let weite = test.clientWidth;

let hoehe = test.clientHeight;

//console.log(weite);
//console.log(hoehe);

let karte = document.getElementById('karte');

karte.style.height = hoehe + 'px';

if (weite > 500) {
    karte.style.width = '500px';
} else {
    karte.style.width = weite + 'px';
}

function listeGenerieren(obj) {
    let ausgabe = '<ul id="spezifikationen" class="spezifikationen">';

    for (let eintrag of obj.spezifikationen) {
        ausgabe += '<li>' + eintrag + '</li>';
    }

    return ausgabe + '</ul>';
}

let spezifikationenHTML = document.getElementById('spezifikationenListe');

spezifikationenHTML.innerHTML = listeGenerieren(datensatz);


let avatarTher = document.getElementById('avaterDesT');
avatarTher.innerHTML = `<img src="Bilder/${datensatz.avatar}.png" class="profilbild" id="profilbild">`;

// Gemeinschaftspraxen

function gemeinText(arr) {

    if (arr.length <= 2) {
        return '<h2>Behandelnde Therapeut*innen:</h2>' + arr[0] + ' und ' + arr[1];
    }

    let i = arr.length;

    let satz = '<h2>Behandelnde Therapeut*innen:</h2>';

    for (let j = 0; j < i-2; j++) {
        satz += arr[j] + ', ';
    }

    return satz + arr[i-2] + ' und ' + arr[i-1] + '<br>';
}

let weitere = document.getElementById('weitereTherapeutInnen');

if (datensatz.weitereTherapeutInnen.length !== 0) {

    weitere.innerHTML = gemeinText(datensatz.weitereTherapeutInnen);

};