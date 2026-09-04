/* The White Valley — modernized components */

/* ── Logo SVG complet ── */
function WhiteValleyLogo({
  height = 80,
  variant = 'dark'
}) {
  const isWinter = variant === 'winter';
  const isLight = variant === 'light';
  const green = isWinter ? '#daeefa' : '#0c2816';
  const green2 = isWinter ? '#b8ddf0' : '#1a4d28';
  const brass = isWinter ? '#eaf4fb' : '#e8e1d6';
  const brassL = isWinter ? '#7ec4e8' : '#c9a060';
  const text = isWinter || isLight ? '#ffffff' : '#1a1208';
  const sub = isWinter ? '#7ec4e8' : isLight ? '#c9a060' : '#e8e1d6';

  /* viewBox portrait : 200 × 140 — illustration + texte groupés */
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 140",
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "100,8  128,52 72,52",
    fill: green
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "60,20  84,52 36,52",
    fill: green2
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "140,20 164,52 116,52",
    fill: green2
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "14,52 26,24 38,52",
    fill: green
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "10,52 22,30 34,52",
    fill: green
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "30,52 39,34 48,52",
    fill: green2
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "52",
    width: "7",
    height: "6",
    rx: "1",
    fill: green
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "162,52 174,24 186,52",
    fill: green
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "166,52 178,30 190,52",
    fill: green
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "152,52 161,34 170,52",
    fill: green2
  }), /*#__PURE__*/React.createElement("rect", {
    x: "173",
    y: "52",
    width: "7",
    height: "6",
    rx: "1",
    fill: green
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "38",
    width: "80",
    height: "16",
    fill: brass
  }), /*#__PURE__*/React.createElement("rect", {
    x: "58",
    y: "35",
    width: "84",
    height: "5",
    fill: brass
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92,54 L92,43 Q100,34 108,43 L108,54 Z",
    fill: "rgba(255,255,255,0.15)",
    stroke: "rgba(255,255,255,0.6)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96,43 Q100,38 104,43",
    fill: "none",
    stroke: brassL,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68,54 L68,46 Q74,41 80,46 L80,54",
    fill: "none",
    stroke: "rgba(255,255,255,0.45)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120,54 L120,46 Q126,41 132,46 L132,54",
    fill: "none",
    stroke: "rgba(255,255,255,0.45)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "75",
    fontFamily: "Georgia,'Times New Roman',serif",
    fontWeight: "700",
    fontSize: "15",
    letterSpacing: "2.5",
    fill: text,
    textAnchor: "middle"
  }, "THE WHITE VALLEY"), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "83",
    x2: "82",
    y2: "83",
    stroke: sub,
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "87",
    fontFamily: "serif",
    fontSize: "8",
    fill: sub,
    textAnchor: "middle"
  }, "\u2726"), /*#__PURE__*/React.createElement("line", {
    x1: "118",
    y1: "83",
    x2: "180",
    y2: "83",
    stroke: sub,
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "100",
    fontFamily: "Georgia,serif",
    fontStyle: "italic",
    fontSize: "9.5",
    fill: sub,
    textAnchor: "middle"
  }, "La Parenth\xE8se Blanche d'Ifrane"));
}
const {
  useState,
  useEffect,
  useRef
} = React;

/* ── Translations ──
   Rédactionnel validé — TWV_Audit-et-Contenus_v2 (DO FACTORY, 28/08/2026).
   Les textes FR sont repris mot pour mot du document : ne pas reformuler à l'intégration.
   Tout ce qui reste entre crochets attend une réponse client et ne doit pas partir en ligne. */
