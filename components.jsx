/* The White Valley — modernized components */

/* ── Logo SVG complet ── */
function WhiteValleyLogo({ height = 80, variant = 'dark' }) {
  const isWinter = variant === 'winter';
  const isLight  = variant === 'light';
  const green  = isWinter ? '#daeefa' : '#0c2816';
  const green2 = isWinter ? '#b8ddf0' : '#1a4d28';
  const brass  = isWinter ? '#eaf4fb' : '#e8e1d6';
  const brassL = isWinter ? '#7ec4e8' : '#c9a060';
  const text   = (isWinter || isLight) ? '#ffffff' : '#1a1208';
  const sub    = isWinter ? '#7ec4e8' : (isLight ? '#c9a060' : '#e8e1d6');

  /* viewBox portrait : 200 × 140 — illustration + texte groupés */
  return (
    <svg viewBox="0 0 200 140" height={height} xmlns="http://www.w3.org/2000/svg" style={{ display:'block' }}>

      {/* ── Montagnes ── */}
      {/* pic central */}
      <polygon points="100,8  128,52 72,52"  fill={green}/>
      {/* pic gauche */}
      <polygon points="60,20  84,52 36,52"   fill={green2}/>
      {/* pic droit */}
      <polygon points="140,20 164,52 116,52" fill={green2}/>

      {/* ── Sapins gauche ── */}
      {/* grand sapin */}
      <polygon points="14,52 26,24 38,52"  fill={green}/>
      <polygon points="10,52 22,30 34,52"  fill={green}/>
      {/* petit sapin */}
      <polygon points="30,52 39,34 48,52"  fill={green2}/>
      <rect x="20" y="52" width="7" height="6" rx="1" fill={green}/>

      {/* ── Sapins droite ── */}
      <polygon points="162,52 174,24 186,52" fill={green}/>
      <polygon points="166,52 178,30 190,52" fill={green}/>
      <polygon points="152,52 161,34 170,52" fill={green2}/>
      <rect x="173" y="52" width="7" height="6" rx="1" fill={green}/>

      {/* ── Riad / bâtiment ── */}
      {/* base */}
      <rect x="60" y="38" width="80" height="16" fill={brass}/>
      {/* bandeau haut */}
      <rect x="58" y="35" width="84" height="5"  fill={brass}/>
      {/* arc central pointu */}
      <path d="M92,54 L92,43 Q100,34 108,43 L108,54 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
      {/* pointe de l'arc */}
      <path d="M96,43 Q100,38 104,43" fill="none" stroke={brassL} strokeWidth="1.4"/>
      {/* arc latéral gauche */}
      <path d="M68,54 L68,46 Q74,41 80,46 L80,54" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
      {/* arc latéral droit */}
      <path d="M120,54 L120,46 Q126,41 132,46 L132,54" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>

      {/* ── THE WHITE VALLEY ── */}
      <text x="100" y="75"
            fontFamily="Georgia,'Times New Roman',serif"
            fontWeight="700" fontSize="15" letterSpacing="2.5"
            fill={text} textAnchor="middle">THE WHITE VALLEY</text>

      {/* ── Ligne décorative + ornement ── */}
      <line x1="20"  y1="83" x2="82"  y2="83" stroke={sub} strokeWidth="0.8"/>
      <text x="100" y="87" fontFamily="serif" fontSize="8" fill={sub} textAnchor="middle">✦</text>
      <line x1="118" y1="83" x2="180" y2="83" stroke={sub} strokeWidth="0.8"/>

      {/* ── Tagline ── */}
      <text x="100" y="100"
            fontFamily="Georgia,serif" fontStyle="italic"
            fontSize="9.5" fill={sub} textAnchor="middle">La Parenthèse Blanche d'Ifrane</text>
    </svg>
  );
}
const { useState, useEffect, useRef } = React;

/* ── Translations ──
   Rédactionnel validé — TWV_Audit-et-Contenus_v2 (DO FACTORY, 28/08/2026).
   Les textes FR sont repris mot pour mot du document : ne pas reformuler à l'intégration.
   Tout ce qui reste entre crochets attend une réponse client et ne doit pas partir en ligne. */
