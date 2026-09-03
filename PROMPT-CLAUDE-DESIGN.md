# Prompt à coller dans Claude Design

> Tout ce qui suit est le prompt. Copie-le tel quel, et joins les fichiers listés à la fin.

---

Tu intègres un reportage photo dans un site vitrine d'hôtel déjà construit, et tu me proposes le design des galeries. Le site existe et fonctionne : **tu adaptes ton design à lui, pas l'inverse.**

## Le projet

**The White Valley** — hôtel de suites d'altitude à Ifrane, Moyen Atlas (Maroc). 74 suites, spa, restaurant, piscine chauffée, salle de sport, salle de conférence. Site vitrine d'une seule page, bilingue FR/EN.

Registre visuel : éditorial, sobre, luxe discret. Typographie Fraunces (serif, titres) + Inter (texte) + JetBrains Mono (annotations). Pas de superlatif, pas d'effet gratuit. Le site vend le calme.

## Contraintes techniques, non négociables

1. **Aucune étape de build.** React 18 est chargé en UMD depuis un CDN, et le JSX est compilé dans le navigateur par Babel standalone. Il n'y a ni bundler, ni npm install, ni import/export ES modules. Une dépendance n'est possible que si elle existe en build UMD sur cdnjs — sinon, écris le composant à la main. Pour un carrousel, **préfère systématiquement 40 lignes maison en CSS scroll-snap** à une librairie.
2. **Nommage CSS existant, à respecter** : BEM-ish, `bloc__element--modifier` (`.room__media`, `.exp__item`, `.season__media`, `.dest__preview`). Toute classe nouvelle suit la même grammaire.
3. **Aucune couleur en dur.** Toutes les couleurs passent par les tokens CSS listés plus bas. Un `#fff` ou un `#000` écrit en dur casse un des thèmes.
4. **Grilles : toujours `minmax(0, 1fr)`, jamais `1fr` seul.** Le site a déjà eu un débordement horizontal à cause de ça : une image en `height: 100%` avec `aspect-ratio` fait gonfler la largeur minimale des colonnes, et la grille sort de la page. Les visuels doivent être en `width: 100%; height: auto` (ratio piloté par `aspect-ratio`), ou en `object-fit: cover` dans un conteneur de ratio fixe.
5. **Performance.** Les photos sources font 3776 × 2832 px pour ~5 Mo. Prévois deux tailles par photo servies en `srcset` (≈800 px et ≈1600 px de large), `loading="lazy"` partout sauf le premier visuel visible, et des dimensions déclarées pour éviter tout décalage de mise en page. Objectif : ≤ 250 Ko par photo servie.
6. **Accessibilité.** Navigation clavier réelle (flèches, Tab, focus visible), `aria-roledescription="carousel"` et libellés des contrôles. **Si un défilement est automatique, il doit avoir un bouton pause** et s'arrêter au survol comme au focus — c'est déjà la règle appliquée au bandeau du site. Respecte `prefers-reduced-motion`. Les textes alternatifs sont à rédiger en FR et EN.

## Les deux thèmes — le piège principal

Le site a **deux systèmes de variation superposés**, tous deux pilotés par des attributs sur `<body>` :

**A. La saison** (`body[data-season]`), visible par le visiteur via un bouton ☀ / ❄. C'est le vrai enjeu : la page passe d'une palette crème chaude à une palette blanc et bleu glace.

| Token | Été (défaut) | Hiver |
|---|---|---|
| `--bg` | `#efece5` | `#f2f8fc` |
| `--bg-alt` | `#e5e2d8` | `#e4f1f9` |
| `--surface` | `#f5f3ee` | `#ffffff` |
| `--fg` | `#1a1208` | `#0a1c2a` |
| `--fg-dim` | `#5a4a32` | `#163650` |
| `--fg-mute` | `#8a7a62` | `#2d5a7a` |
| `--line` | `#d5c8a8` | `#b4d4e8` |
| `--accent` | `#7f6b48` (kaki) | `#1e70a8` (bleu) |
| `--accent-2` | `#f5ead8` | `#4a9fd4` |
| `--ink` | `#0c2816` (vert forêt) | `#0a1c2a` (bleu nuit) |

**B. La palette** (`body[data-theme]`) : `light-brass` (défaut public), plus trois variantes sombres (`dark-brass`, `dark-sage`, `dark-gold`) accessibles seulement via un panneau d'édition interne. Ton design doit rester correct si `--bg` devient sombre.

**Ce que ça implique pour toi :**

- Tout voile, dégradé ou légende posé sur une photo doit rester lisible sur fond crème **et** sur fond bleu glace **et** sur fond sombre. Utilise un scrim neutre (`rgba(0,0,0,…)`) sur la photo elle-même plutôt que des couleurs de thème par-dessus l'image.
- Les flèches, points et bordures de carrousel se colorent avec `--fg`, `--fg-dim`, `--line`, `--accent`.
- **Livre chaque maquette en deux versions : saison Été et saison Hiver.** Une proposition qui n'existe qu'en été sera refusée.

## Interdit absolu : le hero

Le hero plein écran affiche `assets/HERO1-*.jpeg` en été et `assets/HERO2-*.jpeg` en hiver, en `srcset` 1920/2560. **Ne change ni ces images, ni ce mécanisme, ni la structure du hero.** C'est le seul endroit où le changement de saison est visible en photo, et le client l'a validé. Tu n'y touches pas, même pour « améliorer ».

