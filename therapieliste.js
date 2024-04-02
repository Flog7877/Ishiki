let ab = "Anfrage per Mailbox", nA = "k.A.";

// import { liste } from "./therapeutenBANK.js";

import { listeMAP } from "./therapeutenBANK.js";

let liste = [];

Object.values(listeMAP).forEach(item => {
    liste.push(item);
})

// console.log(liste)

//// Nötige Funktionen

import { quickSort } from "./funktionen.js";

import { todayDate, alterDesTherapeuten, hatAlter } from "./funktionen.js";

import { duplikatElem } from "./funktionen.js";

let warningIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>';
let infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';

function aufspalten(arr){
    let ausgabe = '';
    for (let eintrag of arr) {

        if (eintrag === ab) {
            ausgabe += eintrag + ' <a href="Infos/Mailboxanfrage.html" target="_blank">'+ infoIcon + '</a><br>';
        } else {
            ausgabe+= eintrag + '<br>';
        }        
    }

    return ausgabe;
}

function routenGenerator(beg, end) {

    let begURL = encodeURIComponent(beg);
    let endURL = encodeURIComponent(end);

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
    return `<a href="TherapeutInnen/therapeutIn.html?name=${seite}" target="_blank">${therapeutenName}</a>`;
}

function nameInfo() {
    return '<span class="popup" onclick="togglePopup2()"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><span class="popuptext" id="nameInfo">Mehr Informationen zu einzelnen Therapeut*innen sind auf deren jeweiligen Seiten zu finden! Dazu einfach auf den Namen drücken.</span></span>'
}

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


// Hier beginnt der querySelector für die HTML-form

const formTest = document.querySelector('form');