const T = {
  fr: {
    menu:'Menu', close:'Fermer', tagline:"La Parenthèse Blanche d'Ifrane.", book:'Réserver',
    dHotel:"L'Hôtel", dPresent:'Une parenthèse', dGallery:'Les suites', dSeasons:'Quatre saisons', dLocal:'Les Lettres de la Vallée',
    dSejour:'Les Suites', dStd:'Suite Senior Grand lit', dSup:'Suite Senior Twin', dSuite:'Suite Junior Grand lit', dOffres:'Suite Junior Twin',
    dSpa:'Les cinq lieux', dResto:'Le spa', dBar:'The WHITE', dHammam:'Piscine & salle de sport', dPool:'Les séminaires',
    dBook:'Réserver', dDispo:'Réserver votre séjour', dContact:'Nous rejoindre', dEvents:'Devis séminaire', dRoom:"Plan d'accès",
    reperes:['74 suites, de 28 à 65 m²','Spa, hammam et sauna','The WHITE, notre restaurant','Piscine chauffée','Salle de sport','Salle de conférence'],
    reperesPause:'Mettre le bandeau en pause', reperesPlay:'Relancer le bandeau',
    aClose:'Fermer', aCloseMenu:'Fermer le menu', aTop:'Retour en haut',
    aEte:'Été', aHiver:'Hiver',
    galRole:'carrousel', galPrev:'Photo précédente', galNext:'Photo suivante', galGo:'Aller à la photo', galPhotos:'photos',
    galPause:'Mettre le carrousel en pause', galPlay:'Relancer le carrousel', railGo:'Aller au lieu',
    photoK:{ chambre:'la chambre', salon:'le salon', cuisine:'la kitchenette', bain:'la salle de bain',
             bureau:"l'espace de travail", cabine:'une cabine de soin', hammam:'le hammam',
             linge:'le linge et les savons', detente:'les transats', ambiance:'le spa',
             restaurant:'la façade de The WHITE', piscine:'la piscine chauffée',
             sport:'la salle de sport', facade:'la façade, de nuit' },
    seminaireFacts:['Une salle de conférence','74 suites, dont 41 en lits séparés','Restauration sur place, trois repas','Spa et piscine en fin de journée'],
    heroAltEte:"La résidence The White Valley à Ifrane, façade éclairée à la tombée de la nuit.",
    heroAltHiver:'La résidence The White Valley à Ifrane sous la neige.',
    destAltEte:'La façade du restaurant The WHITE, éclairée de nuit.',
    destAltHiver:'La façade du restaurant The WHITE sous la neige, de nuit.',
    callTitle:'Votre parenthèse commence ici.',
    navPhone:'Téléphone', navWhats:'WhatsApp',
    saisonsEye:'QUATRE SAISONS', saisonsH2:'Quatre saisons, une signature', saisonsBtn:'Quand venir',
    saisons:[
      {name:'Hiver',period:'décembre à mars',tone:'stone',txt:"Entre −5 °C la nuit et 8 °C le jour. La neige vient trois à six fois par hiver. Feu de cheminée, forêt de cèdres silencieuse, ski à vingt minutes quand la pente est blanche."},
      {name:'Printemps',period:'avril à mai',tone:'sage',txt:"La meilleure saison pour marcher. Les premières herbes sauvages, les amandes encore vertes, une lumière nette pour la photo. Notre saison favorite, en confidence."},
      {name:'Été',period:'juin à septembre',tone:'warm',txt:"Le refuge climatique. 14 °C la nuit, 28 °C le jour pendant que les villes étouffent. Les soirées se prennent dehors, la piscine reste chauffée."},
      {name:'Automne',period:'octobre à novembre',tone:'brass',txt:"Les forêts virent au cuivre, l'air sèche. Très peu de monde en semaine. La saison idéale pour une retraite ou un long week-end à deux, sans concurrence d'agenda."},
    ],
    heroEyeSplit:'THE WHITE VALLEY · IFRANE · MOYEN ATLAS',
    heroEteA:"L'hôtel de suites", heroEteB:"d'altitude", heroEteC:'à Ifrane.',
    heroHivA:"L'hôtel de suites", heroHivB:"d'altitude", heroHivC:'à Ifrane.',
    heroLedeSplit:"À 1 650 mètres, la vie reprend son souffle. 74 suites, à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver.",
    heroCta1:'Réserver votre séjour', heroCta2:'Vous organisez un séminaire ? Demander un devis',
    heroMetaCat:'Format', heroMetaCatV:"Hôtel de suites d'altitude · 74 suites", heroMetaTel:'Altitude', heroMetaTelV:'1 650 m · Moyen Atlas',
    heroEyeFull:'THE WHITE VALLEY · IFRANE · MOYEN ATLAS',
    heroLedeFull:'À 1 650 mètres, la vie reprend son souffle.',
    introEye:"L'HÔTEL", introH2:'Une parenthèse dans la vallée.',
    introP1:"Ici, on ne réserve pas une chambre. On réserve une suite : de la place pour poser ses affaires, de quoi s'asseoir ailleurs que sur le lit, et de quoi rester plus d'une nuit sans que le séjour se mette à ressembler à un transit.",
    introP2:"Autour, ce qu'un bon hôtel sait faire. Le hammam, le sauna, les cinq cabines de soin. The WHITE au rez-de-chaussée, midi et soir. La piscine chauffée, la salle de sport ouverte tôt. Vous activez ce que vous voulez. Le reste se fait oublier.",
    introP3:"Ifrane est à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver.",
    introLink:"Découvrir l'hôtel",
    bbArrivee:'ARRIVÉE', bbDepart:'DÉPART', bbVoyageurs:'VOYAGEURS',
    bbAdults:'Adultes', bbChildren:'Enfants', bbLess:'Retirer', bbMore:'Ajouter',
    bbSubmit:'Vérifier disponibilité', bbLocale:'fr-FR',
    roomsEye:'LES SUITES', roomsH2:'74 suites, quatre formats, de 28 à 65 m².',
    roomsLede:"Le choix tient en deux questions. De combien d'espace avez-vous besoin, et dormez-vous dans le même lit. Junior ou Senior pour le niveau, Grand lit ou Twin pour le couchage, et la surface qui va avec : 28, 45 ou 65 m². Le reste ne change pas d'une suite à l'autre : la même literie, la même salle de bain, la même vue sur la vallée, la même attention au petit matin.",
    rSurface:'Surface', rCap:'Capacité', rKitchen:'Cuisine', rPriceNote:'Tarifs sur demande',
    rBook:'Réserver',
    rooms:[
      {name:'Suite Senior Grand lit',photos:'suite-senior-grand-lit',size:65,cap:'[À CONFIRMER]',kitchen:'Kitchenette équipée',tone:'warm',desc:"Soixante-cinq mètres carrés, un grand lit, un vrai salon. Du rangement, et de quoi rester à l'intérieur quand il neige depuis deux jours. Ce qu'on choisit pour une semaine à deux."},
      {name:'Suite Senior Twin',photos:'suite-senior-twin',size:65,cap:'[À CONFIRMER]',kitchen:'Kitchenette équipée',tone:'sage',desc:"Le même volume, deux lits séparés. Le format le plus répandu de la maison, quarante suites sur soixante-quatorze."},
      {name:'Suite Junior Grand lit',photos:'suite-junior-grand-lit',size:28,cap:'[À CONFIRMER]',kitchen:'Kitchenette équipée',tone:'stone',desc:"Vingt-huit mètres carrés, un grand lit, un coin salon. Notre format le plus compact, pour deux ou trois nuits à deux."},
      {name:'Suite Junior Twin',photos:'suite-junior-twin',size:45,cap:'[À CONFIRMER]',kitchen:'Kitchenette équipée',tone:'brass',desc:"Quarante-cinq mètres carrés, deux lits séparés. Il n'y en a qu'une dans la maison, ce qui veut dire qu'elle part vite."},
    ],
    expEye:'SPA · TABLE · PISCINE · SPORT · SÉMINAIRES', expH2:'Cinq lieux, sous le même toit.',
    exps:[
      {idx:'01',title:'Le spa',photos:'spa',sub:"Cinq cabines, un hammam, un sauna, et des parcours séparés pour les femmes et pour les hommes. Des soins pensés pour l'altitude : à 1 650 mètres, la peau ne demande pas ce qu'elle demande au bord de la mer. Pas de musique dans les couloirs.",tone:'sage'},
      {idx:'02',title:'The WHITE',photos:'the-white',sub:"Notre restaurant. Une cuisine du Moyen Atlas en produits courts, midi et soir. Trois saveurs par assiette, une cuisson qu'on respecte, une assiette qu'on finit. Ouvert aux non-résidents sur réservation.",tone:'warm'},
      {idx:'03',title:'La piscine',photos:'piscine',sub:"Chauffée, ce qui à 1 650 mètres n'est pas un détail : on y entre en janvier au lieu de la regarder depuis la baie vitrée.",tone:'pool'},
      {idx:'04',title:'La salle de sport',photos:'sport',sub:"Vitrée sur la piscine : deux vélos de biking, un elliptique, deux tapis de course, une presse à cuisses et une station à poulies. On voit l'eau pendant qu'on court.",tone:'stone'},
      {idx:'05',title:'Les séminaires',sub:"Une salle de conférence, les suites au-dessus, The WHITE pour les repas, le spa pour la fin de journée. Tout tient dans le même bâtiment, et sur un séminaire de deux jours, cela change à peu près tout.",tone:'brass'},
    ],
    destEye:'IFRANE À PORTÉE DE MAIN', destH2:'Nous rejoindre.', destCard:'THE WHITE VALLEY · IFRANE', destBtn:"Plan d'accès",
    destRooms:'Altitude', destFloors:'Suites', destCoord:'Distance',
    dests:[
      {city:'Fès',region:'Aéroport Fès-Saïss · 1 h',tone:'warm',coord:'≈ 60 km',desc:"On imagine Ifrane loin. Elle est à une heure de l'aéroport de Fès."},
      {city:'Rabat',region:'3 h de route',tone:'sage',coord:'≈ 250 km',desc:"À trois heures de Rabat. La conciergerie organise le transfert privé sur demande."},
      {city:'Casablanca',region:'4 h de route',tone:'brass',coord:'≈ 330 km',desc:"À quatre heures de Casablanca. Mentionnez-le à la réservation, nous nous occupons du reste."},
    ],
    nlEye:'LES LETTRES DE LA VALLÉE', nlH2:'Les Lettres de la Vallée',
    nlDesc:"Un récit de la vallée par trimestre : la neige qui arrive, la table qui change, les chemins qui rouvrent. Et l'accès à nos tarifs Confidentiels, réservés aux abonnés. Inscription volontaire, désinscription en un clic. Nous n'envoyons rien d'autre.",
    nlLabel:'Votre adresse e-mail', nlPH:'vous@exemple.com', nlBtn:'Recevoir les Lettres', nlSent:'✓ Confirmez votre e-mail', nlNote:"Double opt-in : un e-mail de confirmation valide l'inscription.",
    nlConfirm:"Un e-mail vient de partir vers votre boîte. Un clic pour confirmer, et vous recevrez la prochaine Lettre de la Vallée. Quatre par an, pas une de plus.",
    ftTagline:"Hôtel de suites d'altitude · Ifrane, Moyen Atlas",
    ftCopy:'© 2026 The White Valley · Ifrane. Tous droits réservés.',
    ftCols:[
      {t:'Contact',l:[
        {x:'N8, Ifrane, Moyen Atlas, Maroc'},
        {x:'Téléphone : [À CONFIRMER]'},
        {x:'WhatsApp : [À CONFIRMER]'},
        {x:'contact@thewhitevalleys.ma',href:'mailto:contact@thewhitevalleys.ma'},
      ]},
      {t:"L'Hôtel",l:[
        {x:"L'Hôtel",to:'story'},
        {x:'Les Suites',to:'rooms'},
        {x:'The WHITE',to:'experiences'},
        {x:'Le Spa',to:'experiences'},
        {x:'Séminaires',to:'experiences'},
      ]},
      {t:'Pratique',l:[
        {x:"Plan d'accès",to:'contact'},
        {x:"Politique d'annulation"},
        {x:'Les Lettres de la Vallée',to:'newsletter'},
      ]},
      {t:'Légal',l:[
        {x:'Mentions légales'},
        {x:'CGV'},
        {x:'Confidentialité'},
      ]},
    ],
  },
  en: {
    menu:'Menu', close:'Close', tagline:'The White Pause of Ifrane.', book:'Book',
    dHotel:'The Hotel', dPresent:'A pause', dGallery:'The suites', dSeasons:'Four seasons', dLocal:'Valley Letters',
    dSejour:'The Suites', dStd:'Senior Suite · King bed', dSup:'Senior Suite · Twin beds', dSuite:'Junior Suite · King bed', dOffres:'Junior Suite · Twin beds',
    dSpa:'The five places', dResto:'The spa', dBar:'The WHITE', dHammam:'Pool & gym', dPool:'The seminars',
    dBook:'Book', dDispo:'Book your stay', dContact:'Getting to us', dEvents:'Seminar quote', dRoom:'Getting here',
    reperes:['74 suites, from 28 to 65 m²','Spa, hammam and sauna','The WHITE, our restaurant','Heated pool','Gym','Conference room'],
    reperesPause:'Pause the banner', reperesPlay:'Resume the banner',
    aClose:'Close', aCloseMenu:'Close the menu', aTop:'Back to top',
    aEte:'Summer', aHiver:'Winter',
    galRole:'carousel', galPrev:'Previous photo', galNext:'Next photo', galGo:'Go to photo', galPhotos:'photos',
    galPause:'Pause the carousel', galPlay:'Resume the carousel', railGo:'Go to place',
    photoK:{ chambre:'the bedroom', salon:'the living room', cuisine:'the kitchenette', bain:'the bathroom',
             bureau:'the work space', cabine:'a treatment cabin', hammam:'the hammam',
             linge:'towels and soaps', detente:'the loungers', ambiance:'the spa',
             restaurant:'The WHITE façade', piscine:'the heated pool',
             sport:'the gym', facade:'the façade at night' },
    seminaireFacts:['One conference room','74 suites, 41 of them with twin beds','On-site catering, three meals','Spa and pool at the end of the day'],
    heroAltEte:'The White Valley residence in Ifrane, its façade lit at nightfall.',
    heroAltHiver:'The White Valley residence in Ifrane under snow.',
    destAltEte:'The façade of The WHITE restaurant, lit at night.',
    destAltHiver:'The façade of The WHITE restaurant under snow, at night.',
    callTitle:'Your pause begins here.',
    navPhone:'Phone', navWhats:'WhatsApp',
    saisonsEye:'FOUR SEASONS', saisonsH2:'Four seasons, one signature', saisonsBtn:'When to come',
    saisons:[
      {name:'Winter',period:'December to March',tone:'stone',txt:"Between −5 °C at night and 8 °C by day. Snow comes three to six times each winter. A fireplace, the silent cedar forest, skiing twenty minutes away when the slope is white."},
      {name:'Spring',period:'April to May',tone:'sage',txt:"The best season for walking. The first wild herbs, almonds still green, a crisp light for photographs. Our favourite season, in confidence."},
      {name:'Summer',period:'June to September',tone:'warm',txt:"The climate refuge. 14 °C at night, 28 °C by day while the cities swelter. Evenings are spent outside, the pool stays heated."},
      {name:'Autumn',period:'October to November',tone:'brass',txt:"The forests turn copper, the air dries. Very few people midweek. The ideal season for a retreat or a long weekend for two, with no competing schedules."},
    ],
    heroEyeSplit:'THE WHITE VALLEY · IFRANE · MIDDLE ATLAS',
    heroEteA:'The high-altitude', heroEteB:'suite hotel', heroEteC:'in Ifrane.',
    heroHivA:'The high-altitude', heroHivB:'suite hotel', heroHivC:'in Ifrane.',
    heroLedeSplit:"At 1,650 metres, life takes a breath. 74 suites, an hour from Fès, in one of the few places in Morocco where snow truly holds through winter.",
    heroCta1:'Book your stay', heroCta2:'Planning a seminar? Request a quote',
    heroMetaCat:'Format', heroMetaCatV:'High-altitude suite hotel · 74 suites', heroMetaTel:'Altitude', heroMetaTelV:'1,650 m · Middle Atlas',
    heroEyeFull:'THE WHITE VALLEY · IFRANE · MIDDLE ATLAS',
    heroLedeFull:'At 1,650 metres, life takes a breath.',
    introEye:'THE HOTEL', introH2:'A pause in the valley.',
    introP1:"Here you don't book a room. You book a suite: room to set your things down, somewhere to sit other than the bed, and enough space to stay more than one night without the stay starting to feel like a transit.",
    introP2:"Around it, what a good hotel does well. The hammam, the sauna, the five treatment cabins. The WHITE downstairs, midday and evening. The heated pool, the gym open early. You activate what you want. The rest fades away.",
    introP3:"Ifrane is an hour from Fès, in one of the few places in Morocco where snow truly holds through winter.",
    introLink:'Discover the hotel',
    bbArrivee:'CHECK-IN', bbDepart:'CHECK-OUT', bbVoyageurs:'GUESTS',
    bbAdults:'Adults', bbChildren:'Children', bbLess:'Remove', bbMore:'Add',
    bbSubmit:'Check availability', bbLocale:'en-GB',
    roomsEye:'THE SUITES', roomsH2:'74 suites, four formats, from 28 to 65 m².',
    roomsLede:"The choice comes down to two questions. How much space do you need, and do you sleep in the same bed. Junior or Senior for the size, king bed or twin beds for the bedding, and the surface that goes with it: 28, 45 or 65 m². The rest doesn't change from one suite to the next: the same bedding, the same bathroom, the same view of the valley, the same care first thing in the morning.",
    rSurface:'Size', rCap:'Capacity', rKitchen:'Kitchen', rPriceNote:'Rates on request',
    rBook:'Book',
    rooms:[
      {name:'Senior Suite · King bed',photos:'suite-senior-grand-lit',size:65,cap:'[TO BE CONFIRMED]',kitchen:'Equipped kitchenette',tone:'warm',desc:"Sixty-five square metres, a king bed, a real living room. Storage, and enough space to stay indoors when it has been snowing for two days. What you choose for a week for two."},
      {name:'Senior Suite · Twin beds',photos:'suite-senior-twin',size:65,cap:'[TO BE CONFIRMED]',kitchen:'Equipped kitchenette',tone:'sage',desc:"The same volume, two separate beds. The most common format in the house, forty suites out of seventy-four."},
      {name:'Junior Suite · King bed',photos:'suite-junior-grand-lit',size:28,cap:'[TO BE CONFIRMED]',kitchen:'Equipped kitchenette',tone:'stone',desc:"Twenty-eight square metres, a king bed, a sitting corner. Our most compact format, for two or three nights for two."},
      {name:'Junior Suite · Twin beds',photos:'suite-junior-twin',size:45,cap:'[TO BE CONFIRMED]',kitchen:'Equipped kitchenette',tone:'brass',desc:"Forty-five square metres, two separate beds. There is only one in the house, which means it goes fast."},
    ],
    expEye:'SPA · TABLE · POOL · GYM · SEMINARS', expH2:'Five places, under one roof.',
    exps:[
      {idx:'01',title:'The spa',photos:'spa',sub:"Five cabins, a hammam, a sauna, and separate circuits for women and for men. Treatments designed for altitude: at 1,650 metres, the skin doesn't ask for what it asks for by the sea. No music in the corridors.",tone:'sage'},
      {idx:'02',title:'The WHITE',photos:'the-white',sub:"Our restaurant. Middle Atlas cuisine with short supply chains, midday and evening. Three flavours per plate, a cooking we respect, a plate you finish. Open to non-residents by reservation.",tone:'warm'},
      {idx:'03',title:'The pool',photos:'piscine',sub:"Heated, which at 1,650 metres is not a detail: you get in during January instead of looking at it through the window.",tone:'pool'},
      {idx:'04',title:'The gym',photos:'sport',sub:"Glazed onto the pool: two spin bikes, one elliptical, two treadmills, a leg press and a cable station. You watch the water while you run.",tone:'stone'},
      {idx:'05',title:'The seminars',sub:"A conference room, the suites above, The WHITE for meals, the spa at the end of the day. Everything is in the same building, and over a two-day seminar that changes just about everything.",tone:'brass'},
    ],
    destEye:'IFRANE WITHIN REACH', destH2:'Getting to us.', destCard:'THE WHITE VALLEY · IFRANE', destBtn:'Getting here',
    destRooms:'Altitude', destFloors:'Suites', destCoord:'Distance',
    dests:[
      {city:'Fès',region:'Fès-Saïss Airport · 1 h',tone:'warm',coord:'≈ 60 km',desc:"We imagine Ifrane far away. It's an hour from Fès airport."},
      {city:'Rabat',region:'3 h by road',tone:'sage',coord:'≈ 250 km',desc:"Three hours from Rabat. The concierge arranges private transfers on request."},
      {city:'Casablanca',region:'4 h by road',tone:'brass',coord:'≈ 330 km',desc:"Four hours from Casablanca. Mention it when booking and we'll take care of the rest."},
    ],
    nlEye:'THE VALLEY LETTERS', nlH2:'The Valley Letters',
    nlDesc:"A story of the valley each quarter: the snow arriving, the table changing, the trails reopening. And access to our Confidential rates, reserved for subscribers. Voluntary sign-up, one-click unsubscribe. We send nothing else.",
    nlLabel:'Your email address', nlPH:'you@example.com', nlBtn:'Receive the Letters', nlSent:'✓ Confirm your email', nlNote:'Double opt-in: a confirmation email validates your sign-up.',
    nlConfirm:"An email has just gone out to your inbox. One click to confirm, and you will receive the next Letter from the Valley. Four a year, not one more.",
    ftTagline:'High-altitude suite hotel · Ifrane, Middle Atlas',
    ftCopy:'© 2026 The White Valley · Ifrane. All rights reserved.',
    ftCols:[
      {t:'Contact',l:[
        {x:'N8, Ifrane, Middle Atlas, Morocco'},
        {x:'Phone: [TO BE CONFIRMED]'},
        {x:'WhatsApp: [TO BE CONFIRMED]'},
        {x:'contact@thewhitevalleys.ma',href:'mailto:contact@thewhitevalleys.ma'},
      ]},
      {t:'The Hotel',l:[
        {x:'The Hotel',to:'story'},
        {x:'The Suites',to:'rooms'},
        {x:'The WHITE',to:'experiences'},
        {x:'The Spa',to:'experiences'},
        {x:'Seminars',to:'experiences'},
      ]},
      {t:'Practical',l:[
        {x:'Getting here',to:'contact'},
        {x:'Cancellation policy'},
        {x:'The Valley Letters',to:'newsletter'},
      ]},
      {t:'Legal',l:[
        {x:'Legal notice'},
        {x:'Terms'},
        {x:'Privacy'},
      ]},
    ],
  },
};

