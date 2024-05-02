// Arztsuche: https://www.arztsuche-bw.de/index.php?suchen=1&offset=13189&id_arzt_praxis=0&id_fachgruppe=0&id_zusatzbezeichnung=0&id_genehmigung=0&id_dmp=0&id_zusatzvertraege=0&id_sprache=0&vorname=&nachname=&zeiten=&fa_name=&plz=&ort=&strasse=&schluesselnr=&landkreis=&id_leistungsort_art=0&id_praxis_zusatz=0&sorting=adresse&direction=DESC
let ab = "Anfrage per Mailbox", nA = "k.A.";

export let listeMAP = {
    "alexandra_haux": {
        "therapeutenname": "Alexandra Haux",
        "seite": "alexandra_haux",
        "telefonnummer": "0152 01307666",
        "erreichbarkeit": [
            "Montag: 9-17 Uhr", "Donnerstag: 11-17 Uhr", "Freitag: 9-15 Uhr"
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
        "kostenerstattungsverfahren": true,
        "spezifikationen": [
            "Lebensberatung", "Angst, Phobien", "Depressionen", "Esstörungen", "Krisenberatung", "Persönlichkeitsstörung", "Psychomatik", "Schmerzen", "Sexualität", "Stress, Burnout", "Mobbing", "Trauer", "Trauma", "Zwang"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.03981685638428%2C48.51411690328977%2C9.068140983581545%2C48.52696502245163&amp;layer=mapnik&amp;marker=48.52054137022454%2C9.05397891998291",
        "avatar": "defaultIcon",
        "therapeutenalter": nA
    },
    "sabrina_schenk": {
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
        "kostenerstattungsverfahren": true,
        "spezifikationen": [
            "Lebensberatung", "Angst, Phobien", "Depressionen", "Esstörungen", "Krisenberatung", "Persönlichkeitsstörung", "Psychoonkologie", "Psychosen", "Schizophrenie", "Psychomatik", "Schmerzen", "Sexualität", "Stress, Burnout", "Mobbing", "Sucht", "Trauer", "Trauma", "Zwang"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.04977321624756%2C48.51633428925755%2C9.064364433288576%2C48.5233837947081&amp;layer=mapnik&amp;marker=48.51985600006949%2C9.05705850000004",
        "avatar": "defaultIcon",
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/sabrina.schenk/
    },
    "meks_mattes": {
        "therapeutenname": "Meks Mattes",
        "seite": "meks_mattes",
        "telefonnummer": "07071 52011",
        "erreichbarkeit": [
            "Montag: 12:50-13:20 Uhr", "Mittwoch: 12:50-13:20 Uhr", ab 
        ],
        "therapieformen": [
            "Verhaltenstherapie", "Systemische Therapie"
        ],
        "adresse": "Uhlandstraße 11, 72072 Tübingen ",
        "stadtteil": "Zentrum",
        "website": "https://meksmattes.de/index.php",
        "geschlecht": "w",
        "kasse": "p",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": true,
        "spezifikationen": [
            "Lebensberatung", "Angst, Phobien", "Depressionen", "Esstörungen", "Psychosen",  "Schizophrenie", "Psychomatik", "Trauma"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.041919708251955%2C48.51086171860725%2C9.071102142333986%2C48.52496127146709&amp;layer=mapnik&amp;marker=48.517905500065886%2C9.056521100000055",
        "avatar": "meksMattes",
        "therapeutenalter": Date.UTC(1957, 1, 1),
        "weitereTherapeutInnen": [
            "Meks Mattes", "Andrea Mayer"
        ]
    },
    "anne_koop":{
        "therapeutenname": "Anne Koop",
        "seite": "anne_koop",
        "telefonnummer": "01590 4973214",
        "erreichbarkeit": [
            ab 
        ],
        "therapieformen": [
            "Verhaltenstherapie", "Schematherapie"
        ],
        "adresse": "Madergasse 10, 72072 Tübingen",
        "stadtteil": "Zentrum",
        "website": "",
        "geschlecht": "w",
        "kasse": "p",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Lebensberatung", "Angst, Phobien", "Depressionen", "Esstörungen", "Persönlichkeitsstörung", "Psychomatik", "Schmerzen", "Sexualität", "Stress, Burnout", "Mobbing", "Trauer", "Trauma", "Zwang"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.036684036254885%2C48.51480984910794%2C9.065866470336916%2C48.528908303234836&amp;layer=mapnik&amp;marker=48.5218595666904%2C9.051275253295898",
        "avatar": "anneKoop",
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/koop/
    },
    "maria_elisabeth_hardt_svaldi": {
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
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Lebensberatung", "Angst, Phobien", "Akute Krisenbewältigung", "Depressionen", "Esstörungen",  "Psychomatik", "Schmerzen", "Sexualität", "Stress, Burnout", "Mobbing", "Sucht", "Trauer", "Trauma", "Zwang", "Trans*gender"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.032220840454103%2C48.50892840951089%2C9.090585708618166%2C48.53712466709843&amp;layer=mapnik&amp;marker=48.523028500370735%2C9.061403274536133",
        "avatar": "hardtSvaldi",
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/hardtsvaldi/
    },
    "manfred_kooistra": {
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
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.045610427856447%2C48.51020781349138%2C9.074792861938478%2C48.52430754832131&amp;layer=mapnik&amp;marker=48.51725817143506%2C9.060201644897461",
        "avatar": "manfredKooistra",
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/kooistra/
    },
    "bernhard_cerff": {
        "therapeutenname": "Bernhard Cerff",
        "seite": "bernhard_cerff",
        "telefonnummer": "07721 9931154",
        "erreichbarkeit": [
            "Dienstag: 10-13 Uhr", "Dienstag: 14-17 Uhr", "Donnerstag: 14-16 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie", "Traumatherapie", "Schematherapie"
        ],
        "adresse": "Hegelstraße 5/1, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "http://www.drcerff.de/PRAXIS-Dr-Cerff/",
        "geschlecht": "m",
        "kasse": "p",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": true,
        "spezifikationen": [
            "Depressionen", "Mobbing", "Zwang", "Persönlichkeitsstörung", "Sucht", "Stress, Burnout", "Trauma"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.040460586547853%2C48.507477080787446%2C9.069643020629885%2C48.521577575511536&amp;layer=mapnik&amp;marker=48.51452781868398%2C9.055051803588867",
        "avatar": "bernhard_cerff",
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/bernhard.cerff/
    },
    "mario_fischer": {
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
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.026126861572267%2C48.499886367355025%2C9.08449172973633%2C48.528087656790575&amp;layer=mapnik&amp;marker=48.513979300024666%2C9.055306799999926",
        "avatar": "marioFischer",
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/mario.fischer/
    },
    "michaela_kunze": {
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
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Lebensberatung", "Angst, Phobien", "Depressionen", "Esstörungen", "Psychomatik", "Stress, Burnout", "Mobbing", "Trauer"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.02432441711426%2C48.49675824140964%2C9.082689285278322%2C48.52496127146709&amp;layer=mapnik&amp;marker=48.51087675011778%2C9.053536699999995",
        "avatar": "michaelaKunze",
        "therapeutenalter": nA
        // Spezifikationen: https://www.therapie.de/profil/michalea.kunze/
    },
    "peter_wegner": {
        "therapeutenname": "Peter Wegner",
        "seite": "peter_wegner",
        "telefonnummer": "07071 43955",
        "erreichbarkeit": [
            "Montag-Freitag: 15-19 Uhr", "Dienstag-Freitag: 9-12 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Pfalzhaldenweg 16, 72070 Tübingen",
        "stadtteil": "Weststadt", 
        "website": "https://www.drpeterwegner.de/",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben", "Viele Veröffentlichungen (siehe Website)"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.009904861450197%2C48.50113756368663%2C9.06826972961426%2C48.52933815687993&amp;layer=mapnik&amp;marker=48.51521585004504%2C9.039075299999922",
        "avatar": "peterWegner",
        "therapeutenalter": nA
    },
    "kerstin_zinser": {
        "therapeutenname": "Kerstin Zinser",
        "seite": "kerstin_zinser",
        "telefonnummer": "07071 6398596",
        "erreichbarkeit": [
            "Dienstag, Mittwoch: 7:30-8 Uhr", "Mittwoch: 12:50-13:30 Uhr", ab
        ],
        "therapieformen": [
            "Verhaltenstherapie", "Traumatherapie", "Systemische Therapie"
        ],
        "adresse": "Clinicumsgasse 22, 72020 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://psychotherapie-zinser.de/index.html",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Depressionen", "Seelische Reaktionen auf starke Belastungen", "Angststörungen", "Panikattacken", "Prüfungssängste", "Selbstwertprobleme", "Borderlinesyndrom", "Folgen psychotischer Krisen", "Persönlichkeitsstörungen"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.042005538940431%2C48.51282338332468%2C9.071187973022463%2C48.52692239027739&amp;layer=mapnik&amp;marker=48.5198636000247%2C9.056591400000002",
        "avatar": "kerstinZinser",
        "therapeutenalter": nA
    },
    "alves_nunes": {
        "therapeutenname": "Joao Alves Nunes",
        "seite": "alves_nunes",
        "telefonnummer": "07071 551305",
        "erreichbarkeit": [
            "Montag: 16-16:50 Uhr", "Dienstag: 16-16:50 Uhr" 
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Gartenstraße 26, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            nA
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.047970771789553%2C48.51168619563891%2C9.077153205871584%2C48.52578551905898&amp;layer=mapnik&amp;marker=48.518736347874544%2C9.062561988830566",
        "avatar": "defaultIcon",
        "therapeutenalter": nA
    },
    "jessica_anders": {
        "therapeutenname": "Jessica Anders",
        "seite": "jessica_anders",
        "telefonnummer": "0152 28180862",
        "erreichbarkeit": [
            "Montag, Dienstag: 12-12:30 Uhr", "Donnerstag: 12-12:45 Uhr" 
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Friedrichstr. 5, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "p",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            nA
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.04479503631592%2C48.51089014907305%2C9.073977470397951%2C48.524989694021144&amp;layer=mapnik&amp;marker=48.517940412074374%2C9.059386253356934",
        "avatar": "defaultIcon",
        "therapeutenalter": nA
    },
    "anja_assmann": {
        "therapeutenname": "Anja Assmann",
        "seite": "anja_assmann",
        "telefonnummer": "07071 8850020",
        "erreichbarkeit": [
            "Montag-Donnerstag: 14-14:30 Uhr" 
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Esslinger Straße 16, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            nA
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.040503501892092%2C48.505317472941066%2C9.069685935974123%2C48.519418568606945&amp;layer=mapnik&amp;marker=48.512368511313056%2C9.055094718933105",
        "avatar": "defaultIcon",
        "therapeutenalter": nA
    },
    "joerg_assmann": {
        "therapeutenname": "Jörg Assmann",
        "seite": "joerg_assmann",
        "telefonnummer": "07071 9796739",
        "erreichbarkeit": [
            "Montag-Mittwoch: 12-14:30 Uhr", "Donnerstag: 13-14:30 Uhr", "Freitag: 12-14:30 Uhr" 
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Hagellocher Weg 68, 72070 Tübingen",
        "stadtteil": "Weststadt", 
        "website": "",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            nA
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=8.998661041259767%2C48.51137346455092%2C9.05702590942383%2C48.53956836135791&amp;layer=mapnik&amp;marker=48.52547287499977%2C9.027843475341797",
        "avatar": "defaultIcon",
        "therapeutenalter": nA
    },
    "flora_bach": {
        "therapeutenname": "Flora Bach",
        "seite": "flora_bach",
        "telefonnummer": "0151 20772921",
        "erreichbarkeit": [
            "Montag: 8:30-9 Uhr", "Montag: 13-13:30 Uhr", "Dienstag: 9-9:50 Uhr" 
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Im Winkelrain 48 72076 Tübingen",
        "stadtteil": "Schönblick/ Winkelwiese", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            nA
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.007930755615236%2C48.50875781987288%2C9.124660491943361%2C48.56513482934277&amp;layer=mapnik&amp;marker=48.53691000002036%2C9.06626254999992",
        "avatar": "defaultIcon",
        "therapeutenalter": nA
    },
    "lena_behmenburg": {
        "therapeutenname": "Lena Behmenburg",
        "seite": "lena_behmenburg",
        "telefonnummer": "07071 8899058",
        "erreichbarkeit": [
            "Montag: 10-11:50 Uhr", "Mittwoch: 8:30-10 Uhr", 
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Gartenstraße 20 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Depressionen", "Angstsörungen", "Zwangsstörungen", "Essstörungen", "Somatoforme Störungen", "Anpassungsstörungen", "Persönlichkeitsstörungen", "Psychoonkologie"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.032135009765627%2C48.504720364152135%2C9.09049987792969%2C48.53291896358166&amp;layer=mapnik&amp;marker=48.518821625968535%2C9.061317443847656",
        "avatar": "lenaBehmenburg",
        "therapeutenalter": nA
    },
    "cara_belizer": {
        "therapeutenname": "Gemeinschaftspraxis Belizer",
        "seite": "cara_belizer",
        "telefonnummer": "07071 6399808",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Herrenberger Straße 11, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "beides",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Breites Behandlungsspektrum"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.020977020263674%2C48.5095538999371%2C9.079341888427736%2C48.53774980941665&amp;layer=mapnik&amp;marker=48.52365381673764%2C9.050159454345703",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
            "Cara Maria Belizer", "Janna Theurer", "Jassen Halatsch", "Daniela Knauß", "Johannes Schönthal"
        ]
    },
    "karin_boeckh": {
        "therapeutenname": "Karin Böckh",
        "seite": "karin_boeckh",
        "telefonnummer": "07071 6394705",
        "erreichbarkeit": [
            "Dienstag: 12-12:50 Uhr", "Donnerstag: 12-12:50 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Haaggasse 15-2, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://www.karin-boeckh.de/index.php/startseite.html",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Klinische Therapie", "Suchttherapie", "Esstörungen", "<strong>Frauenorientierte Praxis</strong>"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.037241935729982%2C48.51330668036266%2C9.066424369812013%2C48.52740555281722&amp;layer=mapnik&amp;marker=48.520356607112134%2C9.051833152770996",
        "avatar": "karinBoeckh",
        "therapeutenalter": Date.UTC(1968, 1, 1),
        "weitereTherapeutInnen": [
        ]
    },
    "bohlmann_steeb": {
        "therapeutenname": "Katrin Bohlmann-Steeb",
        "seite": "bohlmann_steeb",
        "telefonnummer": "07071 36360",
        "erreichbarkeit": [
            "Montag: 09:30-10 Uhr", "Dienstag: 13:30-14 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Fürststraße 17, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            nA
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.029216766357424%2C48.49931763154031%2C9.087581634521486%2C48.5275192374508&amp;layer=mapnik&amp;marker=48.51342039664282%2C9.058399200439453",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
            "Katrin Bohlmann-Steeb", "Marianne Funk"
        ]
    },
    "sebastian_denoix": {
        "therapeutenname": "Sebastian Denoix",
        "seite": "sebastian_denoix",
        "telefonnummer": "07071 22792",
        "erreichbarkeit": [
            "Montag: 09:30-11:30 Uhr", "Dienstag: 9:30-11 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Gartenstraße 13, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            nA
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.045867919921877%2C48.5120842142321%2C9.075050354003908%2C48.52618342688841&amp;layer=mapnik&amp;marker=48.51913220002469%2C9.060465900000054",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
            "Sebastian Denoix", "Reinhold Ott"
        ]
    },
    "susanne_holzapfel": {
        "therapeutenname": "Susanne Holzapfel",
        "seite": "susanne_holzapfel",
        "telefonnummer": "07071 9988891",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Rappstraße 46, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "http://susanneholzapfel.de/index.htm",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Schulische oder berufliche Leistungsprobleme", "Gesundheitliche Probleme", "Depressionen", "Angststörungen", "Zwangsstörungen", "Essstörungen", "Soziale Ängste"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.01805877685547%2C48.509212724298095%2C9.076423645019533%2C48.537408823654594&amp;layer=mapnik&amp;marker=48.52331273604%2C9.0472412109375",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": true,
        "weitereTherapeutInnen": [
            "Susanne Holzapfel", "Andrea Dolfen"
        ]
    },
    "brigitte_ebersprächer": {
        "therapeutenname": "Brigitte Ebersprächer",
        "seite": "brigitte_ebersprächer",
        "telefonnummer": "07071 44440",
        "erreichbarkeit": [
            "Dienstag: 8-9:40 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie", "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Breuningstraße 15, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.038829803466799%2C48.50599987437152%2C9.06801223754883%2C48.52010078015159&amp;layer=mapnik&amp;marker=48.51304705003582%2C9.053421249999928",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "kristina_ehrlinger": {
        "therapeutenname": "Kristina Ehrlinger",
        "seite": "kristina_ehrlinger",
        "telefonnummer": "07071 538898",
        "erreichbarkeit": [
            "Dienstag: 7-7:40 Uhr", "Mittwoch: 12:30-13 Uhr", "Freitag: 9-9:30 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Aixerstraße 32, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.016685485839846%2C48.48248016155762%2C9.13341522216797%2C48.53888641203577&amp;layer=mapnik&amp;marker=48.5106911354775%2C9.075050354003906",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "friederike_gundel": {
        "therapeutenname": "Friederike Gundel und Kolleginnen",
        "seite": "friederike_gundel",
        "telefonnummer": "07071 7772100",
        "erreichbarkeit": [
            "Mittwoch: 14:15-17:35 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie", "Traumatherapie"
        ],
        "adresse": "Wilhelmstraße 105, 72074 Tübingen",
        "stadtteil": "Schönblick/ Winkelwiese", 
        "website": "https://www.psychotherapie-gundel.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Ängste", "Depressionen", "Burn-Out", "Somatisierung", "Essstörungen", "Sucht", "Borderline-Persönlichkeitsstörung", "Online-Therapie möglich"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.04080390930176%2C48.51671805774626%2C9.099168777465822%2C48.544909979873715&amp;layer=mapnik&amp;marker=48.530793900269835%2C9.069958250000013",
        "avatar": "friederikeGundel",
        "therapeutenalter": Date.UTC(1967, 1, 1),
        "weitereTherapeutInnen": [
            "Jennifer Fehr", "Friederike Gundel", "Lisa Raab", "Ellen Brölz"
        ]
    },
    "martina_fischer": {
        "therapeutenname": "Martina Fischer",
        "seite": "martina_fischer",
        "telefonnummer": "07071 253322",
        "erreichbarkeit": [
            "Dienstag, Mittwoch: 8:35-9 Uhr", "Dienstag, Freitag: 11:50-12:20 Uhr", "Mittwoch: 12:50-13:20 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Schwärzlocher Straße 40, 72070 Tübingen",
        "stadtteil": "Weststadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.012479782104494%2C48.50528903934874%2C9.070844650268556%2C48.53348732231063&amp;layer=mapnik&amp;marker=48.51936620005101%2C9.041647399999988",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "elsbeth_freudenfeld": {
        "therapeutenname": "Elsbeth Freudenfeld",
        "seite": "elsbeth_freudenfeld",
        "telefonnummer": "07071 252797",
        "erreichbarkeit": [
            "Dienstag, Mittwoch: 8:35-9 Uhr", "Dienstag, Freitag: 11:50-12:20 Uhr", "Mittwoch: 12:50-13:20 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Gartenstraße 18, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.031877517700197%2C48.50477723195894%2C9.09024238586426%2C48.532975799741635&amp;layer=mapnik&amp;marker=48.51885770007148%2C9.061039199999982",
        "avatar": "elsbethFreudenfeld",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "gaier_maucher": {
        "therapeutenname": "Monika Gaiser-Maucher",
        "seite": "gaier_maucher",
        "telefonnummer": "07071 6890270",
        "erreichbarkeit": [
            "Dienstag-Donnerstag: 7:45-8:15 Uhr", "Montag, Freitag: 12-13 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Münzgasse 18, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.047498703002931%2C48.51616372455163%2C9.062089920043947%2C48.52321325373719&amp;layer=mapnik&amp;marker=48.519688800072316%2C9.054799799999955",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "ursula_gangl": {
        "therapeutenname": "Ursula Gangl",
        "seite": "ursula_gangl",
        "telefonnummer": "07071 9497517",
        "erreichbarkeit": [
            "Dienstag-Donnerstag: 13-13:40 Uhr", "Montag, Freitag: 14-14:40 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Konrad-Adenauer-Str. 5, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "https://www.psychotherapie-gangl.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Angststörung", "Depressionen", "Anpassungs- und Belastungsstörungen", "Selbstwertprobleme", "Missbrauchsfolgen", "Persönlichkeitsstörung", "Psychosomatische Erkrankungen", "Psychosen", "Essstörungen"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.02183532714844%2C48.4976682615933%2C9.080200195312502%2C48.525870785285605&amp;layer=mapnik&amp;marker=48.511753350680195%2C9.051027250000061",
        "avatar": "usrsulaGangl",
        "therapeutenalter": Date.UTC(1958, 1, 1),
        "weitereTherapeutInnen": [
        ]
    },
    "astrid_gerrards": {
        "therapeutenname": "Astrid Gerrards",
        "seite": "astrid_gerrards",
        "telefonnummer": "07071 885766",
        "erreichbarkeit": [
            "Montag-Freitag: 7-7:30 Uhr", "Montag: 19-19:50 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Primus-Truber-Straße 62, 72072 Tübingen",
        "stadtteil": "Derendingen", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.026899337768556%2C48.489249951591724%2C9.085264205932619%2C48.5174571592373&amp;layer=mapnik&amp;marker=48.503360900117215%2C9.056121549999943",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "gesser_werning": {
        "therapeutenname": "Christina Gesser-Werning",
        "seite": "gesser_werning",
        "telefonnummer": "07071 793448",
        "erreichbarkeit": [
            "Dienstag: 13:55-15 Uhr", "Mittwoch: 7:30-8:15 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Holbeinweg 3, 72076 Tübingen",
        "stadtteil": "Wanne", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=8.98509979248047%2C48.50898527259594%2C9.101829528808596%2C48.56536202891141&amp;layer=mapnik&amp;marker=48.53716535002523%2C9.043412750000016",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "lea_goetz": {
        "therapeutenname": "Lea Götz",
        "seite": "lea_goetz",
        "telefonnummer": "07071 9940322",
        "erreichbarkeit": [
            "Dienstag: 13-13:50 Uhr", "Donnerstag: 12-12:50 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Nauklerstraße 60, 72074 Tübingen",
        "stadtteil": "Schönblick/ Winkelwiese", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.035139083862306%2C48.516092655754704%2C9.093503952026369%2C48.54428492597939&amp;layer=mapnik&amp;marker=48.53019310010949%2C9.064353449999999",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "allique_goudriaan": {
        "therapeutenname": "Allique Goudriaan",
        "seite": "allique_goudriaan",
        "telefonnummer": "07071 9910075",
        "erreichbarkeit": [
            "Dienstag: 13-14:30 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Neue Straße 11, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://www.psychotherapie-goudriaan.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Agoraphobie", "Spezifische Phobien", "Soziale Ängste", "PTBS", "Angststörung", "Depressionen", "Manie", "Bipolare Störung", "Arbeits- und Leistungsstörungen", "Akute Krisenbewältigung", "ADHS/ ADS", "Anoriexie", "Schizophrenie", "Schizoaffektive Störung", "Persönlichkeitsstörungen", "Mehr"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.02732849121094%2C48.50744994690329%2C9.085693359375002%2C48.53564702729531&amp;layer=mapnik&amp;marker=48.52152630002469%2C9.056491400000027",
        "avatar": "alliqueGoudriaan",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": true,
        "weitereTherapeutInnen": [
        ]
    },
    "julia_graebe": {
        "therapeutenname": "Julia Graebe",
        "seite": "julia_graebe",
        "telefonnummer": "0176 37446365",
        "erreichbarkeit": [
            "Mittwoch: 15-16:40 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Gartenstraße 18, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.031877517700197%2C48.504720364152135%2C9.09024238586426%2C48.53291896358166&amp;layer=mapnik&amp;marker=48.518821625968535%2C9.061059951782227",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "peter_graesch": {
        "therapeutenname": "Peter Graesch",
        "seite": "peter_graesch",
        "telefonnummer": "07071 7785138",
        "erreichbarkeit": [
            "Montag-Donnerstag: 13-13:25 Uhr", "Freitag: 11-11:25 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Pfleghofstraße 1, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://psychotherapie-graesch.de/ueber-mich/",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Depressionen", "Burnout", "Stress", "Panikstörung", "Soziale Ängste", "Persönlichkeitsstörungen", "Erkrankungsängste", "Psychosomatik", "Schlafstörungen", "Essstörungen", "Bezienungskonflikte", "Familienkrisen", "Sexuelle Störungen", "Mobbing", "Folgen der Arbeitslosigkeit", "Suchterkrankungen", "Borderline-Persönlichkeitsstörung", "Traumafolgestörung"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.049365520477297%2C48.516959688266226%2C9.063956737518312%2C48.52400910668856&amp;layer=mapnik&amp;marker=48.52048530001894%2C9.056663699999945",
        "avatar": "peterGraesch",
        "therapeutenalter": Date.UTC(1960, 1, 1),
        "weitereTherapeutInnen": [
        ]
    },
    "uta_grams": {
        "therapeutenname": "Uta Grams",
        "seite": "uta_grams",
        "telefonnummer": "07071 915234",
        "erreichbarkeit": [
            "Montag-Freitag: 11:50-12:30 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Friedrichstraße 5, 72072 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://www.grams-psychotherapie.de/index.html",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Belastungsstörungen", "Affektive Störungen", "Ängste und Phobien", "Panikstörungen", "Zwänge", "Psychosen", "Sucht", "Persönlichkeitsstörungen", "Bewältigung von körperlichen Erkrankungen"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.044837951660158%2C48.51086171860725%2C9.07402038574219%2C48.52496127146709&amp;layer=mapnik&amp;marker=48.51791198556453%2C9.059429168701172",
        "avatar": "utaGrams",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "corinna_grieshaber": {
        "therapeutenname": "Corinna Grieshaber",
        "seite": "corinna_grieshaber",
        "telefonnummer": "0178 4516960",
        "erreichbarkeit": [
            "Mittwoch-Donnerstag: 13:10-14 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Christophstraße 2, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.029989242553713%2C48.500625714374706%2C9.088354110717775%2C48.52882659239393&amp;layer=mapnik&amp;marker=48.51472811552055%2C9.059171676635742",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "angelika_hantke": {
        "therapeutenname": "Angelika Hantke",
        "seite": "angelika_hantke",
        "telefonnummer": "07071 600620",
        "erreichbarkeit": [
            "Dienstag-Freitag: 12:10-13 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Beckmannweg 7/1 72076 Tübingen",
        "stadtteil": "Wanne", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=8.986816406250002%2C48.50830291136406%2C9.103546142578127%2C48.56468042714349&amp;layer=mapnik&amp;marker=48.53652960005049%2C9.045226550000052",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "dagmar_hecke": {
        "therapeutenname": "Dagmar Hecke",
        "seite": "dagmar_hecke",
        "telefonnummer": "0160 98650758",
        "erreichbarkeit": [
            "Dienstag: 12-13 Uhr", "Donnerstag: 12-13 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Gartenstraße 39, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.035654067993166%2C48.50483409970191%2C9.094018936157228%2C48.53303263583783&amp;layer=mapnik&amp;marker=48.51894815004396%2C9.064877499999966",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "ulrike_held": {
        "therapeutenname": "Ulrike Held",
        "seite": "ulrike_held",
        "telefonnummer": "07071 360477",
        "erreichbarkeit": [
            "Dienstag: 7-8:40 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Ebertstraße 57, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.034709930419924%2C48.49891951267332%2C9.093074798583986%2C48.527121340116764&amp;layer=mapnik&amp;marker=48.512994250049275%2C9.063909550000062",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "carmen_herold": {
        "therapeutenname": "Carmen Herold",
        "seite": "carmen_herold",
        "telefonnummer": "07071 25124",
        "erreichbarkeit": [
            "Mittwoch: 8-8:50 Uhr", "Donnerstag: 8-8:50 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Hermann-Kurz-Straße 13, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.035482406616213%2C48.50426541940067%2C9.093847274780275%2C48.53246427200486&amp;layer=mapnik&amp;marker=48.51834935002625%2C9.06462375000001",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "weitereTherapeutInnen": [
        ]
    },
    "reinhard_herold": {
        "therapeutenname": "Reinhard Herold",
        "seite": "reinhard_herold",
        "telefonnummer": "07071 38689",
        "erreichbarkeit": [
            "Monatag-Freitag: 9:20-10 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Elisabeth-Käsemann-Straße 6, 72074 Tübingen",
        "stadtteil": "Lustnau", 
        "website": "https://www.dr-herold-praxis.de/",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Fokus auf Psychoanalyse"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.058485031127931%2C48.51234008167672%2C9.116849899291994%2C48.54053444050467&amp;layer=mapnik&amp;marker=48.52641655004587%2C9.087645350000003",
        "avatar": "reinhardHerold",
        "therapeutenalter": Date.UTC(1955, 1, 1),
        "weitereTherapeutInnen": [
        ]
    },
    "sarah_rippa": {
        "therapeutenname": "Sarah Rippa",
        "seite": "sarah_rippa",
        "telefonnummer": "07071 51193",
        "erreichbarkeit": [
            "Montag: 8:30-8:55 Uhr", "Mittwoch: 10:50-12:05 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Neue Straße 11, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://psychotherapiepraxis-tuebingen.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Traumafolgestörungen", "Akute Belastungsreaktionen", "Komplexe PTBS", "Anhaltende Trauerstörung"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.041919708251955%2C48.51447226013516%2C9.071102142333986%2C48.52857080821297&amp;layer=mapnik&amp;marker=48.52152630002469%2C9.056491400000027",
        "avatar": "sarahRippa",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": true,
        "weitereTherapeutInnen": [
        ]
    },
    "klaus_hesse": {
        "therapeutenname": "Klaus Hesse",
        "seite": "klaus_hesse",
        "telefonnummer": "07071 2570234",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Neue Straße 11, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://psychotherapiepraxis-tuebingen.de/",
        "geschlecht": "m",
        "kasse": "p",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Alle Störungsbilder willkommen", "Depressionen", "Bipolare Störung", "Psachosen", "Schizophrenie und verwandte Störungen"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.041919708251955%2C48.51447226013516%2C9.071102142333986%2C48.52857080821297&amp;layer=mapnik&amp;marker=48.52152630002469%2C9.056491400000027",
        "avatar": "klausHesse",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "vera_heuer_jung": {
        "therapeutenname": "Vera Heuer-Jung",
        "seite": "vera_heuer_jung",
        "telefonnummer": "0151 18905398",
        "erreichbarkeit": [
            "Donnerstags: 14:30-17 Uhr", "Freitags: 10:30-11:30 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Fürststraße 11, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "https://praxisjung.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.029645919799806%2C48.500227605781035%2C9.088010787963869%2C48.52842870533195&amp;layer=mapnik&amp;marker=48.514330117696105%2C9.058828353881836",
        "avatar": "veraJung",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "detlef_hielscher": {
        "therapeutenname": "Detlef Hielscher",
        "seite": "detlef_hielscher",
        "telefonnummer": "07071 538108",
        "erreichbarkeit": [
            "Montag: 12-12:50 Uhr", "Dienstag: 12:30-12:55 Uhr", "Mittwoch: 19-19:25 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Aixerstraße 5, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "https://www.detlef-hielscher.de/39994.html",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Angststörungen", "Depressionen"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.015655517578127%2C48.48339043800989%2C9.132385253906252%2C48.53979567575707&amp;layer=mapnik&amp;marker=48.5115603001764%2C9.074093299999959",
        "avatar": "detlefHielscher",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": true,
        "weitereTherapeutInnen": [
        ]
    },
    "ines_riessen": {
        "therapeutenname": "Ines Riessen",
        "seite": "ines_riessen",
        "telefonnummer": "07071 9988892",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Gartenstraße 20, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "https://www.psychotherapie-riessen.de/index.html",
        "geschlecht": "beides",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Somatoforme Störungen", "Schmerzstörungen", "Essstörungen", "Angststörungen", "Depressionen", "Frauenheilkunde: Psychosomatische Störungen", "Psychiatrische Störungen", "Krisenintervention"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.032135009765627%2C48.504663496281516%2C9.09049987792969%2C48.53286212735784&amp;layer=mapnik&amp;marker=48.518788450031465%2C9.061327300000016",
        "avatar": "inesRiessen",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
            "Ines Riessen", "Jan Hirn"
        ]
    },
    "michael_hittinger": {
        "therapeutenname": "Michael Hittinger",
        "seite": "michael_hittinger",
        "telefonnummer": "07071 256660",
        "erreichbarkeit": [
            "Montag: 14-19 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Lazarettgasse 7, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.023466110229494%2C48.508530366128944%2C9.081830978393556%2C48.53672684524023&amp;layer=mapnik&amp;marker=48.52260475004202%2C9.052644200000032",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "marlene_jauss": {
        "therapeutenname": "Marlene Jauß",
        "seite": "marlene_jauss",
        "telefonnummer": "07071 52199",
        "erreichbarkeit": [
            "Dienstag-Freitag: 13-14 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Fürststraße 11, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "https://www.psychotherapiejauss.de/#home",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Depressionen", "Burnout und Stress", "Ängste und Panikprobleme", "Soziale Unsicherheiten", "Chronische Schmerzzustände", "Schlafstörungen", "Familiäre Konflikte", "Sinnkrisen", "Trennung, Tod und Verlust", "Belastungsreaktionen", "Zwänge", "Rückkehr in den Alltag nach einem psychiatrischen Aufenthalt"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.029645919799806%2C48.500227605781035%2C9.088010787963869%2C48.52842870533195&amp;layer=mapnik&amp;marker=48.514313600024686%2C9.058805800000073",
        "avatar": "defaultIcon",
        "therapeutenalter": Date.UTC(1961, 1, 1),
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },   
    "ingeborg_hartung": {
        "therapeutenname": "Ingeborg Hartung",
        "seite": "ingeborg_hartung",
        "telefonnummer": "07071 1469095",
        "erreichbarkeit": [
            "Montag: 10-12 Uhr", "Donnerstag: 10-12 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Am Markt 13, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.046940803527834%2C48.51703075584688%2C9.06153202056885%2C48.524080164379676&amp;layer=mapnik&amp;marker=48.520555450103004%2C9.054239750000079",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "jung_und_kollegInnen": {
        "therapeutenname": "Jung und Kolleg*innen",
        "seite": "jung_und_kollegInnen",
        "telefonnummer": "07071 34418",
        "erreichbarkeit": [
            "Donnerstag: 14:30-16:10 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Fürststraße 11, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "beides",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.029645919799806%2C48.500227605781035%2C9.088010787963869%2C48.52842870533195&amp;layer=mapnik&amp;marker=48.514313600024686%2C9.058805800000073",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
            "Amelie Brinkmann", "Vera Heuer-Jung", "Martin Jung"
        ]
    }, 
    "kerstin_justen": {
        "therapeutenname": "Kerstin Justen",
        "seite": "kerstin_justen",
        "telefonnummer": "0157 53375708",
        "erreichbarkeit": [
            "Dienstag-Freitag: 9-12 Uhr", "Dienstag, Donnerstag: 15-18 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Breuningstraße 15, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "http://www.psychotherapie-praxis-tuebingen.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Depressive Symptome", "Ängste", "Selbstwertprobleme", "Probleme im Beziehungsbereich", "Körperliche Beschwerden", "Arbeits- und Leistungsstörungen", "Anpassungs- und Belastungsstörungen", "Persönlichkeitsstörungen", "Essstörungen", "Psychotische Erkrankungen", "Autismusspektrumstörungen"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.024238586425783%2C48.49891951267332%2C9.082603454589846%2C48.527121340116764&amp;layer=mapnik&amp;marker=48.51304705003582%2C9.053421249999928",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "schoenenberg_und_jusyte": {
        "therapeutenname": "Schönenberg und Jusyte",
        "seite": "schoenenberg_und_jusyte",
        "telefonnummer": "07071 8553125",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Eisenbahnstraße 61, 72072 Tübingen",
        "stadtteil": "Unterer Wert", 
        "website": "",
        "geschlecht": "beides",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben", "Praxis bietet Videosprechstunden an"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.047842025756838%2C48.50182002139593%2C9.1062068939209%2C48.53002023482235&amp;layer=mapnik&amp;marker=48.51589950000671%2C9.077066299999956",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
            "Prof. Dr. rer. nat. Michael Schönenberg", "Dr. rer. nat. Aiste Jusyte"
        ]
    },
    "simone_kambeitz": {
        "therapeutenname": "Simone Kambeitz",
        "seite": "simone_kambeitz",
        "telefonnummer": "07071 26106",
        "erreichbarkeit": [
            "Montag: 8:30-9:30 Uhr", "Mittwoch: 13-14:10 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Neckargasse 1, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben", "Praxis bietet Videosprechstunden an"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.049386978149416%2C48.516760698510005%2C9.063978195190431%2C48.52381014462311&amp;layer=mapnik&amp;marker=48.52027890006239%2C9.056674799999996",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "wolfgang_kambeitz": {
        "therapeutenname": "Wolfgang Kambeitz",
        "seite": "wolfgang_kambeitz",
        "telefonnummer": "07071 940776",
        "erreichbarkeit": [
            "Montag: 8:30-9:30 Uhr", "Mittwoch: 13-14:10 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Neckargasse 1, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben", "Praxis bietet Videosprechstunden an"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.049386978149416%2C48.516760698510005%2C9.063978195190431%2C48.52381014462311&amp;layer=mapnik&amp;marker=48.52027890006239%2C9.056674799999996",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "martina_buchmann": {
        "therapeutenname": "Martina Buchmann",
        "seite": "martina_buchmann",
        "telefonnummer": "07071 6033711",
        "erreichbarkeit": [
            "Dienstag: 15:55-16:25 Uhr", "Mittwoch: 9:25-9:55 Uhr", "Mittwoch: 14:45-15:25 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Systemische Therapie"
        ],
        "adresse": "Dorfackerstraße 26, 72074 Tübingen",
        "stadtteil": "Lustnau", 
        "website": "https://www.nachhaltige-psychotherapie.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Schwerpunkt auf Gruppentherapie"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.050846099853517%2C48.51705918285124%2C9.10921096801758%2C48.54525091510785&amp;layer=mapnik&amp;marker=48.53112980002469%2C9.08003050000002",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "barbara_hinz": {
        "therapeutenname": "Barbara Hinz und Kollegen",
        "seite": "barbara_hinz",
        "telefonnummer": "07071 551219",
        "erreichbarkeit": [
            ab
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Liststraße 7, 72074 Tübingen",
        "stadtteil": "Schönblick/ Winkelwiese", 
        "website": "",
        "geschlecht": "beides",
        "kasse": "g",
        "jugendtherapeutIn": true,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.050159454345705%2C48.52444966276644%2C9.079341888427736%2C48.53854543392957&amp;layer=mapnik&amp;marker=48.531498038846586%2C9.064750671386719",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
            "Barbara Hinz", "Michael Steiner"
        ]
    },
    "katharina_keifenheim": {
        "therapeutenname": "Katharina Keifenheim",
        "seite": "katharina_keifenheim",
        "telefonnummer": "07071 8859968",
        "erreichbarkeit": [
            "Montag: 7:30-7:55 Uhr", "Montag: 12-12:50 Uhr", "Mittoch, Freitag: 13-13:50 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Verhaltenstherapie"
        ],
        "adresse": "Konzenbergstraße 4, 72074 Tübingen",
        "stadtteil": "Lustnau", 
        "website": "https://psychotherapie-keifenheim.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Depressionen", "Burnout, Erschöpfungszustände", "Essstörungen", "Somatoforme Störungen wie Reizdarmsyndrom", "Psychischen Problemen im Zusammenhang mit unerfüllten Kinderwunsch, Schwangerschaft, Geburt und Elternschaft, z.B. auch traumatisch erlebte Geburt, seelische Probleme im Anschluss an die Geburt etc.", "Traumafolgestörung, PTBS", "Angststörungen, Panikstörungen, generalisierte Angst"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.071187973022463%2C48.52155044917786%2C9.100370407104494%2C48.53564702729531&amp;layer=mapnik&amp;marker=48.528599228741314%2C9.085779190063477",
        "avatar": "katharinaKeifenheim",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "renate_krist": {
        "therapeutenname": "Renate Krist",
        "seite": "renate_krist",
        "telefonnummer": "07071 45388",
        "erreichbarkeit": [
            "Montag-Freitag: 9:50-10:15 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Elisabeth-Käsemann-Straße 6, 72074 Tübingen",
        "stadtteil": "Lustnau", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.058485031127931%2C48.51234008167672%2C9.116849899291994%2C48.54053444050467&amp;layer=mapnik&amp;marker=48.52641655004587%2C9.087645350000003",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "mechtild_kessler": {
        "therapeutenname": "Mechtild Kessler",
        "seite": "mechtild_kessler",
        "telefonnummer": "07071 8850021",
        "erreichbarkeit": [
            "Mo, Mi, Do: 14-14:30 Uhr", "Dienstag: 12-12:30 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Esslinger Straße 16, 72072 Tübingen",
        "stadtteil": "Südstadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.040503501892092%2C48.505317472941066%2C9.069685935974123%2C48.519418568606945&amp;layer=mapnik&amp;marker=48.51237245003666%2C9.055088549999937",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "judith_kirsten": {
        "therapeutenname": "Judith Kirsten",
        "seite": "judith_kirsten",
        "telefonnummer": "0162 3406360",
        "erreichbarkeit": [
            "Mittwoch: 13:10-14 Uhr", "Freitag: 13:10-14 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Nauklerstraße 60, 72074 Tübingen",
        "stadtteil": "Schönblick/ Winkelwiese", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.035139083862306%2C48.516092655754704%2C9.093503952026369%2C48.54428492597939&amp;layer=mapnik&amp;marker=48.53019310010949%2C9.064353449999999",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "mareile_korte": {
        "therapeutenname": "Mareile Korte-Schraivogel",
        "seite": "mareile_korte",
        "telefonnummer": "07071 25032",
        "erreichbarkeit": [
            "Montag-Donnerstag: 12:20-13:10 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Am Weilersbach 10, 72070 Tübingen",
        "stadtteil": "Weststadt", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.010376930236818%2C48.52018605594866%2C9.03955936431885%2C48.53428301381282&amp;layer=mapnik&amp;marker=48.52724875006155%2C9.024978350000083",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "sibylle_kossmann": {
        "therapeutenname": "Sibylle Koßmann-Böhm",
        "seite": "sibylle_kossmann",
        "telefonnummer": "0157 88158688",
        "erreichbarkeit": [
            "Freitag: 13:30-15:10 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Österbergstraße 7, 72074 Tübingen",
        "stadtteil": "Österberg", 
        "website": "https://www.kossmann-boehm.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Angststörungen", "Depressionen", "Bipolare Störung", "Anpassungsstörung", "Zwangsstörungen", "Essstörugen", "Somatoforme Störungen", "Psychiatrische Erkrankungen (z.B. Schizophrenie)", "ADHS/ADS", "Bei Kindern: Störung des Sozialverhaltens, Trennungsangst, Enkopresis und Enuresis"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.044194221496584%2C48.51356254163411%2C9.073376655578615%2C48.52766134288387&amp;layer=mapnik&amp;marker=48.520608650099014%2C9.058801499999959",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": true,
        "weitereTherapeutInnen": [
        ]
    },
    "clemens_krause": {
        "therapeutenname": "Clemens Krause",
        "seite": "clemens_krause",
        "telefonnummer": "07071 2570174",
        "erreichbarkeit": [
            "Dienstag, Mittwoch: 12-13 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Gartenstraße 31, 72074 Tübingen",
        "stadtteil": "Gartenstraße", 
        "website": "https://www.tuebingen-psychotherapie.de/index.html",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Alle psychischen Störungsbilder"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.049386978149416%2C48.511885205326315%2C9.078569412231447%2C48.52598447336448&amp;layer=mapnik&amp;marker=48.51893450002469%2C9.063974799999983",
        "avatar": "clemensKrause",
        "therapeutenalter": Date.UTC(1965, 1, 1),
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "verena_lachmair": {
        "therapeutenname": "Verena Lachmair",
        "seite": "verena_lachmair",
        "telefonnummer": "07071 9209189",
        "erreichbarkeit": [
            "Mittwoch: 18-18:50 Uhr", "Freitag: 8-8:50 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Madergasse 10, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.043979644775392%2C48.51830995525109%2C9.058570861816408%2C48.525359185772466&amp;layer=mapnik&amp;marker=48.52183469314155%2C9.051275253295898",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "ulrike_lange": {
        "therapeutenname": "Ulrike Lange",
        "seite": "ulrike_lange",
        "telefonnummer": "07071 7771268",
        "erreichbarkeit": [
            "Montag: 12-13:10 Uhr", "Dienstag: 19-19:30 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Französische Allee 13, 72072 Tübingen",
        "stadtteil": "Französisches Viertel", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.046640396118166%2C48.497782012967676%2C9.105005264282228%2C48.52598447336448&amp;layer=mapnik&amp;marker=48.51186780002465%2C9.075785799999949",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "julia_link": {
        "therapeutenname": "Julia Link",
        "seite": "julia_link",
        "telefonnummer": " 07071 9985767",
        "erreichbarkeit": [
            "Montag: 11:30-12:15 Uhr", "Dienstag, Donnerstag: 17:50-18:20 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Rappstraße 46, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.032521247863771%2C48.51623479324889%2C9.061703681945803%2C48.53033285080883&amp;layer=mapnik&amp;marker=48.523273600024694%2C9.047130599999946",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": true,
        "weitereTherapeutInnen": [
        ]
    },
    "gaby_lippold": {
        "therapeutenname": "Gaby Lippold",
        "seite": "gaby_lippold",
        "telefonnummer": "07071 9698684",
        "erreichbarkeit": [
            "Montag-Dienstag: 12:20-12:45 Uhr", "Mittwoch-Donnerstag: 8:35-9 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren"
        ],
        "adresse": "Doblerstraße 8, 72074 Tübingen",
        "stadtteil": "Österberg", 
        "website": "https://www.psychologin-therapeutin.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Essstörungen", "Traumafolgestörung", "Chronische Schmerzen", "Prüfungsängste"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.044322967529299%2C48.514443831679245%2C9.07350540161133%2C48.52854238766867&amp;layer=mapnik&amp;marker=48.52149360019373%2C9.058914184570312",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "marcel_lisson": {
        "therapeutenname": "Marcel Lisson",
        "seite": "marcel_lisson",
        "telefonnummer": "07071 368404",
        "erreichbarkeit": [
            "Donnerstag: 8:40-12 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Verhaltenstherapie"
        ],
        "adresse": "Uhlandstraße 14, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "http://www.m-lisson.de/html/index.php",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Bisher Verdrängtes / Unbewusstes bewusst zu machen und zu verstehen", "Abgespaltene Teile des Erlebens reintegrieren", '"Schlechte" Gewohnheiten hinterfragen und als "alte" Problemlösungen erkennen', "Ressourcen wieder finden und neue gewinnen", "Im Rollentausch sich in problematische Beziehungen einfühlen", "Lösungen für Teilprobleme suchen und ausprobieren"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.048571586608888%2C48.514443831679245%2C9.063162803649904%2C48.52149360019373&amp;layer=mapnik&amp;marker=48.517968838568294%2C9.055867195129395",
        "avatar": "defaultIcon",
        "therapeutenalter": Date.UTC(1958, 1, 1),
        "jugendtherapeutInINK": true,
        "weitereTherapeutInnen": [
        ]
    },
    "leopold_morbitzer": {
        "therapeutenname": "Leopold Morbitzer",
        "seite": "leopold_morbitzer",
        "telefonnummer": "07071 6875820",
        "erreichbarkeit": [
            "Montag-Donnerstag: 7-7:25 Uhr", "Montag-Donnerstag: 15-15:25 Uhr"
        ],
        "therapieformen": [
            "Tiefenpsychologisches Verfahren", "Psychoanalyse"
        ],
        "adresse": "Holzmarkt 7, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://www.leopold-morbitzer.de/",
        "geschlecht": "m",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.052444696426393%2C48.51871502832861%2C9.059740304946901%2C48.522239738033775&amp;layer=mapnik&amp;marker=48.520477413838826%2C9.056092500686646",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    "beate_nentwich": {
        "therapeutenname": "Beate Nentwich",
        "seite": "beate_nentwich",
        "telefonnummer": "07071 7939414",
        "erreichbarkeit": [
            "Montag-Donnerstag: 7:45-8:30 Uhr"
        ],
        "therapieformen": [
            "Verhaltenstherapie"
        ],
        "adresse": "Madergasse 10, 72070 Tübingen",
        "stadtteil": "Zentrum", 
        "website": "https://www.praxis-nentwich.de/",
        "geschlecht": "w",
        "kasse": "g",
        "jugendtherapeutIn": false,
        "kostenerstattungsverfahren": false,
        "spezifikationen": [
            "Keine Angaben"
        ],
        "karte": "https://www.openstreetmap.org/export/embed.html?bbox=9.043979644775392%2C48.51830995525109%2C9.058570861816408%2C48.525359185772466&amp;layer=mapnik&amp;marker=48.52183469314155%2C9.051275253295898",
        "avatar": "defaultIcon",
        "therapeutenalter": nA,
        "jugendtherapeutInINK": false,
        "weitereTherapeutInnen": [
        ]
    },
    // (oben) https://www.arztsuche-bw.de/index.php?suchen=1&offset=80&id_z_arzt_praxis=0&id_fachgruppe=483&id_zusatzbezeichnung=0&id_genehmigung=0&id_dmp=0&id_zusatzvertraege=0&id_sprache=0&vorname=&nachname=&arztgruppe=psychotherapeut&geschlecht=alle&wochentag=alle&zeiten=alle&fa_name=&plz=&ort=T%C3%BCbingen&strasse=&schluesselnr=&schluesseltyp=lanr7&landkreis=T%C3%BCbingen&id_leistungsort_art=0&id_praxis_zusatz=0&sorting=name&direction=ASC&checkbox_content=&name_schnellsuche=&fachgebiet_schnellsuche=
};

export const listePsychiater = [
    {
        "praxis": "Gemeinschaftspraxis Mayer und Pape",
        "psychiaterNamen": [
            "Bernhard Mayer", "Christian Pape", "Matthias Fischer", "Kathrin Schmidts", "Stiliani Andreadaki"
        ],
        "psychiaterAdresse": "Am Markt 13, 72072 Tübingen",
        "praxisStadtteil": "Zentrum",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.046983718872072%2C48.51703075584688%2C9.061574935913088%2C48.524080164379676&amp;layer=mapnik&amp;marker=48.52055558274374%2C9.054279327392578",
        "psychiaterNummer": "07071 5015",
        "telefonischeErreichbarkeit": [
            "Mo-Fr: 9-13 Uhr", "Mo, Do: 17-19 Uhr", "Di: 14:30- 17 Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "m", "w"
        ],
        "website": ""
    },
    {
        "praxis": "Dr. Dannert",
        "psychiaterNamen": [
            "Hans Dannert", "Vanessa Alpert"
        ],
        "psychiaterAdresse": "Dorfackerstraße 15, 72072 Tübingen",
        "praxisStadtteil": "Lustnau",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.065737724304201%2C48.52365381673764%2C9.094920158386232%2C48.53774980941665&amp;layer=mapnik&amp;marker=48.5306888000247%2C9.08034310000005",
        "psychiaterNummer": "07071 49375",
        "telefonischeErreichbarkeit": [
            "Mo-Fr: 08:30-12:30 Uhr", "Mo, Do: 16-18:30 Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "m", "w"
        ],
        "website": ""
    },
    {
        "praxis": "Dr. Heide",
        "psychiaterNamen": [
            "Klaus Heide"
        ],
        "psychiaterAdresse": "Eisenbahnstraße 1, 72072 Tübingen",
        "praxisStadtteil": "Südstadt",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.034366607666017%2C48.50204750525715%2C9.09273147583008%2C48.53024759209485&amp;layer=mapnik&amp;marker=48.51614951080023%2C9.063549041748047",
        "psychiaterNummer": "07071 60960",
        "telefonischeErreichbarkeit": [
            "Mo-Fr: 9-18 Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "m"
        ],
        "website": ""
    }, 
    {
        "praxis": "Dr. Neussel",
        "psychiaterNamen": [
            "Corinna Neussel"
        ],
        "psychiaterAdresse": "Karlstraße 8, 72072 Tübingen",
        "praxisStadtteil": "Südstadt",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.050889015197756%2C48.5135198981786%2C9.065480232238771%2C48.52056979525894&amp;layer=mapnik&amp;marker=48.51703790002466%2C9.058186699999965",
        "psychiaterNummer": "07071 5654000",
        "telefonischeErreichbarkeit": [
            "Mo: 8:35-9 Uhr", "Di-Do: 8-9 Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "w"
        ],
        "website": ""
    },
    /*
    {
        "praxis": "Dr. Char",
        "psychiaterNamen": [
            "Eva Char"
        ],
        "psychiaterAdresse": "Mühlstraße 20, 72074 Tübingen",
        "praxisStadtteil": "Zentrum",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.043207168579103%2C48.51418797485823%2C9.072389602661135%2C48.528286602052155&amp;layer=mapnik&amp;marker=48.52122750002467%2C9.05781669999999",
        "psychiaterNummer": "07071 2536986",
        "telefonischeErreichbarkeit": [
            "Mo-Mi, Fr: 8:30-12:30 Uhr", "Mo, Mi, Fr: 13:30-16 Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "w"
        ],
        "website": ""
    },
    */
    {
        "praxis": "Dr. Wettach",
        "psychiaterNamen": [
            "Irmtraud Wettach"
        ],
        "psychiaterAdresse": "Konrad-Adenauer-Straße 5, 72072 Tübingen",
        "praxisStadtteil": "Südstadt",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.036469459533693%2C48.504720364152135%2C9.065651893615724%2C48.518821625968535&amp;layer=mapnik&amp;marker=48.51177148560064%2C9.051060676574707",
        "psychiaterNummer": "07071 1473073",
        "telefonischeErreichbarkeit": [
            "Mo, Di, Do 13:30-13:55 Uhr", "Mi: 14:30-14:55 Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "w"
        ],
        "website": "http://www.psychotherapie-wettach.de/"
    },
    {
        "praxis": "Dr. Wolscht",
        "psychiaterNamen": [
            "Eckhard Wolscht"
        ],
        "psychiaterAdresse": "Neckargasse 7, 72070 Tübingen",
        "praxisStadtteil": "Zentrum",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.041833877563478%2C48.51290867137225%2C9.07101631164551%2C48.527007654589966&amp;layer=mapnik&amp;marker=48.51995865350411%2C9.056425094604492",
        "psychiaterNummer": "07071 9208713",
        "telefonischeErreichbarkeit": [
            "Mo-Fr: 8-12 Uhr", "Mo-Fr: 14-20 Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "m"
        ],
        "website": ""
    },
    {
        "praxis": "Dr. Eichner",
        "psychiaterNamen": [
            "Gustav Eichner"
        ],
        "psychiaterAdresse": "Haußerstraße 27, Tübingen",
        "praxisStadtteil": "Schönblick/ Winkelwiese",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.033508300781252%2C48.51649063973351%2C9.091873168945314%2C48.54468268844167&amp;layer=mapnik&amp;marker=48.53058862608956%2C9.062690734863281",
        "psychiaterNummer": "07071 26786",
        "telefonischeErreichbarkeit": [
            ab
        ],
        "kasse": "g",
        "geschlechtlId": [
            "m"
        ],
        "website": ""
    },
    {
        "praxis": "Dr. Heinzmann",
        "psychiaterNamen": [
            "Barbara Anna Heinzmann"
        ],
        "psychiaterAdresse": "Gartenstraße 26, Tübingen",
        "praxisStadtteil": "Gartenstraße",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.047970771789553%2C48.5117146256421%2C9.077153205871584%2C48.525813941150446&amp;layer=mapnik&amp;marker=48.51875480002911%2C9.062549750000017",
        "psychiaterNummer": "07071 551145",
        "telefonischeErreichbarkeit": [
            ab
        ],
        "kasse": "g",
        "geschlechtlId": [
            "w"
        ],
        "website": ""
    },
    {
        "praxis": "Dr. Reber",
        "psychiaterNamen": [
            "Ulrike Reber"
        ],
        "psychiaterAdresse": "Nürtingerstraße 30, Tübingen",
        "praxisStadtteil": "Lustnau",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.05754089355469%2C48.512283222356245%2C9.115905761718752%2C48.540477612829946&amp;layer=mapnik&amp;marker=48.52638237963075%2C9.086723327636719",
        "psychiaterNummer": "01573 7850818",
        "telefonischeErreichbarkeit": [
            ab
        ],
        "kasse": "g",
        "geschlechtlId": [
            "w"
        ],
        "website": ""
    },
    {
        "praxis": "Uniklinik f. Psychiatrie und Psychotherapie",
        "psychiaterNamen": [
            ""
        ],
        "psychiaterAdresse": "Calwerstraße 14, 72076 Tübingen",
        "praxisStadtteil": "Universität",
        "karteIFRAME": "https://www.openstreetmap.org/export/embed.html?bbox=9.048464298248293%2C48.52354012342698%2C9.0557599067688%2C48.52706449738527&amp;layer=mapnik&amp;marker=48.52530140160897%2C9.052108549999957",
        "psychiaterNummer": "07071 2982684",
        "telefonischeErreichbarkeit": [
            "Rund um die Uhr"
        ],
        "kasse": "g",
        "geschlechtlId": [
            "m", "w"
        ],
        "website": "https://www.medizin.uni-tuebingen.de/de/das-klinikum/einrichtungen/kliniken/psychiatrie-und-psychotherapie/allgemeine-psychiatrie/patienten"
    },
];
