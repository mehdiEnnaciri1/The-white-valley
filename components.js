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
  }, "L'\xE9l\xE9gance \xE0 l'\xE9tat pure"));
}
const {
  useState,
  useEffect,
  useRef
} = React;

/* ── Translations ── */
const T = {
  fr: {
    menu: 'Menu',
    close: 'Fermer',
    tagline: "L'élégance à l'état pure",
    book: 'Réserver',
    dHotel: "L'hôtel",
    dPresent: 'Présentation',
    dGallery: 'Galerie Instagram',
    dLocal: 'Localisation',
    dSejour: 'Séjourner',
    dStd: 'Chambres Standard',
    dSup: 'Chambres Supérieures',
    dSuite: 'Suites Exécutives',
    dOffres: 'Offres & forfaits',
    dSpa: 'Restauration & Spa',
    dResto: 'Restaurant principal',
    dBar: 'Bar-Lounge',
    dHammam: 'Spa & Hammam',
    dPool: 'Piscine intérieure',
    dBook: 'Réserver',
    dDispo: 'Vérifier disponibilité',
    dContact: 'Nous contacter',
    dEvents: 'Événements & Mariages',
    dRoom: 'Salles de réunion',
    heroEyeSplit: 'CASABLANCA · MAROC · HAY HASSANI',
    heroEteA: 'La fraîcheur',
    heroEteB: 'estivale,',
    heroEteC: "au cœur d'Ifrane.",
    heroHivA: "L'élégance",
    heroHivB: 'hivernale,',
    heroHivC: "au cœur d'Ifrane.",
    heroLedeSplit: "Hôtel 4 étoiles, 230 chambres climatisées, spa & piscine intérieure. À deux pas d'Oued Bouskoura, 15 minutes de l'aéroport Mohammed V et du centre-ville.",
    heroCta1: 'Découvrir les chambres',
    heroCta2: "L'hôtel",
    heroMetaCat: 'Catégorie',
    heroMetaCatV: 'Hôtel 4 étoiles · Spa',
    heroMetaTel: 'Téléphone',
    heroEyeFull: "THE WHITE VALLEY · L'ÉLÉGANCE À L'ÉTAT PURE",
    heroLedeFull: '230 chambres · Spa & Hammam · Piscine intérieure',
    marquee: ['4 ÉTOILES', 'SPA & HAMMAM', 'PISCINE INTÉRIEURE', 'WIFI GRATUIT', 'NAVETTE AÉROPORT', 'SALLE DE BANQUET', 'PARKING PRIVÉ'],
    introEye: "L'HÔTEL",
    introH2: "Un établissement 4 étoiles à l'écart de l'agitation, au plus près de la ville.",
    introP1a: "Le Zénith Hôtel & Spa s'étend sur 5 étages et 230 chambres climatisées, à l'angle de la Route d'El Jadida et de Lissasfa. À",
    introP1em: "5 minutes à pied",
    introP1b: "d'Oued Bouskoura, 15 minutes en voiture du centre-ville et de l'aéroport Mohammed V.",
    introP2: "Chambres insonorisées avec balcon et terrasse, mini-bar et bureau. Deux restaurants, un bar-lounge, un coffee shop, un spa avec hammam, sauna et piscine intérieure. Salle de banquet et salles de réunion pour vos événements professionnels.",
    introLink: 'Découvrir les chambres',
    bbArrivee: 'ARRIVÉE',
    bbDepart: 'DÉPART',
    bbVoyageurs: 'VOYAGEURS',
    bbGuests: '2 adultes · 1 chambre',
    bbSubmit: 'Vérifier disponibilité',
    bbLocale: 'fr-FR',
    roomsEye: 'HÉBERGEMENTS',
    roomsH2: 'Chambres, suites & résidences',
    tabs: ['Tous', 'Chambre', 'Suite'],
    tabAll: 'Tous',
    rSurface: 'Surface',
    rVue: 'Vue',
    rLit: 'Literie',
    rFrom: 'À partir de',
    rNight: '/ nuit',
    rBook: 'Réserver',
    rDisc: 'Découvrir',
    rFav: 'Favori',
    rooms: [{
      name: 'Chambre Standard',
      type: 'Chambre',
      size: 22,
      view: 'Vue ville',
      bed: 'Double',
      price: 740,
      tone: 'warm',
      tag: 'Populaire',
      desc: "Climatisation, salle de bain privée, TV satellite, téléphone, coffre-fort. Confort essentiel pour voyageurs d'affaires."
    }, {
      name: 'Chambre Twin',
      type: 'Chambre',
      size: 24,
      view: 'Vue ville',
      bed: '2 lits simples',
      price: 780,
      tone: 'stone',
      tag: null,
      desc: "Deux lits simples, fenêtres insonorisées, mini-frigo, WiFi haut débit. Idéale pour les déplacements à deux."
    }, {
      name: 'Chambre Supérieure',
      type: 'Chambre',
      size: 28,
      view: 'Balcon',
      bed: 'Queen',
      price: 890,
      tone: 'brass',
      tag: null,
      desc: "Balcon privatif, bureau de travail, mini-bar, espace étendu. Lumière naturelle et fenêtres insonorisées."
    }, {
      name: 'Chambre Deluxe',
      type: 'Chambre',
      size: 32,
      view: 'Terrasse',
      bed: 'King',
      price: 990,
      tone: 'sage',
      tag: 'Recommandée',
      desc: "Terrasse privative, peignoirs, toilettes séparées. Le bon équilibre entre confort et superficie."
    }, {
      name: 'Suite Junior',
      type: 'Suite',
      size: 42,
      view: 'Balcon & salon',
      bed: 'King',
      price: 1320,
      tone: 'warm',
      tag: null,
      desc: "Coin salon séparé, balcon spacieux, deuxième TV. Pour les séjours plus longs ou en famille."
    }, {
      name: 'Suite Exécutive',
      type: 'Suite',
      size: 55,
      view: 'Terrasse panoramique',
      bed: 'King',
      price: 1680,
      tone: 'brass',
      tag: 'Signature',
      desc: "Salon séparé, terrasse panoramique, accès prioritaire au spa et petit-déjeuner inclus en chambre."
    }],
    expEye: 'SERVICES & INSTALLATIONS',
    expH2: 'Tout pour votre séjour.',
    exps: [{
      idx: '01',
      title: 'Restaurants',
      sub: 'Deux restaurants sur place et un coffee shop. Cuisine marocaine et internationale.',
      tone: 'warm'
    }, {
      idx: '02',
      title: 'Spa & Hammam',
      sub: 'Hammam traditionnel, sauna, soins du visage, gommage, manucure et pédicure.',
      tone: 'sage'
    }, {
      idx: '03',
      title: 'Piscine & Fitness',
      sub: 'Piscine intérieure chauffée, salle de sport équipée, vestiaires privatifs.',
      tone: 'brass'
    }, {
      idx: '04',
      title: 'Affaires',
      sub: 'Salle de banquet, salles de réunion, service de location de voiture et navette.',
      tone: 'stone'
    }],
    destEye: 'LOCALISATION & CONTACT',
    destH2: 'Nous trouver.',
    destCard: 'LE ZÉNITH · CASABLANCA',
    destRooms: 'Chambres',
    destFloors: 'Étages',
    destCoord: 'Coordonnées',
    dests: [{
      city: 'Hôtel',
      region: "Route d'El Jadida, Angle 1077 Lissasfa",
      rooms: 230,
      since: 2005,
      tone: 'warm',
      coord: '33.55°N · 7.67°W',
      desc: "Route d'El Jadida, Angle 1077 Lissasfa, Casablanca 20000, Maroc."
    }, {
      city: 'Téléphone',
      region: '+212 522-894949',
      rooms: 230,
      since: 2005,
      tone: 'brass',
      coord: 'Fax : +212 22-894950',
      desc: 'Standard 24h/24 · Réservations, conciergerie, navette aéroport.'
    }, {
      city: 'À proximité',
      region: 'Hay Hassani · Sidi Maarouf',
      rooms: 230,
      since: 2005,
      tone: 'stone',
      coord: 'Oued Bouskoura · 5 min',
      desc: 'Aéroport Mohammed V à 29 km · Palais Royal à 8 km · Musée du Judaïsme marocain à 25 min.'
    }, {
      city: 'Transports',
      region: 'Tramway · Bus · Navette',
      rooms: 230,
      since: 2005,
      tone: 'sage',
      coord: 'Arrêt Azbane · 10 min',
      desc: "Arrêt Azbane à 10 min · Gare Oasis à 3,7 km · Navette aéroport Mohammed V sur demande."
    }],
    editoEye: 'ON EN PARLE',
    quotes: [{
      src: "Voyageurs d'affaires",
      txt: "Emplacement pratique à 15 minutes de l'aéroport Mohammed V, chambres insonorisées et WiFi rapide."
    }, {
      src: 'Couples en séjour',
      txt: 'Le spa avec hammam et la piscine intérieure restent les atouts les plus appréciés de la maison.'
    }, {
      src: 'Long séjour',
      txt: 'Chambres spacieuses avec balcon et terrasse. Le personnel est attentif, la literie confortable.'
    }],
    nlEye: 'RESTEZ INFORMÉ',
    nlH2: 'Nos offres & forfaits.',
    nlDesc: "Promotions saisonnières, forfaits spa, tarifs affaires et événements de l'hôtel. Une lettre par mois, pas plus.",
    nlLabel: 'Adresse e-mail',
    nlPH: 'vous@exemple.com',
    nlBtn: "S'inscrire",
    nlSent: '✓ Inscrit',
    ftTagline: "L'élégance à l'état pure · Maroc",
    ftCopy: "© 2026 The White Valley · L'élégance à l'état pure. Tous droits réservés.",
    ftCols: [{
      t: "L'hôtel",
      l: ['Présentation', 'Galerie photos', 'Localisation', 'Avis clients', 'Contact']
    }, {
      t: 'Séjourner',
      l: ['Chambres Standard', 'Chambres Supérieures', 'Suites', 'Offres & forfaits', 'Groupes']
    }, {
      t: 'Services',
      l: ['Restaurants', 'Bar-Lounge', 'Spa & Hammam', 'Piscine', 'Salle de sport']
    }, {
      t: 'Assistance',
      l: ['+212 522-894949', 'Navette aéroport', 'FAQ', 'Mentions légales', 'Politique de cookies']
    }]
  },
  en: {
    menu: 'Menu',
    close: 'Close',
    tagline: 'Elegance in its purest form',
    book: 'Book',
    dHotel: 'The Hotel',
    dPresent: 'About',
    dGallery: 'Instagram Gallery',
    dLocal: 'Location',
    dSejour: 'Stay',
    dStd: 'Standard Rooms',
    dSup: 'Superior Rooms',
    dSuite: 'Executive Suites',
    dOffres: 'Offers & packages',
    dSpa: 'Dining & Spa',
    dResto: 'Main Restaurant',
    dBar: 'Bar-Lounge',
    dHammam: 'Spa & Hammam',
    dPool: 'Indoor Pool',
    dBook: 'Book',
    dDispo: 'Check availability',
    dContact: 'Contact us',
    dEvents: 'Events & Weddings',
    dRoom: 'Meeting rooms',
    heroEyeSplit: 'CASABLANCA · MOROCCO · HAY HASSANI',
    heroEteA: 'Summer',
    heroEteB: 'freshness,',
    heroEteC: "in the heart of Ifrane.",
    heroHivA: 'Winter',
    heroHivB: 'elegance,',
    heroHivC: "in the heart of Ifrane.",
    heroLedeSplit: "4-star hotel, 230 air-conditioned rooms, spa & indoor pool. Steps from Oued Bouskoura, 15 minutes from Mohammed V Airport and the city centre.",
    heroCta1: 'Discover the rooms',
    heroCta2: 'The hotel',
    heroMetaCat: 'Category',
    heroMetaCatV: '4-star hotel · Spa',
    heroMetaTel: 'Phone',
    heroEyeFull: 'THE WHITE VALLEY · ELEGANCE IN ITS PUREST FORM',
    heroLedeFull: '230 rooms · Spa & Hammam · Indoor pool',
    marquee: ['4 STARS', 'SPA & HAMMAM', 'INDOOR POOL', 'FREE WIFI', 'AIRPORT SHUTTLE', 'BANQUET HALL', 'PRIVATE PARKING'],
    introEye: 'THE HOTEL',
    introH2: 'A 4-star establishment away from the bustle, yet close to the city.',
    introP1a: "Le Zénith Hotel & Spa spans 5 floors and 230 air-conditioned rooms, at the corner of Route d'El Jadida and Lissasfa. A",
    introP1em: '5-minute walk',
    introP1b: "from Oued Bouskoura, 15 minutes by car from the city centre and Mohammed V Airport.",
    introP2: "Soundproofed rooms with balcony and terrace, minibar and desk. Two restaurants, a bar-lounge, a coffee shop, a spa with hammam, sauna and indoor pool. Banquet hall and meeting rooms for your professional events.",
    introLink: 'Discover the rooms',
    bbArrivee: 'CHECK-IN',
    bbDepart: 'CHECK-OUT',
    bbVoyageurs: 'GUESTS',
    bbGuests: '2 adults · 1 room',
    bbSubmit: 'Check availability',
    bbLocale: 'en-GB',
    roomsEye: 'ACCOMMODATIONS',
    roomsH2: 'Rooms, suites & residences',
    tabs: ['All', 'Room', 'Suite'],
    tabAll: 'All',
    rSurface: 'Size',
    rVue: 'View',
    rLit: 'Bedding',
    rFrom: 'From',
    rNight: '/ night',
    rBook: 'Book',
    rDisc: 'Discover',
    rFav: 'Favourite',
    rooms: [{
      name: 'Standard Room',
      type: 'Room',
      size: 22,
      view: 'City view',
      bed: 'Double',
      price: 740,
      tone: 'warm',
      tag: 'Popular',
      desc: "Air conditioning, private bathroom, satellite TV, telephone, safe. Essential comfort for business travellers."
    }, {
      name: 'Twin Room',
      type: 'Room',
      size: 24,
      view: 'City view',
      bed: '2 single beds',
      price: 780,
      tone: 'stone',
      tag: null,
      desc: "Two single beds, soundproofed windows, mini-fridge, high-speed WiFi. Ideal for two-person business trips."
    }, {
      name: 'Superior Room',
      type: 'Room',
      size: 28,
      view: 'Balcony',
      bed: 'Queen',
      price: 890,
      tone: 'brass',
      tag: null,
      desc: "Private balcony, work desk, minibar, extended space. Natural light and soundproofed windows."
    }, {
      name: 'Deluxe Room',
      type: 'Room',
      size: 32,
      view: 'Terrace',
      bed: 'King',
      price: 990,
      tone: 'sage',
      tag: 'Recommended',
      desc: "Private terrace, bathrobes, separate toilet. The perfect balance between comfort and space."
    }, {
      name: 'Junior Suite',
      type: 'Suite',
      size: 42,
      view: 'Balcony & lounge',
      bed: 'King',
      price: 1320,
      tone: 'warm',
      tag: null,
      desc: "Separate lounge area, spacious balcony, second TV. Perfect for longer stays or families."
    }, {
      name: 'Executive Suite',
      type: 'Suite',
      size: 55,
      view: 'Panoramic terrace',
      bed: 'King',
      price: 1680,
      tone: 'brass',
      tag: 'Signature',
      desc: "Separate lounge, panoramic terrace, priority spa access and in-room breakfast included."
    }],
    expEye: 'SERVICES & FACILITIES',
    expH2: 'Everything for your stay.',
    exps: [{
      idx: '01',
      title: 'Restaurants',
      sub: 'Two on-site restaurants and a coffee shop. Moroccan and international cuisine.',
      tone: 'warm'
    }, {
      idx: '02',
      title: 'Spa & Hammam',
      sub: 'Traditional hammam, sauna, facial treatments, scrub, manicure and pedicure.',
      tone: 'sage'
    }, {
      idx: '03',
      title: 'Pool & Fitness',
      sub: 'Heated indoor pool, fully equipped gym, private changing rooms.',
      tone: 'brass'
    }, {
      idx: '04',
      title: 'Business',
      sub: 'Banquet hall, meeting rooms, car rental service and airport shuttle.',
      tone: 'stone'
    }],
    destEye: 'LOCATION & CONTACT',
    destH2: 'Find us.',
    destCard: 'LE ZÉNITH · CASABLANCA',
    destRooms: 'Rooms',
    destFloors: 'Floors',
    destCoord: 'Coordinates',
    dests: [{
      city: 'Hotel',
      region: "Route d'El Jadida, Angle 1077 Lissasfa",
      rooms: 230,
      since: 2005,
      tone: 'warm',
      coord: '33.55°N · 7.67°W',
      desc: "Route d'El Jadida, Angle 1077 Lissasfa, Casablanca 20000, Morocco."
    }, {
      city: 'Phone',
      region: '+212 522-894949',
      rooms: 230,
      since: 2005,
      tone: 'brass',
      coord: 'Fax: +212 22-894950',
      desc: '24/7 reception · Reservations, concierge, airport shuttle.'
    }, {
      city: 'Nearby',
      region: 'Hay Hassani · Sidi Maarouf',
      rooms: 230,
      since: 2005,
      tone: 'stone',
      coord: 'Oued Bouskoura · 5 min',
      desc: 'Mohammed V Airport 29 km · Royal Palace 8 km · Museum of Moroccan Judaism 25 min.'
    }, {
      city: 'Transport',
      region: 'Tram · Bus · Shuttle',
      rooms: 230,
      since: 2005,
      tone: 'sage',
      coord: 'Azbane stop · 10 min',
      desc: "Azbane stop 10 min · Oasis station 3.7 km · Mohammed V Airport shuttle on request."
    }],
    editoEye: 'WHAT GUESTS SAY',
    quotes: [{
      src: 'Business travellers',
      txt: 'Convenient location, 15 minutes from Mohammed V Airport, soundproofed rooms and fast WiFi.'
    }, {
      src: 'Couples',
      txt: 'The spa with hammam and the indoor pool remain the most appreciated features of the hotel.'
    }, {
      src: 'Extended stays',
      txt: 'Spacious rooms with balcony and terrace. Attentive staff and comfortable bedding.'
    }],
    nlEye: 'STAY INFORMED',
    nlH2: 'Our offers & packages.',
    nlDesc: "Seasonal promotions, spa packages, business rates and hotel events. One newsletter per month, no more.",
    nlLabel: 'Email address',
    nlPH: 'you@example.com',
    nlBtn: 'Subscribe',
    nlSent: '✓ Subscribed',
    ftTagline: 'Elegance in its purest form · Morocco',
    ftCopy: '© 2026 The White Valley · Elegance in its purest form. All rights reserved.',
    ftCols: [{
      t: 'The Hotel',
      l: ['About', 'Photo Gallery', 'Location', 'Guest Reviews', 'Contact']
    }, {
      t: 'Stay',
      l: ['Standard Rooms', 'Superior Rooms', 'Suites', 'Offers & packages', 'Groups']
    }, {
      t: 'Services',
      l: ['Restaurants', 'Bar-Lounge', 'Spa & Hammam', 'Pool', 'Fitness Centre']
    }, {
      t: 'Assistance',
      l: ['+212 522-894949', 'Airport shuttle', 'FAQ', 'Legal notice', 'Cookie policy']
    }]
  }
};