/* ── Moteur de réservation ──
   Audit 28/08 · point 23 : le site pointait vers le-zenith-hotel-spa.hotelrunner.com,
   c'est-à-dire le moteur d'un AUTRE établissement — chaque tentative de réservation
   partait ailleurs. Le branchement a été retiré.
   Renseigner ci-dessous l'URL du moteur The White Valley pour le rebrancher ; tant
   qu'elle est vide, les parcours de réservation basculent sur l'e-mail de réservation. */
const BOOKING_ENGINE_URL = '';                             /* TODO client : URL du moteur The White Valley */
const BOOKING_EMAIL      = 'reservation@thewhitevalleys.ma';

/* Coordonnées — domaine corrigé en thewhitevalleys.ma (audit 28/08, point 25).
   Téléphone et WhatsApp non confirmés : laissés vides, donc non affichés. */
const CONTACT_PHONE    = '';   /* TODO client : ex. '+212 5 35 00 00 00' */
const CONTACT_WHATSAPP = '';   /* TODO client : format international sans +, ex. '212600000000' */
const CONTACT_EMAIL    = 'contact@thewhitevalleys.ma';
const MAPS_URL         = 'https://www.google.com/maps/search/?api=1&query=33.5237066,-5.110433';

/* trip (facultatif) : { checkIn, checkOut, adults, children } */
function openBooking(lang = 'fr', trip = null) {
  const en = lang === 'en';

  if (BOOKING_ENGINE_URL) {
    let url = BOOKING_ENGINE_URL;
    if (trip) {
      const qs = new URLSearchParams({
        checkin_date:  trip.checkIn,
        checkout_date: trip.checkOut,
        total_adult:   String(trip.adults),
        total_child:   String(trip.children),
      });
      url += (url.includes('?') ? '&' : '?') + qs.toString();
    }
    window.open(url, '_blank', 'noopener');
    return;
  }

  /* Relais temporaire : demande de séjour par e-mail, en attendant le moteur. */
  const subject = en ? 'Booking request — The White Valley'
                     : 'Demande de réservation — The White Valley';
  const body = trip
    ? (en ? `Check-in: ${trip.checkIn}\nCheck-out: ${trip.checkOut}\nAdults: ${trip.adults}\nChildren: ${trip.children}\n\n`
          : `Arrivée : ${trip.checkIn}\nDépart : ${trip.checkOut}\nAdultes : ${trip.adults}\nEnfants : ${trip.children}\n\n`)
    : '';
  window.location.href =
    `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


/* ── Photos ── Générées depuis assets/photos/ (deux tailles : -800 et -1600).
   n = numéro du fichier, k = sujet (sert à composer le texte alternatif et la légende). */
const PHOTOS = {
  /* Tri client du 3 septembre : les vues écartées ne sont plus listées ici. Les fichiers
     restent dans assets/photos/, il suffit de remettre l'entrée pour les réafficher.
     Senior Grand lit : 2, 4 et 6 écartées · Senior Twin : 1 et 3 · Junior Grand lit :
     2, 3 et 4 · Junior Twin : 1, 4 et 6.                                              */
  "suite-senior-grand-lit": [["01","chambre"], ["03","salon"], ["05","salon"], ["07","bureau"], ["08","bain"]],
  "suite-senior-twin": [["02","chambre"], ["04","salon"], ["05","salon"], ["06","cuisine"], ["07","bureau"], ["08","bain"]],
  "suite-junior-grand-lit": [["01","chambre"], ["05","cuisine"], ["06","bureau"], ["07","bain"], ["08","bain"]],
  "suite-junior-twin": [["02","chambre"], ["03","chambre"], ["05","salon"], ["07","cuisine"], ["08","bain"]],
  /* Spa — ordre client du 03/09 : le hammam ouvre la galerie ; les fichiers 02 et 01
     sont écartés (3e puis 2e vue, dans cet ordre de demande) ; les hammams 05 et 06
     suivent la couverture. */
  "spa": [["04","hammam"], ["05","hammam"], ["06","hammam"], ["03","cabine"], ["07","linge"], ["08","cabine"], ["09","detente"], ["10","ambiance"]],
  /* The WHITE — ordre client du 03/09 : la 4e vue passe en couverture ; les 2e et 6e
     sont écartées. */
  "the-white": [["04","restaurant"], ["01","restaurant"], ["03","restaurant"], ["05","restaurant"]],
  "piscine": [["01","piscine"], ["02","piscine"], ["03","piscine"], ["04","piscine"]],
  "sport": [["01","sport"], ["02","sport"], ["03","sport"]],
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
function Gallery({ slug, name, lang, eager = false, variant = '', autoplay = false, interval = 5200 }) {
  const photos = PHOTOS[slug] || [];
  const tr = T[lang] || T.fr;
  const [idx, setIdx] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [survol, setSurvol] = useState(false);
  const [visible, setVisible] = useState(false);
  const trackRef = useRef(null);
  const wrapRef  = useRef(null);

  /* La position de défilement est la source de vérité, pas l'état React : si le
     navigateur interrompt un défilement doux et raccroche à la vue la plus proche
     (ce que fait le scroll-snap), le compteur suit la photo réellement affichée.
     targetRef mémorise la vue visée pour que deux clics rapides avancent bien de deux. */
  const targetRef = useRef(0);

  const mouvementReduit = () =>
    !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const goTo = (j, instantane) => {
    const t = trackRef.current;
    if (!t) return;
    const n = Math.max(0, Math.min(photos.length - 1, j));
    targetRef.current = n;
    const doux = !instantane && !mouvementReduit();
    t.scrollTo({ left: n * t.clientWidth, behavior: doux ? 'smooth' : 'auto' });
    setIdx(n);   /* retour immédiat ; onScroll corrigera si le défilement s'arrête ailleurs */
  };

  const step = (d) => goTo(targetRef.current + d);

  /* ── Défilement automatique ── */
  const enPause = userPaused || survol;

  /* Ne tourner que si le carrousel est réellement à l'écran. */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => setVisible(e.isIntersecting)),
      { threshold: 0.35 }
    );
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
  const legende = (k) => (tr.photoK && tr.photoK[k]) || '';
  const alt = (k) => isSuite ? `${name} — ${legende(k)}`
                             : legende(k).charAt(0).toUpperCase() + legende(k).slice(1);

  const onScroll = () => {
    const t = trackRef.current;
    if (!t || !t.clientWidth) return;
    const n = Math.round(t.scrollLeft / t.clientWidth);
    if (n !== idx) setIdx(n);
    /* Au repos — glissement tactile compris — la cible rejoint la position réelle. */
    if (Math.abs(t.scrollLeft - n * t.clientWidth) < 2) targetRef.current = n;
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); step(-1); }
  };

  const num = (n) => String(n).padStart(2, '0');

  if (!photos.length) return null;

  return (
    <div className={`gal${variant === 'arch' ? ' gal--arch' : ''}`}
      ref={wrapRef}
      role="group" aria-roledescription={tr.galRole} aria-label={name}
      onMouseEnter={() => setSurvol(true)}
      onMouseLeave={() => setSurvol(false)}
      onFocus={() => setSurvol(true)}
      onBlur={() => setSurvol(false)}>
      <div className="gal__frame">
        <ul className="gal__track" ref={trackRef} onScroll={onScroll} onKeyDown={onKeyDown}
            tabIndex={0} aria-label={`${name} — ${photos.length} ${tr.galPhotos}`}>
          {photos.map(([n, k], i) => (
            <li className="gal__slide" key={n} aria-label={`${i + 1} / ${photos.length}`}>
              <img
                src={`assets/photos/${slug}-${n}-800.jpg`}
                srcSet={`assets/photos/${slug}-${n}-800.jpg 800w, assets/photos/${slug}-${n}-1600.jpg 1600w`}
                sizes="(max-width: 900px) 100vw, 640px"
                width="1600" height="1200"
                loading={eager && i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                alt={alt(k)}
              />
            </li>
          ))}
        </ul>

        {photos.length > 1 && (
          <>
            <button type="button" className="gal__nav gal__nav--prev"
              onClick={() => step(-1)} disabled={idx === 0} aria-label={tr.galPrev}>‹</button>
            <button type="button" className="gal__nav gal__nav--next"
              onClick={() => step(1)} disabled={idx === photos.length - 1} aria-label={tr.galNext}>›</button>
          </>
        )}
      </div>

      <div className="gal__bar">
        <span className="gal__count">{num(idx + 1)} / {num(photos.length)}</span>
        <span className="gal__legend">{legende(photos[idx] && photos[idx][1])}</span>
        {photos.length > 1 && (
          <span className="gal__dots">
            {photos.map(([n], i) => (
              <button type="button" key={n} className={i === idx ? 'is-active' : ''}
                onClick={() => goTo(i)} aria-label={`${tr.galGo} ${i + 1}`} aria-current={i === idx} />
            ))}
          </span>
        )}
        {autoplay && photos.length > 1 && (
          <button type="button" className="gal__pause"
            onClick={() => setUserPaused(p => !p)}
            aria-pressed={userPaused}
            aria-label={userPaused ? tr.galPlay : tr.galPause}>
            {userPaused ? '▶' : '❚❚'}
          </button>
        )}
      </div>
    </div>
  );
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
function Rail({ lang, label, autoplay = true, interval = 7000, children }) {
  const tr = T[lang] || T.fr;
  const slides = React.Children.toArray(children);
  const [idx, setIdx] = useState(0);
  const [survol, setSurvol] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pas, setPas] = useState(0);            /* largeur d'un pas : carte + écart */
  const [positions, setPositions] = useState(1);
  const trackRef = useRef(null);
  const wrapRef  = useRef(null);
  const targetRef = useRef(0);

  const mouvementReduit = () =>
    !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

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
    return () => { if (ro) ro.disconnect(); window.removeEventListener('resize', mesurer); };
  }, [slides.length]);

  const goTo = (j, instantane) => {
    const t = trackRef.current;
    if (!t) return;
    const p = pas || t.clientWidth;
    const n = Math.max(0, Math.min(positions - 1, j));
    targetRef.current = n;
    const doux = !instantane && !mouvementReduit();
    t.scrollTo({ left: n * p, behavior: doux ? 'smooth' : 'auto' });
    setIdx(n);
  };

  const step = (d) => goTo(targetRef.current + d);

  const onScroll = () => {
    const t = trackRef.current;
    const p = pas || (t && t.clientWidth);
    if (!t || !p) return;
    const n = Math.min(positions - 1, Math.round(t.scrollLeft / p));
    if (n !== idx) setIdx(n);
    if (Math.abs(t.scrollLeft - n * p) < 2) targetRef.current = n;
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); step(-1); }
  };

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => setVisible(e.isIntersecting)),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const enPause = survol;   /* survol souris ou focus clavier */

  useEffect(() => {
    if (!autoplay || enPause || !visible || positions < 2 || mouvementReduit()) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      const suivant = (targetRef.current + 1) % positions;
      goTo(suivant);   /* retour au début : deux pas seulement, un rembobinage court */
    }, interval);
    return () => clearInterval(t);
  }, [autoplay, enPause, visible, positions, interval, pas]);

  const num = (n) => String(n).padStart(2, '0');

  return (
    <div className="rail" ref={wrapRef}
      role="group" aria-roledescription={tr.galRole} aria-label={label}
      onMouseEnter={() => setSurvol(true)}
      onMouseLeave={() => setSurvol(false)}
      onFocus={() => setSurvol(true)}
      onBlur={() => setSurvol(false)}>

      <ul className="rail__track" ref={trackRef} onScroll={onScroll} onKeyDown={onKeyDown}
          tabIndex={0} aria-label={`${label} — ${slides.length}`}>
        {slides.map((s, i) => (
          <li className="rail__slide" key={i} aria-label={`${i + 1} / ${slides.length}`}>{s}</li>
        ))}
      </ul>

      {/* Barre réduite aux points, centrés (03/09). Retirés à la demande : les flèches,
          le compteur et le bouton pause. Le défilement reste interruptible — il s'arrête
          au survol et au focus clavier, et ne démarre pas si le visiteur a demandé de
          réduire les animations. Pour remettre un bouton pause, voir Gallery. */}
      <div className="rail__bar">
        <span className="rail__dots">
          {Array.from({ length: positions }).map((_, i) => (
            <button type="button" key={i} className={i === idx ? 'is-active' : ''}
              onClick={() => goTo(i)} aria-label={`${tr.railGo} ${i + 1}`} aria-current={i === idx} />
          ))}
        </span>
      </div>
    </div>
  );
}

/* ---------- Placeholder imagery ----------
   Using CSS gradients + subtle noise pattern to evoke real photography
   without hand-drawing SVG illustrations. Monospace annotation indicates
   what real asset should be dropped in.                                  */
function Placeholder({ label, tone = 'warm', aspect = '3/2', className = '', children }) {
  const tones = {
    warm:    'linear-gradient(135deg, #3a2f24 0%, #1a130c 100%)',
    ivory:   'linear-gradient(135deg, #e8dfd0 0%, #c9bca4 100%)',
    sage:    'linear-gradient(135deg, #2a332a 0%, #1a201a 100%)',
    stone:   'linear-gradient(135deg, #2a2724 0%, #14110e 100%)',
    brass:   'linear-gradient(135deg, #4a3820 0%, #2a1e10 100%)',
    pool:    'linear-gradient(135deg, #1e3540 0%, #0e1a22 100%)',
  };
  return (
    <div
      className={`ph ${className}`}
      style={{
        background: tones[tone] || tones.warm,
        aspectRatio: aspect,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="ph__grain" />
      <div className="ph__stripes" />
      <span className="ph__label">{label}</span>
      {children}
    </div>
  );
}

/* ---------- Panneau de réservation ---------- */
function HotelRunnerModal({ open, onClose, lang }) {
  const lc = lang === 'en' ? 'en' : 'fr';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Chiffres confirmés par le client le 28/08 — ne pas réintroduire les données
     de l'ancien établissement (230 chambres, Casablanca, 4 étoiles). */
  const L = lc === 'en' ? {
    title: 'Book your stay', sub: 'The White Valley · Ifrane, Middle Atlas',
    note: 'Cancellation policy: [TO BE CONFIRMED]',
    feats: ['74 suites, from 28 to 65 m²', 'Spa, hammam and sauna · Heated pool', 'The WHITE, our restaurant'],
    cta: 'Book your stay', ctaSub: 'Direct booking · Official rates',
  } : {
    title: 'Réservez votre séjour', sub: 'The White Valley · Ifrane, Moyen Atlas',
    note: "Politique d'annulation : [À CONFIRMER]",
    feats: ['74 suites, de 28 à 65 m²', 'Spa, hammam et sauna · Piscine chauffée', 'The WHITE, notre restaurant'],
    cta: 'Réserver votre séjour', ctaSub: 'Réservation en direct · Tarifs officiels',
  };

  return (
    <>
      <div className={`bp-overlay${open ? ' is-open' : ''}`} onClick={onClose} />

      <div className={`bp${open ? ' is-open' : ''}`}>

        <div className="bp__head">
          <button className="bp__close" onClick={onClose} aria-label={(T[lc]||T.fr).aClose}>✕</button>
        </div>

        <div className="bp__hero">
          <p className="bp__eyebrow">THE WHITE VALLEY</p>
          <h2 className="bp__title">{L.title}</h2>
          <p className="bp__sub">{L.sub}</p>
          <div className="bp__rule"><span /><em>✦</em><span /></div>
        </div>

        <div className="bp__body">
          <ul className="bp__feats">
            {L.feats.map(f => (
              <li key={f}><span className="bp__feat-dot">✦</span>{f}</li>
            ))}
          </ul>

          <button
            type="button"
            className="bp__book-btn"
            onClick={() => { onClose(); openBooking(lc); }}
          >
            {L.cta}
            <span>↗</span>
          </button>
          <p className="bp__book-sub">{L.ctaSub}</p>
        </div>

        <div className="bp__foot">
          <p>{L.note}</p>
        </div>

      </div>
    </>
  );
}
/* ---------- Booking bar ----------
   Audit 28/08 · point 4 : le select fusionnait treize combinaisons chambres × adultes.
   Avec quatre suites et un couchage fixe par suite, cette combinatoire ne veut plus rien
   dire — remplacé par un compteur adultes / enfants, navigable au clavier.            */
function BookingBar({ lang }) {
  const lc = lang === 'en' ? 'en' : 'fr';
  const tr  = T[lang] || T.fr;

  const pad     = (n) => String(n).padStart(2, '0');
  const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
  const nextDay  = (s) => { const d = new Date(s+'T12:00:00'); d.setDate(d.getDate()+1); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };

  const [checkIn,  setCheckIn]  = useState(todayStr);
  const [checkOut, setCheckOut] = useState(() => nextDay(todayStr()));
  const [adults,   setAdults]   = useState(2);
  const [children, setChildren] = useState(0);
  const [guestsOpen, setGuestsOpen] = useState(false);

  const inRef     = useRef(null);
  const outRef    = useRef(null);
  const guestsRef = useRef(null);

  const openPicker = (ref) => (e) => {
    e.preventDefault();
    if (!ref.current) return;
    try { ref.current.showPicker(); }
    catch { ref.current.focus(); ref.current.click(); }
  };

  /* Fermeture du compteur au clic extérieur et à la touche Échap */
  useEffect(() => {
    if (!guestsOpen) return;
    const onDown = (e) => { if (guestsRef.current && !guestsRef.current.contains(e.target)) setGuestsOpen(false); };
    const onKey  = (e) => { if (e.key === 'Escape') setGuestsOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [guestsOpen]);

  const fmt = (s) => {
    try { return new Date(s+'T12:00:00').toLocaleDateString(lc==='en'?'en-GB':'fr-FR', {day:'2-digit', month:'short', year:'numeric'}); }
    catch { return s; }
  };

  const aL = (n) => `${n} ${n===1 ? (lc==='en'?'adult':'adulte') : (lc==='en'?'adults':'adultes')}`;
  const cL = (n) => `${n} ${n===1 ? (lc==='en'?'child':'enfant') : (lc==='en'?'children':'enfants')}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    openBooking(lc, { checkIn, checkOut, adults, children });
  };

  const Counter = ({ label, value, min, max, onChange }) => (
    <div className="bb__counter">
      <span className="bb__counter-label">{label}</span>
      <div className="bb__counter-ctrl">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min} aria-label={`${tr.bbLess} — ${label}`}>−</button>
        <span className="bb__counter-val" aria-live="polite">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max} aria-label={`${tr.bbMore} — ${label}`}>+</button>
      </div>
    </div>
  );

  return (
    <form className="bb" onSubmit={handleSubmit}>

      {/* ── Arrivée ── */}
      <div className="bb__field" onClick={openPicker(inRef)} style={{cursor:'pointer'}}>
        <span className="bb__label">{tr.bbArrivee}</span>
        <span className="bb__value">{fmt(checkIn)}</span>
        <input ref={inRef} type="date" className="bb__input-hidden"
          value={checkIn} min={todayStr()}
          onChange={e => { setCheckIn(e.target.value); if (e.target.value >= checkOut) setCheckOut(nextDay(e.target.value)); }} />
      </div>

      <div className="bb__sep" />

      {/* ── Départ ── */}
      <div className="bb__field" onClick={openPicker(outRef)} style={{cursor:'pointer'}}>
        <span className="bb__label">{tr.bbDepart}</span>
        <span className="bb__value">{fmt(checkOut)}</span>
        <input ref={outRef} type="date" className="bb__input-hidden"
          value={checkOut} min={nextDay(checkIn)}
          onChange={e => setCheckOut(e.target.value)} />
      </div>

      <div className="bb__sep" />

      {/* ── Voyageurs : compteur adultes / enfants ── */}
      <div className={`bb__field bb__field--guests${guestsOpen ? ' is-open' : ''}`} ref={guestsRef}>
        <button type="button" className="bb__guests-trigger"
          onClick={() => setGuestsOpen(o => !o)}
          aria-expanded={guestsOpen} aria-haspopup="true">
          <span className="bb__label">{tr.bbVoyageurs}</span>
          <span className="bb__value">{aL(adults)}{children > 0 ? ` · ${cL(children)}` : ''}</span>
        </button>
        {guestsOpen && (
          <div className="bb__guests-pop">
            <Counter label={tr.bbAdults}   value={adults}   min={1} max={6} onChange={setAdults} />
            <Counter label={tr.bbChildren} value={children} min={0} max={4} onChange={setChildren} />
          </div>
        )}
      </div>

      <button type="submit" className="bb__submit">
        {tr.bbSubmit}
        <span className="bb__arrow">↗</span>
      </button>

    </form>
  );
}
/* ---------- SplashScreen (Stroke variation) ---------- */
function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('in');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), 3200);
    const t2 = setTimeout(() => onDone(), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const dust = Array.from({ length: 10 }).map((_, i) => ({
    left:  (i * 37 + 13) % 100,
    dur:   3 + (i % 5) * 0.6,
    delay: (i * 0.4) % 3,
  }));

  return (
    <div className={`splash splash--${phase}`}>
      {/* particules dorées */}
      <div className="splash__dust">
        {dust.map((d, i) => (
          <span key={i} style={{
            left: `${d.left}%`,
            animationDuration: `${d.dur}s`,
            animationDelay: `${d.delay}s`,
          }}/>
        ))}
      </div>

      <div className="splash__inner">
        {/* cadre orné qui se trace */}
        {/* <svg className="splash__frame" viewBox="0 0 340 360" preserveAspectRatio="none">
          <rect x="1" y="1" width="338" height="358"/>
        </svg> */}

        {/* logo image */}
        <div className="splash__logo-wrap">
          <img
            src="assets/Logo vec3.png"
            alt="The White Valley"
            className="splash__logo-img"
          />
        </div>

        {/* ornement : ligne ✦ ligne */}
        <svg className="splash__orn" width="240" height="18" viewBox="0 0 240 18">
          <line x1="10"  y1="9" x2="105" y2="9"/>
          <line x1="135" y1="9" x2="230" y2="9"/>
          <path d="M120 3 L122 9 L128 9 L123 12.5 L125 18 L120 14.5 L115 18 L117 12.5 L112 9 L118 9 Z"/>
        </svg>

        {/* tagline — signature validée (audit 28/08, point 1) */}
        <div className="splash__tag">La Parenthèse Blanche d'Ifrane.</div>
      </div>
    </div>
  );
}