const T = {
  fr: {
    menu: 'Menu',
    close: 'Fermer',
    tagline: "La Parenthèse Blanche d'Ifrane.",
    book: 'Réserver',
    dHotel: "L'Hôtel",
    dPresent: 'Une parenthèse',
    dGallery: 'Les suites',
    dSeasons: 'Quatre saisons',
    dLocal: 'Les Lettres de la Vallée',
    dSejour: 'Les Suites',
    dStd: 'Suite Senior Grand lit',
    dSup: 'Suite Senior Twin',
    dSuite: 'Suite Junior Grand lit',
    dOffres: 'Suite Junior Twin',
    dSpa: 'Les cinq lieux',
    dResto: 'Le spa',
    dBar: 'The WHITE',
    dHammam: 'Piscine & salle de sport',
    dPool: 'Les séminaires',
    dBook: 'Réserver',
    dDispo: 'Réserver votre séjour',
    dContact: 'Nous rejoindre',
    dEvents: 'Devis séminaire',
    dRoom: "Plan d'accès",
    reperes: ['74 suites, de 28 à 65 m²', 'Spa, hammam et sauna', 'The WHITE, notre restaurant', 'Piscine chauffée', 'Salle de sport', 'Salle de conférence'],
    reperesPause: 'Mettre le bandeau en pause',
    reperesPlay: 'Relancer le bandeau',
    aClose: 'Fermer',
    aCloseMenu: 'Fermer le menu',
    aTop: 'Retour en haut',
    aEte: 'Été',
    aHiver: 'Hiver',
    galRole: 'carrousel',
    galPrev: 'Photo précédente',
    galNext: 'Photo suivante',
    galGo: 'Aller à la photo',
    galPhotos: 'photos',
    galPause: 'Mettre le carrousel en pause',
    galPlay: 'Relancer le carrousel',
    railGo: 'Aller au lieu',
    fxSuitesAria: 'Les quatre suites',
    fxSaisonsAria: 'Les quatre saisons',
    fxLieuxAria: 'Les cinq lieux en arc',
    fxPrev: 'Saison précédente',
    fxNext: 'Saison suivante',
    fxViewPrev: 'Vue précédente',
    fxViewNext: 'Vue suivante',
    fxDotSuite: 'Suite',
    fxDotVue: 'Vue',
    fxDragArc: "Glissez l'arc",
    fxDragFlow: 'Glissez · cliquez les côtés',
    fxLieu: 'ifrane',
    photoK: {
      chambre: 'la chambre',
      salon: 'le salon',
      cuisine: 'la kitchenette',
      bain: 'la salle de bain',
      bureau: "l'espace de travail",
      cabine: 'une cabine de soin',
      hammam: 'le hammam',
      linge: 'le linge et les savons',
      detente: 'les transats',
      ambiance: 'le spa',
      restaurant: 'la façade de The WHITE',
      piscine: 'la piscine chauffée',
      sport: 'la salle de sport',
      facade: 'la façade, de nuit'
    },
    seminaireFacts: ['Une salle de conférence', '74 suites, dont 41 en lits séparés', 'Restauration sur place, trois repas', 'Spa et piscine en fin de journée'],
    heroAltEte: "La résidence The White Valley à Ifrane, façade éclairée à la tombée de la nuit.",
    heroAltHiver: 'La résidence The White Valley à Ifrane sous la neige.',
    destAltEte: 'La façade du restaurant The WHITE, éclairée de nuit.',
    destAltHiver: 'La façade du restaurant The WHITE sous la neige, de nuit.',
    callTitle: 'Votre parenthèse commence ici.',
    navPhone: 'Téléphone',
    navWhats: 'WhatsApp',
    saisonsEye: 'QUATRE SAISONS',
    saisonsH2: 'Quatre saisons, une signature',
    saisonsBtn: 'Quand venir',
    saisons: [{
      name: 'Hiver',
      period: 'décembre à mars',
      k: 'hiver',
      tone: 'stone',
      txt: "Entre −5 °C la nuit et 8 °C le jour. La neige vient trois à six fois par hiver. Feu de cheminée, forêt de cèdres silencieuse, ski à vingt minutes quand la pente est blanche."
    }, {
      name: 'Printemps',
      period: 'avril à mai',
      k: 'printemps',
      tone: 'sage',
      txt: "La meilleure saison pour marcher. Les premières herbes sauvages, les amandes encore vertes, une lumière nette pour la photo. Notre saison favorite, en confidence."
    }, {
      name: 'Été',
      period: 'juin à septembre',
      k: 'ete',
      tone: 'warm',
      txt: "Le refuge climatique. 14 °C la nuit, 28 °C le jour pendant que les villes étouffent. Les soirées se prennent dehors, la piscine reste chauffée."
    }, {
      name: 'Automne',
      period: 'octobre à novembre',
      k: 'automne',
      tone: 'brass',
      txt: "Les forêts virent au cuivre, l'air sèche. Très peu de monde en semaine. La saison idéale pour une retraite ou un long week-end à deux, sans concurrence d'agenda."
    }],
    heroEyeSplit: 'THE WHITE VALLEY · IFRANE · MOYEN ATLAS',
    heroEteA: "L'hôtel de suites",
    heroEteB: "d'altitude",
    heroEteC: 'à Ifrane.',
    heroHivA: "L'hôtel de suites",
    heroHivB: "d'altitude",
    heroHivC: 'à Ifrane.',
    heroLedeSplit: "À 1 650 mètres, la vie reprend son souffle. 74 suites, à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver.",
    heroCta1: 'Réserver votre séjour',
    heroCta2: 'Vous organisez un séminaire ? Demander un devis',
    heroMetaCat: 'Format',
    heroMetaCatV: "Hôtel de suites d'altitude · 74 suites",
    heroMetaTel: 'Altitude',
    heroMetaTelV: '1 650 m · Moyen Atlas',
    heroEyeFull: 'THE WHITE VALLEY · IFRANE · MOYEN ATLAS',
    heroLedeFull: 'À 1 650 mètres, la vie reprend son souffle.',
    introEye: "L'HÔTEL",
    introH2: 'Une parenthèse dans la vallée.',
    introP1: "Ici, on ne réserve pas une chambre. On réserve une suite : de la place pour poser ses affaires, de quoi s'asseoir ailleurs que sur le lit, et de quoi rester plus d'une nuit sans que le séjour se mette à ressembler à un transit.",
    introP2: "Autour, ce qu'un bon hôtel sait faire. Le hammam, le sauna, les cinq cabines de soin. The WHITE au rez-de-chaussée, midi et soir. La piscine chauffée, la salle de sport ouverte tôt. Vous activez ce que vous voulez. Le reste se fait oublier.",
    introP3: "Ifrane est à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver.",
    introLink: "Découvrir l'hôtel",
    bbArrivee: 'ARRIVÉE',
    bbDepart: 'DÉPART',
    bbVoyageurs: 'VOYAGEURS',
    bbAdults: 'Adultes',
    bbChildren: 'Enfants',
    bbLess: 'Retirer',
    bbMore: 'Ajouter',
    bbSubmit: 'Vérifier disponibilité',
    bbLocale: 'fr-FR',
    roomsEye: 'LES SUITES',
    roomsH2: '74 suites, quatre formats, de 28 à 65 m².',
    roomsLede: "Le choix tient en deux questions. De combien d'espace avez-vous besoin, et dormez-vous dans le même lit. Junior ou Senior pour le niveau, Grand lit ou Twin pour le couchage, et la surface qui va avec : 28, 45 ou 65 m². Le reste ne change pas d'une suite à l'autre : la même literie, la même salle de bain, la même vue sur la vallée, la même attention au petit matin.",
    rSurface: 'Surface',
    rCap: 'Capacité',
    rKitchen: 'Cuisine',
    rPriceNote: 'Tarifs sur demande',
    rBook: 'Réserver',
    rooms: [{
      name: 'Suite Senior Grand lit',
      photos: 'suite-senior-grand-lit',
      size: 65,
      niveau: 'Senior',
      cap: '[À CONFIRMER]',
      kitchen: 'Kitchenette équipée',
      tone: 'warm',
      desc: "Soixante-cinq mètres carrés, un grand lit, un vrai salon. Du rangement, et de quoi rester à l'intérieur quand il neige depuis deux jours. Ce qu'on choisit pour une semaine à deux."
    }, {
      name: 'Suite Senior Twin',
      photos: 'suite-senior-twin',
      size: 65,
      niveau: 'Senior',
      cap: '[À CONFIRMER]',
      kitchen: 'Kitchenette équipée',
      tone: 'sage',
      desc: "Le même volume, deux lits séparés. Le format le plus répandu de la maison, quarante suites sur soixante-quatorze."
    }, {
      name: 'Suite Junior Grand lit',
      photos: 'suite-junior-grand-lit',
      size: 28,
      niveau: 'Junior',
      cap: '[À CONFIRMER]',
      kitchen: 'Kitchenette équipée',
      tone: 'stone',
      desc: "Vingt-huit mètres carrés, un grand lit, un coin salon. Notre format le plus compact, pour deux ou trois nuits à deux."
    }, {
      name: 'Suite Junior Twin',
      photos: 'suite-junior-twin',
      size: 45,
      niveau: 'Junior',
      cap: '[À CONFIRMER]',
      kitchen: 'Kitchenette équipée',
      tone: 'brass',
      desc: "Quarante-cinq mètres carrés, deux lits séparés. Il n'y en a qu'une dans la maison, ce qui veut dire qu'elle part vite."
    }],
    expEye: 'SPA · TABLE · PISCINE · SPORT · SÉMINAIRES',
    expH2: 'Cinq lieux, sous le même toit.',
    exps: [{
      idx: '01',
      title: 'Le spa',
      photos: 'spa',
      arcCount: 4,
      fxEye: "Cinq cabines",
      sub: "Cinq cabines, un hammam, un sauna, et des parcours séparés pour les femmes et pour les hommes. Des soins pensés pour l'altitude : à 1 650 mètres, la peau ne demande pas ce qu'elle demande au bord de la mer. Pas de musique dans les couloirs.",
      tone: 'sage'
    }, {
      idx: '02',
      title: 'The WHITE',
      photos: 'the-white',
      fxEye: "La table",
      sub: "Notre restaurant. Une cuisine du Moyen Atlas en produits courts, midi et soir. Trois saveurs par assiette, une cuisson qu'on respecte, une assiette qu'on finit. Ouvert aux non-résidents sur réservation.",
      tone: 'warm'
    }, {
      idx: '03',
      title: 'La piscine',
      photos: 'piscine',
      fxEye: "Chauffée",
      sub: "Chauffée, ce qui à 1 650 mètres n'est pas un détail : on y entre en janvier au lieu de la regarder depuis la baie vitrée.",
      tone: 'pool'
    }, {
      idx: '04',
      title: 'La salle de sport',
      photos: 'sport',
      arcCount: 3,
      fxEye: "Vitrée sur l'eau",
      sub: "Vitrée sur la piscine : deux vélos de biking, un elliptique, deux tapis de course, une presse à cuisses et une station à poulies. On voit l'eau pendant qu'on court.",
      tone: 'stone'
    }, {
      idx: '05',
      title: 'Les séminaires',
      fxEye: "Séminaires",
      sub: "Une salle de conférence, les suites au-dessus, The WHITE pour les repas, le spa pour la fin de journée. Tout tient dans le même bâtiment, et sur un séminaire de deux jours, cela change à peu près tout.",
      tone: 'brass'
    }],
    destEye: 'IFRANE À PORTÉE DE MAIN',
    destH2: 'Nous rejoindre.',
    destCard: 'THE WHITE VALLEY · IFRANE',
    destBtn: "Plan d'accès",
    destRooms: 'Altitude',
    destFloors: 'Suites',
    destCoord: 'Distance',
    dests: [{
      city: 'Fès',
      region: 'Aéroport Fès-Saïss · 1 h',
      tone: 'warm',
      coord: '≈ 60 km',
      desc: "On imagine Ifrane loin. Elle est à une heure de l'aéroport de Fès."
    }, {
      city: 'Rabat',
      region: '3 h de route',
      tone: 'sage',
      coord: '≈ 250 km',
      desc: "À trois heures de Rabat. La conciergerie organise le transfert privé sur demande."
    }, {
      city: 'Casablanca',
      region: '4 h de route',
      tone: 'brass',
      coord: '≈ 330 km',
      desc: "À quatre heures de Casablanca. Mentionnez-le à la réservation, nous nous occupons du reste."
    }],
    nlEye: 'LES LETTRES DE LA VALLÉE',
    nlH2: 'Les Lettres de la Vallée',
    nlDesc: "Un récit de la vallée par trimestre : la neige qui arrive, la table qui change, les chemins qui rouvrent. Et l'accès à nos tarifs Confidentiels, réservés aux abonnés. Inscription volontaire, désinscription en un clic. Nous n'envoyons rien d'autre.",
    nlLabel: 'Votre adresse e-mail',
    nlPH: 'vous@exemple.com',
    nlBtn: 'Recevoir les Lettres',
    nlSent: '✓ Confirmez votre e-mail',
    nlNote: "Double opt-in : un e-mail de confirmation valide l'inscription.",
    nlConfirm: "Un e-mail vient de partir vers votre boîte. Un clic pour confirmer, et vous recevrez la prochaine Lettre de la Vallée. Quatre par an, pas une de plus.",
    ftTagline: "Hôtel de suites d'altitude · Ifrane, Moyen Atlas",
    ftCopy: '© 2026 The White Valley · Ifrane. Tous droits réservés.',
    ftCols: [{
      t: 'Contact',
      l: [{
        x: 'N8, Ifrane, Moyen Atlas, Maroc'
      }, {
        x: 'Téléphone : [À CONFIRMER]'
      }, {
        x: 'WhatsApp : [À CONFIRMER]'
      }, {
        x: 'contact@thewhitevalleys.ma',
        href: 'mailto:contact@thewhitevalleys.ma'
      }]
    }, {
      t: "L'Hôtel",
      l: [{
        x: "L'Hôtel",
        to: 'story'
      }, {
        x: 'Les Suites',
        to: 'rooms'
      }, {
        x: 'The WHITE',
        to: 'experiences'
      }, {
        x: 'Le Spa',
        to: 'experiences'
      }, {
        x: 'Séminaires',
        to: 'experiences'
      }]
    }, {
      t: 'Pratique',
      l: [{
        x: "Plan d'accès",
        to: 'contact'
      }, {
        x: "Politique d'annulation"
      }, {
        x: 'Les Lettres de la Vallée',
        to: 'newsletter'
      }]
    }, {
      t: 'Légal',
      l: [{
        x: 'Mentions légales'
      }, {
        x: 'CGV'
      }, {
        x: 'Confidentialité'
      }]
    }]
  },
  en: {
    menu: 'Menu',
    close: 'Close',
    tagline: 'The White Pause of Ifrane.',
    book: 'Book',
    dHotel: 'The Hotel',
    dPresent: 'A pause',
    dGallery: 'The suites',
    dSeasons: 'Four seasons',
    dLocal: 'Valley Letters',
    dSejour: 'The Suites',
    dStd: 'Senior Suite · King bed',
    dSup: 'Senior Suite · Twin beds',
    dSuite: 'Junior Suite · King bed',
    dOffres: 'Junior Suite · Twin beds',
    dSpa: 'The five places',
    dResto: 'The spa',
    dBar: 'The WHITE',
    dHammam: 'Pool & gym',
    dPool: 'The seminars',
    dBook: 'Book',
    dDispo: 'Book your stay',
    dContact: 'Getting to us',
    dEvents: 'Seminar quote',
    dRoom: 'Getting here',
    reperes: ['74 suites, from 28 to 65 m²', 'Spa, hammam and sauna', 'The WHITE, our restaurant', 'Heated pool', 'Gym', 'Conference room'],
    reperesPause: 'Pause the banner',
    reperesPlay: 'Resume the banner',
    aClose: 'Close',
    aCloseMenu: 'Close the menu',
    aTop: 'Back to top',
    aEte: 'Summer',
    aHiver: 'Winter',
    galRole: 'carousel',
    galPrev: 'Previous photo',
    galNext: 'Next photo',
    galGo: 'Go to photo',
    galPhotos: 'photos',
    galPause: 'Pause the carousel',
    galPlay: 'Resume the carousel',
    railGo: 'Go to place',
    fxSuitesAria: 'The four suites',
    fxSaisonsAria: 'The four seasons',
    fxLieuxAria: 'The five places, on an arc',
    fxPrev: 'Previous season',
    fxNext: 'Next season',
    fxViewPrev: 'Previous view',
    fxViewNext: 'Next view',
    fxDotSuite: 'Suite',
    fxDotVue: 'View',
    fxDragArc: 'Drag the arc',
    fxDragFlow: 'Drag · click the sides',
    fxLieu: 'ifrane',
    photoK: {
      chambre: 'the bedroom',
      salon: 'the living room',
      cuisine: 'the kitchenette',
      bain: 'the bathroom',
      bureau: 'the work space',
      cabine: 'a treatment cabin',
      hammam: 'the hammam',
      linge: 'towels and soaps',
      detente: 'the loungers',
      ambiance: 'the spa',
      restaurant: 'The WHITE façade',
      piscine: 'the heated pool',
      sport: 'the gym',
      facade: 'the façade at night'
    },
    seminaireFacts: ['One conference room', '74 suites, 41 of them with twin beds', 'On-site catering, three meals', 'Spa and pool at the end of the day'],
    heroAltEte: 'The White Valley residence in Ifrane, its façade lit at nightfall.',
    heroAltHiver: 'The White Valley residence in Ifrane under snow.',
    destAltEte: 'The façade of The WHITE restaurant, lit at night.',
    destAltHiver: 'The façade of The WHITE restaurant under snow, at night.',
    callTitle: 'Your pause begins here.',
    navPhone: 'Phone',
    navWhats: 'WhatsApp',
    saisonsEye: 'FOUR SEASONS',
    saisonsH2: 'Four seasons, one signature',
    saisonsBtn: 'When to come',
    saisons: [{
      name: 'Winter',
      period: 'December to March',
      k: 'hiver',
      tone: 'stone',
      txt: "Between −5 °C at night and 8 °C by day. Snow comes three to six times each winter. A fireplace, the silent cedar forest, skiing twenty minutes away when the slope is white."
    }, {
      name: 'Spring',
      period: 'April to May',
      k: 'printemps',
      tone: 'sage',
      txt: "The best season for walking. The first wild herbs, almonds still green, a crisp light for photographs. Our favourite season, in confidence."
    }, {
      name: 'Summer',
      period: 'June to September',
      k: 'ete',
      tone: 'warm',
      txt: "The climate refuge. 14 °C at night, 28 °C by day while the cities swelter. Evenings are spent outside, the pool stays heated."
    }, {
      name: 'Autumn',
      period: 'October to November',
      k: 'automne',
      tone: 'brass',
      txt: "The forests turn copper, the air dries. Very few people midweek. The ideal season for a retreat or a long weekend for two, with no competing schedules."
    }],
    heroEyeSplit: 'THE WHITE VALLEY · IFRANE · MIDDLE ATLAS',
    heroEteA: 'The high-altitude',
    heroEteB: 'suite hotel',
    heroEteC: 'in Ifrane.',
    heroHivA: 'The high-altitude',
    heroHivB: 'suite hotel',
    heroHivC: 'in Ifrane.',
    heroLedeSplit: "At 1,650 metres, life takes a breath. 74 suites, an hour from Fès, in one of the few places in Morocco where snow truly holds through winter.",
    heroCta1: 'Book your stay',
    heroCta2: 'Planning a seminar? Request a quote',
    heroMetaCat: 'Format',
    heroMetaCatV: 'High-altitude suite hotel · 74 suites',
    heroMetaTel: 'Altitude',
    heroMetaTelV: '1,650 m · Middle Atlas',
    heroEyeFull: 'THE WHITE VALLEY · IFRANE · MIDDLE ATLAS',
    heroLedeFull: 'At 1,650 metres, life takes a breath.',
    introEye: 'THE HOTEL',
    introH2: 'A pause in the valley.',
    introP1: "Here you don't book a room. You book a suite: room to set your things down, somewhere to sit other than the bed, and enough space to stay more than one night without the stay starting to feel like a transit.",
    introP2: "Around it, what a good hotel does well. The hammam, the sauna, the five treatment cabins. The WHITE downstairs, midday and evening. The heated pool, the gym open early. You activate what you want. The rest fades away.",
    introP3: "Ifrane is an hour from Fès, in one of the few places in Morocco where snow truly holds through winter.",
    introLink: 'Discover the hotel',
    bbArrivee: 'CHECK-IN',
    bbDepart: 'CHECK-OUT',
    bbVoyageurs: 'GUESTS',
    bbAdults: 'Adults',
    bbChildren: 'Children',
    bbLess: 'Remove',
    bbMore: 'Add',
    bbSubmit: 'Check availability',
    bbLocale: 'en-GB',
    roomsEye: 'THE SUITES',
    roomsH2: '74 suites, four formats, from 28 to 65 m².',
    roomsLede: "The choice comes down to two questions. How much space do you need, and do you sleep in the same bed. Junior or Senior for the size, king bed or twin beds for the bedding, and the surface that goes with it: 28, 45 or 65 m². The rest doesn't change from one suite to the next: the same bedding, the same bathroom, the same view of the valley, the same care first thing in the morning.",
    rSurface: 'Size',
    rCap: 'Capacity',
    rKitchen: 'Kitchen',
    rPriceNote: 'Rates on request',
    rBook: 'Book',
    rooms: [{
      name: 'Senior Suite · King bed',
      photos: 'suite-senior-grand-lit',
      size: 65,
      niveau: 'Senior',
      cap: '[TO BE CONFIRMED]',
      kitchen: 'Equipped kitchenette',
      tone: 'warm',
      desc: "Sixty-five square metres, a king bed, a real living room. Storage, and enough space to stay indoors when it has been snowing for two days. What you choose for a week for two."
    }, {
      name: 'Senior Suite · Twin beds',
      photos: 'suite-senior-twin',
      size: 65,
      niveau: 'Senior',
      cap: '[TO BE CONFIRMED]',
      kitchen: 'Equipped kitchenette',
      tone: 'sage',
      desc: "The same volume, two separate beds. The most common format in the house, forty suites out of seventy-four."
    }, {
      name: 'Junior Suite · King bed',
      photos: 'suite-junior-grand-lit',
      size: 28,
      niveau: 'Junior',
      cap: '[TO BE CONFIRMED]',
      kitchen: 'Equipped kitchenette',
      tone: 'stone',
      desc: "Twenty-eight square metres, a king bed, a sitting corner. Our most compact format, for two or three nights for two."
    }, {
      name: 'Junior Suite · Twin beds',
      photos: 'suite-junior-twin',
      size: 45,
      niveau: 'Junior',
      cap: '[TO BE CONFIRMED]',
      kitchen: 'Equipped kitchenette',
      tone: 'brass',
      desc: "Forty-five square metres, two separate beds. There is only one in the house, which means it goes fast."
    }],
    expEye: 'SPA · TABLE · POOL · GYM · SEMINARS',
    expH2: 'Five places, under one roof.',
    exps: [{
      idx: '01',
      title: 'The spa',
      photos: 'spa',
      arcCount: 4,
      fxEye: "Five cabins",
      sub: "Five cabins, a hammam, a sauna, and separate circuits for women and for men. Treatments designed for altitude: at 1,650 metres, the skin doesn't ask for what it asks for by the sea. No music in the corridors.",
      tone: 'sage'
    }, {
      idx: '02',
      title: 'The WHITE',
      photos: 'the-white',
      fxEye: "The table",
      sub: "Our restaurant. Middle Atlas cuisine with short supply chains, midday and evening. Three flavours per plate, a cooking we respect, a plate you finish. Open to non-residents by reservation.",
      tone: 'warm'
    }, {
      idx: '03',
      title: 'The pool',
      photos: 'piscine',
      fxEye: "Heated",
      sub: "Heated, which at 1,650 metres is not a detail: you get in during January instead of looking at it through the window.",
      tone: 'pool'
    }, {
      idx: '04',
      title: 'The gym',
      photos: 'sport',
      arcCount: 3,
      fxEye: "Glazed onto the water",
      sub: "Glazed onto the pool: two spin bikes, one elliptical, two treadmills, a leg press and a cable station. You watch the water while you run.",
      tone: 'stone'
    }, {
      idx: '05',
      title: 'The seminars',
      fxEye: "Seminars",
      sub: "A conference room, the suites above, The WHITE for meals, the spa at the end of the day. Everything is in the same building, and over a two-day seminar that changes just about everything.",
      tone: 'brass'
    }],
    destEye: 'IFRANE WITHIN REACH',
    destH2: 'Getting to us.',
    destCard: 'THE WHITE VALLEY · IFRANE',
    destBtn: 'Getting here',
    destRooms: 'Altitude',
    destFloors: 'Suites',
    destCoord: 'Distance',
    dests: [{
      city: 'Fès',
      region: 'Fès-Saïss Airport · 1 h',
      tone: 'warm',
      coord: '≈ 60 km',
      desc: "We imagine Ifrane far away. It's an hour from Fès airport."
    }, {
      city: 'Rabat',
      region: '3 h by road',
      tone: 'sage',
      coord: '≈ 250 km',
      desc: "Three hours from Rabat. The concierge arranges private transfers on request."
    }, {
      city: 'Casablanca',
      region: '4 h by road',
      tone: 'brass',
      coord: '≈ 330 km',
      desc: "Four hours from Casablanca. Mention it when booking and we'll take care of the rest."
    }],
    nlEye: 'THE VALLEY LETTERS',
    nlH2: 'The Valley Letters',
    nlDesc: "A story of the valley each quarter: the snow arriving, the table changing, the trails reopening. And access to our Confidential rates, reserved for subscribers. Voluntary sign-up, one-click unsubscribe. We send nothing else.",
    nlLabel: 'Your email address',
    nlPH: 'you@example.com',
    nlBtn: 'Receive the Letters',
    nlSent: '✓ Confirm your email',
    nlNote: 'Double opt-in: a confirmation email validates your sign-up.',
    nlConfirm: "An email has just gone out to your inbox. One click to confirm, and you will receive the next Letter from the Valley. Four a year, not one more.",
    ftTagline: 'High-altitude suite hotel · Ifrane, Middle Atlas',
    ftCopy: '© 2026 The White Valley · Ifrane. All rights reserved.',
    ftCols: [{
      t: 'Contact',
      l: [{
        x: 'N8, Ifrane, Middle Atlas, Morocco'
      }, {
        x: 'Phone: [TO BE CONFIRMED]'
      }, {
        x: 'WhatsApp: [TO BE CONFIRMED]'
      }, {
        x: 'contact@thewhitevalleys.ma',
        href: 'mailto:contact@thewhitevalleys.ma'
      }]
    }, {
      t: 'The Hotel',
      l: [{
        x: 'The Hotel',
        to: 'story'
      }, {
        x: 'The Suites',
        to: 'rooms'
      }, {
        x: 'The WHITE',
        to: 'experiences'
      }, {
        x: 'The Spa',
        to: 'experiences'
      }, {
        x: 'Seminars',
        to: 'experiences'
      }]
    }, {
      t: 'Practical',
      l: [{
        x: 'Getting here',
        to: 'contact'
      }, {
        x: 'Cancellation policy'
      }, {
        x: 'The Valley Letters',
        to: 'newsletter'
      }]
    }, {
      t: 'Legal',
      l: [{
        x: 'Legal notice'
      }, {
        x: 'Terms'
      }, {
        x: 'Privacy'
      }]
    }]
  }
};

