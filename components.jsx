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
            fontSize="9.5" fill={sub} textAnchor="middle">L'élégance à l'état pure</text>
    </svg>
  );
}
const { useState, useEffect, useRef } = React;

/* ── Translations ── */
const T = {
  fr: {
    menu:'Menu', close:'Fermer', tagline:"L'élégance à l'état pure", book:'Réserver',
    dHotel:"L'Hôtel", dPresent:'Une parenthèse', dGallery:'Les résidences', dLocal:'Les Lettres de la Vallée',
    dSejour:'Hébergements', dStd:'Appartement TWIN', dSup:'Appartement SINGLE', dSuite:'Chambre', dOffres:'Suite Signature',
    dSpa:'Spa · Table · Séminaires', dResto:'Le spa', dBar:'La table', dHammam:'Les séminaires', dPool:'Quand venir',
    dBook:'Réserver', dDispo:'Réserver votre séjour', dContact:'Ifrane à portée', dEvents:'Devis séminaire', dRoom:"Plan d'accès",
    reperes:['74 résidences','1 650 m d\'altitude','Réception 24h/24','Spa · table · séminaires'],
    callTitle:'Votre parenthèse commence ici.',
    navExp:'Expériences', navSeasons:'Saisons', navNewsletter:'Newsletter', navIfrane:'Ifrane',
    navPhone:'Téléphone', navWhats:'WhatsApp',
    saisonsEye:'QUATRE SAISONS', saisonsH2:'Quatre saisons, une signature', saisonsBtn:'Quand venir',
    saisons:[
      {name:'Hiver',period:'décembre à mars',tone:'stone',txt:"Entre −5 °C la nuit et 8 °C le jour. La neige vient trois à six fois par hiver. Feu de cheminée, forêt de cèdres silencieuse, ski à vingt minutes quand la pente est blanche."},
      {name:'Printemps',period:'avril à mai',tone:'sage',txt:"La meilleure saison pour marcher. Les premières herbes sauvages, les amandes encore vertes, une lumière nette pour la photo. Notre saison favorite, en confidence."},
      {name:'Été',period:'juin à septembre',tone:'warm',txt:"Le refuge climatique. 14 °C la nuit, 28 °C le jour pendant que les villes étouffent. Les soirées se prennent dehors, la piscine reste chauffée à 29 °C."},
      {name:'Automne',period:'octobre à novembre',tone:'brass',txt:"Les forêts virent au cuivre, l'air sèche. Très peu de monde en semaine. La saison idéale pour une retraite ou un long week-end à deux, sans concurrence d'agenda."},
    ],
    heroEyeSplit:'THE WHITE VALLEY · IFRANE · MOYEN ATLAS',
    heroEteA:"L'appart'hôtel", heroEteB:"d'altitude", heroEteC:'à Ifrane.',
    heroHivA:"L'appart'hôtel", heroHivB:"d'altitude", heroHivC:'à Ifrane.',
    heroLedeSplit:"À 1 650 mètres, la vie reprend son souffle. 74 résidences, à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver.",
    heroCta1:'Réserver votre séjour', heroCta2:'Devis séminaire',
    heroMetaCat:'Format', heroMetaCatV:"Appart'hôtel d'altitude · 74 résidences", heroMetaTel:'Réception', heroMetaTelV:'Ouverte 24h/24',
    heroEyeFull:'THE WHITE VALLEY · IFRANE · MOYEN ATLAS',
    heroLedeFull:'À 1 650 mètres, la vie reprend son souffle.',
    marquee:['74 RÉSIDENCES','SPA & HAMMAM',"TABLE D'ALTITUDE",'SÉMINAIRES','PISCINE CHAUFFÉE 29°C','SKI À 20 MIN','RÉCEPTION 24H/24'],
    introEye:"L'HÔTEL", introH2:'Une parenthèse dans la vallée.',
    introP1a:'Ni un hôtel classique, ni une location :',
    introP1em:'quelque chose entre les deux.', introP1b:'Vous avez votre appartement, votre cuisine si vous le souhaitez, votre salon avec sa vue sur la vallée.',
    introP2:"Autour, ce qu'un bon hôtel sait faire : petit-déjeuner servi en chambre, spa réservé à 21h, table le soir au rez-de-chaussée, conciergerie qui gère les détails. Vous activez ce que vous voulez. Le reste se fait oublier. 74 résidences, à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver.",
    introLink:"Découvrir l'hôtel",
    bbArrivee:'ARRIVÉE', bbDepart:'DÉPART', bbVoyageurs:'VOYAGEURS',
    bbGuests:'2 adultes · 1 chambre', bbSubmit:'Vérifier disponibilité', bbLocale:'fr-FR',
    roomsEye:'HÉBERGEMENTS', roomsH2:"74 résidences, quatre façons d'habiter la vallée",
    roomsLede:"Le bon format n'est pas le plus grand. C'est celui qui correspond à votre séjour. Quatre formats, une seule signature : la même literie partout, la même attention, les mêmes services. Ce qui change, c'est le volume que vous habitez.",
    tabs:['Tous','Appartement','Chambre','Suite'], tabAll:'Tous',
    rSurface:'Surface', rCap:'Capacité', rKitchen:'Cuisine', rPriceNote:'Tarifs sur demande',
    rBook:'Réserver', rDisc:'Découvrir', rFav:'Favori',
    rooms:[
      {name:'Appartement TWIN',type:'Appartement',size:65,cap:'4 personnes',kitchen:'Kitchenette équipée',tone:'warm',tag:'4 pers.',desc:"Deux chambres, un salon commun, une kitchenette équipée. Pour deux couples amis, une famille d'adultes, une équipe de quatre."},
      {name:'Appartement SINGLE',type:'Appartement',size:45,cap:'2 personnes',kitchen:'Kitchenette équipée',tone:'sage',tag:'Le plus choisi',desc:"Une chambre, un vrai salon, la vue depuis le canapé. Le format que choisissent la plupart des couples qui nous écrivent."},
      {name:'Chambre',type:'Chambre',size:28,cap:'2 personnes',kitchen:'Aucune',tone:'stone',tag:null,desc:"Un grand lit, la même salle de bain et la même vue que les appartements, dans un format plus court. Pour une nuit, deux, ou un séminaire."},
      {name:'Suite Signature',type:'Suite',size:110,cap:'2 à 4 personnes',kitchen:'Cuisine complète',tone:'brass',tag:'Signature',desc:"Cuisine complète, terrasse privée, double salon. Notre suite la plus large, et la plus discrète."},
    ],
    expEye:'SPA · TABLE · SÉMINAIRES', expH2:'Le spa, la table, les séminaires.',
    exps:[
      {idx:'01',title:'Le spa',sub:"Cinq cabines, un hammam, un sauna, une piscine chauffée à 29 °C ouverte sur la vallée. Des soins pensés pour l'altitude. Pas de musique dans les couloirs.",tone:'sage'},
      {idx:'02',title:'La table',sub:"Une cuisine du Moyen Atlas en produits courts, midi et soir. Trois saveurs par assiette, une assiette qu'on finit. Une vingtaine de vins marocains à la carte.",tone:'warm'},
      {idx:'03',title:'Les séminaires',sub:"Salle de séminaire et de conférences, hébergement sur place, restauration, spa pour décompresser le soir. Un cadre à part pour une retraite de direction.",tone:'brass'},
    ],
    destEye:'IFRANE À PORTÉE DE MAIN', destH2:'Nous rejoindre.', destCard:'THE WHITE VALLEY · IFRANE', destBtn:"Plan d'accès",
    destRooms:'Altitude', destFloors:'Résidences', destCoord:'Distance',
    dests:[
      {city:'Fès',region:'Aéroport Fès-Saïss · 1 h',rooms:230,since:2005,tone:'warm',coord:'≈ 60 km',desc:"On imagine Ifrane loin. Elle est à une heure de l'aéroport de Fès."},
      {city:'Rabat',region:'3 h de route',rooms:230,since:2005,tone:'sage',coord:'≈ 250 km',desc:"À trois heures de Rabat. La conciergerie organise le transfert privé sur demande."},
      {city:'Casablanca',region:'4 h de route',rooms:230,since:2005,tone:'brass',coord:'≈ 330 km',desc:"À quatre heures de Casablanca. Mentionnez-le à la réservation, nous nous occupons du reste."},
    ],
    editoEye:'LA MAISON, PAR CEUX QUI LA TIENNENT',
    quotes:[
      {src:'Chef de cuisine',txt:"Je dirige cette cuisine depuis l'ouverture. Ma règle ne change pas : trois saveurs par assiette, une cuisson qu'on respecte, une assiette qu'on finit."},
      {src:'Cheffe spa',txt:"À 1 650 mètres, la peau ne demande pas ce qu'elle demande au bord de la mer. Nos soins partent de là."},
      {src:'Architecte',txt:"On voulait pouvoir vivre ici à −5 °C comme à 32 °C sans rien changer. Trois ans de dessin pour y arriver."},
    ],
    nlEye:'LES LETTRES DE LA VALLÉE', nlH2:'Les Lettres de la Vallée',
    nlDesc:"Un récit de la vallée par trimestre : la neige qui arrive, la table qui change, les chemins qui rouvrent. Et l'accès à nos tarifs Confidentiels, réservés aux abonnés. Inscription volontaire, désinscription en un clic. Nous n'envoyons rien d'autre.",
    nlLabel:'Votre adresse e-mail', nlPH:'vous@exemple.com', nlBtn:'Recevoir les Lettres', nlSent:'✓ Confirmez votre e-mail', nlNote:"Double opt-in : un e-mail de confirmation valide l'inscription.",
    ftTagline:"Appart'hôtel d'altitude · Ifrane, Moyen Atlas",
    ftCopy:'© 2026 The White Valley · Ifrane. Tous droits réservés.',
    ftCols:[
      {t:'Contact',l:['Ifrane · Moyen Atlas, Maroc','Réception 24h/24','contact@thewhitevalley.ma','WhatsApp sur demande']},
      {t:"L'Hôtel",l:['À propos','Galerie','Carrières','Presse']},
      {t:'Pratique',l:['FAQ',"Plan d'accès","Politique d'annulation",'Les Lettres de la Vallée']},
      {t:'Légal',l:['Mentions légales','CGV','Confidentialité']},
    ],
  },
  en: {
    menu:'Menu', close:'Close', tagline:'Elegance in its purest form', book:'Book',
    dHotel:'The Hotel', dPresent:'A pause', dGallery:'The residences', dLocal:'Valley Letters',
    dSejour:'Accommodation', dStd:'TWIN Apartment', dSup:'SINGLE Apartment', dSuite:'Room', dOffres:'Signature Suite',
    dSpa:'Spa · Table · Seminars', dResto:'The spa', dBar:'The table', dHammam:'The seminars', dPool:'When to come',
    dBook:'Book', dDispo:'Book your stay', dContact:'Ifrane nearby', dEvents:'Seminar quote', dRoom:'Getting here',
    reperes:['74 residences','1,650 m altitude','24/7 reception','Spa · table · seminars'],
    callTitle:'Your pause begins here.',
    navExp:'Experiences', navSeasons:'Seasons', navNewsletter:'Newsletter', navIfrane:'Ifrane',
    navPhone:'Phone', navWhats:'WhatsApp',
    saisonsEye:'FOUR SEASONS', saisonsH2:'Four seasons, one signature', saisonsBtn:'When to come',
    saisons:[
      {name:'Winter',period:'December to March',tone:'stone',txt:"Between −5 °C at night and 8 °C by day. Snow comes three to six times each winter. A fireplace, the silent cedar forest, skiing twenty minutes away when the slope is white."},
      {name:'Spring',period:'April to May',tone:'sage',txt:"The best season for walking. The first wild herbs, almonds still green, a crisp light for photographs. Our favourite season, in confidence."},
      {name:'Summer',period:'June to September',tone:'warm',txt:"The climate refuge. 14 °C at night, 28 °C by day while the cities swelter. Evenings are spent outside, the pool stays heated to 29 °C."},
      {name:'Autumn',period:'October to November',tone:'brass',txt:"The forests turn copper, the air dries. Very few people midweek. The ideal season for a retreat or a long weekend for two, with no competing schedules."},
    ],
    heroEyeSplit:'THE WHITE VALLEY · IFRANE · MIDDLE ATLAS',
    heroEteA:'The high-altitude', heroEteB:'apart-hotel', heroEteC:'in Ifrane.',
    heroHivA:'The high-altitude', heroHivB:'apart-hotel', heroHivC:'in Ifrane.',
    heroLedeSplit:"At 1,650 metres, life takes a breath. 74 residences, an hour from Fès, in one of the few places in Morocco where snow truly holds through winter.",
    heroCta1:'Book your stay', heroCta2:'Seminar quote',
    heroMetaCat:'Format', heroMetaCatV:'High-altitude apart-hotel · 74 residences', heroMetaTel:'Reception', heroMetaTelV:'Open 24/7',
    heroEyeFull:'THE WHITE VALLEY · IFRANE · MIDDLE ATLAS',
    heroLedeFull:'At 1,650 metres, life takes a breath.',
    marquee:['74 RESIDENCES','SPA & HAMMAM','HIGH-ALTITUDE TABLE','SEMINARS','POOL HEATED TO 29°C','SKI 20 MIN AWAY','24/7 RECEPTION'],
    introEye:'THE HOTEL', introH2:'A pause in the valley.',
    introP1a:'Neither a classic hotel nor a rental:',
    introP1em:'something in between.', introP1b:'You have your apartment, your kitchen if you wish, your living room with its view of the valley.',
    introP2:"Around it, what a good hotel does well: breakfast served in the room, the spa reserved at 9 PM, dinner downstairs in the evening, a concierge who handles the details. You activate what you want. The rest fades away. 74 residences, an hour from Fès, in one of the few places in Morocco where snow truly holds through winter.",
    introLink:'Discover the hotel',
    bbArrivee:'CHECK-IN', bbDepart:'CHECK-OUT', bbVoyageurs:'GUESTS',
    bbGuests:'2 adults · 1 room', bbSubmit:'Check availability', bbLocale:'en-GB',
    roomsEye:'ACCOMMODATION', roomsH2:'74 residences, four ways to live the valley',
    roomsLede:"The right format isn't the biggest. It's the one that fits your stay. Four formats, one signature: the same bedding everywhere, the same care, the same services. What changes is the volume you live in.",
    tabs:['All','Apartment','Room','Suite'], tabAll:'All',
    rSurface:'Size', rCap:'Capacity', rKitchen:'Kitchen', rPriceNote:'Rates on request',
    rBook:'Book', rDisc:'Discover', rFav:'Favourite',
    rooms:[
      {name:'TWIN Apartment',type:'Apartment',size:65,cap:'4 people',kitchen:'Equipped kitchenette',tone:'warm',tag:'4 guests',desc:"Two bedrooms, a shared living room, an equipped kitchenette. For two couples of friends, a family of adults, a team of four."},
      {name:'SINGLE Apartment',type:'Apartment',size:45,cap:'2 people',kitchen:'Equipped kitchenette',tone:'sage',tag:'Most chosen',desc:"One bedroom, a real living room, the view from the sofa. The format most couples who write to us choose."},
      {name:'Room',type:'Room',size:28,cap:'2 people',kitchen:'None',tone:'stone',tag:null,desc:"A large bed, the same bathroom and the same view as the apartments, in a shorter format. For one night, two, or a seminar."},
      {name:'Signature Suite',type:'Suite',size:110,cap:'2 to 4 people',kitchen:'Full kitchen',tone:'brass',tag:'Signature',desc:"Full kitchen, private terrace, double living room. Our largest suite, and the most discreet."},
    ],
    expEye:'SPA · TABLE · SEMINARS', expH2:'The spa, the table, the seminars.',
    exps:[
      {idx:'01',title:'The spa',sub:"Five cabins, a hammam, a sauna, a pool heated to 29 °C open onto the valley. Treatments designed for altitude. No music in the corridors.",tone:'sage'},
      {idx:'02',title:'The table',sub:"Middle Atlas cuisine with short supply chains, midday and evening. Three flavours per plate, a plate you finish. Around twenty Moroccan wines on the list.",tone:'warm'},
      {idx:'03',title:'The seminars',sub:"Seminar and conference room, on-site accommodation, catering, spa to unwind in the evening. A setting apart for a leadership retreat.",tone:'brass'},
    ],
    destEye:'IFRANE WITHIN REACH', destH2:'Getting to us.', destCard:'THE WHITE VALLEY · IFRANE', destBtn:'Getting here',
    destRooms:'Altitude', destFloors:'Residences', destCoord:'Distance',
    dests:[
      {city:'Fès',region:'Fès-Saïss Airport · 1 h',rooms:230,since:2005,tone:'warm',coord:'≈ 60 km',desc:"We imagine Ifrane far away. It's an hour from Fès airport."},
      {city:'Rabat',region:'3 h by road',rooms:230,since:2005,tone:'sage',coord:'≈ 250 km',desc:"Three hours from Rabat. The concierge arranges private transfers on request."},
      {city:'Casablanca',region:'4 h by road',rooms:230,since:2005,tone:'brass',coord:'≈ 330 km',desc:"Four hours from Casablanca. Mention it when booking and we'll take care of the rest."},
    ],
    editoEye:'THE HOUSE, BY THOSE WHO RUN IT',
    quotes:[
      {src:'Head chef',txt:"I've run this kitchen since opening. My rule doesn't change: three flavours per plate, a cooking we respect, a plate you finish."},
      {src:'Spa manager',txt:"At 1,650 metres, the skin doesn't ask for what it asks for by the sea. Our treatments start there."},
      {src:'Architect',txt:"We wanted to be able to live here at −5 °C as at 32 °C without changing a thing. Three years of drawing to get there."},
    ],
    nlEye:'THE VALLEY LETTERS', nlH2:'The Valley Letters',
    nlDesc:"A story of the valley each quarter: the snow arriving, the table changing, the trails reopening. And access to our Confidential rates, reserved for subscribers. Voluntary sign-up, one-click unsubscribe. We send nothing else.",
    nlLabel:'Your email address', nlPH:'you@example.com', nlBtn:'Receive the Letters', nlSent:'✓ Confirm your email', nlNote:'Double opt-in: a confirmation email validates your sign-up.',
    ftTagline:'High-altitude apart-hotel · Ifrane, Middle Atlas',
    ftCopy:'© 2026 The White Valley · Ifrane. All rights reserved.',
    ftCols:[
      {t:'Contact',l:['Ifrane · Middle Atlas, Morocco','24/7 reception','contact@thewhitevalley.ma','WhatsApp on request']},
      {t:'The Hotel',l:['About','Gallery','Careers','Press']},
      {t:'Practical',l:['FAQ','Getting here','Cancellation policy','The Valley Letters']},
      {t:'Legal',l:['Legal notice','Terms','Privacy']},
    ],
  },
};

