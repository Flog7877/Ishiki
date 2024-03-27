// Arztsuche: https://www.arztsuche-bw.de/index.php?suchen=1&offset=13189&id_arzt_praxis=0&id_fachgruppe=0&id_zusatzbezeichnung=0&id_genehmigung=0&id_dmp=0&id_zusatzvertraege=0&id_sprache=0&vorname=&nachname=&zeiten=&fa_name=&plz=&ort=&strasse=&schluesselnr=&landkreis=&id_leistungsort_art=0&id_praxis_zusatz=0&sorting=adresse&direction=DESC
let ab = "Anfrage per Mailbox", nA = "k.A.";
export const liste = [

    {
        "therapeutenname": "Alexandra Haux",
        "seite": "alexandra_haux",
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
        "kasse": "p",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/haux/
    },
    {
        "therapeutenname": "Sabrina Schenk",
        "seite": "sabrina_schenk",
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
        "kasse": "p",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/sabrina.schenk/
    },
    {
        "therapeutenname": "Anne Koop",
        "seite": "anne_koop",
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
        "kasse": "p",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/sabrina.schenk/
    },
    {
        "therapeutenname": "Meks Mattes",
        "seite": "meks_mattes",
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
        "kasse": "p",
        "jugendtherapeutIn": false,
        "therapeutenalter": Date.UTC(1957, 1, 1)
        // Spezifikationen: https://www.therapie.de/profil/mattes/
    },
    {
        "therapeutenname": "Maria-Elisabeth Hardt-Svaldi",
        "seite": "maria_elisabeth_hardt_svaldi",
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
        "kasse": "p",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/hardtsvaldi/
    },
    {
        "therapeutenname": "Manfred Kooistra",
        "seite": "manfred_kooistra",
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
        "kasse": "p",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/kooistra/
    },
    {
        "therapeutenname": "Bernhard Cerff",
        "seite": "bernhard_cerff",
        "telefonnummer": "07721 9931154",
        "erreichbarkeit": [
            "Dienstag: 10-13 Uhr", "Dienstag: 14-17 Uhr", "Donnerstag: 14-16 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie", "Traumatherapie"
        ],
        "adresse": "Hegelstraße 5/1, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "http://www.drcerff.de/PRAXIS-Dr-Cerff/",
        "geschlecht": "m",
        "kasse": "p",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/bernhard.cerff/
    },
    {
        "therapeutenname": "Mario Fischer",
        "seite": "mario_fischer",
        "telefonnummer": "07071 995676",
        "erreichbarkeit": [
            "Dienstag: 10-12 Uhr", "Mittwoch 10-12 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Schellingstraße 2/2, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "https://www.psychotherapie-fischer.eu/",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/mario.fischer/
    },
    {
        "therapeutenname": "Michaela Kunze",
        "seite": "michaela_kunze",
        "telefonnummer": "0178 8171285",
        "erreichbarkeit": [
            "Montag: 9-10 Uhr", "Mittwoch: 9-10 Uhr", ab
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Derendingerstraße 43, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "https://www.kunze-psychotherapie.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/michalea.kunze/
    }
];