/* ── Moteur de réservation ──
   Audit 28/08 · point 23 : le site pointait vers le-zenith-hotel-spa.hotelrunner.com,
   c'est-à-dire le moteur d'un AUTRE établissement — chaque tentative de réservation
   partait ailleurs. Le branchement a été retiré.
   Renseigner ci-dessous l'URL du moteur The White Valley pour le rebrancher ; tant
   qu'elle est vide, les parcours de réservation basculent sur l'e-mail de réservation. */
const BOOKING_ENGINE_URL = ''; /* TODO client : URL du moteur The White Valley */
const BOOKING_EMAIL = 'reservation@thewhitevalleys.ma';

/* Coordonnées — domaine corrigé en thewhitevalleys.ma (audit 28/08, point 25).
   Téléphone et WhatsApp non confirmés : laissés vides, donc non affichés. */
const CONTACT_PHONE = ''; /* TODO client : ex. '+212 5 35 00 00 00' */
const CONTACT_WHATSAPP = ''; /* TODO client : format international sans +, ex. '212600000000' */
const CONTACT_EMAIL = 'contact@thewhitevalleys.ma';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=33.5237066,-5.110433';

/* trip (facultatif) : { checkIn, checkOut, adults, children } */
function openBooking(lang = 'fr', trip = null) {
  const en = lang === 'en';
  if (BOOKING_ENGINE_URL) {
    let url = BOOKING_ENGINE_URL;
    if (trip) {
      const qs = new URLSearchParams({
        checkin_date: trip.checkIn,
        checkout_date: trip.checkOut,
        total_adult: String(trip.adults),
        total_child: String(trip.children)
      });
      url += (url.includes('?') ? '&' : '?') + qs.toString();
    }
    window.open(url, '_blank', 'noopener');
    return;
  }

  /* Relais temporaire : demande de séjour par e-mail, en attendant le moteur. */
  const subject = en ? 'Booking request — The White Valley' : 'Demande de réservation — The White Valley';
  const body = trip ? en ? `Check-in: ${trip.checkIn}\nCheck-out: ${trip.checkOut}\nAdults: ${trip.adults}\nChildren: ${trip.children}\n\n` : `Arrivée : ${trip.checkIn}\nDépart : ${trip.checkOut}\nAdultes : ${trip.adults}\nEnfants : ${trip.children}\n\n` : '';
  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ── Photos ── Générées depuis assets/photos/ (deux tailles : -800 et -1600).
   n = numéro du fichier, k = sujet (sert à composer le texte alternatif et la légende). */
/* Saisons : seuls l'hiver et l'été ont un visuel, ce sont les deux photos de la section
   « Nous rejoindre ». Printemps et automne restent en panneau dégradé, faute de photo. */
const PHOTOS_SAISON = {
  hiver: 'dest-hiver',
  ete: 'dest-ete'
};
const PHOTOS = {
  /* Tri client du 3 septembre : les vues écartées ne sont plus listées ici. Les fichiers
     restent dans assets/photos/, il suffit de remettre l'entrée pour les réafficher.
     Senior Grand lit : 2, 4 et 6 écartées · Senior Twin : 1 et 3 · Junior Grand lit :
     2, 3 et 4 · Junior Twin : 1, 4 et 6.                                              */
  "suite-senior-grand-lit": [["01", "chambre"], ["03", "salon"], ["05", "salon"], ["07", "bureau"], ["08", "bain"]],
  "suite-senior-twin": [["02", "chambre"], ["04", "salon"], ["05", "salon"], ["06", "cuisine"], ["07", "bureau"], ["08", "bain"]],
  "suite-junior-grand-lit": [["01", "chambre"], ["05", "cuisine"], ["06", "bureau"], ["07", "bain"], ["08", "bain"]],
  "suite-junior-twin": [["02", "chambre"], ["03", "chambre"], ["05", "salon"], ["07", "cuisine"], ["08", "bain"]],
  /* Spa — ordre client du 03/09 : le hammam ouvre la galerie ; les fichiers 02 et 01
     sont écartés (3e puis 2e vue, dans cet ordre de demande) ; les hammams 05 et 06
     suivent la couverture. */
  "spa": [["04", "hammam"], ["05", "hammam"], ["08", "cabine"], ["03", "cabine"], ["07", "linge"], ["06", "hammam"], ["09", "detente"], ["10", "ambiance"]],
  /* The WHITE — ordre client du 03/09 : la 4e vue passe en couverture ; les 2e et 6e
     sont écartées. */
  "the-white": [["04", "restaurant"], ["05", "restaurant"]],
  "piscine": [["01", "piscine"], ["02", "piscine"], ["03", "piscine"], ["04", "piscine"]],
  "sport": [["01", "sport"], ["02", "sport"], ["03", "sport"]]
  /* Le groupe « facade » n'est plus une galerie : « Nous rejoindre » affiche une
     photo par saison (dest-ete / dest-hiver), et facade-01 sert de fond à la
     section Les Lettres de la Vallée. */
};

/* ---------- Galerie ----------
   Carrousel maison : une piste en scroll-snap horizontal, donc le glissement tactile
   est natif et le clavier fonctionne sans code de capture.

   Défilement automatique (demande du 03/09), avec les garde-fous que l'audit impose
   déjà au bandeau (point 7) : bouton pause, arrêt au survol et au focus clavier,
   respect de prefers-reduced-motion. Il ne tourne que si le carrousel est visible à
   l'écran et que l'onglet est au premier plan — sinon nos neuf carrousels
   défileraient tous en même temps, hors de vue, en chargeant des images pour rien.

   variant='arch' : la photo prend une arche haute et sort de son cadre, le texte
   passe sur une carte de --surface. La forme fait le travail que faisait le cadre —
   tenir la photo, chaude et nocturne, à distance d'une palette qui devient blanche
   et bleue en hiver — sans importer de couleur qui casserait la saison.             */
function Gallery({
  slug,
  name,
  lang,
  eager = false,
  variant = '',
  autoplay = false,
  interval = 5200
}) {
  const photos = PHOTOS[slug] || [];
  const tr = T[lang] || T.fr;
  const [idx, setIdx] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [survol, setSurvol] = useState(false);
  const [visible, setVisible] = useState(false);
  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  /* La position de défilement est la source de vérité, pas l'état React : si le
     navigateur interrompt un défilement doux et raccroche à la vue la plus proche
     (ce que fait le scroll-snap), le compteur suit la photo réellement affichée.
     targetRef mémorise la vue visée pour que deux clics rapides avancent bien de deux. */
  const targetRef = useRef(0);
  const mouvementReduit = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const goTo = (j, instantane) => {
    const t = trackRef.current;
    if (!t) return;
    const n = Math.max(0, Math.min(photos.length - 1, j));
    targetRef.current = n;
    const doux = !instantane && !mouvementReduit();
    t.scrollTo({
      left: n * t.clientWidth,
      behavior: doux ? 'smooth' : 'auto'
    });
    setIdx(n); /* retour immédiat ; onScroll corrigera si le défilement s'arrête ailleurs */
  };
  const step = d => goTo(targetRef.current + d);

  /* ── Défilement automatique ── */
  const enPause = userPaused || survol;

  /* Ne tourner que si le carrousel est réellement à l'écran. */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(entries => entries.forEach(e => setVisible(e.isIntersecting)), {
      threshold: 0.35
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!autoplay || enPause || !visible || photos.length < 2 || mouvementReduit()) return;
    const t = setInterval(() => {
      /* Onglet en arrière-plan : on laisse passer le tour. */
      if (document.hidden) return;
      const suivant = (targetRef.current + 1) % photos.length;
      /* Retour à la première vue sans balayer toutes les autres. */
      goTo(suivant, suivant === 0);
    }, interval);
    return () => clearInterval(t);
  }, [autoplay, enPause, visible, photos.length, interval]);
  const isSuite = (slug || '').indexOf('suite') === 0;
  const legende = k => tr.photoK && tr.photoK[k] || '';
  const alt = k => isSuite ? `${name} — ${legende(k)}` : legende(k).charAt(0).toUpperCase() + legende(k).slice(1);
  const onScroll = () => {
    const t = trackRef.current;
    if (!t || !t.clientWidth) return;
    const n = Math.round(t.scrollLeft / t.clientWidth);
    if (n !== idx) setIdx(n);
    /* Au repos — glissement tactile compris — la cible rejoint la position réelle. */
    if (Math.abs(t.scrollLeft - n * t.clientWidth) < 2) targetRef.current = n;
  };
  const onKeyDown = e => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    }
  };
  const num = n => String(n).padStart(2, '0');
  if (!photos.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `gal${variant === 'arch' ? ' gal--arch' : ''}`,
    ref: wrapRef,
    role: "group",
    "aria-roledescription": tr.galRole,
    "aria-label": name,
    onMouseEnter: () => setSurvol(true),
    onMouseLeave: () => setSurvol(false),
    onFocus: () => setSurvol(true),
    onBlur: () => setSurvol(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "gal__frame"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "gal__track",
    ref: trackRef,
    onScroll: onScroll,
    onKeyDown: onKeyDown,
    tabIndex: 0,
    "aria-label": `${name} — ${photos.length} ${tr.galPhotos}`
  }, photos.map(([n, k], i) => /*#__PURE__*/React.createElement("li", {
    className: "gal__slide",
    key: n,
    "aria-label": `${i + 1} / ${photos.length}`
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/photos/${slug}-${n}-800.jpg`,
    srcSet: `assets/photos/${slug}-${n}-800.jpg 800w, assets/photos/${slug}-${n}-1600.jpg 1600w`,
    sizes: "(max-width: 900px) 100vw, 640px",
    width: "1600",
    height: "1200",
    loading: eager && i === 0 ? 'eager' : 'lazy',
    decoding: "async",
    alt: alt(k)
  })))), photos.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gal__nav gal__nav--prev",
    onClick: () => step(-1),
    disabled: idx === 0,
    "aria-label": tr.galPrev
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gal__nav gal__nav--next",
    onClick: () => step(1),
    disabled: idx === photos.length - 1,
    "aria-label": tr.galNext
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    className: "gal__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gal__count"
  }, num(idx + 1), " / ", num(photos.length)), /*#__PURE__*/React.createElement("span", {
    className: "gal__legend"
  }, legende(photos[idx] && photos[idx][1])), photos.length > 1 && /*#__PURE__*/React.createElement("span", {
    className: "gal__dots"
  }, photos.map(([n], i) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: n,
    className: i === idx ? 'is-active' : '',
    onClick: () => goTo(i),
    "aria-label": `${tr.galGo} ${i + 1}`,
    "aria-current": i === idx
  }))), autoplay && photos.length > 1 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gal__pause",
    onClick: () => setUserPaused(p => !p),
    "aria-pressed": userPaused,
    "aria-label": userPaused ? tr.galPlay : tr.galPause
  }, userPaused ? '▶' : '❚❚')));
}

/* ---------- Rail ----------
   Carrousel de cartes qui en montre plusieurs à la fois : trois sur desktop, deux en
   tablette, une sur mobile. Il avance d'une carte à la fois.

   Les points comptent les positions atteignables, pas les cartes : avec cinq cartes
   dont trois visibles, le défilement s'arrête à la troisième position (cartes 3, 4, 5
   à l'écran). Mettre cinq points donnerait deux points qui ne s'allumeraient jamais.
   Le nombre de points est donc mesuré, et il suit les paliers responsives.

   Mêmes garde-fous que la galerie : pause, arrêt au survol et au focus, respect de
   prefers-reduced-motion, et rien ne tourne hors de l'écran.                        */
function Rail({
  lang,
  label,
  autoplay = true,
  interval = 7000,
  children
}) {
  const tr = T[lang] || T.fr;
  const slides = React.Children.toArray(children);
  const [idx, setIdx] = useState(0);
  const [survol, setSurvol] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pas, setPas] = useState(0); /* largeur d'un pas : carte + écart */
  const [positions, setPositions] = useState(1);
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const targetRef = useRef(0);
  const mouvementReduit = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* Mesure du pas et du nombre de positions — recalculés au redimensionnement,
     puisque le nombre de cartes visibles change selon la largeur. */
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const mesurer = () => {
      const premiere = t.firstElementChild;
      if (!premiere) return;
      const cs = window.getComputedStyle(t);
      const ecart = parseFloat(cs.columnGap || cs.gap || '0') || 0;
      const p = premiere.getBoundingClientRect().width + ecart;
      if (!p) return;
      setPas(p);
      const visibles = Math.max(1, Math.round((t.clientWidth + ecart) / p));
      setPositions(Math.max(1, slides.length - visibles + 1));
    };
    mesurer();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(mesurer) : null;
    if (ro) ro.observe(t);
    window.addEventListener('resize', mesurer);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', mesurer);
    };
  }, [slides.length]);
  const goTo = (j, instantane) => {
    const t = trackRef.current;
    if (!t) return;
    const p = pas || t.clientWidth;
    const n = Math.max(0, Math.min(positions - 1, j));
    targetRef.current = n;
    const doux = !instantane && !mouvementReduit();
    t.scrollTo({
      left: n * p,
      behavior: doux ? 'smooth' : 'auto'
    });
    setIdx(n);
  };
  const step = d => goTo(targetRef.current + d);
  const onScroll = () => {
    const t = trackRef.current;
    const p = pas || t && t.clientWidth;
    if (!t || !p) return;
    const n = Math.min(positions - 1, Math.round(t.scrollLeft / p));
    if (n !== idx) setIdx(n);
    if (Math.abs(t.scrollLeft - n * p) < 2) targetRef.current = n;
  };
  const onKeyDown = e => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    }
  };
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(entries => entries.forEach(e => setVisible(e.isIntersecting)), {
      threshold: 0.3
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const enPause = survol; /* survol souris ou focus clavier */

  useEffect(() => {
    if (!autoplay || enPause || !visible || positions < 2 || mouvementReduit()) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      const suivant = (targetRef.current + 1) % positions;
      goTo(suivant); /* retour au début : deux pas seulement, un rembobinage court */
    }, interval);
    return () => clearInterval(t);
  }, [autoplay, enPause, visible, positions, interval, pas]);
  const num = n => String(n).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    className: "rail",
    ref: wrapRef,
    role: "group",
    "aria-roledescription": tr.galRole,
    "aria-label": label,
    onMouseEnter: () => setSurvol(true),
    onMouseLeave: () => setSurvol(false),
    onFocus: () => setSurvol(true),
    onBlur: () => setSurvol(false)
  }, /*#__PURE__*/React.createElement("ul", {
    className: "rail__track",
    ref: trackRef,
    onScroll: onScroll,
    onKeyDown: onKeyDown,
    tabIndex: 0,
    "aria-label": `${label} — ${slides.length}`
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("li", {
    className: "rail__slide",
    key: i,
    "aria-label": `${i + 1} / ${slides.length}`
  }, s))), /*#__PURE__*/React.createElement("div", {
    className: "rail__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rail__dots"
  }, Array.from({
    length: positions
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: i,
    className: i === idx ? 'is-active' : '',
    onClick: () => goTo(i),
    "aria-label": `${tr.railGo} ${i + 1}`,
    "aria-current": i === idx
  })))));
}

/* ---------- Placeholder imagery ----------
   Using CSS gradients + subtle noise pattern to evoke real photography
   without hand-drawing SVG illustrations. Monospace annotation indicates
   what real asset should be dropped in.                                  */
function Placeholder({
  label,
  tone = 'warm',
  aspect = '3/2',
  className = '',
  children
}) {
  const tones = {
    warm: 'linear-gradient(135deg, #3a2f24 0%, #1a130c 100%)',
    ivory: 'linear-gradient(135deg, #e8dfd0 0%, #c9bca4 100%)',
    sage: 'linear-gradient(135deg, #2a332a 0%, #1a201a 100%)',
    stone: 'linear-gradient(135deg, #2a2724 0%, #14110e 100%)',
    brass: 'linear-gradient(135deg, #4a3820 0%, #2a1e10 100%)',
    pool: 'linear-gradient(135deg, #1e3540 0%, #0e1a22 100%)'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `ph ${className}`,
    style: {
      background: tones[tone] || tones.warm,
      aspectRatio: aspect,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph__grain"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ph__stripes"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ph__label"
  }, label), children);
}

/* ---------- Panneau de réservation ---------- */
function HotelRunnerModal({
  open,
  onClose,
  lang
}) {
  const lc = lang === 'en' ? 'en' : 'fr';
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Chiffres confirmés par le client le 28/08 — ne pas réintroduire les données
     de l'ancien établissement (230 chambres, Casablanca, 4 étoiles). */
  const L = lc === 'en' ? {
    title: 'Book your stay',
    sub: 'The White Valley · Ifrane, Middle Atlas',
    note: 'Cancellation policy: [TO BE CONFIRMED]',
    feats: ['74 suites, from 28 to 65 m²', 'Spa, hammam and sauna · Heated pool', 'The WHITE, our restaurant'],
    cta: 'Book your stay',
    ctaSub: 'Direct booking · Official rates'
  } : {
    title: 'Réservez votre séjour',
    sub: 'The White Valley · Ifrane, Moyen Atlas',
    note: "Politique d'annulation : [À CONFIRMER]",
    feats: ['74 suites, de 28 à 65 m²', 'Spa, hammam et sauna · Piscine chauffée', 'The WHITE, notre restaurant'],
    cta: 'Réserver votre séjour',
    ctaSub: 'Réservation en direct · Tarifs officiels'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `bp-overlay${open ? ' is-open' : ''}`,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: `bp${open ? ' is-open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "bp__head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bp__close",
    onClick: onClose,
    "aria-label": (T[lc] || T.fr).aClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "bp__hero"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bp__eyebrow"
  }, "THE WHITE VALLEY"), /*#__PURE__*/React.createElement("h2", {
    className: "bp__title"
  }, L.title), /*#__PURE__*/React.createElement("p", {
    className: "bp__sub"
  }, L.sub), /*#__PURE__*/React.createElement("div", {
    className: "bp__rule"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("em", null, "\u2726"), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "bp__body"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "bp__feats"
  }, L.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement("span", {
    className: "bp__feat-dot"
  }, "\u2726"), f))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bp__book-btn",
    onClick: () => {
      onClose();
      openBooking(lc);
    }
  }, L.cta, /*#__PURE__*/React.createElement("span", null, "\u2197")), /*#__PURE__*/React.createElement("p", {
    className: "bp__book-sub"
  }, L.ctaSub)), /*#__PURE__*/React.createElement("div", {
    className: "bp__foot"
  }, /*#__PURE__*/React.createElement("p", null, L.note))));
}
/* ---------- Booking bar ----------
   Audit 28/08 · point 4 : le select fusionnait treize combinaisons chambres × adultes.
   Avec quatre suites et un couchage fixe par suite, cette combinatoire ne veut plus rien
   dire — remplacé par un compteur adultes / enfants, navigable au clavier.            */