/* ── HotelRunner ── URL du moteur de réservation */
const HR_BOOKING_URL = {
  fr: 'https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?currency=MAD&locale=fr-FR',
  en: 'https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?currency=MAD&locale=en-US',
};


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

/* ---------- HotelRunner Modal ---------- */
function HotelRunnerModal({ open, onClose, lang }) {
  const lc = lang === 'en' ? 'en' : 'fr';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const L = lc === 'en' ? {
    title: 'Book your stay', sub: 'The White Valley · Casablanca',
    note: 'Flexible cancellation · Check-in from 3 PM',
    feats: ['230 air-conditioned rooms', 'Spa & Hammam · Indoor pool', '4-star · Casablanca'],
    cta: 'Book on HotelRunner', ctaSub: 'Secure booking · Official rates',
  } : {
    title: 'Réservez votre séjour', sub: 'The White Valley · Casablanca',
    note: 'Annulation flexible · Arrivée dès 15h00',
    feats: ['230 chambres climatisées', 'Spa & Hammam · Piscine intérieure', '4 étoiles · Casablanca'],
    cta: 'Réserver sur HotelRunner', ctaSub: 'Réservation sécurisée · Tarifs officiels',
  };

  return (
    <>
      <div className={`bp-overlay${open ? ' is-open' : ''}`} onClick={onClose} />

      <div className={`bp${open ? ' is-open' : ''}`}>

        <div className="bp__head">
          <button className="bp__close" onClick={onClose} aria-label="Fermer">✕</button>
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

          <a
            href={HR_BOOKING_URL[lc] || HR_BOOKING_URL.fr}
            target="_blank"
            rel="noopener noreferrer"
            className="bp__book-btn"
            onClick={onClose}
          >
            {L.cta}
            <span>↗</span>
          </a>
          <p className="bp__book-sub">{L.ctaSub}</p>
        </div>

        <div className="bp__foot">
          <p>{L.note}</p>
        </div>

      </div>
    </>
  );
}
/* ---------- Booking bar — formulaire natif → HotelRunner nouvel onglet ---------- */
function BookingBar({ lang }) {
  const lc = lang === 'en' ? 'en' : 'fr';
  const tr  = T[lang] || T.fr;

  const pad     = (n) => String(n).padStart(2, '0');
  const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
  const nextDay  = (s) => { const d = new Date(s+'T12:00:00'); d.setDate(d.getDate()+1); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };

  const [checkIn,  setCheckIn]  = useState(todayStr);
  const [checkOut, setCheckOut] = useState(() => nextDay(todayStr()));
  const [adults,   setAdults]   = useState(2);
  const [rooms,    setRooms]    = useState(1);

  const inRef  = useRef(null);
  const outRef = useRef(null);
  const selRef = useRef(null);

  const openPicker = (ref) => (e) => {
    e.preventDefault();
    if (!ref.current) return;
    try { ref.current.showPicker(); }
    catch { ref.current.focus(); ref.current.click(); }
  };

  const fmt = (s) => {
    try { return new Date(s+'T12:00:00').toLocaleDateString(lc==='en'?'en-GB':'fr-FR', {day:'2-digit', month:'short', year:'numeric'}); }
    catch { return s; }
  };

  const gL = (n) => `${n} ${n===1 ? (lc==='en'?'adult':'adulte') : (lc==='en'?'adults':'adultes')}`;
  const rL = (n) => `${n} ${n===1 ? (lc==='en'?'room':'chambre') : (lc==='en'?'rooms':'chambres')}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Nombre de nuits */
    const msPerDay = 86400000;
    const dayCount = Math.max(1, Math.round(
      (new Date(checkOut + 'T12:00:00') - new Date(checkIn + 'T12:00:00')) / msPerDay
    ));

    /* Répartir les adultes équitablement entre les chambres */
    const base  = Math.floor(adults / rooms);
    const extra = adults % rooms;
    const roomsArr = Array.from({ length: rooms }, (_, i) => {
      const a = base + (i < extra ? 1 : 0);
      return { adult_count: a, child_count: 0, guest_count: a, child_ages: [] };
    });
    const guestRooms = {};
    roomsArr.forEach((r, i) => { guestRooms[String(i)] = { ...r }; });

    const search = JSON.stringify({
      checkin_date:  checkIn,
      checkout_date: checkOut,
      day_count:     dayCount,
      room_count:    rooms,
      total_adult:   adults,
      total_child:   0,
      rooms:         roomsArr,
      guest_rooms:   guestRooms,
    });

    window.open(
      `https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?search=${encodeURIComponent(search)}`,
      '_blank', 'noopener'
    );
  };

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

      {/* ── Voyageurs ── */}
      <div className="bb__field" style={{cursor:'pointer', position:'relative'}}>
        <span className="bb__label">{tr.bbVoyageurs}</span>
        <span className="bb__value">{rL(rooms)} · {gL(adults)}</span>
        <select ref={selRef} className="bb__select-overlay"
          value={`${rooms}|${adults}`}
          onChange={e => { const [r,a] = e.target.value.split('|'); setRooms(+r); setAdults(+a); }}>
          {[1,2,3].flatMap(r => [1,2,3,4].map(a =>
            <option key={`${r}|${a}`} value={`${r}|${a}`}>{rL(r)} · {gL(a)}</option>
          ))}
        </select>
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

        {/* tagline */}
        <div className="splash__tag">L'élégance à l'état pure</div>
      </div>
    </div>
  );
}

/* ---------- Season Toggle ---------- */
function SeasonToggle({ season, onSeason }) {
  return (
    <div className="season-toggle">
      <button
        className={`season-toggle__btn${season === 'ete' ? ' season-toggle__btn--active' : ''}`}
        onClick={() => onSeason('ete')}
        aria-label="Été"
      >
        ☀
      </button>
      <button
        className={`season-toggle__btn${season === 'hiver' ? ' season-toggle__btn--active' : ''}`}
        onClick={() => onSeason('hiver')}
        aria-label="Hiver"
      >
        ❄
      </button>
    </div>
  );
}

/* ---------- Back to Top ---------- */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;
  return (
    <button className="back-top" onClick={scrollTop} aria-label="Retour en haut">
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

  const navLinks = [
    { label: 'Chambres',    id: 'rooms' },
    { label: 'Expériences', id: 'experiences' },
    { label: 'Instagram',   id: 'instagram' },
    { label: 'Contact',     id: 'contact' },
  ];

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
                <button className="nav__close-btn" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">
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
                  {/* TODO : remplacer par les vrais numéros */}
                  <a className="nav__tap" href="tel:+212535000000">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2 2A16 16 0 014.5 5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                    {(T[lang]||T.fr).navPhone}
                  </a>
                  <a className="nav__tap" href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                    {(T[lang]||T.fr).navWhats}
                  </a>
                </div>
                <button className="nav__drawer-book" onClick={() => { setMenuOpen(false); onBook(); }}>{(T[lang]||T.fr).book}</button>
              </div>
            </div>
          </div>
        )}
      </header>
      <SeasonToggle season={season} onSeason={onSeason} />
      <BackToTop />
    </>
  );
}

/* ---------- Hero ---------- */
function Hero({ variant, season, lang, onBook }) {
  const [imgIdx, setImgIdx] = useState(0);
  const scenes = [
    { label: 'facade hotel 4 etoiles casablanca', tone: 'warm' },
    { label: 'chambre climatisee balcon',          tone: 'brass' },
    { label: 'spa piscine interieure',             tone: 'stone' },
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
          <div className="hero__cta">
            <button className="btn btn--primary" onClick={onBook}>{tr.heroCta1}</button>
            <a href="#experiences" className="btn btn--ghost">{tr.heroCta2}</a>
          </div>
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
            alt=""
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
        <div className="hero__cta hero__cta--full">
          <button className="btn btn--primary" onClick={onBook}>{tr.heroCta1}</button>
          <a href="#experiences" className="btn btn--ghost">{tr.heroCta2}</a>
        </div>
      </div>
    </section>
  );
}
/* ---------- Marquee ---------- */
function Marquee({ lang }) {
  const items = (T[lang]||T.fr).marquee;
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="marquee__item">
            {t}<span className="marquee__sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

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
          <p>{tr.introP1a} <em>{tr.introP1em}</em> {tr.introP1b}</p>
          <p>{tr.introP2}</p>
          <a href="#rooms" className="link-arrow">{tr.introLink} <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function Rooms({ onBook, lang }) {
  const tr = T[lang]||T.fr;
  const [filterIdx, setFilterIdx] = useState(0);
  const [hoverIdx,  setHoverIdx]  = useState(null);
  useEffect(() => { setFilterIdx(0); }, [lang]);
  const groups = tr.tabs.map((t, i) => i === 0 ? tr.rooms : tr.rooms.filter(r => r.type === t));
  const visible = groups[filterIdx];

  return (
    <section className="rooms" id="rooms">
      <div className="rooms__head">
        <div>
          <p className="eyebrow"><span className="eyebrow__dot" />{tr.roomsEye}</p>
          <h2 className="h-display">{tr.roomsH2}</h2>
          <p className="rooms__lede">{tr.roomsLede}</p>
        </div>
        <div className="rooms__filter">
          {tr.tabs.map((t, i) => (
            <button
              key={t}
              className={`chip ${filterIdx === i ? 'is-active' : ''}`}
              onClick={() => setFilterIdx(i)}
            >
              {t}
              <span className="chip__count">{groups[i].length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rooms__grid">
          {visible.map((r, i) => (
          <article
            key={r.name}
            className={`room ${hoverIdx === i ? 'is-hover' : ''}`}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <div className="room__media">
              <Placeholder label={`${r.name.toLowerCase()} · ${r.size} m²`} tone={r.tone} aspect="4/5" />
              {r.tag && <span className="room__tag">{r.tag}</span>}
              <button className="room__fav" aria-label="Favori">♡</button>
              <div className="room__hover">
                <span>{tr.rDisc} <span>→</span></span>
              </div>
            </div>
            <div className="room__body">
              <div className="room__row">
                <h3 className="room__name">{r.name}</h3>
                <span className="room__type">{r.type}</span>
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
      <div className="exp__grid">
          {tr.exps.map(it => (
          <a key={it.idx} className="exp__item" href="#">
            <Placeholder label={`expérience · ${it.title.toLowerCase()}`} tone={it.tone} aspect="1/1" />
            <div className="exp__meta">
              <span className="exp__idx">{it.idx}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.sub}</p>
              </div>
              <span className="exp__arrow">↗</span>
            </div>
          </a>
          ))}
      </div>
    </section>
  );
}

/* ---------- Localisation & coordonnées ---------- */
function Destinations({ lang }) {
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
          <a href="#contact" className="link-arrow dest__btn">{tr.destBtn} <span>→</span></a>
        </div>
        <div className="dest__preview">
          <Placeholder label={`ifrane · ${d.city.toLowerCase()}`} tone={d.tone} aspect="auto" />
          <div className="dest__card">
            <div>
              <span className="dest__card-eyebrow">{tr.destCard}</span>
              <h3>{d.desc}</h3>
            </div>
            <dl className="dest__stats">
              <div><dt>{tr.destRooms}</dt><dd>1 650 m</dd></div>
              <div><dt>{tr.destFloors}</dt><dd>74</dd></div>
              <div><dt>{tr.destCoord}</dt><dd>{d.coord}</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Editorial / press ---------- */
function Editorial({ lang }) {
  const tr = T[lang]||T.fr;
  return (
    <section className="edito">
      <div className="edito__wrap">
        <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" />{tr.editoEye}</p>
        <div className="edito__grid">
          {tr.quotes.map((q, i) => (
            <figure key={i} className="edito__q">
              <span className="edito__mark">"</span>
              <blockquote>{q.txt}</blockquote>
              <figcaption>— {q.src}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            <span>{tr.nlLabel}</span>
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
          <p className="nl__note">{tr.nlNote}</p>
        </form>
      </div>
    </section>
  );
}

/* ---------- Instagram ---------- */
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
        <div className="ft__cols">
          {tr.ftCols.map(c => (
            <div key={c.t}>
              <h4>{c.t}</h4>
              {c.l.map(x => <a key={x} href="#">{x}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="ft__bottom">
        <span>{tr.ftCopy}</span>
        <span className="ft__dests">
          <a>Ifrane</a><em>·</em><a>Moyen Atlas</a><em>·</em><a>Maroc</a>
        </span>
        <span>FR · EN</span>
      </div>
    </footer>
  );
}

/* ---------- Bandeau de repères (défilant) ---------- */
function Reperes({ lang }) {
  const items = (T[lang]||T.fr).reperes;
  return (
    <div className="reperes">
      <div className="reperes__track">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="reperes__item">
            <span className="reperes__gem">✦</span>
            <span className="reperes__txt">{it}</span>
          </span>
        ))}
      </div>
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
        <div className="call__cta">
          <button className="btn btn--primary" onClick={onBook}>{tr.heroCta1}</button>
          <a href="#experiences" className="btn btn--ghost call__ghost">{tr.heroCta2}</a>
        </div>
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
  SplashScreen, WhiteValleyLogo, Nav, Hero, BookingBar, HotelRunnerModal, Marquee, Intro, Rooms, Experiences, Destinations, Editorial, Newsletter, Instagram, Footer, Placeholder, Reperes, DernierAppel, Saisons
});