/* ---------- Season Toggle ---------- */
function SeasonToggle({ season, onSeason, lang }) {
  const tr = T[lang]||T.fr;
  return (
    <div className="season-toggle">
      <button
        className={`season-toggle__btn${season === 'ete' ? ' season-toggle__btn--active' : ''}`}
        onClick={() => onSeason('ete')}
        aria-label={tr.aEte}
      >
        ☀
      </button>
      <button
        className={`season-toggle__btn${season === 'hiver' ? ' season-toggle__btn--active' : ''}`}
        onClick={() => onSeason('hiver')}
        aria-label={tr.aHiver}
      >
        ❄
      </button>
    </div>
  );
}

/* ---------- Back to Top ---------- */
function BackToTop({ lang }) {
  const tr = T[lang]||T.fr;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;
  return (
    <button className="back-top" onClick={scrollTop} aria-label={tr.aTop}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 14V4M9 4L4 9M9 4L14 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

/* ---------- Navigation ---------- */
function Nav({ onBook, season, onSeason, lang, onLang }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['rooms', 'story', 'experiences', 'instagram', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav__inner">
          <div className="nav__lead">
            <button className={`nav__menu ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span className="nav__menu-lines"><span /><span /><span /></span>
              <em>{menuOpen ? (T[lang]||T.fr).close : (T[lang]||T.fr).menu}</em>
            </button>
          </div>

          {/* ── Centre : logo texte + ligne décorative ── */}
          <a href="#" className="nav__brand" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="nav__mark">THE WHITE VALLEY</span>
            <div className="nav__divider">
              <span className="nav__divider-line" />
              <span className="nav__divider-gem">✦</span>
              <span className="nav__divider-line" />
            </div>
            <span className="nav__sub">{(T[lang]||T.fr).tagline}</span>
          </a>

          {/* ── Droite : même style que MENU ── */}
          <div className="nav__right">
            <button className="nav__action nav__action--lang" onClick={() => onLang(lang === 'fr' ? 'en' : 'fr')}>
              <span className="nav__action-lines">
                <span /><span />
              </span>
              <span>
                <span style={{fontWeight: lang==='fr' ? 600 : 400, opacity: lang==='fr' ? 1 : 0.5}}>FR</span>
                {' · '}
                <span style={{fontWeight: lang==='en' ? 600 : 400, opacity: lang==='en' ? 1 : 0.5}}>EN</span>
              </span>
            </button>
            <button className="nav__action nav__action--book" onClick={onBook}>
              <span className="nav__action-lines">
                <span /><span />
              </span>
              <span>{(T[lang]||T.fr).book}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="nav__drawer" onClick={() => setMenuOpen(false)}>
            <div className="nav__drawer-inner" onClick={e => e.stopPropagation()}>

              {/* — bouton fermer — */}
              <div className="nav__drawer-back">
                <button className="nav__close-btn" onClick={() => setMenuOpen(false)} aria-label={(T[lang]||T.fr).aCloseMenu}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 3L17 17M17 3L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {(() => { const tr = T[lang]||T.fr; return (<>
              <div className="nav__drawer-col">
                <em>{tr.dHotel}</em>
                <a onClick={() => scrollTo('story')}>{tr.dPresent}</a>
                <a onClick={() => scrollTo('rooms')}>{tr.dGallery}</a>
                <a onClick={() => scrollTo('seasons')}>{tr.dSeasons}</a>
                <a onClick={() => scrollTo('newsletter')}>{tr.dLocal}</a>
              </div>
              <div className="nav__drawer-col">
                <em>{tr.dSejour}</em>
                <a onClick={() => scrollTo('rooms')}>{tr.dStd}</a>
                <a onClick={() => scrollTo('rooms')}>{tr.dSup}</a>
                <a onClick={() => scrollTo('rooms')}>{tr.dSuite}</a>
                <a onClick={() => scrollTo('rooms')}>{tr.dOffres}</a>
              </div>
              <div className="nav__drawer-col">
                <em>{tr.dSpa}</em>
                <a onClick={() => scrollTo('experiences')}>{tr.dResto}</a>
                <a onClick={() => scrollTo('experiences')}>{tr.dBar}</a>
                <a onClick={() => scrollTo('experiences')}>{tr.dHammam}</a>
                <a onClick={() => scrollTo('experiences')}>{tr.dPool}</a>
              </div>
              <div className="nav__drawer-col">
                <em>{tr.dBook}</em>
                <a onClick={onBook}>{tr.dDispo}</a>
                <a onClick={() => scrollTo('contact')}>{tr.dContact}</a>
                <a onClick={() => scrollTo('contact')}>{tr.dEvents}</a>
                <a onClick={() => scrollTo('contact')}>{tr.dRoom}</a>
              </div>
              </>); })()}

              <div className="nav__drawer-cta">
                <div className="nav__drawer-taps">
                  {/* Les numéros ne sont pas confirmés (audit 28/08, point 22) : tant que les
                      constantes sont vides, on n'affiche pas de lien qui ne mène nulle part. */}
                  {CONTACT_PHONE && (
                    <a className="nav__tap" href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2 2A16 16 0 014.5 5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                      {(T[lang]||T.fr).navPhone}
                    </a>
                  )}
                  {CONTACT_WHATSAPP && (
                    <a className="nav__tap" href={`https://wa.me/${CONTACT_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                      {(T[lang]||T.fr).navWhats}
                    </a>
                  )}
                  <a className="nav__tap" href={`mailto:${CONTACT_EMAIL}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <button className="nav__drawer-book" onClick={() => { setMenuOpen(false); onBook(); }}>{(T[lang]||T.fr).book}</button>
              </div>
            </div>
          </div>
        )}
      </header>
      <SeasonToggle season={season} onSeason={onSeason} lang={lang} />
      <BackToTop lang={lang} />
    </>
  );
}

/* ---------- Hero ---------- */
function Hero({ variant, season, lang, onBook }) {
  const [imgIdx, setImgIdx] = useState(0);
  const scenes = [
    { label: 'facade the white valley ifrane', tone: 'warm' },
    { label: 'suite senior salon vue vallee',  tone: 'brass' },
    { label: 'spa piscine chauffee',           tone: 'stone' },
  ];

  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % scenes.length), 5000);
    return () => clearInterval(t);
  }, []);

  const tr = T[lang] || T.fr;

  if (variant === 'split') {
    return (
      <section className="hero hero--split">
        <div className="hero__text">
          <p className="eyebrow"><span className="eyebrow__dot" />{tr.heroEyeSplit}</p>
          <h1 className="hero__h1">
            {season === 'ete' ? (
              <>
                <span>{tr.heroEteA}</span>
                <span><em>{tr.heroEteB}</em></span>
                <span>{tr.heroEteC}</span>
              </>
            ) : (
              <>
                <span>{tr.heroHivA}</span>
                <span><em>{tr.heroHivB}</em></span>
                <span>{tr.heroHivC}</span>
              </>
            )}
          </h1>
          <p className="hero__lede">{tr.heroLedeSplit}</p>
          {/* Audit 28/08 · bloc 1 : un seul bouton, le séminaire passe en lien discret. */}
          <div className="hero__cta hero__cta--single">
            <button className="btn btn--primary" onClick={onBook}>{tr.heroCta1}</button>
          </div>
          <a href="#experiences" className="quote-link">{tr.heroCta2} <span>→</span></a>
          <dl className="hero__meta">
            <div><dt>{tr.heroMetaCat}</dt><dd>{tr.heroMetaCatV}</dd></div>
            <div><dt>{tr.heroMetaTel}</dt><dd>{tr.heroMetaTelV}</dd></div>
          </dl>
        </div>
        <div className="hero__media">
          {scenes.map((s, i) => (
            <div key={i} className={`hero__slide ${i === imgIdx ? 'is-active' : ''}`}>
              <Placeholder label={s.label} tone={s.tone} aspect="auto" />
            </div>
          ))}
          <div className="hero__media-meta">
            <span>{String(imgIdx + 1).padStart(2, '0')} / {String(scenes.length).padStart(2, '0')}</span>
            <span className="hero__dots">
              {scenes.map((_, i) => (
                <button key={i} className={i === imgIdx ? 'is-active' : ''} onClick={() => setImgIdx(i)} />
              ))}
            </span>
          </div>
        </div>
      </section>
    );
  }

  /* full-bleed cinematic */
  const heroSrc = {
    ete:   { s: 'assets/HERO1-1920%20%C3%97%201080.jpg.jpeg', l: 'assets/HERO1-2560%20%C3%97%201440.jpg.jpeg' },
    hiver: { s: 'assets/HERO2-1920%20%C3%97%201080.jpg.jpeg', l: 'assets/HERO2-2560%20%C3%97%201440.jpg.jpeg' },
  };
  const img = heroSrc[season] || heroSrc.ete;

  return (
    <section className="hero hero--full">
      <div className="hero__bg">
        <div className="hero__slide is-active">
          <img
            src={img.s}
            srcSet={`${img.s} 1920w, ${img.l} 2560w`}
            sizes="100vw"
            alt={season === 'hiver' ? tr.heroAltHiver : tr.heroAltEte}
          />
        </div>
        <div className="hero__scrim" />
      </div>
      <div className="hero__full-content">
        <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" />{tr.heroEyeFull}</p>
        <h1 className="hero__h1 hero__h1--light">
          {season === 'ete' ? (
            <>
              <span>{tr.heroEteA}</span>
              <span><em>{tr.heroEteB}</em></span>
              <span>{tr.heroEteC}</span>
            </>
          ) : (
            <>
              <span>{tr.heroHivA}</span>
              <span><em>{tr.heroHivB}</em></span>
              <span>{tr.heroHivC}</span>
            </>
          )}
        </h1>
        <p className="hero__lede hero__lede--light">{tr.heroLedeFull}</p>
        {/* Audit 28/08 · bloc 1 : un seul bouton, le séminaire passe en lien discret. */}
        <div className="hero__cta hero__cta--full hero__cta--single">
          <button className="btn btn--primary" onClick={onBook}>{tr.heroCta1}</button>
        </div>
        <a href="#experiences" className="quote-link quote-link--light">{tr.heroCta2} <span>→</span></a>
      </div>
    </section>
  );
}

/* Le second bandeau défilant (Marquee) a été retiré — audit 28/08, point 7 :
   deux bandeaux à trente secondes d'écart, dont un doublon partiel. On n'en garde qu'un. */

/* ---------- Intro block ---------- */
function Intro({ lang }) {
  const tr = T[lang]||T.fr;
  return (
    <section className="intro" id="story">
      <div className="intro__grid">
        <div className="intro__left">
          <p className="eyebrow"><span className="eyebrow__dot" />{tr.introEye}</p>
          <h2 className="h-display">{tr.introH2}</h2>
        </div>
        <div className="intro__right">
          <p>{tr.introP1}</p>
          <p>{tr.introP2}</p>
          <p>{tr.introP3}</p>
          <a href="#rooms" className="link-arrow">{tr.introLink} <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function Rooms({ onBook, lang }) {
  const tr = T[lang]||T.fr;
  /* Audit 28/08 · points 8 à 11 : les quatre typologies affichées n'existaient pas dans
     l'inventaire. Nomenclature refaite (Junior/Senior × Grand lit/Twin), filtres retirés
     — quatre suites d'une seule famille ne se filtrent pas — badge « le plus choisi » et
     preuve sociale retirés : l'hôtel n'a pas ouvert.                                   */
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <section className="rooms" id="rooms">
      <div className="rooms__head">
        <div>
          <p className="eyebrow"><span className="eyebrow__dot" />{tr.roomsEye}</p>
          <h2 className="h-display">{tr.roomsH2}</h2>
          <p className="rooms__lede">{tr.roomsLede}</p>
        </div>
      </div>

      <div className="rooms__grid">
          {tr.rooms.map((r, i) => (
          <article
            key={r.name}
            className={`room ${hoverIdx === i ? 'is-hover' : ''}`}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <div className="room__media">
              <Gallery slug={r.photos} name={r.name} lang={lang} eager={i === 0}
                       variant="arch" autoplay interval={5200 + i * 700} />
            </div>
            <div className="room__body">
              <div className="room__row">
                <h3 className="room__name">{r.name}</h3>
              </div>
              <p className="room__desc">{r.desc}</p>
              <dl className="room__specs">
                <div><dt>{tr.rSurface}</dt><dd>{r.size} m²</dd></div>
                <div><dt>{tr.rCap}</dt><dd>{r.cap}</dd></div>
                <div><dt>{tr.rKitchen}</dt><dd>{r.kitchen}</dd></div>
              </dl>
              <div className="room__foot">
                <div>
                  <span className="room__price-note">{tr.rPriceNote}</span>
                </div>
                <button className="btn btn--dark btn--sm" onClick={onBook}>{tr.rBook}</button>
              </div>
            </div>
          </article>
          ))}
      </div>
    </section>
  );
}

/* ---------- Experience strip ---------- */
function Experiences({ lang }) {
  const tr = T[lang]||T.fr;
  return (
    <section className="exp" id="experiences">
      <div className="exp__head">
        <p className="eyebrow"><span className="eyebrow__dot" />{tr.expEye}</p>
        <h2 className="h-display">{tr.expH2}</h2>
      </div>
      {/* Audit 28/08 · points 13 à 16 : cinq lieux au lieu de trois — la piscine et la
          salle de sport cessent d'être des mentions en marge. Les cartes ne sont plus des
          liens : les pages correspondantes n'existent pas encore.
          03/09 : la grille 3 + 2 laissait une case vide. Les cinq lieux passent en
          carrousel, une carte par vue, cinq points — photo à gauche, texte à droite. */}
      <Rail lang={lang} label={tr.expH2} autoplay interval={5000}>
        {tr.exps.map(it => (
          <article key={it.idx} className="exp__item">
              {it.photos
                ? <Gallery slug={it.photos} name={it.title} lang={lang}
                    variant="arch" autoplay interval={5600 + Number(it.idx) * 700} />
                : (
                  /* Les séminaires n'ont aucune photo : la carte porte les faits plutôt
                     qu'un visuel de remplissage. */
                  <ul className="exp__facts">
                    {tr.seminaireFacts.map(f => <li key={f}>{f}</li>)}
                  </ul>
                )}
            <div className="exp__meta">
              <span className="exp__idx">{it.idx}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.sub}</p>
              </div>
            </div>
          </article>
        ))}
      </Rail>
    </section>
  );
}

/* ---------- Localisation & coordonnées ---------- */
function Destinations({ lang, season }) {
  const tr = T[lang]||T.fr;
  const [sel, setSel] = useState(0);
  const dests = tr.dests;
  const d = dests[sel];

  return (
    <section className="dest" id="contact">
      <div className="dest__layout">
        <div className="dest__left">
          <div className="dest__head">
            <p className="eyebrow"><span className="eyebrow__dot" />{tr.destEye}</p>
            <h2 className="h-display">{tr.destH2}</h2>
          </div>
          <div className="dest__list">
          {dests.map((x, i) => (
            <button
              key={x.city}
              className={`dest__row ${i === sel ? 'is-active' : ''}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => setSel(i)}
            >
              <span className="dest__num">0{i + 1}</span>
              <span className="dest__city">{x.city}</span>
              <span className="dest__region">{x.region}</span>
              <span className="dest__arrow">→</span>
            </button>
          ))}
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="link-arrow dest__btn">{tr.destBtn} <span>→</span></a>
        </div>
        <div className="dest__preview">
          {/* Une photo par saison (demande du 03/09) : même cadrage de la façade de
              The WHITE, sans neige en été, sous la neige en hiver. Même mécanisme que
              le hero, en srcset deux tailles. */}
          <img
            className="dest__photo"
            src={`assets/photos/dest-${season === 'hiver' ? 'hiver' : 'ete'}-800.jpg`}
            srcSet={`assets/photos/dest-${season === 'hiver' ? 'hiver' : 'ete'}-800.jpg 800w, assets/photos/dest-${season === 'hiver' ? 'hiver' : 'ete'}-1600.jpg 1600w`}
            sizes="(max-width: 1100px) 90vw, 600px"
            width="1600" height="1200"
            loading="lazy" decoding="async"
            alt={season === 'hiver' ? tr.destAltHiver : tr.destAltEte}
          />
          <div className="dest__card">
            <div>
              <span className="dest__card-eyebrow">{tr.destCard}</span>
              <h3>{d.desc}</h3>
            </div>
            <dl className="dest__stats">
              <div><dt>{tr.destRooms}</dt><dd>1 650 m</dd></div>
              {/* Ordre du rédactionnel (bloc 7) : altitude, distance, suites. */}
              <div><dt>{tr.destCoord}</dt><dd>{d.coord}</dd></div>
              <div><dt>{tr.destFloors}</dt><dd>74</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Le bloc « La maison, par ceux qui la tiennent » a été retiré — audit 28/08, point 18 :
   citations anonymes, et un chef qui dit diriger la cuisine « depuis l'ouverture » alors que
   l'hôtel n'a pas ouvert. Arbitrage client du 28/08 : suppression. Le bloc pourra revenir
   avec de vraies signatures, ou avec de vrais avis clients. */