function BookingBar({
  lang
}) {
  const lc = lang === 'en' ? 'en' : 'fr';
  const tr = T[lang] || T.fr;
  const pad = n => String(n).padStart(2, '0');
  const todayStr = () => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  const nextDay = s => {
    const d = new Date(s + 'T12:00:00');
    d.setDate(d.getDate() + 1);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(() => nextDay(todayStr()));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const inRef = useRef(null);
  const outRef = useRef(null);
  const guestsRef = useRef(null);
  const openPicker = ref => e => {
    e.preventDefault();
    if (!ref.current) return;
    try {
      ref.current.showPicker();
    } catch {
      ref.current.focus();
      ref.current.click();
    }
  };

  /* Fermeture du compteur au clic extérieur et à la touche Échap */
  useEffect(() => {
    if (!guestsOpen) return;
    const onDown = e => {
      if (guestsRef.current && !guestsRef.current.contains(e.target)) setGuestsOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setGuestsOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [guestsOpen]);
  const fmt = s => {
    try {
      return new Date(s + 'T12:00:00').toLocaleDateString(lc === 'en' ? 'en-GB' : 'fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return s;
    }
  };
  const aL = n => `${n} ${n === 1 ? lc === 'en' ? 'adult' : 'adulte' : lc === 'en' ? 'adults' : 'adultes'}`;
  const cL = n => `${n} ${n === 1 ? lc === 'en' ? 'child' : 'enfant' : lc === 'en' ? 'children' : 'enfants'}`;
  const handleSubmit = e => {
    e.preventDefault();
    openBooking(lc, {
      checkIn,
      checkOut,
      adults,
      children
    });
  };
  const Counter = ({
    label,
    value,
    min,
    max,
    onChange
  }) => /*#__PURE__*/React.createElement("div", {
    className: "bb__counter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb__counter-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "bb__counter-ctrl"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChange(Math.max(min, value - 1)),
    disabled: value <= min,
    "aria-label": `${tr.bbLess} — ${label}`
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "bb__counter-val",
    "aria-live": "polite"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChange(Math.min(max, value + 1)),
    disabled: value >= max,
    "aria-label": `${tr.bbMore} — ${label}`
  }, "+")));
  return /*#__PURE__*/React.createElement("form", {
    className: "bb",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb__field",
    onClick: openPicker(inRef),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb__label"
  }, tr.bbArrivee), /*#__PURE__*/React.createElement("span", {
    className: "bb__value"
  }, fmt(checkIn)), /*#__PURE__*/React.createElement("input", {
    ref: inRef,
    type: "date",
    className: "bb__input-hidden",
    value: checkIn,
    min: todayStr(),
    onChange: e => {
      setCheckIn(e.target.value);
      if (e.target.value >= checkOut) setCheckOut(nextDay(e.target.value));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "bb__sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb__field",
    onClick: openPicker(outRef),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb__label"
  }, tr.bbDepart), /*#__PURE__*/React.createElement("span", {
    className: "bb__value"
  }, fmt(checkOut)), /*#__PURE__*/React.createElement("input", {
    ref: outRef,
    type: "date",
    className: "bb__input-hidden",
    value: checkOut,
    min: nextDay(checkIn),
    onChange: e => setCheckOut(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "bb__sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: `bb__field bb__field--guests${guestsOpen ? ' is-open' : ''}`,
    ref: guestsRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bb__guests-trigger",
    onClick: () => setGuestsOpen(o => !o),
    "aria-expanded": guestsOpen,
    "aria-haspopup": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb__label"
  }, tr.bbVoyageurs), /*#__PURE__*/React.createElement("span", {
    className: "bb__value"
  }, aL(adults), children > 0 ? ` · ${cL(children)}` : '')), guestsOpen && /*#__PURE__*/React.createElement("div", {
    className: "bb__guests-pop"
  }, /*#__PURE__*/React.createElement(Counter, {
    label: tr.bbAdults,
    value: adults,
    min: 1,
    max: 6,
    onChange: setAdults
  }), /*#__PURE__*/React.createElement(Counter, {
    label: tr.bbChildren,
    value: children,
    min: 0,
    max: 4,
    onChange: setChildren
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bb__submit"
  }, tr.bbSubmit, /*#__PURE__*/React.createElement("span", {
    className: "bb__arrow"
  }, "\u2197")));
}
/* ---------- SplashScreen (Stroke variation) ---------- */
function SplashScreen({
  onDone
}) {
  const [phase, setPhase] = useState('in');
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), 3200);
    const t2 = setTimeout(() => onDone(), 4000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  const dust = Array.from({
    length: 10
  }).map((_, i) => ({
    left: (i * 37 + 13) % 100,
    dur: 3 + i % 5 * 0.6,
    delay: i * 0.4 % 3
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: `splash splash--${phase}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "splash__dust"
  }, dust.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      left: `${d.left}%`,
      animationDuration: `${d.dur}s`,
      animationDelay: `${d.delay}s`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "splash__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "splash__logo-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/Logo vec3.png",
    alt: "The White Valley",
    className: "splash__logo-img"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "splash__orn",
    width: "240",
    height: "18",
    viewBox: "0 0 240 18"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "9",
    x2: "105",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "135",
    y1: "9",
    x2: "230",
    y2: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 3 L122 9 L128 9 L123 12.5 L125 18 L120 14.5 L115 18 L117 12.5 L112 9 L118 9 Z"
  })), /*#__PURE__*/React.createElement("div", {
    className: "splash__tag"
  }, "La Parenth\xE8se Blanche d'Ifrane.")));
}

/* ---------- Season Toggle ---------- */
function SeasonToggle({
  season,
  onSeason,
  lang
}) {
  const tr = T[lang] || T.fr;
  return /*#__PURE__*/React.createElement("div", {
    className: "season-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: `season-toggle__btn${season === 'ete' ? ' season-toggle__btn--active' : ''}`,
    onClick: () => onSeason('ete'),
    "aria-label": tr.aEte
  }, "\u2600"), /*#__PURE__*/React.createElement("button", {
    className: `season-toggle__btn${season === 'hiver' ? ' season-toggle__btn--active' : ''}`,
    onClick: () => onSeason('hiver'),
    "aria-label": tr.aHiver
  }, "\u2744"));
}

/* ---------- Back to Top ---------- */
function BackToTop({
  lang
}) {
  const tr = T[lang] || T.fr;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("button", {
    className: "back-top",
    onClick: scrollTop,
    "aria-label": tr.aTop
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 14V4M9 4L4 9M9 4L14 9",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* ---------- Navigation ---------- */
function Nav({
  onBook,
  season,
  onSeason,
  lang,
  onLang
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState('');
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['rooms', 'story', 'experiences', 'instagram', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollTo = id => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `nav ${scrolled ? 'is-scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__lead"
  }, /*#__PURE__*/React.createElement("button", {
    className: `nav__menu ${menuOpen ? 'is-open' : ''}`,
    onClick: () => setMenuOpen(!menuOpen)
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__menu-lines"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("em", null, menuOpen ? (T[lang] || T.fr).close : (T[lang] || T.fr).menu))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nav__brand",
    onClick: e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__mark"
  }, "THE WHITE VALLEY"), /*#__PURE__*/React.createElement("div", {
    className: "nav__divider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__divider-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav__divider-gem"
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    className: "nav__divider-line"
  })), /*#__PURE__*/React.createElement("span", {
    className: "nav__sub"
  }, (T[lang] || T.fr).tagline)), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav__action nav__action--lang",
    onClick: () => onLang(lang === 'fr' ? 'en' : 'fr')
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__action-lines"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: lang === 'fr' ? 600 : 400,
      opacity: lang === 'fr' ? 1 : 0.5
    }
  }, "FR"), ' · ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: lang === 'en' ? 600 : 400,
      opacity: lang === 'en' ? 1 : 0.5
    }
  }, "EN"))), /*#__PURE__*/React.createElement("button", {
    className: "nav__action nav__action--book",
    onClick: onBook
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__action-lines"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("span", null, (T[lang] || T.fr).book)))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "nav__drawer",
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__drawer-inner",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__drawer-back"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav__close-btn",
    onClick: () => setMenuOpen(false),
    "aria-label": (T[lang] || T.fr).aCloseMenu
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3L17 17M17 3L3 17",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), (() => {
    const tr = T[lang] || T.fr;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nav__drawer-col"
    }, /*#__PURE__*/React.createElement("em", null, tr.dHotel), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('story')
    }, tr.dPresent), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dGallery), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('seasons')
    }, tr.dSeasons), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('newsletter')
    }, tr.dLocal)), /*#__PURE__*/React.createElement("div", {
      className: "nav__drawer-col"
    }, /*#__PURE__*/React.createElement("em", null, tr.dSejour), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dStd), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dSup), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dSuite), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dOffres)), /*#__PURE__*/React.createElement("div", {
      className: "nav__drawer-col"
    }, /*#__PURE__*/React.createElement("em", null, tr.dSpa), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('experiences')
    }, tr.dResto), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('experiences')
    }, tr.dBar), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('experiences')
    }, tr.dHammam), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('experiences')
    }, tr.dPool)), /*#__PURE__*/React.createElement("div", {
      className: "nav__drawer-col"
    }, /*#__PURE__*/React.createElement("em", null, tr.dBook), /*#__PURE__*/React.createElement("a", {
      onClick: onBook
    }, tr.dDispo), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('contact')
    }, tr.dContact), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('contact')
    }, tr.dEvents), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('contact')
    }, tr.dRoom)));
  })(), /*#__PURE__*/React.createElement("div", {
    className: "nav__drawer-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__drawer-taps"
  }, CONTACT_PHONE && /*#__PURE__*/React.createElement("a", {
    className: "nav__tap",
    href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}`
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 3h3l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2 2A16 16 0 014.5 5a2 2 0 012-2z",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })), (T[lang] || T.fr).navPhone), CONTACT_WHATSAPP && /*#__PURE__*/React.createElement("a", {
    className: "nav__tap",
    href: `https://wa.me/${CONTACT_WHATSAPP}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })), (T[lang] || T.fr).navWhats), /*#__PURE__*/React.createElement("a", {
    className: "nav__tap",
    href: `mailto:${CONTACT_EMAIL}`
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18v12H3z",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7l9 6 9-6",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })), CONTACT_EMAIL)), /*#__PURE__*/React.createElement("button", {
    className: "nav__drawer-book",
    onClick: () => {
      setMenuOpen(false);
      onBook();
    }
  }, (T[lang] || T.fr).book))))), /*#__PURE__*/React.createElement(SeasonToggle, {
    season: season,
    onSeason: onSeason,
    lang: lang
  }), /*#__PURE__*/React.createElement(BackToTop, {
    lang: lang
  }));
}

