let ab = "AB-Anfrage";

let liste = [

    {
        "therapeutenname": "Alexandra Haux",
        "telefonnummer": "0152 01307666",
        "erreichbarkeit": [
            "Montag: 9-17 Uhr", "Donnerstag: 11-17 Uhr", "Freitag: 9-15 Uhr" // Jeweils zur vollen Stunde...
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Am Markt 9, 72072 Tübingen",
        "stadtteil": "Zentrum",
        "website": "http://www.praxis-haux.de/",
        "geschlecht": "w",
        "kasse": "g"
        // Spezifikationen: https://www.therapie.de/profil/haux/
    },
    {
        "therapeutenname": "Sabrina Schenk",
        "telefonnummer": "07071 7772559",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Neckargasse 11, 72072 Tübingen",
        "stadtteil": "Zentrum",
        "website": "",
        "geschlecht": "w",
        "kasse": "g"
        // Spezifikationen: https://www.therapie.de/profil/sabrina.schenk/
    },
    {
        "therapeutenname": "Anne Koop",
        "telefonnummer": "01590 4973214",
        "erreichbarkeit": [
            ab 
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Madergasse 10, 72072 Tübingen",
        "stadtteil": "Zentrum",
        "website": "",
        "geschlecht": "w",
        "kasse": "p"
        // Spezifikationen: https://www.therapie.de/profil/sabrina.schenk/
    },
    {
        "therapeutenname": "Meks Mattes",
        "telefonnummer": "07071 52011",
        "erreichbarkeit": [
            "Montag: 12:50-13:20 Uhr", "Mittwoch: 12:50-13:20 Uhr", ab 
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Uhlandstraße 11, 72072 Tübingen ",
        "stadtteil": "Zentrum",
        "website": "https://meksmattes.de/index.php",
        "geschlecht": "w",
        "kasse": "g"
        // Spezifikationen: https://www.therapie.de/profil/mattes/
    },
    {
        "therapeutenname": "Maria-Elisabeth Hardt-Svaldi",
        "telefonnummer": "0162 4600812",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Brunnenstraße 8, 72074 Tübingen",
        "stadtteil": "Zentrum",
        "website": "https://www.psychotherapeut-tuebingen.de/",
        "geschlecht": "w",
        "kasse": "p"
        // Spezifikationen: https://www.therapie.de/profil/hardtsvaldi/
    },
    {
        "therapeutenname": "Manfred Kooistra",
        "telefonnummer": "07071 9692992",
        "erreichbarkeit": [
            "Montag: 13-14 Uhr", "Donnerstag: 13-14 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Poststraße 12, 72072 Tübingen",
        "stadtteil": "Zentrum",
        "website": "https://www.psychotherapie-kooistra.de/",
        "geschlecht": "m",
        "kasse": "p"
        // Spezifikationen: https://www.therapie.de/profil/kooistra/
    }
];

//// Nötige Funktionen

function urlSyntax(eing) {

    let txtNeu = '';
    let zeichen;

    for (let i = 0; i < eing.length; i++) {
        zeichen = eing.charAt(i);

        if (zeichen === ' ') {
            zeichen = '+';
        } else if ( zeichen === ',') {
            zeichen = '%2C';
        } else if (zeichen === 'ö') {
            zeichen = '%C3%B6';
        } else if (zeichen === 'ü') {
            zeichen = '%C3%BC';
        } else if (zeichen === 'ß') {
            zeichen = '%C3%9F';
        } else if (zeichen === 'ä') {
            zeichen = '%C3%A4';
        } else if (zeichen === 'Ä') {
            zeichen = '%C3%84';
        } else if (zeichen === 'Ö') {
            zeichen = '%C3%96';
        } else if (zeichen === 'Ü') {
            zeichen = '%C3%9C';
        } else if (zeichen === '.') {
            zeichen = '%2E';
        } else if (zeichen === ':') {
            zeichen = '%3A';
        } else if (zeichen === ';') {
            zeichen = '%3B';
        } 
        
        txtNeu = txtNeu + zeichen;     
    }
    return txtNeu;
}

function aufspalten(arr){
    let ausgabe = '';
    for (let eintrag of arr) {
        ausgabe+= eintrag + '<br>';
    }

    return ausgabe;
}

function routenGenerator(beg, end) {
    let begURL = urlSyntax(beg);
    let endURL = urlSyntax(end);

    return 'https://www.google.com/maps/dir/?api=1&origin=' + begURL + '&destination=' + endURL + '&hl=de';

}

function webTest(str) {
    if (str === '') {
        return 'Nicht vorhanden';
    }

    return `<a href="${str}" target="_blank">Website</a>`;

}


console.log(liste);

/// Filter Test:
/*
const formTest = document.querySelector('form');

formTest.addEventListener('submit', (e) => {
    e.preventDefault(); // Mit dieser Methode verhindere ich, dass forms Serverzeugs macht (so kann ich daslokal händeln)
    
    let werte = [];

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            werte.push(item.value);
        }
    })

    console.log(werte);
}) /// klappt einfach lol
*/
const formTest = document.querySelector('form');

formTest.addEventListener('submit', (e) => {
    e.preventDefault(); // Mit dieser Methode verhindere ich, dass forms Serverzeugs macht (so kann ich das lokal händeln)

    let werte = {};

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            werte[item.value] = true;
        } else if (item.checked === false) {
            werte[item.value] = false;
        }
    })

    console.log(werte);

    let gefilterteListeGeschl = [];

    if (werte.m === true) {
        let maennl = liste.filter(obj => {
            if (obj.geschlecht === 'm') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeGeschl = gefilterteListeGeschl.concat(maennl);
    }

    if (werte.w === true) {
        let weibl = liste.filter(obj => {
            if (obj.geschlecht === 'w') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeGeschl = gefilterteListeGeschl.concat(weibl);
    }

    // console.log(gefilterteListeGeschl);

    let gefilterteListeKasse = [];

    if (werte.p === true) {
        let priv = gefilterteListeGeschl.filter(obj => {
            if (obj.kasse === 'p') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeKasse = gefilterteListeKasse.concat(priv);
    }

    if (werte.g === true) {
        let gesetzl = gefilterteListeGeschl.filter(obj => {
            if (obj.kasse === 'g') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeKasse = gefilterteListeKasse.concat(gesetzl);
    }

    console.log(gefilterteListeKasse);

    let listeFILTERED = gefilterteListeKasse;

    //// Adressfeld

    let adressFeld;

    document.querySelectorAll('[type="text"]').forEach(txt => {
        adressFeld = txt.value;
    })

    console.log(adressFeld);

    // Tabelle erstellen!

    function tabelleErstellen(datensatz) {

        let table = '<table>';

        table += '<tr><th>Name</th><th>Telefonnummer</th><th>Tel. Erreichbarkeit</th><th>Adresse</th><th>Website</th></tr>';

        datensatz.forEach(objekt =>{
            //table += '<tr><td>'+ objekt.therapeutenname + '</td><td>' + objekt.telefonnummer + '</td><td>' + objekt.erreichbarkeit + '</td><td>' + objekt.adresse + '</td><td><a href="'+ objekt.website + '" target="_blank">Website</a></td></tr>';
            table += `<tr><td>${objekt.therapeutenname}</td><td>${objekt.telefonnummer}</td><td>${aufspalten(objekt.erreichbarkeit)}</td><td>${objekt.adresse}<br><a href="${routenGenerator(adressFeld, objekt.adresse)}" target="_blank">Wegbeschreibung</a></td><td>${webTest(objekt.website)}</td></tr>`;
        });

        table += '</table>';

        return table;
    }

    const tableContainer = document.getElementById('table-container');

    tableContainer.innerHTML = tabelleErstellen(listeFILTERED);
}) 


// Therapieformen hinzufügen#!!1