/* ── HotelRunner ── URL du moteur de réservation */
const HR_BOOKING_URL = {
  fr: 'https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?currency=MAD&locale=fr-FR',
  en: 'https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?currency=MAD&locale=en-US'
};

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

/* ---------- HotelRunner Modal ---------- */
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
  const L = lc === 'en' ? {
    title: 'Book your stay',
    sub: 'The White Valley · Casablanca',
    note: 'Flexible cancellation · Check-in from 3 PM',
    feats: ['230 air-conditioned rooms', 'Spa & Hammam · Indoor pool', '4-star · Casablanca'],
    cta: 'Book on HotelRunner',
    ctaSub: 'Secure booking · Official rates'
  } : {
    title: 'Réservez votre séjour',
    sub: 'The White Valley · Casablanca',
    note: 'Annulation flexible · Arrivée dès 15h00',
    feats: ['230 chambres climatisées', 'Spa & Hammam · Piscine intérieure', '4 étoiles · Casablanca'],
    cta: 'Réserver sur HotelRunner',
    ctaSub: 'Réservation sécurisée · Tarifs officiels'
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
    "aria-label": "Fermer"
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
  }, "\u2726"), f))), /*#__PURE__*/React.createElement("a", {
    href: HR_BOOKING_URL[lc] || HR_BOOKING_URL.fr,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bp__book-btn",
    onClick: onClose
  }, L.cta, /*#__PURE__*/React.createElement("span", null, "\u2197")), /*#__PURE__*/React.createElement("p", {
    className: "bp__book-sub"
  }, L.ctaSub)), /*#__PURE__*/React.createElement("div", {
    className: "bp__foot"
  }, /*#__PURE__*/React.createElement("p", null, L.note))));
}
/* ---------- Booking bar — formulaire natif → HotelRunner nouvel onglet ---------- */
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
  const [rooms, setRooms] = useState(1);
  const inRef = useRef(null);
  const outRef = useRef(null);
  const selRef = useRef(null);
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
  const gL = n => `${n} ${n === 1 ? lc === 'en' ? 'adult' : 'adulte' : lc === 'en' ? 'adults' : 'adultes'}`;
  const rL = n => `${n} ${n === 1 ? lc === 'en' ? 'room' : 'chambre' : lc === 'en' ? 'rooms' : 'chambres'}`;
  const handleSubmit = e => {
    e.preventDefault();

    /* Nombre de nuits */
    const msPerDay = 86400000;
    const dayCount = Math.max(1, Math.round((new Date(checkOut + 'T12:00:00') - new Date(checkIn + 'T12:00:00')) / msPerDay));

    /* Répartir les adultes équitablement entre les chambres */
    const base = Math.floor(adults / rooms);
    const extra = adults % rooms;
    const roomsArr = Array.from({
      length: rooms
    }, (_, i) => {
      const a = base + (i < extra ? 1 : 0);
      return {
        adult_count: a,
        child_count: 0,
        guest_count: a,
        child_ages: []
      };
    });
    const guestRooms = {};
    roomsArr.forEach((r, i) => {
      guestRooms[String(i)] = {
        ...r
      };
    });
    const search = JSON.stringify({
      checkin_date: checkIn,
      checkout_date: checkOut,
      day_count: dayCount,
      room_count: rooms,
      total_adult: adults,
      total_child: 0,
      rooms: roomsArr,
      guest_rooms: guestRooms
    });
    window.open(`https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?search=${encodeURIComponent(search)}`, '_blank', 'noopener');
  };
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
    className: "bb__field",
    style: {
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb__label"
  }, tr.bbVoyageurs), /*#__PURE__*/React.createElement("span", {
    className: "bb__value"
  }, rL(rooms), " \xB7 ", gL(adults)), /*#__PURE__*/React.createElement("select", {
    ref: selRef,
    className: "bb__select-overlay",
    value: `${rooms}|${adults}`,
    onChange: e => {
      const [r, a] = e.target.value.split('|');
      setRooms(+r);
      setAdults(+a);
    }
  }, [1, 2, 3].flatMap(r => [1, 2, 3, 4].map(a => /*#__PURE__*/React.createElement("option", {
    key: `${r}|${a}`,
    value: `${r}|${a}`
  }, rL(r), " \xB7 ", gL(a)))))), /*#__PURE__*/React.createElement("button", {
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
  }, "L'\xE9l\xE9gance \xE0 l'\xE9tat pure")));
}