formTest.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let slider = document.getElementById('schieberegler');
    let alter = slider.value;

    // console.log(alter);

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

    console.log(werte);

    // Funktion für unten:

    function kassenArt(art, jugend, kosten) {
        let satz = ''
        if (art === 'g') {
            satz = satz + '(Für Gesetzl. und Privatversicherte)';
        } else {
            satz = satz + '(Für Privatversicherte)';
        }
    
        if (jugend === true) {
            satz = satz + '<br><strong>Jugendtherapeut*in</strong>';
        }
    
        if (kosten === true && werte.p === false) {
            satz = satz + '<br>' + warningIcon + ' <a href="Infos/kostenerstattungsverfahren.html" target="_blank">KEV</a>';
        }
    
        return satz;
    }  
    
    function inklJugend(obj) {
        if (obj == true && werte.jugendT === true) {
            return '<br>Behandelt auch jugendliche Patient*innen'
        } 

        return '';
    }

    // Sortierungsparameter:

    let sortKat;

    if (werte.therapeutenname === true) {
        sortKat = 'therapeutenname'
    } else if (werte.stadtteil === true) {
        sortKat = 'stadtteil';
    } else if (werte.geschl === true) {
        sortKat = 'geschlecht';
    }

    // Filterprozess:

    let gefilterteListeGeschl = [];

    if (werte.m === true) {
        let maennl = liste.filter(obj => {
            if (obj.geschlecht === 'm') {
                return true;
            } else if (obj.geschlecht === 'beides') {
                return true;
            }

            return false;
        })

        gefilterteListeGeschl = gefilterteListeGeschl.concat(maennl);
    }

    if (werte.w === true) {
        let weibl = liste.filter(obj => {
            if (obj.geschlecht === 'w') {
                return true;
            } else if (obj.geschlecht === 'beides') {
                return true;
            }

            return false;
        })

        gefilterteListeGeschl = gefilterteListeGeschl.concat(weibl);
    }

    // console.log(gefilterteListeGeschl);

    let gefilterteListeKasse = [];

    if (werte.p === true) {
        gefilterteListeKasse = gefilterteListeKasse.concat(gefilterteListeGeschl);
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

    if (werte.k === true) {
        let kostenEr = gefilterteListeGeschl.filter(obj => {
            if (obj.kostenerstattungsverfahren === true) {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeKasse = gefilterteListeKasse.concat(kostenEr);
    }

    gefilterteListeKasse = duplikatElem(gefilterteListeKasse);

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

    if (werte.west === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Weststadt') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    if (werte.oester === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Österberg') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    if (werte.winkel === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Schönblick/ Winkelwiese') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    if (werte.derendingen === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Derendingen') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    if (werte.wanne === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Wanne') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    if (werte.lustnau === true) {
        let teil = gefilterteListeKasse.filter(obj => {
            if (obj.stadtteil === 'Lustnau') {
                return true;
            } else {
                return false;
            }
        })

        gefilterteListeStadt = gefilterteListeStadt.concat(teil);
    }

    // console.log(gefilterteListeStadt);

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

    if (werte.systemisch === true) {
        let thrForm4 = gefilterteListeStadt.filter(obj => {
            if (istTherapieform(obj.therapieformen, 'Systemische Therapie') === true) {
                if (gefilterteListeForm.indexOf(obj) === -1) {
                    return true;
                }
            } else {
                return false;
            }
        })

         gefilterteListeForm = gefilterteListeForm.concat(thrForm4);
    }

    if (werte.schema === true) {
        let thrForm5 = gefilterteListeStadt.filter(obj => {
            if (istTherapieform(obj.therapieformen, 'Schematherapie') === true) {
                if (gefilterteListeForm.indexOf(obj) === -1) {
                    return true;
                }
            } else {
                return false;
            }
        })

         gefilterteListeForm = gefilterteListeForm.concat(thrForm5);
    }

    if (werte.trauma === true) {
        let thrForm6 = gefilterteListeStadt.filter(obj => {
            if (istTherapieform(obj.therapieformen, 'Traumatherapie') === true) {
                if (gefilterteListeForm.indexOf(obj) === -1) {
                    return true;
                }
            } else {
                return false;
            }
        })

         gefilterteListeForm = gefilterteListeForm.concat(thrForm6);
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

    if (werte.jugendT === true) {
        let erwachsen = gefilterteListeAlter.filter(obj => {
            if (obj.jugendtherapeutIn === true){    
                return true;            
            } else if(obj.jugendtherapeutInINK === true) {
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

    // Sortieren:

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

    let sortierteListeKatZuweisung = duplikatElem(quickSortZuweisung(gefilterteListeJugend, sortKat));

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
    
    // Hier enden die Sort-Funktionen

    let listeFilteredPre = gefilterteListeJugend; // Letzte Filter-Iteration

    let gefiltertUndSortiert = listeSortieren(listeFilteredPre, sortKat, sortierteListeKatZuweisung); // Erstellen der finalen Liste

    if (werte.absteigend === true) {
        gefiltertUndSortiert.reverse();
    }

    console.log(gefiltertUndSortiert);

    let listeFILTERED = duplikatElem(gefiltertUndSortiert); // Über diese Variable wird die Tabelle iteriert

    //// Adressfeld

    let adressFeld;

    document.querySelectorAll('[type="text"]').forEach(txt => {
        adressFeld = txt.value;
    })

    //console.log(adressFeld);

    // SVGs

    let nameIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>';
    let telefonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
    let erreichbarkeitIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>';
    let therapieformIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>';
    let websiteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Adresse</th><th><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';
    let alterIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact-round"><path d="M16 18a4 4 0 0 0-8 0"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>';
    
    // Tabelle erstellen!

    function tabelleErstellen(datensatz) {

        if (datensatz.length === 0) {
            return notFoundIcon + ' Keine Ergebnisse gefunden';
        }

        let table = '<table class="Therapeutentabelle">';

        table += `<tr><th>Name ${nameInfo()}</th><th>${telefonIcon} Telefonnummer</th><th>${erreichbarkeitIcon} Tel. Erreichbarkeit</th><th>${therapieformIcon} Therapieform</th><th>${websiteIcon} Website</th><th>${alterIcon} Alter</th></tr>`;

        datensatz.forEach(objekt =>{
            //table += '<tr><td>'+ objekt.therapeutenname + '</td><td>' + objekt.telefonnummer + '</td><td>' + objekt.erreichbarkeit + '</td><td>' + objekt.adresse + '</td><td><a href="'+ objekt.website + '" target="_blank">Website</a></td></tr>';
            //table += `<tr><td>${objekt.therapeutenname}</td><td>${objekt.telefonnummer}</td><td>${aufspalten(objekt.erreichbarkeit)}</td><td>${aufspalten(objekt.therapieformen)}</td><td>${objekt.adresse} (${objekt.stadtteil})<br><a href="${routenGenerator(adressFeld, objekt.adresse)}" target="_blank">Wegbeschreibung</a></td><td>${webTest(objekt.website)}</td></tr>`;
            table += `<tr><td>${linkName(objekt.seite, objekt.therapeutenname)}<br>${kassenArt(objekt.kasse, objekt.jugendtherapeutIn, objekt.kostenerstattungsverfahren)}${inklJugend(objekt.jugendtherapeutInINK)}</td><td>${objekt.telefonnummer}</td><td>${aufspalten(objekt.erreichbarkeit)}</td><td>${aufspalten(objekt.therapieformen)}</td><td>${objekt.adresse} (${objekt.stadtteil})<br><a href="${routenGenerator(adressFeld, objekt.adresse)}" target="_blank">Wegbeschreibung</a></td><td>${webTest(objekt.website)}</td><td>${hatAlter(objekt.therapeutenalter)}</td></tr>`;
        });

        table += '</table>';

        return table;
    }

    const tableContainer = document.getElementById('table-container');

    tableContainer.innerHTML = tabelleErstellen(listeFILTERED);
}) 

//// HTML 

function togglePopup() {
    let popup = document.getElementById("popups");
    popup.classList.toggle("show");
}

function togglePopup2() {
    let popup = document.getElementById("nameInfo");
    popup.classList.toggle("show");
}


