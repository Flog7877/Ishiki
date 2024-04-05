import { listePsychiater } from "./therapeutenBANK.js";

import { quickSort } from "./funktionen.js";

import { duplikatElem } from "./funktionen.js";

// Icons (als SVG Tag da ich sie so direkt bearbeiten kann, ohne ins Repo zu müssen^^)

let notFoundIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
let karteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>';
let praxisIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/></svg>';
let personIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
let telefonIconNeu = '<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
let erreichbarkeitIconNeu = '<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>';
let adresseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
let webIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';

// Funktionen

function hatGeschl(arr, geschlechtIden) {
    for (let eintragGeschlecht of arr) {
        if (eintragGeschlecht === geschlechtIden) {
            return true;
        }
    }

    return false;
}

function aufspaltenTable(arr) {
    let ausgabe = '';

    for (let listenEintrag of arr) {
        ausgabe += listenEintrag + '<br>';
    }

    return ausgabe;
}

function routenGenerator(beg, end) {

    let begURL = encodeURIComponent(beg);
    let endURL = encodeURIComponent(end);

    return 'https://www.google.com/maps/dir/?api=1&origin=' + begURL + '&destination=' + endURL + '&hl=de';

}

function webTest(str) {
    if (str === '') {
        return notFoundIcon + ' Nicht vorhanden';
    }

    return `<a href="${str}" target="_blank">Website</a>`;

}

function iframeGenerator(linkKarte) {
    let einbettung = `<iframe src="${linkKarte}" id="tabelleKarte" class="tabelleKarte" style="border: 1px solid black"></iframe>`

    return einbettung;
}

function psychKasse(namePsych, kassePsych) {
    let ausgabe = '<strong>' + namePsych + '</strong>';

    if (kassePsych === 'p') {
        ausgabe += '<br>(Privatpraxis)';
    } else {
        ausgabe += '<br>(Gesetzl. und Privatpatienten)'
    }

    return ausgabe;
}

// HTML

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

let checkList3 = document.getElementById('dropdown-sortierung');
let items3 = document.getElementById('items3');
        checkList3.getElementsByClassName('anchor')[0].onclick = function (evt) {
            if (items3.classList.contains('visible')){
                items3.classList.remove('visible');
                items3.style.display = "none";
            }
            
            else{
                items3.classList.add('visible');
                items3.style.display = "block";
            }
            
            
        }

        items3.onblur = function(evt) {
            items3.classList.remove('visible');
        }

        const alleAuswaehlenS = document.getElementsByClassName('alleStadt');

        const stadtteilAuswahl = document.getElementsByClassName('stadtteilAuswahl');
        
        let j = 1;
        
        function toggleStatusS() {
            if (j % 2 === 0) {
                for (let knopf of stadtteilAuswahl) {
                    knopf.checked = true;
                }
                j++;
        
            } else {
                for (let knopf of stadtteilAuswahl) {
                    knopf.checked = false;
                }
                j++;
            }
        }
        
        for (let button1 of alleAuswaehlenS) {
            button1.addEventListener('click', toggleStatusS);
        }


// Präferenzen

const formTest = document.querySelector('form');