/* ---------- Season Toggle ---------- */
function SeasonToggle({
  season,
  onSeason
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "season-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: `season-toggle__btn${season === 'ete' ? ' season-toggle__btn--active' : ''}`,
    onClick: () => onSeason('ete'),
    "aria-label": "\xC9t\xE9"
  }, "\u2600"), /*#__PURE__*/React.createElement("button", {
    className: `season-toggle__btn${season === 'hiver' ? ' season-toggle__btn--active' : ''}`,
    onClick: () => onSeason('hiver'),
    "aria-label": "Hiver"
  }, "\u2744"));
}

/* ---------- Back to Top ---------- */
function BackToTop() {
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
    "aria-label": "Retour en haut"
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
  const navLinks = [{
    label: 'Chambres',
    id: 'rooms'
  }, {
    label: 'Expériences',
    id: 'experiences'
  }, {
    label: 'Instagram',
    id: 'instagram'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `nav ${scrolled ? 'is-scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav__menu",
    onClick: () => setMenuOpen(!menuOpen)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("em", null, menuOpen ? (T[lang] || T.fr).close : (T[lang] || T.fr).menu)), /*#__PURE__*/React.createElement("a", {
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
    className: "nav__action",
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
    "aria-label": "Fermer le menu"
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
      onClick: () => scrollTo('instagram')
    }, tr.dGallery), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('contact')
    }, tr.dLocal)), /*#__PURE__*/React.createElement("div", {
      className: "nav__drawer-col"
    }, /*#__PURE__*/React.createElement("em", null, tr.dSejour), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dStd), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dSup), /*#__PURE__*/React.createElement("a", {
      onClick: () => scrollTo('rooms')
    }, tr.dSuite), /*#__PURE__*/React.createElement("a", {
      onClick: onBook
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
      onClick: onBook
    }, tr.dRoom)));
  })()))), /*#__PURE__*/React.createElement(SeasonToggle, {
    season: season,
    onSeason: onSeason
  }), /*#__PURE__*/React.createElement(BackToTop, null));
}

/* ---------- Hero ---------- */
function Hero({
  variant,
  season,
  lang
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const scenes = [{
    label: 'facade hotel 4 etoiles casablanca',
    tone: 'warm'
  }, {
    label: 'chambre climatisee balcon',
    tone: 'brass'
  }, {
    label: 'spa piscine interieure',
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
      className: "hero__cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#rooms",
      className: "btn btn--primary"
    }, tr.heroCta1), /*#__PURE__*/React.createElement("a", {
      href: "#story",
      className: "btn btn--ghost"
    }, tr.heroCta2, " ", /*#__PURE__*/React.createElement("span", null, "\u2192"))), /*#__PURE__*/React.createElement("dl", {
      className: "hero__meta"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.heroMetaCat), /*#__PURE__*/React.createElement("dd", null, tr.heroMetaCatV)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.heroMetaTel), /*#__PURE__*/React.createElement("dd", null, "+212 522-894949")))), /*#__PURE__*/React.createElement("div", {
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
    alt: ""
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
  }, tr.heroLedeFull)));
}
/* ---------- Marquee ---------- */
function Marquee({
  lang
}) {
  const items = (T[lang] || T.fr).marquee;
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee__track"
  }, [...items, ...items, ...items].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "marquee__item"
  }, t, /*#__PURE__*/React.createElement("span", {
    className: "marquee__sep"
  }, "\u25C6")))));
}

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
  }, /*#__PURE__*/React.createElement("p", null, tr.introP1a, " ", /*#__PURE__*/React.createElement("em", null, tr.introP1em), " ", tr.introP1b), /*#__PURE__*/React.createElement("p", null, tr.introP2), /*#__PURE__*/React.createElement("a", {
    href: "#rooms",
    className: "link-arrow"
  }, tr.introLink, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")))));
}
function Rooms({
  onBook,
  lang
}) {
  const tr = T[lang] || T.fr;
  const [filterIdx, setFilterIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);
  useEffect(() => {
    setFilterIdx(0);
  }, [lang]);
  const groups = [tr.rooms, tr.rooms.filter(r => r.type === tr.tabs[1]), tr.rooms.filter(r => r.type === tr.tabs[2])];
  const visible = groups[filterIdx];
  return /*#__PURE__*/React.createElement("section", {
    className: "rooms",
    id: "rooms"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rooms__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.roomsEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display"
  }, tr.roomsH2)), /*#__PURE__*/React.createElement("div", {
    className: "rooms__filter"
  }, tr.tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: `chip ${filterIdx === i ? 'is-active' : ''}`,
    onClick: () => setFilterIdx(i)
  }, t, /*#__PURE__*/React.createElement("span", {
    className: "chip__count"
  }, groups[i].length))))), /*#__PURE__*/React.createElement("div", {
    className: "rooms__grid"
  }, visible.map((r, i) => /*#__PURE__*/React.createElement("article", {
    key: r.name,
    className: `room ${hoverIdx === i ? 'is-hover' : ''}`,
    onMouseEnter: () => setHoverIdx(i),
    onMouseLeave: () => setHoverIdx(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "room__media"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: `${r.name.toLowerCase()} · ${r.view.toLowerCase()}`,
    tone: r.tone,
    aspect: "4/5"
  }), r.tag && /*#__PURE__*/React.createElement("span", {
    className: "room__tag"
  }, r.tag), /*#__PURE__*/React.createElement("button", {
    className: "room__fav",
    "aria-label": "Favori"
  }, "\u2661"), /*#__PURE__*/React.createElement("div", {
    className: "room__hover"
  }, /*#__PURE__*/React.createElement("span", null, tr.rDisc, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "room__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "room__row"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "room__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "room__type"
  }, r.type)), /*#__PURE__*/React.createElement("p", {
    className: "room__desc"
  }, r.desc), /*#__PURE__*/React.createElement("dl", {
    className: "room__specs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.rSurface), /*#__PURE__*/React.createElement("dd", null, r.size, " m\xB2")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.rVue), /*#__PURE__*/React.createElement("dd", null, r.view)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.rLit), /*#__PURE__*/React.createElement("dd", null, r.bed))), /*#__PURE__*/React.createElement("div", {
    className: "room__foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "room__from"
  }, tr.rFrom), /*#__PURE__*/React.createElement("span", {
    className: "room__price"
  }, r.price.toLocaleString('fr-FR'), " MAD"), /*#__PURE__*/React.createElement("span", {
    className: "room__night"
  }, tr.rNight)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--dark btn--sm",
    onClick: onBook
  }, tr.rBook)))))));
}

/* ---------- Experience strip ---------- */
function Experiences({
  lang
}) {
  const tr = T[lang] || T.fr;
  return /*#__PURE__*/React.createElement("section", {
    className: "exp",
    id: "experiences"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp__head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.expEye), /*#__PURE__*/React.createElement("h2", {
    className: "h-display"
  }, tr.expH2)), /*#__PURE__*/React.createElement("div", {
    className: "exp__grid"
  }, tr.exps.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.idx,
    className: "exp__item",
    href: "#"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: `expérience · ${it.title.toLowerCase()}`,
    tone: it.tone,
    aspect: "1/1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "exp__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp__idx"
  }, it.idx), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.sub)), /*#__PURE__*/React.createElement("span", {
    className: "exp__arrow"
  }, "\u2197"))))));
}

/* ---------- Localisation & coordonnées ---------- */
function Destinations({
  lang
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
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "dest__preview"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: `casablanca · ${d.city.toLowerCase()}`,
    tone: d.tone,
    aspect: "auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dest__card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "dest__card-eyebrow"
  }, tr.destCard), /*#__PURE__*/React.createElement("h3", null, d.desc)), /*#__PURE__*/React.createElement("dl", {
    className: "dest__stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.destRooms), /*#__PURE__*/React.createElement("dd", null, d.rooms)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.destFloors), /*#__PURE__*/React.createElement("dd", null, "5")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tr.destCoord), /*#__PURE__*/React.createElement("dd", null, d.coord)))))));
}

/* ---------- Editorial / press ---------- */
function Editorial({
  lang
}) {
  const tr = T[lang] || T.fr;
  return /*#__PURE__*/React.createElement("section", {
    className: "edito"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edito__wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow eyebrow--light"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__dot"
  }), tr.editoEye), /*#__PURE__*/React.createElement("div", {
    className: "edito__grid"
  }, tr.quotes.map((q, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    className: "edito__q"
  }, /*#__PURE__*/React.createElement("span", {
    className: "edito__mark"
  }, "\""), /*#__PURE__*/React.createElement("blockquote", null, q.txt), /*#__PURE__*/React.createElement("figcaption", null, "\u2014 ", q.src))))));
}

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
    className: "nl"
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
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, tr.nlLabel), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: tr.nlPH,
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    disabled: sent
  }, sent ? tr.nlSent : tr.nlBtn))));
}

/* ---------- Instagram ---------- */
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
  }, /*#__PURE__*/React.createElement("h4", null, c.t), c.l.map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#"
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    className: "ft__bottom"
  }, /*#__PURE__*/React.createElement("span", null, tr.ftCopy), /*#__PURE__*/React.createElement("span", {
    className: "ft__dests"
  }, /*#__PURE__*/React.createElement("a", null, "Route d'El Jadida"), /*#__PURE__*/React.createElement("em", null, "\xB7"), /*#__PURE__*/React.createElement("a", null, "Lissasfa"), /*#__PURE__*/React.createElement("em", null, "\xB7"), /*#__PURE__*/React.createElement("a", null, "Casablanca 20000"), /*#__PURE__*/React.createElement("em", null, "\xB7"), /*#__PURE__*/React.createElement("a", null, "Maroc")), /*#__PURE__*/React.createElement("span", null, "FR \xB7 EN")));
}
Object.assign(window, {
  SplashScreen,
  WhiteValleyLogo,
  Nav,
  Hero,
  BookingBar,
  HotelRunnerModal,
  Marquee,
  Intro,
  Rooms,
  Experiences,
  Destinations,
  Editorial,
  Newsletter,
  Instagram,
  Footer,
  Placeholder
});
