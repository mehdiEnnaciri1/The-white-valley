# Le Zénith Hôtel & Spa — Site Web

Site vitrine de l'hôtel **Le Zénith Hôtel & Spa** (Maroc), conçu pour présenter l'établissement, ses chambres, ses expériences et permettre la réservation via HotelRunner.

---

## Stack technique

| Technologie | Rôle |
|---|---|
| HTML5 | Structure principale (`index.html`) |
| React 18 (UMD) | Interface utilisateur — chargé via CDN, pas de build |
| Babel CLI (pré-compilé) | JSX compilé en JS standard (`components.js`, `app.js`) |
| CSS3 custom properties | Thèmes dynamiques (`data-theme`, `data-season`) |
| HotelRunner | Moteur de réservation (ouverture dans un nouvel onglet) |

> **Aucun build requis** — le projet fonctionne directement avec un serveur de fichiers statiques.

---

## Structure du projet

```
hotel zenith/
├── index.html           # Point d'entrée principal
├── components.js        # Tous les composants React compilés
├── app.js               # Composant App compilé
├── components.jsx       # Source JSX (référence)
├── app.jsx              # Source JSX (référence)
├── styles.css           # Styles globaux + thèmes + responsive
├── widget-fr.html       # Widget HotelRunner (français)
├── widget-en.html       # Widget HotelRunner (anglais)
└── assets/
    ├── Logo vec3.png    # Logo couleur (fond blanc)
    ├── Logo vec.png     # Logo monochrome clair
    └── HERO*.jpeg       # Images héro
```

---

## Composants React

| Composant | Description |
|---|---|
| `SplashScreen` | Écran d'intro animé (logo + cadre doré + particules) |
| `Nav` | Navigation fixe avec menu drawer, sélecteur langue FR/EN, toggle saison |
| `SeasonToggle` | Bascule Été / Hiver — modifie le thème visuel et les textes |
| `Hero` | Héro plein écran ou éditorial 2 colonnes (variante configurable) |
| `BookingBar` | Barre de recherche native — ouvre HotelRunner avec les dates/voyageurs |
| `Marquee` | Bandeau défilant des équipements |
| `Intro` | Section présentation de l'hôtel |
| `Rooms` | Galerie des chambres avec bouton réservation |
| `Experiences` | Grille des expériences proposées |
| `Instagram` | Section feed Instagram |
| `Destinations` | Section destinations / explorer |
| `Editorial` | Section éditoriale avec citations |
| `Newsletter` | Formulaire d'inscription newsletter |
| `Footer` | Pied de page avec logo, liens et coordonnées |

---

## Thèmes disponibles

Le thème est contrôlé par `body[data-theme]` et `body[data-season]` :

| Clé | Nom | Description |
|---|---|---|
| `light-brass` | Ivoire · Laiton | Palette crème et kaki (défaut) |
| `dark-brass` | Dark · Laiton | Palette sombre et or |
| `dark-sage` | Dark · Sauge | Palette sombre et vert sauge |
| `dark-gold` | Dark · Or | Palette sombre et or vif |
| `hiver` (saison) | Hiver | Blanc et bleu ciel/glace |

---

## Langues

Le site supporte **Français** et **Anglais**. La langue est passée en prop `lang` à tous les composants. Les traductions sont centralisées dans l'objet `T` au début de `components.jsx`.

---

## Intégration HotelRunner

La `BookingBar` collecte les dates et le nombre de voyageurs, puis ouvre HotelRunner dans un nouvel onglet avec les paramètres encodés :

```
https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?search={...JSON...}
```

Les paramètres envoyés : `checkin_date`, `checkout_date`, `day_count`, `room_count`, `total_adult`, `rooms[]`, `guest_rooms{}`.

---

## Démarrage

### Prérequis
- [Node.js](https://nodejs.org) (v16+) — uniquement pour le serveur local
- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Connexion Internet (CDN React)

### Lancer le serveur local

```bash
cd "hotel zenith"
npx serve . -p 8080
```

Ouvrir ensuite : `http://localhost:8080`

---

## Mode édition (Tweaks)

Un panneau de tweaks permet de changer la palette et la variante héro.
Il s'active via un message `postMessage` depuis un iframe parent :

```js
window.postMessage({ type: '__activate_edit_mode' }, '*');
```

---

## Contact / Propriétaire

- **Hôtel :** Le Zénith Hôtel & Spa · Maroc
- **Contact :** mehdi@dofactory.ma