/* ---------- Newsletter ---------- */
function Newsletter({ lang }) {
  const tr = T[lang]||T.fr;
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  useEffect(() => { setSent(false); setEmail(''); }, [lang]);
  return (
    <section className="nl" id="newsletter">
      <div className="nl__grid">
        <div>
          <p className="eyebrow"><span className="eyebrow__dot" />{tr.nlEye}</p>
          <h2 className="h-display h-display--md">{tr.nlH2}</h2>
          <p className="nl__desc">{tr.nlDesc}</p>
        </div>
        <form className="nl__form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <label>
            {/* Libellé retiré de l'affichage (demande du 03/09) mais conservé pour les
                lecteurs d'écran : sans lui, le champ n'a plus de nom accessible.
                Le placeholder ne remplit pas ce rôle, il disparaît à la saisie. */}
            <span className="visually-hidden">{tr.nlLabel}</span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={tr.nlPH}
              required
            />
          </label>
          <button className="btn btn--primary" disabled={sent}>
            {sent ? tr.nlSent : tr.nlBtn}
          </button>
          {/* Micro-copy validé (docx, « Confirmation newsletter ») */}
          <p className={`nl__note${sent ? ' nl__note--sent' : ''}`} role={sent ? 'status' : undefined}>
            {sent ? tr.nlConfirm : tr.nlNote}
          </p>
        </form>
      </div>
    </section>
  );
}

