# The White Valley — Site Web Hôtel

Site vitrine de l'hôtel **The White Valley** (Ifrane, Maroc), conçu pour présenter l'établissement, ses chambres, ses expériences et permettre la réservation via Lodgify.

---

## Stack technique

| Technologie | Rôle |
|---|---|
| HTML5 | Structure principale (`Maison Zenith.html`) |
| React 18 (UMD) | Interface utilisateur — chargé via CDN, pas de build |
| Babel Standalone | Transpilation JSX dans le navigateur |
| CSS3 custom properties | Thèmes dynamiques (`data-theme`, `data-season`) |
| Lodgify Widgets | Barre de recherche PSB + panneau de réservation BNB |

> **Aucun build requis** — le projet fonctionne directement avec un serveur de fichiers statiques.

---

## Structure du projet

```
hotel zenith/
├── Maison Zenith.html   # Point d'entrée principal — App React
├── components.jsx       # Tous les composants React (Nav, Hero, Rooms, Footer…)
├── styles.css           # Styles globaux + thèmes + responsive
├── assets/
│   ├── Logo vec3.png    # Logo couleur (fond blanc) — utilisé dans le splash
│   ├── Logo vec.png     # Logo monochrome clair — utilisé dans le footer
│   └── logo.png         # Logo alternatif
└── index.html           # Alias / redirection vers Maison Zenith.html
```

---

## Composants React

| Composant | Description |
|---|---|
| `SplashScreen` | Écran d'intro animé (logo + cadre doré + particules) |
| `Nav` | Navigation fixe avec menu drawer, sélecteur langue FR/EN, toggle saison |
| `SeasonToggle` | Bascule Été / Hiver — modifie le thème visuel et les textes |
| `Hero` | Héro plein écran ou éditorial 2 colonnes (variante configurable) |
| `BookingBar` | Barre de recherche Lodgify PSB (Portable Search Bar) |
| `Marquee` | Bandeau défilant des équipements |
| `Intro` | Section présentation de l'hôtel |
| `Rooms` | Galerie des chambres avec bouton réservation |
| `Experiences` | Grille des expériences proposées |
| `LodgifyModal` | Panneau de réservation slide-in (Lodgify BNB widget) |
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

Les widgets Lodgify suivent automatiquement le thème actif via les variables CSS `--ldg-*`.

---

## Langues

Le site supporte **Français** et **Anglais**. La langue est passée en prop `lang` à tous les composants. Les traductions sont centralisées dans l'objet `T` au début de `components.jsx` :

```js
const T = {
  fr: { ... },
  en: { ... }
};
```

---

## Intégration Lodgify

Deux widgets Lodgify sont intégrés :

### Barre de recherche (PSB)
- Script : `renderPortableSearchBar.js`
- Conteneur : `<div id="lodgify-search-bar">`
- Positionné en bas du héro via `.bb-wrap { margin-top: -72px }`

### Panneau de réservation (BNB)
- Script : `renderBookNowBox.js`
- Conteneur : `<div id="lodgify-book-now-box">`
- S'affiche dans un panneau slide-in depuis la droite (`.bp`)
- Toujours présent dans le DOM (visibility CSS, jamais `return null`)

**IDs Lodgify :**
- Website ID : `649810`
- Rental ID : `794826`
- Slug : `mehdi-ennaciri`

---

## Démarrage

### Prérequis
- [Node.js](https://nodejs.org) (v16+) — uniquement pour le serveur local
- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Connexion Internet (CDN React + Babel + Lodgify)

### Lancer le serveur local

```bash
# Dans le dossier du projet
cd "hotel zenith"

# Option 1 — avec npx serve (recommandé)
npx serve . -p 8080

# Option 2 — avec Python
python -m http.server 8080

# Option 3 — avec VS Code Live Server
# Clic droit sur Maison Zenith.html > Open with Live Server
```

Ouvrir ensuite dans le navigateur :

```
http://localhost:8080/Maison%20Zenith.html
```

### Partage temporaire (démonstration)

Pour partager avec un manager ou client sans hébergement :

```bash
npx localtunnel --port 8080
```

Génère un lien public `https://xxxx.loca.lt` valide tant que la commande tourne.  
Partager l'URL : `https://xxxx.loca.lt/Maison%20Zenith.html`

---

## Mode édition (Tweaks)

Un panneau de tweaks est disponible pour changer la palette et la variante héro.  
Il s'active via un message `postMessage` depuis un iframe parent :

```js
window.postMessage({ type: '__activate_edit_mode' }, '*');
```

Les palettes et variantes disponibles sont configurables dans `window.TWEAK_DEFAULTS` dans `Maison Zenith.html`.

---

## Contact / Propriétaire

- **Hôtel :** The White Valley · Ifrane, Maroc
- **Contact :** mehdi@dofactory.ma