## Les emplacements à remplir

Chacun contient aujourd'hui un composant `<Placeholder>` (un dégradé CSS avec une étiquette monospace). C'est exactement ce que tu remplaces par de vraies photos.

| # | Emplacement | Composant | Conteneur | Ratio actuel | Visuels | Photos disponibles |
|---|---|---|---|---|---|---|
| 1 | 4 cartes suites | `Rooms` | `.room__media .ph` | **4 / 5** portrait | 1 par suite | 28 à 35 par suite |
| 2 | 5 cartes lieux (spa, The WHITE, piscine, salle de sport, séminaires) | `Experiences` | `.exp__item .ph` | **1 / 1** carré | 1 par lieu | 41 spa, 16 restaurant, 7 piscine, 3 sport, **0 séminaires** |
| 3 | 4 cartes saisons | `Saisons` | `.season__media .ph` | **3 / 4** portrait | 1 par saison | hiver seulement |
| 4 | Visuel Ifrane / accès | `Destinations` | `.dest__preview .ph` | libre | 1 | **0** |
| 5 | Hero éditorial 2 colonnes (variante non active) | `Hero` | `.hero__slide .ph` | libre | 3 | façade |

La grille des lieux fait 5 colonnes à partir de 1280 px, puis 3, puis 2, puis 1.

## La banque de photos

207 photos utiles, déjà triées par sujet. Convention de nommage cible dans le site :

```
assets/photos/<sujet>-<nn>-800.jpg      (≈800 px de large)
assets/photos/<sujet>-<nn>-1600.jpg     (≈1600 px de large)
```

| Sujet dans le nom | Contenu | Nombre |
|---|---|---|
| `spa-cabine` | cabines de soin, tables de massage, huiles | 13 |
| `spa-hammam` | hammam en marbre sombre, rituels, gommages | 18 |
| `spa-douche` | douches et vestiaires | 4 |
| `spa-linge` | peignoirs et serviettes brodés, savons siglés | 4 |
| `spa-detente` | transats | 2 |
| `the-white` | façade et enseigne lumineuse du restaurant, de nuit | 16 |
| `piscine` | piscine intérieure chauffée, éclairage bleu de nuit | 7 |
| `sport` | vélos de biking, elliptique, tapis, presse à cuisses — la salle est vitrée sur la piscine | 3 |
| `facade` | façade de l'hôtel de nuit, enseigne THE WHITE VALLEY | 3 |
| `suite-senior-grand-lit` | chambre, salon, kitchenette, salle de bain | 34 |
| `suite-senior-twin` | idem | 35 |
| `suite-junior-grand-lit` | idem | 28 |
| `suite-junior-twin` | idem | 34 |

**Caractère du reportage, à assumer dans le design :** tout a été photographié **de nuit ou en intérieur**, en lumière chaude et artificielle. Pas une seule photo d'extérieur de jour. Ton design doit tirer parti de cette nocturnité plutôt que la combattre — et surtout, il doit rester crédible quand la page passe en palette hiver, claire et froide, alors que les photos restent chaudes et sombres. C'est le vrai problème de design à résoudre.

**Manques assumés, à ne pas masquer par du remplissage :** aucune photo de la salle de conférence, aucune vue intérieure du restaurant (salle, tables, assiette), rien sur Ifrane et ses environs, rien de la réception, et aucune photo de printemps, d'été ni d'automne. Pour ces emplacements, propose un traitement honnête : soit le visuel reste un placeholder assumé et élégant, soit le bloc s'adapte à l'absence d'image. Ne suggère pas de banque d'images extérieure.

## Ce que je te demande de concevoir

Les suites et le spa ont 15 à 35 photos chacun, et le site n'en montre qu'une. Il faut un motif de galerie.

Propose **deux à trois directions distinctes**, chacune en Été et en Hiver, sur desktop et mobile :

1. **Carrousel dans la carte** — la carte suite garde sa taille, on feuillette les vues sur place.
2. **Galerie plein écran** — un clic sur la carte ouvre les photos en grand, avec navigation clavier.
3. **Mosaïque éditoriale** — plusieurs photos de tailles inégales composées ensemble, sans navigation.

Pour chaque direction, montre : l'état au repos, l'état survolé, l'état actif, la version mobile, et le comportement quand il n'y a qu'une seule photo disponible. Indique le nombre de photos que la direction sait absorber sans devenir illisible.

Tranche ensuite, avec un argument, et livre pour la direction retenue :

- le markup final, en classes cohérentes avec l'existant,
- le CSS, en tokens uniquement,
- la logique d'interaction (React 18, hooks, sans dépendance),
- les libellés des contrôles et les textes alternatifs, en FR et EN.

## Fichiers joints

- `index.html` — page d'entrée, tokens de thème sur `<body>`
- `components.jsx` — tous les composants, l'objet de traduction `T` (FR/EN) en tête, et le composant `Placeholder` à remplacer
- `app.jsx` — composition de la page et gestion des états `theme` / `season` / `lang`
- `styles.css` — 3000 lignes : tokens des thèmes en tête, puis les blocs par section
- planches-contact des photos disponibles