/* ---------- Instagram ----------
   Composant non monté par <App /> : il n'apparaît pas sur le site, et l'audit du 28/08
   ne le couvre donc pas. Ses identifiants sont encore ceux de l'ancienne marque
   (@LeZenithCasablanca) : à mettre à jour — ou à supprimer — avant toute réactivation. */
function Instagram() {
  /* 5 slots — remplacer chaque <div className="ig__img"> par une vraie <img src="..." /> */
  return (
    <section className="ig" id="instagram">
      <div className="ig__inner">

        {/* — Info gauche — */}
        <div className="ig__info">
          <svg className="ig__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="62" height="62" stroke="currentColor" strokeWidth="1.4"/>
            <rect x="16" y="16" width="32" height="32" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="1"  y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="48" y1="32" x2="63" y2="32" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="32" y1="1"  x2="32" y2="16" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="32" y1="48" x2="32" y2="63" stroke="currentColor" strokeWidth="1.4"/>
            <circle cx="32" cy="32" r="7" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="1"  y1="1"  x2="16" y2="16" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="63" y1="1"  x2="48" y2="16" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="1"  y1="63" x2="16" y2="48" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="63" y1="63" x2="48" y2="48" stroke="currentColor" strokeWidth="1.4"/>
          </svg>
          <h2 className="ig__title">Inspiré<br/>par vous</h2>
          <div className="ig__handles">
            <p className="ig__handle">@LeZenithCasablanca</p>
            <p className="ig__hash">#LeZenithSpa</p>
            <p className="ig__hash">#ZenithCasablanca</p>
          </div>
        </div>

        {/* — Grille masonry décalée — */}
        <div className="ig__grid">

          {/* Colonne 1 — grande image portrait, décalée vers le bas */}
          <div className="ig__col ig__col--1">
            <div className="ig__ph">
              <div className="ig__img" />
            </div>
          </div>

          {/* Colonne 2 — 2 images empilées */}
          <div className="ig__col ig__col--2">
            <div className="ig__ph">
              <div className="ig__img" />
            </div>
            <div className="ig__ph ig__ph--badge">
              <div className="ig__img" />
              <div className="ig__insta-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Colonne 3 — 2 images empilées, légèrement décalées */}
          <div className="ig__col ig__col--3">
            <div className="ig__ph">
              <div className="ig__img" />
            </div>
            <div className="ig__ph">
              <div className="ig__img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer({ lang, season }) {
  const tr = T[lang]||T.fr;
  return (
    <footer className="ft">
      <div className="ft__top">
        <div className="ft__brand">
          <div style={{marginBottom:'8px'}}>
            <img src="assets/Logo vec.png" height="200" alt="The White Valley" className="ft__logo-img" style={{display:'block'}} />
          </div>
          <p>{tr.ftTagline}</p>
        </div>
        {/* Audit 28/08 · points 21 et 22 : Galerie, Carrières, Presse et FAQ retirées
            (aucune page ni contenu derrière). Les entrées sans destination réelle sont
            rendues en texte, pas en lien mort. */}
        <div className="ft__cols">
          {tr.ftCols.map(c => (
            <div key={c.t}>
              <h4>{c.t}</h4>
              {c.l.map(it => {
                if (it.to) return (
                  <a key={it.x} href={`#${it.to}`}
                     onClick={e => { e.preventDefault();
                       const el = document.getElementById(it.to);
                       if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>{it.x}</a>
                );
                if (it.href) return <a key={it.x} href={it.href}>{it.x}</a>;
                return <span key={it.x} className="ft__static">{it.x}</span>;
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="ft__bottom">
        <span>{tr.ftCopy}</span>
        <span className="ft__dests">
          <span>Ifrane</span><em>·</em><span>Moyen Atlas</span><em>·</em><span>Maroc</span>
        </span>
        <span>FR · EN</span>
      </div>
    </footer>
  );
}

/* ---------- Bandeau de réassurance (unique) ----------
   Audit 28/08 · points 5 et 7 : un seul bandeau, six mentions toutes confirmées, et un
   contrôle de pause — un défilement automatique doit pouvoir être arrêté (accessibilité).
   Il se met aussi en pause au survol et au focus clavier (voir styles.css).            */
function Reperes({ lang }) {
  const tr = T[lang]||T.fr;
  const items = tr.reperes;
  const [paused, setPaused] = useState(false);
  return (
    <div className={`reperes${paused ? ' is-paused' : ''}`}>
      <div className="reperes__track">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="reperes__item">
            <span className="reperes__gem">✦</span>
            <span className="reperes__txt">{it}</span>
          </span>
        ))}
      </div>
      <button type="button" className="reperes__pause"
        onClick={() => setPaused(p => !p)}
        aria-pressed={paused}
        aria-label={paused ? tr.reperesPlay : tr.reperesPause}>
        {paused ? '▶' : '❚❚'}
      </button>
    </div>
  );
}

/* ---------- Dernier appel ---------- */
function DernierAppel({ lang, onBook }) {
  const tr = T[lang]||T.fr;
  return (
    <section className="call">
      <div className="call__inner">
        <h2 className="call__title h-display">{tr.callTitle}</h2>
        {/* Audit 28/08 · bloc 9 : un seul bouton, le séminaire passe en lien discret. */}
        <div className="call__cta call__cta--single">
          <button className="btn btn--primary" onClick={onBook}>{tr.heroCta1}</button>
        </div>
        {/* Pas de variante --light ici : le fond de la section suit le thème, le lien
            doit donc prendre la couleur de texte du thème (noir en thème clair). */}
        <a href="#experiences" className="quote-link">{tr.heroCta2} <span>→</span></a>
      </div>
    </section>
  );
}

/* ---------- Quatre saisons ---------- */
function Saisons({ lang, onBook }) {
  const tr = T[lang]||T.fr;
  return (
    <section className="seasons" id="seasons">
      <div className="seasons__head">
        <p className="eyebrow"><span className="eyebrow__dot" />{tr.saisonsEye}</p>
        <h2 className="h-display">{tr.saisonsH2}</h2>
      </div>
      <div className="seasons__grid">
          {tr.saisons.map((s, i) => (
          <article key={i} className="season">
            <div className="season__media">
              <Placeholder label={`${s.name.toLowerCase()} · ifrane`} tone={s.tone} aspect="3/4" />
            </div>
            <div className="season__body">
              <div className="season__row">
                <h3 className="season__name">{s.name}</h3>
                <span className="season__period">{s.period}</span>
              </div>
              <p className="season__txt">{s.txt}</p>
            </div>
          </article>
          ))}
      </div>
      <div className="seasons__cta">
        <button className="btn btn--primary" onClick={onBook}>{tr.saisonsBtn}</button>
      </div>
    </section>
  );
}

Object.assign(window, {
  SplashScreen, Rail, WhiteValleyLogo, Nav, Hero, BookingBar, HotelRunnerModal, Intro, Rooms, Experiences, Destinations, Newsletter, Instagram, Footer, Placeholder, Reperes, DernierAppel, Saisons, openBooking
});