/* ---------- Hero ---------- */
function Hero({
  variant,
  season,
  lang,
  onBook
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const scenes = [{
    label: 'facade the white valley ifrane',
    tone: 'warm'
  }, {
    label: 'suite senior salon vue vallee',
    tone: 'brass'
  }, {
    label: 'spa piscine chauffee',
    tone: 'stone'
  }];
  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % scenes.length), 5000);
    return () => clearInterval(t);
  }, []);
  const tr = T[lang] || T.fr;
  if (variant === 'split') {
    return /*#__PURE__*/React.createElement("section", {
      className: "hero hero--split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero__text"
    }, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow__dot"
    }), tr.heroEyeSplit), /*#__PURE__*/React.createElement("h1", {
      className: "hero__h1"
    }, season === 'ete' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, tr.heroEteA), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", null, tr.heroEteB)), /*#__PURE__*/React.createElement("span", null, tr.heroEteC)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, tr.heroHivA), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", null, tr.heroHivB)), /*#__PURE__*/React.createElement("span", null, tr.heroHivC))), /*#__PURE__*/React.createElement("p", {
      className: "hero__lede"
    }, tr.heroLedeSplit), /*#__PURE__*/React.createElement("div", {
      className: "hero__cta hero__cta--single"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn--primary",
      onClick: onBook
    }, tr.heroCta1)), /*#__PURE__*/React.createElement("a", {
      href: "#experiences",
      className: "quote-link"
    }, tr.heroCta2, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("dl", {
      className: "hero__meta"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.heroMetaCat), /*#__PURE__*/React.createElement("dd", null, tr.heroMetaCatV)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.heroMetaTel), /*#__PURE__*/React.createElement("dd", null, tr.heroMetaTelV)))), /*#__PURE__*/React.createElement("div", {
      className: "hero__media"
    }, scenes.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `hero__slide ${i === imgIdx ? 'is-active' : ''}`
    }, /*#__PURE__*/React.createElement(Placeholder, {
      label: s.label,
      tone: s.tone,
      aspect: "auto"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "hero__media-meta"
    }, /*#__PURE__*/React.createElement("span", null, String(imgIdx + 1).padStart(2, '0'), " / ", String(scenes.length).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      className: "hero__dots"
    }, scenes.map((_, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      className: i === imgIdx ? 'is-active' : '',
      onClick: () => setImgIdx(i)
    }))))));
  }

  /* full-bleed cinematic */
  const heroSrc = {
    ete: {
      s: 'assets/HERO1-1920%20%C3%97%201080.jpg.jpeg',
      l: 'assets/HERO1-2560%20%C3%97%201440.jpg.jpeg'
    },
    hiver: {
      s: 'assets/HERO2-1920%20%C3%97%201080.jpg.jpeg',
      l: 'assets/HERO2-2560%20%C3%97%201440.jpg.jpeg'
    }
  };
  const img = heroSrc[season] || heroSrc.ete;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero--full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__slide is-active"
  }, /*#__PURE__*/React.createElement("img", {
    src: img.s,
    srcSet: `${img.s} 1920w, ${img.l} 2560w`,
    sizes: "100vw",
    alt: season === 'hiver' ? tr.heroAltHiver : tr.heroAltEte
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__full-content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow eyebrow--light"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.heroEyeFull), /*#__PURE__*/React.createElement("h1", {
    className: "hero__h1 hero__h1--light"
  }, season === 'ete' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, tr.heroEteA), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", null, tr.heroEteB)), /*#__PURE__*/React.createElement("span", null, tr.heroEteC)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, tr.heroHivA), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", null, tr.heroHivB)), /*#__PURE__*/React.createElement("span", null, tr.heroHivC))), /*#__PURE__*/React.createElement("p", {
    className: "hero__lede hero__lede--light"
  }, tr.heroLedeFull), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta hero__cta--full hero__cta--single"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    onClick: onBook
  }, tr.heroCta1)), /*#__PURE__*/React.createElement("a", {
    href: "#experiences",
    className: "quote-link quote-link--light"
  }, tr.heroCta2, " ", /*#__PURE__*/React.createElement("span", null, "\u2192"))));
}

