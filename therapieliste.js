let ab = "Anfrage per Mailbox", nA = "k.A.";

// Arztsuche: https://www.arztsuche-bw.de/index.php?suchen=1&offset=13189&id_arzt_praxis=0&id_fachgruppe=0&id_zusatzbezeichnung=0&id_genehmigung=0&id_dmp=0&id_zusatzvertraege=0&id_sprache=0&vorname=&nachname=&zeiten=&fa_name=&plz=&ort=&strasse=&schluesselnr=&landkreis=&id_leistungsort_art=0&id_praxis_zusatz=0&sorting=adresse&direction=DESC

import { liste } from "./therapeutenBANK.js";

console.log(liste)

//// Nötige Funktionen

// https://de.wikipedia.org/wiki/Hilfe:Sonderzeichenreferenz
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
        } else if (zeichen === '/') {
            zeichen = '%2F';
        } else if (zeichen === "'") {
            zeichen = '%27';
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

let notFoundIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';

function webTest(str) {
    if (str === '') {
        return notFoundIcon + ' Nicht vorhanden';
    }

    return `<a href="${str}" target="_blank">Website</a>`;

}

function istTherapieform(arr, therapieform) {
    for (let therapieEintrag of arr) {
        if(therapieEintrag === therapieform) {
            return true;
        }
    }
    return false;
}

function linkName(seite, therapeutenName) {
    return `<a href="TherapeutInnen/${seite}.html" target="_blank">${therapeutenName}</a>`;
}

function nameInfo() {
    return '<span class="popup" onclick="togglePopup2()"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><span class="popuptext" id="nameInfo">Mehr Informationen zu einzelnen Therapeut*innen sind auf deren jeweiligen Seiten zu finden! Dazu einfach auf den Namen drücken.</span></span>'
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


//console.log(liste);


function kassenArt(art, jugend) {
    let satz = ''
    if (art === 'g') {
        satz = satz + '(Für Gesetzl. und Privatversicherte)';
    } else {
        satz = satz + '(Für Privatversicherte)';
    }

    if (jugend === true) {
        satz = satz + '<br><strong>Jugendtherapeut*in</strong>';
    }

    return satz;
}

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
// Dropdownmenü*/

let checkList1 = document.getElementById('dropdown-stadt');
var items = document.getElementById('items');
        checkList1.getElementsByClassName('anchor')[0].onclick = function (evt) {
            if (items.classList.contains('visible')){
                items.classList.remove('visible');
                items.style.display = "none";
            }
            
            else{
                items.classList.add('visible');
                items.style.display = "block";
            }
            
            
        }

        items.onblur = function(evt) {
            items.classList.remove('visible');
        }

let checkList2 = document.getElementById('dropdown-form');
let items2 = document.getElementById('items2');
        checkList2.getElementsByClassName('anchor')[0].onclick = function (evt) {
            if (items2.classList.contains('visible')){
                items2.classList.remove('visible');
                items2.style.display = "none";
            }
            
            else{
                items2.classList.add('visible');
                items2.style.display = "block";
            }
            
            
        }

        items2.onblur = function(evt) {
            items2.classList.remove('visible');
        }


// Hier beginnt der querySelector für dir form

const formTest = document.querySelector('form');

formTest.addEventListener('submit', (e) => {
    e.preventDefault(); // Mit dieser Methode verhindere ich, dass forms Serverzeugs macht (so kann ich das lokal händeln)

    let slider = document.getElementById('schieberegler');
    let alter = slider.value;

    console.log(alter);

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

    // console.log(gefilterteListeKasse);

    // Stadtteile:

    let gefilterteListeStadt = [];

    if (werte.zentrum === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Zentrum') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    if (werte.sued === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Südstadt') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    console.log(gefilterteListeStadt);

    // Therapieformen:

    let gefilterteListeForm = [];

    if (werte.verhalten === true) {
        let thrForm1 = gefilterteListeStadt.filter(obj => {
            if (istTherapieform(obj.therapieformen, 'Verhaltenstherapie') === true) {
                return true;
            } else {
                return false;
            }
        })

         gefilterteListeForm = gefilterteListeForm.concat(thrForm1);
    }

    if (werte.tiefe === true) {
        let thrForm2 = gefilterteListeStadt.filter(obj => {
            if (istTherapieform(obj.therapieformen, 'Tiefenpsychologisches Verfahren') === true) {
                return true;
            } else {
                return false;
            }
        })

         gefilterteListeForm = gefilterteListeForm.concat(thrForm2);
    }

    if (werte.analyse === true) {
        let thrForm3 = gefilterteListeStadt.filter(obj => {
            if (istTherapieform(obj.therapieformen, 'Psychoanalyse') === true) {
                if (gefilterteListeForm.indexOf(obj) === -1) {
                    return true;
                }
            } else {
                return false;
            }
        })

         gefilterteListeForm = gefilterteListeForm.concat(thrForm3);
    }

    // Alter

    let gefilterteListeAlter = [];

    if (werte.keinAlter === true) {
        let ohneAlter = gefilterteListeForm.filter(obj => {
            if (obj.therapeutenalter === nA) {
                return true;
            } else if (alterDesTherapeuten(obj.therapeutenalter) <= alter){    
                return true;            
            } else {
                return false;
            }
        })

         gefilterteListeAlter = gefilterteListeAlter.concat(ohneAlter);
    }

    if (werte.keinAlter === false) {
        let mitAlter = gefilterteListeForm.filter(obj => {
            if (alterDesTherapeuten(obj.therapeutenalter) <= alter){    
                return true;            
            } else {
                return false;
            }
        })

         gefilterteListeAlter = gefilterteListeAlter.concat(mitAlter);
    }

    let gefilterteListeJugend = [];

    if (werte.jugendT === false) {
        let erwachsen = gefilterteListeAlter.filter(obj => {
            if (obj.jugendtherapeutIn === false){    
                return true;            
            } else {
                return false;
            }
        })

        gefilterteListeJugend = gefilterteListeJugend.concat(erwachsen);
    } else {
        gefilterteListeJugend = gefilterteListeAlter;
    }



    

    //// HIER ENDE FILTERN

    let listeFILTERED = gefilterteListeJugend;

    //// Adressfeld

    let adressFeld;

    document.querySelectorAll('[type="text"]').forEach(txt => {
        adressFeld = txt.value;
    })

    console.log(adressFeld);

    // SVGs

    let nameIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>';
    let telefonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
    let erreichbarkeitIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>';
    let therapieformIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>';
    let websiteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Adresse</th><th><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';
    let alterIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact-round"><path d="M16 18a4 4 0 0 0-8 0"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>';
    
    // Tabelle erstellen!

    function tabelleErstellen(datensatz) {

        let table = '<table class="Therapeutentabelle">';

        table += `<tr><th>Name ${nameInfo()}</th><th>${telefonIcon} Telefonnummer</th><th>${erreichbarkeitIcon} Tel. Erreichbarkeit</th><th>${therapieformIcon} Therapieform</th><th>${websiteIcon} Website</th><th>${alterIcon} Alter</th></tr>`;

        datensatz.forEach(objekt =>{
            //table += '<tr><td>'+ objekt.therapeutenname + '</td><td>' + objekt.telefonnummer + '</td><td>' + objekt.erreichbarkeit + '</td><td>' + objekt.adresse + '</td><td><a href="'+ objekt.website + '" target="_blank">Website</a></td></tr>';
            //table += `<tr><td>${objekt.therapeutenname}</td><td>${objekt.telefonnummer}</td><td>${aufspalten(objekt.erreichbarkeit)}</td><td>${aufspalten(objekt.therapieformen)}</td><td>${objekt.adresse} (${objekt.stadtteil})<br><a href="${routenGenerator(adressFeld, objekt.adresse)}" target="_blank">Wegbeschreibung</a></td><td>${webTest(objekt.website)}</td></tr>`;
            table += `<tr><td>${linkName(objekt.seite, objekt.therapeutenname)}<br>${kassenArt(objekt.kasse, objekt.jugendtherapeutIn)}</td><td>${objekt.telefonnummer}</td><td>${aufspalten(objekt.erreichbarkeit)}</td><td>${aufspalten(objekt.therapieformen)}</td><td>${objekt.adresse} (${objekt.stadtteil})<br><a href="${routenGenerator(adressFeld, objekt.adresse)}" target="_blank">Wegbeschreibung</a></td><td>${webTest(objekt.website)}</td><td>${hatAlter(objekt.therapeutenalter)}</td></tr>`;
        });

        table += '</table>';

        return table;
    }

    const tableContainer = document.getElementById('table-container');

    tableContainer.innerHTML = tabelleErstellen(listeFILTERED);
}) 


/* 
Seite für jedeN TherapeutIn anlegen, link basteln in dem Tabellengenerator.
Auf der Seite für jeden Therapeuten die Adresse mit openstreetmaps einbinden!!
*/

//// HTML 

function togglePopup() {
    let popup = document.getElementById("popups");
    popup.classList.toggle("show");
}

function togglePopup2() {
    let popup = document.getElementById("nameInfo");
    popup.classList.toggle("show");
}