formTest.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let werte = {};

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            werte[item.value] = true;
        } else if (item.checked === false) {
            werte[item.value] = false;
        }
    })

    document.querySelectorAll('[type="radio"]').forEach(item => {
        if (item.checked === true) {
            werte[item.value] = true;
        } else if (item.checked === false) {
            werte[item.value] = false;
        }
    })

    console.log(werte)

    // Filterprozess

    // --- Geschlecht ---

    let psychiaterListeFilterGeschlecht = [];

    if (werte.m === true) {
        let maennl = listePsychiater.filter(obj => {
            if (hatGeschl(obj.geschlechtlId, 'm') === true) {
                return true
            } else {
                return false;
            }
        })

        psychiaterListeFilterGeschlecht = psychiaterListeFilterGeschlecht.concat(maennl);
    }

    if (werte.w === true) {
        let maennl = listePsychiater.filter(obj => {
            if (hatGeschl(obj.geschlechtlId, 'w') === true) {
                return true
            } else {
                return false;
            }
        })

        psychiaterListeFilterGeschlecht = psychiaterListeFilterGeschlecht.concat(maennl);
    }

    // --- Kasse ---

    let psychiaterListeFilterKasse = [];

    if (werte.p === true) {
        psychiaterListeFilterKasse = psychiaterListeFilterKasse.concat(psychiaterListeFilterGeschlecht);
    }

    if (werte.g === true) {
        let gesetzlPsy = psychiaterListeFilterGeschlecht.filter(obj => {
            if (obj.kasse === 'g') {
                return true;
            } else {
                return false;
            }
        })

        psychiaterListeFilterKasse = psychiaterListeFilterKasse.concat(gesetzlPsy);
    }

    //  --- Stadtteile ---

    let psychiaterListeFilterStadtteile = [];

    if (werte.zentrum === true) {
        let teilZentrum = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Zentrum') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teilZentrum);
    }

    if (werte.sued === true) {
        let teilSued = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Südstadt') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teilSued);
    }

    if (werte.west === true) {
        let teil = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Weststadt') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teil);
    }

    if (werte.oester === true) {
        let teil = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Österberg') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teil);
    }

    if (werte.winkel === true) {
        let teil = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Schönblick/ Winkelwiese') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teil);
    }

    if (werte.derendingen === true) {
        let teil = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Derendingen') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teil);
    }

    if (werte.wanne === true) {
        let teil = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Wanne') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teil);
    }

    if (werte.franz === true) {
        let teil = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Französisches Viertel') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teil);
    }

    if (werte.garten === true) {
        let teil = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Gartenstraße') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teil);
    }

    if (werte.lustnau === true) {
        let teilSued = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Lustnau') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teilSued);
    }

    if (werte.uni === true) {
        let teilSued = psychiaterListeFilterKasse.filter(obj => {
            if (obj.praxisStadtteil === 'Universität') {
                return true;
            } else {
                return false; 
            }
        })

        psychiaterListeFilterStadtteile = psychiaterListeFilterStadtteile.concat(teilSued);
    }

    //  --- Ende des Filterprozesses ---

    // Sortierungs-Parameter:

    let sortKat;

    if (werte.praxisname === true) {
        sortKat = 'praxis'
    } else if (werte.stadtteil === true) {
        sortKat = 'praxisStadtteil';
    } 

    // console.log(sortKat)

    // --- Sortierungsprozess ---

    const quickSortZuweisung = (arr, kat) => {
        if (arr.length <= 1) {
          return arr;
        }
      
        let pivot = arr[0][kat];
        let leftArr = [];
        let rightArr = [];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i][kat] < pivot) {
            leftArr.push(arr[i][kat]);
          } else {
            rightArr.push(arr[i][kat]);
          }
        }
      
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
      }; 

    let sortierteListeKatZuweisung = duplikatElem(quickSortZuweisung(psychiaterListeFilterStadtteile, sortKat)); // HIER MUSS ALS ERSTER PARAMETER DER LETZTE DATENSATZ EIGEGEBEN WERDEN

    function listeSortieren(liste, kat, zuweisung) {

        if (liste.length === 1) {
            return liste;
        }

        let ausgabeListe = [];

        for (let eintragZuweisung of zuweisung) {
            for (let eintragListe of liste) {
                if ( eintragListe[kat] === eintragZuweisung) {
                    ausgabeListe.push(eintragListe);
                }
            }
        }

        return ausgabeListe;
    }

    // --- Finaler Datensatz ---

    let gefiltertUndSortiertPsychiater =  duplikatElem(listeSortieren(psychiaterListeFilterStadtteile, sortKat, sortierteListeKatZuweisung));

    if (werte.absteigend === true) {
        gefiltertUndSortiertPsychiater.reverse();
    }

    let listeFERTIG = gefiltertUndSortiertPsychiater;

    console.log(listeFERTIG);

    let ergebnisse = listeFERTIG.length;

    console.log(ergebnisse);

    const ergFeld = document.getElementById('erg');
    ergFeld.innerText = ' (Ergebnisse: ' + ergebnisse + ')';

    // Adresse:

    let adressFeld;

    document.querySelectorAll('[type="text"]').forEach(txt => {
        adressFeld = txt.value;
    })

    // console.log(adressFeld);

    // <--- Hier kommt noch der Sortierungsprozess

    // _____________ Tabellengenerator _____________

    function tabelleGenerator(datensatz) {

        let table = '<table class = "Therapeutentabelle">';

        table += `<tr><th>${praxisIcon} Praxis</th><th>${personIcon} Psychiater*innen</th><th>${telefonIconNeu} Nummer</th><th>${erreichbarkeitIconNeu} Erreichbarkeit</th><th>${adresseIcon} Adresse</th><th>${webIcon} Website</th><th>${karteIcon} Karte</th></tr>`

        datensatz.forEach(objekt => {
            table += `<tr><td>${psychKasse(objekt.praxis, objekt.kasse)}</td><td>${aufspaltenTable(objekt.psychiaterNamen)}</td><td>${objekt.psychiaterNummer}</td><td>${aufspaltenTable(objekt.telefonischeErreichbarkeit)}</td><td>${objekt.psychiaterAdresse} (${objekt.praxisStadtteil})<br><a href="${routenGenerator(adressFeld, objekt.psychiaterAdresse)}" target="_blank">Wegbeschreibung</a></td><td>${webTest(objekt.website)}</td><td>${iframeGenerator(objekt.karteIFRAME)}</td></<tr>`
        });

        table += '</table>'

        return table;
    }

    function tabelleGeneratorOhneKarte(datensatz) {

        let table = '<table class = "Therapeutentabelle">';

        table += `<tr><th>${praxisIcon} Praxis</th><th>${personIcon} Psychiater*innen</th><th>${telefonIconNeu} Nummer</th><th>${erreichbarkeitIconNeu} Erreichbarkeit</th><th>${adresseIcon} Adresse</th><th>${webIcon} Website</th></tr>`

        datensatz.forEach(objekt => {
            table += `<tr><td>${psychKasse(objekt.praxis, objekt.kasse)}</td><td>${aufspaltenTable(objekt.psychiaterNamen)}</td><td>${objekt.psychiaterNummer}</td><td>${aufspaltenTable(objekt.telefonischeErreichbarkeit)}</td><td>${objekt.psychiaterAdresse} (${objekt.praxisStadtteil})<br><a href="${routenGenerator(adressFeld, objekt.psychiaterAdresse)}" target="_blank">Wegbeschreibung</a></td><td>${webTest(objekt.website)}</td></<tr>`
        });

        table += '</table>'

        return table;
    }

    const tableContainerP = document.getElementById('table-container');

    //tableContainerP.innerHTML = tabelleGenerator(listeFERTIG);

    if (werte.karteToggle === true) {
        tableContainerP.innerHTML = tabelleGenerator(listeFERTIG);
    } else {
        tableContainerP.innerHTML = tabelleGeneratorOhneKarte(listeFERTIG);
    }

}) 