/* Le second bandeau défilant (Marquee) a été retiré — audit 28/08, point 7 :
   deux bandeaux à trente secondes d'écart, dont un doublon partiel. On n'en garde qu'un. */

/* ---------- Intro block ---------- */
function Intro({
  lang
}) {
  const tr = T[lang] || T.fr;
  return /*#__PURE__*/React.createElement("section", {
    className: "intro",
    id: "story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro__left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.introEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display"
  }, tr.introH2)), /*#__PURE__*/React.createElement("div", {
    className: "intro__right"
  }, /*#__PURE__*/React.createElement("p", null, tr.introP1), /*#__PURE__*/React.createElement("p", null, tr.introP2), /*#__PURE__*/React.createElement("p", null, tr.introP3), /*#__PURE__*/React.createElement("a", {
    href: "#rooms",
    className: "link-arrow"
  }, tr.introLink, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")))));
}

/* Chemin d'une photo de PHOTOS : assets/photos/<slug>-<nn>-<largeur>.jpg */
function photoSrc(slug, n, w) {
  return `assets/photos/${slug}-${n}-${w}.jpg`;
}

/* ---------- BandPhotos ----------
   Chaque bande des suites montre plusieurs photos, pas une seule : elles s'enchaînent
   en fondu toutes les deux secondes (demande du 04/09). Empilées en absolute, une
   seule à la fois en opacité 1 — c'est le moteur qui gère l'ouverture/fermeture de la
   bande, ce cycle est indépendant et tourne aussi bien bande ouverte que fermée.
   Mêmes garde-fous que le reste du site : pause hors écran, au survol, au focus
   clavier, onglet en arrière-plan, et sous prefers-reduced-motion (le cycle ne
   démarre pas du tout, la première photo reste affichée). */
function BandPhotos({
  slug,
  name,
  interval = 2000,
  eager
}) {
  const photos = PHOTOS[slug] || [];
  const [idx, setIdx] = useState(0);
  const [pause, setPause] = useState(false);
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(entries => entries.forEach(e => setVisible(e.isIntersecting)), {
      threshold: 0.2
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const reduit = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (reduit || pause || !visible || photos.length < 2) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      setIdx(i => (i + 1) % photos.length);
    }, interval);
    return () => clearInterval(t);
  }, [pause, visible, photos.length, interval]);
  if (!photos.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fx__band-photos",
    ref: wrapRef,
    onMouseEnter: () => setPause(true),
    onMouseLeave: () => setPause(false),
    onFocus: () => setPause(true),
    onBlur: () => setPause(false)
  }, photos.map(([n, k], i) => /*#__PURE__*/React.createElement("img", {
    key: n,
    className: `fx__band-img${i === idx ? ' is-active' : ''}`,
    src: photoSrc(slug, n, 800),
    srcSet: `${photoSrc(slug, n, 800)} 800w, ${photoSrc(slug, n, 1600)} 1600w`,
    sizes: "(max-width: 900px) 100vw, 900px",
    alt: i === 0 ? name : '',
    loading: eager && i === 0 ? 'eager' : 'lazy',
    decoding: "async"
  })));
}

