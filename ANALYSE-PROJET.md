# Analyse du projet — The White Valley

Site vitrine one-page pour **The White Valley** (Ifrane, Moyen Atlas), appart'hôtel d'altitude — anciennement "Le Zénith Hôtel & Spa · Casablanca" (le rebranding est visible dans le code : URLs HotelRunner, alt-texts et un ancien fichier `Maison Zenith.html` gardent encore l'ancien nom par endroits).

## 1. Vue d'ensemble technique

| Élément | Détail |
|---|---|
| Stack | HTML5 + React 18 (UMD, via CDN) + Babel standalone (compilation JSX **dans le navigateur**, aucun build) |
| Fichiers sources | `index.html` (point d'entrée), `components.jsx` (1215 lignes, tous les composants), `app.jsx` (80 lignes, composant racine `App`) |
| Fichiers compilés (legacy) | `components.js`, `app.js` — semblent être d'anciennes versions pré-compilées, non chargées par `index.html` actuel (qui charge directement les `.jsx` via Babel in-browser) |
| Styles | `styles.css` — 2839 lignes, thèmes via CSS custom properties (`data-theme`, `data-season`) |
| Langues | FR / EN, toggle dans la nav, objet de traduction centralisé `T` en tête de `components.jsx` |
| Réservation | HotelRunner — `BookingBar` (barre native) + `HotelRunnerModal` (modale), ouverture dans un nouvel onglet |
| Fichiers annexes | `widget-fr.html` / `widget-en.html` (widgets iframe HotelRunner), `Maison Zenith.html` (ancienne version quasi identique à `index.html`, probablement obsolète), `tendances-ia-juin2026.html` (**fichier sans rapport avec le site hôtel** — une page/infographie sur les tendances IA, à part) |

### Les "deux thèmes" du site

Le site a en réalité **deux systèmes de variation visuelle distincts** :

1. **Saison (Été / Hiver)** — le seul toggle visible par les visiteurs (icônes ☀ / ❄ sous la nav). Il change :
   - les photos du hero plein écran (`HERO1-*` en été, `HERO2-*` en hiver)
   - certains textes (titres hero identiques FR mais structure `heroEteA/B/C` vs `heroHivA/B/C`)
   - la classe `data-season` sur `<body>`, qui pilote la palette CSS (blanc/glace en hiver, etc.)
2. **Palette (4 variantes)** — `light-brass` (défaut), `dark-brass`, `dark-sage`, `dark-gold`. Non visible par un visiteur normal : accessible uniquement via un panneau "Tweaks" cascade, activé par un `postMessage('__activate_edit_mode')` depuis une iframe parente (outil d'édition, pas une fonctionnalité publique).

Si "deux thèmes" fait référence à ce que voit un visiteur, il s'agit du **toggle Été / Hiver**.

### Constat important sur les images

**La quasi-totalité des visuels du site sont des placeholders CSS** (dégradés de couleur + grain, composant `Placeholder`), pas de vraies photos — à l'exception des 2 photos hero et des 2 logos. Chaque `Placeholder` porte une étiquette texte (ex. `"appartement twin · 65 m²"`) indiquant quelle photo devra être livrée. C'est un site en attente de shooting photo / banque d'images.

---

## 2. Contenu textuel du site (FR)

### Splash screen
- Logo + tagline : **"L'élégance à l'état pure"**

### Navigation
- Menu (drawer) : L'Hôtel *(Une parenthèse, Les résidences, Les Lettres de la Vallée)* · Hébergements *(Appartement TWIN, Appartement SINGLE, Chambre, Suite Signature)* · Spa · Table · Séminaires *(Le spa, La table, Les séminaires, Quand venir)* · Réserver *(Réserver votre séjour, Ifrane à portée, Devis séminaire, Plan d'accès)*
- Actions rapides drawer : Téléphone (`+212 535 00 00 00`), WhatsApp (`+212 600 00 00 00` — à remplacer, marqué `TODO` dans le code)
- Bandeau de repères défilant : `74 résidences` · `1 650 m d'altitude` · `Réception 24h/24` · `Spa · table · séminaires`

### Hero
- Eyebrow : **THE WHITE VALLEY · IFRANE · MOYEN ATLAS**
- Titre : **L'appart'hôtel *d'altitude* à Ifrane.** (identique été/hiver)
- Lede : *"À 1 650 mètres, la vie reprend son souffle. 74 résidences, à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver."*
- CTA : **Réserver votre séjour** / **Devis séminaire**
- Meta (variante éditoriale) : Format → *Appart'hôtel d'altitude · 74 résidences* · Réception → *Ouverte 24h/24*

### Marquee (bandeau défilant équipements)
74 RÉSIDENCES · SPA & HAMMAM · TABLE D'ALTITUDE · SÉMINAIRES · PISCINE CHAUFFÉE 29°C · SKI À 20 MIN · RÉCEPTION 24H/24

### Intro — "Une parenthèse dans la vallée"
> Ni un hôtel classique, ni une location : *quelque chose entre les deux.* Vous avez votre appartement, votre cuisine si vous le souhaitez, votre salon avec sa vue sur la vallée.
>
> Autour, ce qu'un bon hôtel sait faire : petit-déjeuner servi en chambre, spa réservé à 21h, table le soir au rez-de-chaussée, conciergerie qui gère les détails. Vous activez ce que vous voulez. Le reste se fait oublier. 74 résidences, à une heure de Fès, dans l'un des rares endroits du Maroc où la neige tient vraiment l'hiver.

Lien : **Découvrir l'hôtel →**

### Rooms — "74 résidences, quatre façons d'habiter la vallée"
> Le bon format n'est pas le plus grand. C'est celui qui correspond à votre séjour. Quatre formats, une seule signature : la même literie partout, la même attention, les mêmes services. Ce qui change, c'est le volume que vous habitez.

Filtres : Tous · Appartement · Chambre · Suite

| Nom | Type | Surface | Capacité | Cuisine | Badge | Description |
|---|---|---|---|---|---|---|
| Appartement TWIN | Appartement | 65 m² | 4 personnes | Kitchenette équipée | 4 pers. | Deux chambres, un salon commun, une kitchenette équipée. Pour deux couples amis, une famille d'adultes, une équipe de quatre. |
| Appartement SINGLE | Appartement | 45 m² | 2 personnes | Kitchenette équipée | Le plus choisi | Une chambre, un vrai salon, la vue depuis le canapé. Le format que choisissent la plupart des couples qui nous écrivent. |
| Chambre | Chambre | 28 m² | 2 personnes | Aucune | — | Un grand lit, la même salle de bain et la même vue que les appartements, dans un format plus court. Pour une nuit, deux, ou un séminaire. |
| Suite Signature | Suite | 110 m² | 2 à 4 personnes | Cuisine complète | Signature | Cuisine complète, terrasse privée, double salon. Notre suite la plus large, et la plus discrète. |

### Saisons — "Quatre saisons, une signature"

| Saison | Période | Texte |
|---|---|---|
| Hiver | décembre à mars | Entre −5 °C la nuit et 8 °C le jour. La neige vient trois à six fois par hiver. Feu de cheminée, forêt de cèdres silencieuse, ski à vingt minutes quand la pente est blanche. |
| Printemps | avril à mai | La meilleure saison pour marcher. Les premières herbes sauvages, les amandes encore vertes, une lumière nette pour la photo. Notre saison favorite, en confidence. |
| Été | juin à septembre | Le refuge climatique. 14 °C la nuit, 28 °C le jour pendant que les villes étouffent. Les soirées se prennent dehors, la piscine reste chauffée à 29 °C. |
| Automne | octobre à novembre | Les forêts virent au cuivre, l'air sèche. Très peu de monde en semaine. La saison idéale pour une retraite ou un long week-end à deux, sans concurrence d'agenda. |

CTA : **Quand venir**

### Expériences — "Le spa, la table, les séminaires"

| # | Titre | Texte |
|---|---|---|
| 01 | Le spa | Cinq cabines, un hammam, un sauna, une piscine chauffée à 29 °C ouverte sur la vallée. Des soins pensés pour l'altitude. Pas de musique dans les couloirs. |
| 02 | La table | Une cuisine du Moyen Atlas en produits courts, midi et soir. Trois saveurs par assiette, une assiette qu'on finit. Une vingtaine de vins marocains à la carte. |
| 03 | Les séminaires | Salle de séminaire et de conférences, hébergement sur place, restauration, spa pour décompresser le soir. Un cadre à part pour une retraite de direction. |

### Destinations — "Nous rejoindre"

| Ville | Trajet | Distance | Texte |
|---|---|---|---|
| Fès | Aéroport Fès-Saïss · 1 h | ≈ 60 km | On imagine Ifrane loin. Elle est à une heure de l'aéroport de Fès. |
| Rabat | 3 h de route | ≈ 250 km | À trois heures de Rabat. La conciergerie organise le transfert privé sur demande. |
| Casablanca | 4 h de route | ≈ 330 km | À quatre heures de Casablanca. Mentionnez-le à la réservation, nous nous occupons du reste. |

Stats affichées : Altitude 1 650 m · Résidences 74

### Éditorial — "La maison, par ceux qui la tiennent"

| Source | Citation |
|---|---|
| Chef de cuisine | Je dirige cette cuisine depuis l'ouverture. Ma règle ne change pas : trois saveurs par assiette, une cuisson qu'on respecte, une assiette qu'on finit. |
| Cheffe spa | À 1 650 mètres, la peau ne demande pas ce qu'elle demande au bord de la mer. Nos soins partent de là. |
| Architecte | On voulait pouvoir vivre ici à −5 °C comme à 32 °C sans rien changer. Trois ans de dessin pour y arriver. |

### Newsletter — "Les Lettres de la Vallée"
> Un récit de la vallée par trimestre : la neige qui arrive, la table qui change, les chemins qui rouvrent. Et l'accès à nos tarifs Confidentiels, réservés aux abonnés. Inscription volontaire, désinscription en un clic. Nous n'envoyons rien d'autre.

Champ : *Votre adresse e-mail* — placeholder `vous@exemple.com` — bouton **Recevoir les Lettres** — note *Double opt-in : un e-mail de confirmation valide l'inscription.*

### Instagram — "Inspiré par vous"
- `@LeZenithCasablanca` (⚠ ancien nom, incohérent avec le rebranding "The White Valley")
- `#LeZenithSpa` · `#ZenithCasablanca` (idem — à mettre à jour)

### Dernier appel
- Titre : **"Votre parenthèse commence ici."**
- CTA : Réserver votre séjour / Devis séminaire

### Footer
- Tagline : *Appart'hôtel d'altitude · Ifrane, Moyen Atlas*
- Colonnes :
  - **Contact** : Ifrane · Moyen Atlas, Maroc · Réception 24h/24 · contact@thewhitevalley.ma · WhatsApp sur demande
  - **L'Hôtel** : À propos · Galerie · Carrières · Presse
  - **Pratique** : FAQ · Plan d'accès · Politique d'annulation · Les Lettres de la Vallée
  - **Légal** : Mentions légales · CGV · Confidentialité
- Copyright : © 2026 The White Valley · Ifrane. Tous droits réservés.
- Destinations listées : Ifrane · Moyen Atlas · Maroc

### Modale de réservation (HotelRunner) — texte encore à l'ancien nom
- Titre : *Réservez votre séjour* — sous-titre : *The White Valley · Casablanca* (⚠ incohérent : Casablanca vs Ifrane)
- Points : *230 chambres climatisées* · *Spa & Hammam · Piscine intérieure* · *4 étoiles · Casablanca* (⚠ ces chiffres correspondent à l'ancien "Zénith Casablanca", pas aux "74 résidences à Ifrane" annoncées partout ailleurs)
- Note : *Annulation flexible · Arrivée dès 15h00*

> **Le texte en anglais existe intégralement en miroir** pour toutes les sections ci-dessus (objet `T.en` dans `components.jsx`, lignes 151–224) — traduction fidèle section par section, mêmes clés.

---

## 3. Inventaire des images par section

### Légende
- **Réelle** = fichier image livré dans `assets/`
- **Placeholder** = composant `<Placeholder>` (dégradé CSS + grain, pas de fichier), en attente de vraie photo
- Une section marquée "× saisons" n'a **pas** de variante d'image par saison/thème sauf mention contraire — seul le Hero change réellement de visuel entre Été et Hiver.

| Section | Nb d'images | Type | Format / ratio | Détail |
|---|---|---|---|---|
| **Splash screen** | 1 | Réelle | 2479 × 2479 px | `Logo vec3.png` (341 KB) |
| **Hero** (variante par défaut : *plein écran*) | 2 images × 2 résolutions = **4 fichiers** | Réelle | 1920×1080 et 2560×1440 (16:9) | Été → `HERO1-1920×1080.jpg.jpeg` (952 KB) / `HERO1-2560×1440.jpg.jpeg` (1525 KB) · Hiver → `HERO2-1920×1080.jpg.jpeg` (701 KB) / `HERO2-2560×1440.jpg.jpeg` (1028 KB). `srcset` sert la version adaptée à l'écran. |
| **Hero** (variante alternative : *éditoriale 2 colonnes*, non active par défaut) | 3 | Placeholder | libre (`aspect: auto`) | 3 "scenes" en carrousel auto (5 s) : façade hôtel, chambre balcon, spa piscine — resteront des placeholders tant que la variante `split` n'est pas activée |
| **Rooms** (hébergements) | 4 | Placeholder | 4 / 5 (portrait) | Une par type de chambre (TWIN, SINGLE, Chambre, Suite Signature) |
| **Saisons** | 4 | Placeholder | 3 / 4 (portrait) | Une par saison (Hiver, Printemps, Été, Automne) |
| **Expériences** | 3 | Placeholder | 1 / 1 (carré) | Le spa, La table, Les séminaires |
| **Destinations** | 3 (1 affichée à la fois) | Placeholder | libre (`aspect: auto`) | Fès, Rabat, Casablanca — bascule au clic/survol sur la liste |
| **Instagram** | 5 | Placeholder (`<div>` vide, pas de composant `Placeholder`) | Colonne 1 : 3/4 · Colonne 2 : 4/3 puis 1/1 · Colonne 3 : 3/4 puis 4/3 | Grille masonry 3 colonnes ; aucune vraie image ni intégration API Instagram, juste des blocs vides stylés |
| **Éditorial** (citations) | 0 | — | — | Section 100% texte, pas d'image |
| **Footer** | 1 | Réelle | 2479 × 2479 px | `Logo vec.png` (106 KB), affiché à 200 px de haut |

### Totaux
- **Fichiers image réellement livrés : 6** (4 photos hero + 2 logos), pour **4,68 Mo** au total
- **Placeholders en attente de photo : 22** répartis ainsi : Hero split (3) + Rooms (4) + Saisons (4) + Expériences (3) + Destinations (3) + Instagram (5)
- **Aucune variation d'images liée aux 4 palettes** (`light-brass`/`dark-brass`/`dark-sage`/`dark-gold`) — seules les couleurs CSS changent
- **Seule variation liée à la saison Été/Hiver** : les 2 photos du Hero plein écran (le reste du site reste identique visuellement entre les deux saisons)

### Poids des images réelles (optimisation)

Les 4 photos hero sont lourdes pour du web (700 Ko à 1,5 Mo chacune, format `.jpg.jpeg` — double extension à noter). Un passage en WebP/AVIF avec compression réduirait probablement ce poids de 60–80 % sans perte visible, ce qui améliorerait le LCP (Largest Contentful Paint) puisque le Hero est le premier élément visible au chargement.

---

## 4. Incohérences repérées (rebranding incomplet)

Le site a été rebrandé de **"Le Zénith Hôtel & Spa · Casablanca"** vers **"The White Valley · Ifrane"**, mais plusieurs traces de l'ancien nom subsistent :
- URLs HotelRunner : `le-zenith-hotel-spa.hotelrunner.com` (dans `components.jsx` et `app.jsx`)
- Modale de réservation : sous-titre "The White Valley · **Casablanca**", chiffres "230 chambres", "4 étoiles" (ne correspondent pas aux "74 résidences" d'Ifrane)
- Section Instagram : handle `@LeZenithCasablanca`, hashtags `#LeZenithSpa` `#ZenithCasablanca`
- Fichier `Maison Zenith.html` à la racine, quasi identique à `index.html` mais visiblement une version antérieure
- Numéros de téléphone/WhatsApp encore marqués `TODO` dans le code (`+212535000000`, `+212600000000`)