/* Monte le moteur de carrousels sur une section, et le remonte quand on franchit le
   palier de 900 px — le moteur ne lit ses attributs (data-slat, data-spread, data-radius)
   qu'au montage, alors que leurs valeurs changent entre desktop et mobile.
   `caler(el, petit)` pose ces attributs avant chaque montage. */
function useCarrousel(ref, caler, lang) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof TWVCarousels === 'undefined') return;
    const petit = () => window.innerWidth <= 900;
    if (caler) caler(el, petit());
    let detruire = TWVCarousels.init(el);
    let etait = petit();
    const onResize = () => {
      if (petit() === etait) return;
      etait = petit();
      detruire();
      if (caler) caler(el, etait);
      detruire = TWVCarousels.init(el);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      detruire();
    };
  }, [lang]);
}
function Rooms({
  onBook,
  lang
}) {
  const tr = T[lang] || T.fr;
  /* Audit 28/08 · points 8 à 11 : les quatre typologies affichées n'existaient pas dans
     l'inventaire. Nomenclature refaite (Junior/Senior × Grand lit/Twin), filtres retirés,
     badge « le plus choisi » et preuve sociale retirés : l'hôtel n'a pas ouvert.
     04/09 : la grille de cartes devient une rangée de bandes (mécanique « squeeze »).
     Chaque bande fait défiler toutes les photos de PHOTOS[slug] en fondu, dans l'ordre
     établi par le client (BandPhotos). */
  const ref = useRef(null);
  useCarrousel(ref, (el, petit) => {
    const fx = el.querySelector('[data-fx="squeeze"]');
    if (fx) fx.dataset.slat = petit ? '120px' : '86px';
  }, lang);
  return /*#__PURE__*/React.createElement("section", {
    className: "rooms",
    id: "rooms",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "rooms__head",
    "data-reveal": true
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.roomsEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display"
  }, tr.roomsH2), /*#__PURE__*/React.createElement("p", {
    className: "rooms__lede"
  }, tr.roomsLede))), /*#__PURE__*/React.createElement("div", {
    className: "fx fx--squeeze",
    "data-fx": "squeeze",
    "data-every": "5200",
    "data-slat": "86px",
    "data-reveal": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "fx__stage fx__stage--squeeze",
    "data-fxstage": true
  }, tr.rooms.map((r, i) => {
    const rang = String(i + 1).padStart(2, '0');
    return /*#__PURE__*/React.createElement("article", {
      className: "fx__band",
      "data-fxi": true,
      key: r.name
    }, /*#__PURE__*/React.createElement(BandPhotos, {
      slug: r.photos,
      name: r.name,
      eager: i === 0
    }), /*#__PURE__*/React.createElement("span", {
      className: "fx__band-scrim"
    }), /*#__PURE__*/React.createElement("div", {
      className: "fx__slat",
      "data-fxslat": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "fx__slat-name"
    }, r.name), /*#__PURE__*/React.createElement("span", {
      className: "fx__slat-size"
    }, r.size, " m\xB2")), /*#__PURE__*/React.createElement("div", {
      className: "fx__open",
      "data-fxopen": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "fx__open-eye"
    }, rang, " \u2014 ", r.niveau, " \xB7 ", r.size, " m\xB2"), /*#__PURE__*/React.createElement("h3", {
      className: "fx__open-title"
    }, r.name), /*#__PURE__*/React.createElement("p", {
      className: "fx__open-txt"
    }, r.desc), /*#__PURE__*/React.createElement("span", {
      className: "fx__open-meta"
    }, r.kitchen, " \xB7 ", tr.rCap, " ", r.cap, " \xB7 ", tr.rPriceNote)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "fx__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx__dots"
  }, tr.rooms.map((r, i) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fx__dot",
    "data-fxd": true,
    key: r.name,
    "aria-label": `${tr.fxDotSuite} ${i + 1}`
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--dark",
    onClick: onBook
  }, tr.rBook))));
}

/* ---------- Les cinq lieux, en arc ----------
   Audit 28/08 · points 13 à 16 : cinq lieux au lieu de trois — la piscine et la salle de
   sport cessent d'être des mentions en marge.
   04/09 : les cartes passent en arc sur fond --ink. Neuf vues pour cinq lieux — les deux
   premières photos de chaque lieu photographié, plus la carte de faits des séminaires,
   qui n'ont aucune photo. Plusieurs vues partagent la même légende : elles portent
   data-cap, et il n'y a donc que cinq blocs de légende.                               */
function Experiences({
  lang
}) {
  const tr = T[lang] || T.fr;
  const ref = useRef(null);

  /* L'arc se resserre sur petit écran : rayon 560, ouverture 18° (handoff). */
  useCarrousel(ref, (el, petit) => {
    const arc = el.querySelector('[data-fx="arc"]');
    if (!arc) return;
    arc.dataset.spread = petit ? '18' : '13';
    arc.dataset.radius = petit ? '560' : '950';
  }, lang);

  /* Deux vues par lieu photographié, prises dans l'ordre du client — sauf le spa et
     The WHITE (arcCount:4, demande du 04/09), qui en montrent quatre. Pour The WHITE,
     les quatre entrées de PHOTOS['the-white'] sont déjà toute la sélection retenue :
     aucune photo supplémentaire à produire, seul le nombre affiché augmente. */
  const vues = [];
  tr.exps.forEach((it, cap) => {
    const photos = it.photos ? PHOTOS[it.photos] || [] : [];
    if (!photos.length) {
      vues.push({
        cap,
        it,
        faits: true
      });
      return;
    }
    photos.slice(0, it.arcCount || 2).forEach(([n, k]) => vues.push({
      cap,
      it,
      slug: it.photos,
      n,
      k
    }));
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "exp exp--arc",
    id: "experiences",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp__head",
    "data-reveal": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow eyebrow--light"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.expEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display h-display--light"
  }, tr.expH2)), /*#__PURE__*/React.createElement("div", {
    className: "fx fx--arc",
    "data-fx": "arc",
    "data-every": "2000",
    "data-spread": "13",
    "data-radius": "950",
    "data-tone": "dark",
    "data-reveal": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "fx__stage fx__stage--arc",
    "data-fxstage": true,
    tabIndex: 0,
    "aria-label": tr.fxLieuxAria
  }, vues.map((v, i) => /*#__PURE__*/React.createElement("figure", {
    className: `fx__view${v.faits ? ' fx__view--facts' : ''}`,
    "data-fxi": true,
    "data-cap": v.cap,
    key: v.faits ? 'facts' : `${v.slug}-${v.n}`
  }, v.faits ? /*#__PURE__*/React.createElement("ul", {
    className: "fx__facts"
  }, tr.seminaireFacts.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f))) : /*#__PURE__*/React.createElement("img", {
    src: photoSrc(v.slug, v.n, 800),
    srcSet: `${photoSrc(v.slug, v.n, 800)} 800w, ${photoSrc(v.slug, v.n, 1600)} 1600w`,
    sizes: "240px",
    alt: `${v.it.title} — ${tr.photoK && tr.photoK[v.k] || ''}`,
    loading: i === 0 ? 'eager' : 'lazy',
    decoding: "async"
  })))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fx__arrow fx__arrow--arc fx__arrow--prev",
    "data-fxp": true,
    "aria-label": tr.fxViewPrev
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 5l-7 7 7 7"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fx__arrow fx__arrow--arc fx__arrow--next",
    "data-fxn": true,
    "aria-label": tr.fxViewNext
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 5l7 7-7 7"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fx__caps"
  }, tr.exps.map(it => /*#__PURE__*/React.createElement("div", {
    className: "fx__cap",
    "data-fxc": true,
    key: it.idx
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx__cap-eye"
  }, it.idx, " \u2014 ", it.fxEye), /*#__PURE__*/React.createElement("h3", {
    className: "fx__cap-title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "fx__cap-txt"
  }, it.sub)))), /*#__PURE__*/React.createElement("div", {
    className: "fx__bar fx__bar--arc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx__dots"
  }, vues.map((v, i) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fx__dot",
    "data-fxd": true,
    key: v.faits ? 'd-facts' : `d-${v.slug}-${v.n}`,
    "aria-label": `${tr.fxDotVue} ${i + 1}`
  }))))));
}

/* ---------- Localisation & coordonnées ---------- */
function Destinations({
  lang,
  season
}) {
  const tr = T[lang] || T.fr;
  const [sel, setSel] = useState(0);
  const dests = tr.dests;
  const d = dests[sel];
  return /*#__PURE__*/React.createElement("section", {
    className: "dest",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dest__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dest__left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dest__head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.destEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display"
  }, tr.destH2)), /*#__PURE__*/React.createElement("div", {
    className: "dest__list"
  }, dests.map((x, i) => /*#__PURE__*/React.createElement("button", {
    key: x.city,
    className: `dest__row ${i === sel ? 'is-active' : ''}`,
    onMouseEnter: () => setSel(i),
    onClick: () => setSel(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dest__num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "dest__city"
  }, x.city), /*#__PURE__*/React.createElement("span", {
    className: "dest__region"
  }, x.region), /*#__PURE__*/React.createElement("span", {
    className: "dest__arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("a", {
    href: MAPS_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "link-arrow dest__btn"
  }, tr.destBtn, " ", /*#__PURE__*/React.createElement("span", null, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "dest__preview"
  }, /*#__PURE__*/React.createElement("img", {
    className: "dest__photo",
    src: `assets/photos/dest-${season === 'hiver' ? 'hiver' : 'ete'}-800.jpg`,
    srcSet: `assets/photos/dest-${season === 'hiver' ? 'hiver' : 'ete'}-800.jpg 800w, assets/photos/dest-${season === 'hiver' ? 'hiver' : 'ete'}-1600.jpg 1600w`,
    sizes: "(max-width: 1100px) 90vw, 600px",
    width: "1600",
    height: "1200",
    loading: "lazy",
    decoding: "async",
    alt: season === 'hiver' ? tr.destAltHiver : tr.destAltEte
  }), /*#__PURE__*/React.createElement("div", {
    className: "dest__card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "dest__card-eyebrow"
  }, tr.destCard), /*#__PURE__*/React.createElement("h3", null, d.desc)), /*#__PURE__*/React.createElement("dl", {
    className: "dest__stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.destRooms), /*#__PURE__*/React.createElement("dd", null, "1\u202F650\xA0m")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.destCoord), /*#__PURE__*/React.createElement("dd", null, d.coord)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.destFloors), /*#__PURE__*/React.createElement("dd", null, "74")))))));
}

/* Le bloc « La maison, par ceux qui la tiennent » a été retiré — audit 28/08, point 18 :
   citations anonymes, et un chef qui dit diriger la cuisine « depuis l'ouverture » alors que
   l'hôtel n'a pas ouvert. Arbitrage client du 28/08 : suppression. Le bloc pourra revenir
   avec de vraies signatures, ou avec de vrais avis clients. */

/* ---------- Newsletter ---------- */
function Newsletter({
  lang
}) {
  const tr = T[lang] || T.fr;
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setSent(false);
    setEmail('');
  }, [lang]);
  return /*#__PURE__*/React.createElement("section", {
    className: "nl",
    id: "newsletter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nl__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.nlEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display h-display--md"
  }, tr.nlH2), /*#__PURE__*/React.createElement("p", {
    className: "nl__desc"
  }, tr.nlDesc)), /*#__PURE__*/React.createElement("form", {
    className: "nl__form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, tr.nlLabel), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: tr.nlPH,
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    disabled: sent
  }, sent ? tr.nlSent : tr.nlBtn), /*#__PURE__*/React.createElement("p", {
    className: `nl__note${sent ? ' nl__note--sent' : ''}`,
    role: sent ? 'status' : undefined
  }, sent ? tr.nlConfirm : tr.nlNote))));
}

/* ---------- Instagram ----------
   Composant non monté par <App /> : il n'apparaît pas sur le site, et l'audit du 28/08
   ne le couvre donc pas. Ses identifiants sont encore ceux de l'ancienne marque
   (@LeZenithCasablanca) : à mettre à jour — ou à supprimer — avant toute réactivation. */
function Instagram() {
  /* 5 slots — remplacer chaque <div className="ig__img"> par une vraie <img src="..." /> */
  return /*#__PURE__*/React.createElement("section", {
    className: "ig",
    id: "instagram"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__info"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "ig__icon",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "62",
    height: "62",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "16",
    width: "32",
    height: "32",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "32",
    x2: "16",
    y2: "32",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "48",
    y1: "32",
    x2: "63",
    y2: "32",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "32",
    y1: "1",
    x2: "32",
    y2: "16",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "32",
    y1: "48",
    x2: "32",
    y2: "63",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "16",
    y2: "16",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "63",
    y1: "1",
    x2: "48",
    y2: "16",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "63",
    x2: "16",
    y2: "48",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "63",
    y1: "63",
    x2: "48",
    y2: "48",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "ig__title"
  }, "Inspir\xE9", /*#__PURE__*/React.createElement("br", null), "par vous"), /*#__PURE__*/React.createElement("div", {
    className: "ig__handles"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ig__handle"
  }, "@LeZenithCasablanca"), /*#__PURE__*/React.createElement("p", {
    className: "ig__hash"
  }, "#LeZenithSpa"), /*#__PURE__*/React.createElement("p", {
    className: "ig__hash"
  }, "#ZenithCasablanca"))), /*#__PURE__*/React.createElement("div", {
    className: "ig__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__col ig__col--1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__ph"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__img"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ig__col ig__col--2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__ph"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__img"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig__ph ig__ph--badge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ig__insta-badge"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "20",
    height: "20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "ig__col ig__col--3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__ph"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__img"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig__ph"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__img"
  }))))));
}

/* ---------- Footer ---------- */
function Footer({
  lang,
  season
}) {
  const tr = T[lang] || T.fr;
  return /*#__PURE__*/React.createElement("footer", {
    className: "ft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft__brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/Logo vec.png",
    height: "200",
    alt: "The White Valley",
    className: "ft__logo-img",
    style: {
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", null, tr.ftTagline)), /*#__PURE__*/React.createElement("div", {
    className: "ft__cols"
  }, tr.ftCols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t
  }, /*#__PURE__*/React.createElement("h4", null, c.t), c.l.map(it => {
    if (it.to) return /*#__PURE__*/React.createElement("a", {
      key: it.x,
      href: `#${it.to}`,
      onClick: e => {
        e.preventDefault();
        const el = document.getElementById(it.to);
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, it.x);
    if (it.href) return /*#__PURE__*/React.createElement("a", {
      key: it.x,
      href: it.href
    }, it.x);
    return /*#__PURE__*/React.createElement("span", {
      key: it.x,
      className: "ft__static"
    }, it.x);
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "ft__bottom"
  }, /*#__PURE__*/React.createElement("span", null, tr.ftCopy), /*#__PURE__*/React.createElement("span", {
    className: "ft__dests"
  }, /*#__PURE__*/React.createElement("span", null, "Ifrane"), /*#__PURE__*/React.createElement("em", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Moyen Atlas"), /*#__PURE__*/React.createElement("em", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Maroc")), /*#__PURE__*/React.createElement("span", null, "FR \xB7 EN")));
}

/* ---------- Bandeau de réassurance (unique) ----------
   Audit 28/08 · points 5 et 7 : un seul bandeau, six mentions toutes confirmées, et un
   contrôle de pause — un défilement automatique doit pouvoir être arrêté (accessibilité).
   Il se met aussi en pause au survol et au focus clavier (voir styles.css).            */
function Reperes({
  lang
}) {
  const tr = T[lang] || T.fr;
  const items = tr.reperes;
  const [paused, setPaused] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `reperes${paused ? ' is-paused' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "reperes__track"
  }, [...items, ...items, ...items].map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "reperes__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "reperes__gem"
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    className: "reperes__txt"
  }, it)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "reperes__pause",
    onClick: () => setPaused(p => !p),
    "aria-pressed": paused,
    "aria-label": paused ? tr.reperesPlay : tr.reperesPause
  }, paused ? '▶' : '❚❚'));
}

/* ---------- Dernier appel ---------- */
function DernierAppel({
  lang,
  onBook
}) {
  const tr = T[lang] || T.fr;
  return /*#__PURE__*/React.createElement("section", {
    className: "call"
  }, /*#__PURE__*/React.createElement("div", {
    className: "call__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "call__title h-display"
  }, tr.callTitle), /*#__PURE__*/React.createElement("div", {
    className: "call__cta call__cta--single"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    onClick: onBook
  }, tr.heroCta1)), /*#__PURE__*/React.createElement("a", {
    href: "#experiences",
    className: "quote-link"
  }, tr.heroCta2, " ", /*#__PURE__*/React.createElement("span", null, "\u2192"))));
}

/* ---------- Quatre saisons ---------- */
function Saisons({
  lang,
  onBook
}) {
  const tr = T[lang] || T.fr;
  /* 04/09 : la grille de quatre cartes devient un flux 3D — la saison centrale en
     volume, les voisines tournées et floutées. Hiver et été portent une photo ;
     printemps et automne n'en ont aucune et gardent un panneau dégradé. */
  const ref = useRef(null);
  useCarrousel(ref, null, lang);
  return /*#__PURE__*/React.createElement("section", {
    className: "seasons",
    id: "seasons",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "seasons__head",
    "data-reveal": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.saisonsEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display"
  }, tr.saisonsH2)), /*#__PURE__*/React.createElement("div", {
    className: "fx fx--flow",
    "data-fx": "flow",
    "data-every": "4600",
    "data-reveal": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "fx__stage fx__stage--flow",
    "data-fxstage": true,
    tabIndex: 0,
    "aria-label": tr.fxSaisonsAria
  }, tr.saisons.map((s, i) => {
    const base = PHOTOS_SAISON[s.k];
    return /*#__PURE__*/React.createElement("article", {
      className: `fx__card fx__card--${s.k}`,
      "data-fxi": true,
      key: s.k
    }, base ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      className: "fx__card-img",
      src: `assets/photos/${base}-800.jpg`,
      srcSet: `assets/photos/${base}-800.jpg 800w, assets/photos/${base}-1600.jpg 1600w`,
      sizes: "(max-width: 900px) 78vw, 410px",
      alt: s.name,
      loading: i === 0 ? 'eager' : 'lazy',
      decoding: "async"
    }), /*#__PURE__*/React.createElement("span", {
      className: "fx__card-scrim"
    })) : /*#__PURE__*/React.createElement("span", {
      className: "fx__card-grain"
    }), /*#__PURE__*/React.createElement("div", {
      className: "fx__card-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fx__card-txt"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "fx__card-name"
    }, s.name), /*#__PURE__*/React.createElement("span", {
      className: "fx__card-period"
    }, s.period), /*#__PURE__*/React.createElement("p", {
      className: "fx__card-p"
    }, s.txt), /*#__PURE__*/React.createElement("span", {
      className: "fx__card-sign"
    }, s.name.toLowerCase(), " \xB7 ", tr.fxLieu))));
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fx__arrow fx__arrow--prev",
    "data-fxp": true,
    "aria-label": tr.fxPrev
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 5l-7 7 7 7"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fx__arrow fx__arrow--next",
    "data-fxn": true,
    "aria-label": tr.fxNext
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 5l7 7-7 7"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fx__bar fx__bar--flow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx__dots"
  }, tr.saisons.map(s => /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fx__dot",
    "data-fxd": true,
    key: s.k,
    "aria-label": s.name
  }))), /*#__PURE__*/React.createElement("span", {
    className: "fx__rail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx__rail-fill",
    "data-fxbar": true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "seasons__cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    onClick: onBook
  }, tr.saisonsBtn)));
}
Object.assign(window, {
  SplashScreen,
  Rail,
  WhiteValleyLogo,
  Nav,
  Hero,
  BookingBar,
  HotelRunnerModal,
  Intro,
  Rooms,
  Experiences,
  Destinations,
  Newsletter,
  Instagram,
  Footer,
  Placeholder,
  Reperes,
  DernierAppel,
  Saisons,
  openBooking
});
