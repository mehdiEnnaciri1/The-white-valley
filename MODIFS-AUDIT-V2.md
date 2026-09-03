# Modifications appliquées — audit TWV v2

Source : **`TWV_Audit-et-Contenus_v2.docx`** (DO FACTORY · TWV-WEB-2026 · 28 août 2026), reçu dans le dossier `PHOTOS THE WHITE VALLEY-20260831T145228Z-1-001`.

Périmètre appliqué : **la homepage et le micro-copy**, c'est-à-dire tout ce que le document demande sur le site tel qu'il existe (une seule page). Les 14 pages intérieures décrites en Partie 2 (L'Hôtel, les 4 fiches suites, The WHITE, Le Spa, Piscine & sport, Séminaires, Ifrane, Réserver, Contact, pages légales) **ne sont pas créées** : le site n'a pas de routage, c'est un chantier séparé. Le rédactionnel de ces pages est prêt dans le docx.

Les parties 1 à 5 ci-dessous portent sur le rédactionnel, appliqué sans toucher aux images. **L'intégration des photos est venue ensuite : voir la partie 6.**

---

## 1. Audit homepage — les 25 points

| # | Point de l'audit | Décision | Appliqué |
|---|---|---|---|
| 1 | Baseline « L'élégance à l'état pure » | Retirer | ✅ Remplacée partout par **« La Parenthèse Blanche d'Ifrane. »** — `<title>`, splash, sous-titre de nav, logo SVG |
| 2 | Hero « L'appart'hôtel d'altitude » | Réécrire | ✅ **« L'hôtel de suites / d'altitude / à Ifrane. »**, structure 3 lignes conservée |
| 3 | Tagline « À 1 650 mètres… » | Garder | ✅ Inchangée |
| 4 | Champ VOYAGEURS (13 combinaisons) | Réécrire | ✅ Remplacé par un **compteur adultes / enfants** (boutons +/−, `aria-label`, fermeture à Échap et au clic extérieur) |
| 5 | Bandeau défilant n°1 | Réécrire | ✅ Les 6 mentions confirmées ; « 74 résidences » → **74 suites** ; « Réception 24h/24 » retirée (non confirmée) |
| 6 | Bloc L'HÔTEL | Réécrire | ✅ Nouveau texte en 3 paragraphes, repris mot pour mot |
| 7 | Bandeau défilant n°2 | Retirer | ✅ Composant `Marquee` supprimé + **contrôle de pause** ajouté au bandeau restant (bouton, pause au survol et au focus clavier, `prefers-reduced-motion`) |
| 8 | Quatre cartes hébergement | Retirer et refaire | ✅ Nouvelle nomenclature : Suite Senior Grand lit 65 m² · Senior Twin 65 m² · Junior Grand lit 28 m² · Junior Twin 45 m², dans l'ordre du document (Senior d'abord) |
| 9 | Filtres « Tous / Appartement / Chambre / Suite » | Retirer | ✅ Supprimés |
| 10 | Badge « LE PLUS CHOISI » | Retirer | ✅ Supprimé (et le cœur « favori », même logique) |
| 11 | « le format que choisissent la plupart des couples » | Retirer | ✅ Supprimé |
| 12 | Bloc QUATRE SAISONS | Garder tel quel | ✅ Inchangé, sauf « piscine chauffée **à 29 °C** » → « piscine chauffée » (FR + EN) |
| 13 | Carte « Le spa » | Réécrire | ✅ Nouveau texte, avec les **parcours séparés femmes / hommes** |
| 14 | Carte « La table » | Réécrire | ✅ Devient **The WHITE** ; mention « vingtaine de vins marocains » retirée (non confirmée) |
| 15 | Carte « Les séminaires » | Réécrire | ✅ « Une **salle de conférence** » au singulier |
| 16 | Piscine chauffée et salle de sport | Ajouter | ✅ Le bloc passe de 3 à **5 cartes** : « Cinq lieux, sous le même toit. » |
| 17 | Bloc stats Ifrane | Garder | ✅ Libellé « Résidences » → **Suites** (74) |
| 18 | Bloc « La maison, par ceux qui la tiennent » | Retirer (arbitré) | ✅ Composant `Editorial` supprimé |
| 19 | Newsletter | Garder | ✅ Inchangée + message de confirmation du micro-copy ajouté (« Un e-mail vient de partir vers votre boîte… Quatre par an, pas une de plus. ») |
| 20 | CTA final | Garder | ✅ Conservé, restructuré en **bouton unique + lien discret** « Vous organisez un séminaire ? Demander un devis → » (idem hero, blocs 1 et 9 du rédactionnel) |
| 21 | Footer, colonne L'HÔTEL | Retirer 3 entrées sur 4 | ✅ Galerie, Carrières, Presse et FAQ retirées. Colonnes refaites : Contact / L'hôtel / Pratique / Légal |
| 22 | Footer, coordonnées | Compléter | ✅ Adresse **N8, Ifrane, Moyen Atlas, Maroc** ajoutée · téléphone et WhatsApp en `[À CONFIRMER]` · e-mail cliquable. Les faux numéros du menu (`+212535000000`, `wa.me/212600000000`) sont **supprimés** |
| 23 | Moteur de réservation | Retirer | ✅ Toutes les URLs `le-zenith-hotel-spa.hotelrunner.com` supprimées. Une seule constante `BOOKING_ENGINE_URL` à renseigner ; tant qu'elle est vide, les parcours basculent sur un e-mail pré-rempli vers `reservation@thewhitevalleys.ma` |
| 24 | Fiche Google Business | Ajouter | ⚠️ **Action client, hors site.** Côté site : le lien « Plan d'accès » pointe désormais sur les coordonnées confirmées (33.5237066, -5.110433) |
| 25 | Domaine e-mail | Réécrire | ✅ `thewhitevalley.ma` → **`thewhitevalleys.ma`** partout |

---

## 2. Ce qui reste bloqué côté client

Ces éléments sont visibles en clair dans le code, entre crochets, pour être impossibles à rater. **Aucune page ne doit être publiée avec un crochet visible.**

| Donnée | Où | Constante / marqueur |
|---|---|---|
| URL du moteur de réservation The White Valley | `components.jsx`, en tête | `BOOKING_ENGINE_URL = ''` |
| Téléphone de la réception | Menu + footer | `CONTACT_PHONE = ''` · `[À CONFIRMER]` |
| Numéro WhatsApp | Menu + footer | `CONTACT_WHATSAPP = ''` · `[À CONFIRMER]` |
| Capacité des 4 suites | Cartes suites | `cap: '[À CONFIRMER]'` |
| Tarifs de référence | Cartes suites | affiché « Tarifs sur demande » en attendant |
| Politique d'annulation | Footer + panneau réservation | `[À CONFIRMER]` |
| Température de la piscine | Retirée du texte | à réintroduire une fois confirmée |
| « Réception 24h/24 » | Retirée du bandeau | à réintroduire une fois confirmée |
| Pages légales (Mentions, CGV, Confidentialité) | Footer | rendues en texte, pas en lien mort — bloquant juridique au lancement |

---

## 3. Décisions de traduction (EN) à valider

Le document ne fournit l'anglais que pour l'accroche du hero. Le site étant bilingue, tout le nouveau rédactionnel a été traduit pour que la version EN ne reste pas sur l'ancienne promesse. Trois choix méritent une validation :

- **Signature** : « La Parenthèse Blanche d'Ifrane. » → *The White Pause of Ifrane.* (cohérent avec le reste du site, qui traduit déjà « parenthèse » par *pause*)
- **Descripteur** : « hôtel de suites » → *suite hotel* (« The high-altitude **suite hotel** in Ifrane. »)
- **Nom des suites** : *Senior Suite · King bed*, *Senior Suite · Twin beds*, *Junior Suite · King bed*, *Junior Suite · Twin beds*. À trancher : garder la nomenclature française telle quelle en anglais est aussi une option.

---

## 4. Écarts assumés par rapport au document

- **Lien « VOIR LES QUATRE SUITES → »** (rédactionnel bloc 4) : non ajouté. Il pointerait vers la page Les Suites, qui n'existe pas — exactement le type de lien mort que l'audit demande de supprimer. À rétablir avec la page.
- **Cartes des cinq lieux** : elles ne sont plus cliquables (elles pointaient toutes vers `href="#"`), pour la même raison. À rebrancher quand les pages The WHITE, Le Spa, Piscine & sport et Séminaires existeront.
- **Header desktop** (L'Hôtel · Les Suites · Le Spa · The WHITE · Séminaires · Ifrane · RÉSERVER) : le menu reste le drawer actuel, dont les entrées ont été renommées et rebranchées sur les sections réelles. Le header à 7 entrées suppose les 15 pages.
- **Composant `Instagram`** : présent dans le code mais **non monté** par l'application — il n'apparaît pas sur le site, ce qui explique son absence de l'audit. Il porte encore `@LeZenithCasablanca` : à mettre à jour ou à supprimer avant toute réactivation.

---

## 5. Fichiers modifiés

| Fichier | Nature |
|---|---|
| `components.jsx` | Rédactionnel FR + EN, nomenclature suites, cinq lieux, bandeau unique avec pause, compteur voyageurs, footer, coordonnées, config moteur |
| `app.jsx` | Suppression de `Marquee` et `Editorial`, réservation centralisée |
| `index.html` | `<title>` + `meta description` |
| `styles.css` | Grille à 5 cartes, compteur voyageurs, bouton pause, lien discret, footer |
| `components.js` / `app.js` | Recompilés depuis les sources (ils étaient périmés) |

Vérifié : compilation Babel sans erreur, et rendu de tous les composants en FR et en EN sans exception ni valeur manquante. **Une relecture visuelle dans le navigateur reste à faire** (`npx serve . -p 8080`), notamment sur la grille à cinq cartes et le compteur voyageurs.

---

## 6. Intégration des photos (3 septembre 2026)

58 photos issues du reportage client, redimensionnées en deux tailles (`-800` et `-1600`) dans `assets/photos/`, servies en `srcset`. Poids : 68 Ko en moyenne pour la version 800 px, 221 Ko pour la 1600 px, 16,4 Mo au total.

**Un carrousel maison** (`Gallery`, dans `components.jsx`) remplace les placeholders dans neuf emplacements : les 4 cartes suites (8 photos chacune), 4 des 5 cartes lieux (spa 10, The WHITE 6, piscine 4, salle de sport 3) et le visuel « Nous rejoindre » (3 façades).

| Décision | Ce qui a été fait | Pourquoi |
|---|---|---|
| Ratio des cartes suites | 4/5 portrait → **4/3 paysage**, grille passée à **2 colonnes** | Les photos sont en 4:3 ; recadrer en portrait amputait 60 % de la largeur, c'est-à-dire le volume de la pièce — ce que les suites vendent |
| Grille des cinq lieux | 5 colonnes → **3 colonnes (3 + 2)** | À 246 px de large, une photo de 4:3 et son carrousel étaient illisibles |
| Traitement visuel | Photo posée dans un cadre `--surface` bordé de `--line`, légende monospace sous l'image | Les photos sont toutes nocturnes et chaudes ; la page bascule en blanc et bleu glace en hiver. Le cadre fait de la photo un objet posé sur la page, au lieu d'un fond qui se confronte à la palette |
| Photos scénarisées (cygnes de serviettes, pétales) | Écartées en couverture de carte, conservées plus loin dans la galerie | La vitrine montre la chambre, pas la décoration d'accueil |
| Carte séminaires | Pas de photo → **liste de faits** (salle de conférence, 74 suites dont 41 en lits séparés, restauration, spa) | Aucune photo de la salle de conférence n'existe. Le bloc ne peut pas disparaître : c'est le second funnel |
| Défilement automatique | Aucun | Rien à mettre en pause, donc rien à corriger côté accessibilité |

Accessibilité du carrousel : piste en `scroll-snap` (glissement tactile natif), navigation clavier par les flèches, `aria-roledescription`, libellés FR/EN sur tous les contrôles, focus visible, `prefers-reduced-motion` respecté. Textes alternatifs composés par sujet (la chambre, le salon, la kitchenette, la salle de bain…), en FR et EN.

Vérifié en navigateur : aucun débordement horizontal en 1440 px comme en 390 px, les 58 images se chargent, le compteur et les points suivent la photo réellement affichée, et le rendu tient dans les deux saisons.

**Ajustements du 3 septembre :** la galerie du spa ouvre sur le hammam (l'ordre d'affichage est piloté par le tableau `PHOTOS` ; les noms de fichiers ne bougent pas). La section « Les Lettres de la Vallée » passe en pleine largeur sur la façade de nuit (fond changé le 3 septembre : facade-02, la vue en enfilade avec le lampadaire double et l enseigne au fond, à la place de facade-01). Le voile est un dégradé vertical : le haut de la photo reste sans filtre — façade, lampadaires, enseigne — et l'ombre ne se dépose que sous les textes. La section est plus haute et le formulaire descendu de 58 px pour passer sous l'enseigne. Corrigé au passage : en pile mobile, le `align-items: flex-end` du desktop plaquait libellé, champ et mention contre le bord droit.

**Restent en placeholder dégradé** : les 4 cartes saisons (aucune photo de printemps, d'été ni d'automne) et la variante éditoriale du hero, non active. Le hero plein écran n'a pas été touché.

---

## 7. Contrôle de conformité au rédactionnel (3 septembre 2026)

Vérification mécanique et non déclarative : les phrases définitives du docx (blocs « Page 1 — Accueil » et « Micro-copy ») ont été extraites du document, puis recherchées dans le texte réellement rendu par l'application, comparaison insensible à la ponctuation.

| Résultat | Nombre |
|---|---|
| Phrases rendues sur la page | 26 |
| Présentes mais affichées sous condition (confirmation newsletter, après envoi) | 1 |
| Absentes, faute de fonctionnalité correspondante | 3 |

Corrigé à cette occasion : l'ordre des statistiques du bloc « Nous rejoindre » suit désormais le rédactionnel — altitude, distance, suites.

Ajouté : **`404.html`**, avec le texte définitif du docx (« Cette page n'existe pas. Ce qui existe : quatre suites, un spa, une table, une piscine chauffée, et une vallée à 1 650 mètres. »). Page autonome qui reprend les tokens et la typographie du site. Testé : une URL inconnue renvoie bien un 404 servi par cette page.

### Les trois textes qui restent hors du site

| Texte du docx | Pourquoi il n'est pas intégré |
|---|---|
| « Votre séjour est confirmé… » | Message post-réservation : il appartient au tunnel du moteur, qui n'est pas branché (point 23) |
| « Rien de libre sur ces dates… » | Même chose : c'est un état renvoyé par le moteur de réservation |
| « Il manque [CHAMP] pour valider. Le reste de ce que vous avez saisi est conservé. » | Écrit pour un formulaire à plusieurs champs (contact, devis, réservation). Le seul formulaire du site est la newsletter, à un champ : la seconde phrase n'y a pas de sens, et l'adapter reviendrait à reformuler un texte validé — ce que le document interdit. À intégrer avec les formulaires des pages intérieures. |

### Ajustements du 3 septembre (après-midi)

- **Carte « Nous rejoindre » corrigée.** Le conteneur était calé sur l'ancien placeholder : ratio 4/5 et hauteur maximale figés, avec une image qui s'étirait pour occuper le reste. Avec une photo en 4/3 plus la barre de légende, le total dépassait la hauteur imposée et la carte du bas se retrouvait rognée. La hauteur suit désormais le contenu, et le cadre interne de la galerie a été fusionné avec celui du conteneur — un seul filet au lieu de deux. Mesuré après correction : `scrollHeight` égal à `clientHeight`, plus aucun débordement.
- **Libellé « Votre adresse e-mail » retiré de l'affichage** dans la section Les Lettres de la Vallée. Il est conservé en `.visually-hidden` : sans lui, le champ perdrait son nom accessible, et le placeholder ne joue pas ce rôle puisqu'il disparaît à la saisie.

### Vérification du 3 septembre : la photo de salle de conférence

Contrôle complet du dossier livré : **314 fichiers image, aucun autre format** (pas de HEIC, RAW, TIFF ni WebP caché), aucun fichier hors image. Le dossier ne comporte pas de seconde archive — le suffixe `-1-001` du nom laissait penser à un export Google Drive découpé, mais il n'y a pas de partie manquante dans `Downloads`.

**Il n'existe donc aucune photo de la salle de conférence dans la livraison.** Un second document du client le confirme : `THE WHITE VALLEY.docx` (28/08, 16h59) — un inventaire des visuels par section — qui la liste explicitement dans « PHOTOS À FOURNIR », section 4.3 : « Les séminaires — Salle de séminaire et de conférences ». Même statut pour l'intérieur du restaurant, les trois saisons manquantes et les visuels d'Ifrane.

Corrigé à cette occasion : le titre de la carte séminaires remontait de 32 px par rapport à celui de la carte voisine, parce qu'un bloc de galerie mesure 46 px de plus que sa photo (marge interne du cadre, filet, écart et barre de légende). Compensation mesurée puis vérifiée : les cinq titres sont désormais alignés au pixel. Les quatre faits sont aussi répartis sur la hauteur du bloc, pour qu'il se lise comme une liste et non comme un trou.

---

## 8. Carrousels : traitement éditorial et défilement automatique (3 septembre)

Demande client : appliquer l'esprit d'une référence de carrousels éditoriaux (planches Instagram, palette brune et crème, photos en arche, compteurs « 1/4 ») aux deux sections à galerie, et ajouter un défilement automatique.

### Ce qui a été repris de la référence, et ce qui a été écarté

| Trait de la référence | Décision |
|---|---|
| Photo en **arche** haute | ✅ Reprise. `border-radius: 999px 999px 4px 4px / 20% 20% 4px 4px` — une courbe plus creusée amputait les plafonds et tirait vers l'écran de cinéma. |
| **Carte crème** sous la photo pour le texte | ✅ Reprise. Le texte des cartes suites et des cartes lieux passe sur une carte `--surface` bordée d'un filet `--line`. |
| **Compteur** traité comme un signe graphique | ✅ Repris : compteur en couleur d'accent, plus grand, aligné à gauche de la barre. |
| Cartes de **hauteur égale** sur une ligne | ✅ Reprise : le crème forme une bande régulière, la variation vient des photos. |
| **Palette brune et crème** de la référence | ❌ Écartée. Des couleurs en dur feraient mentir la saison hiver, qui passe la page en blanc et bleu glace. Ce sont les tokens qui donnent la couleur — vérifié en capture dans les deux saisons. |
| Cadre `--surface` autour de la photo | Retiré au profit de l'arche : c'est désormais la forme qui pose la photo sur la page. |

### Défilement automatique

L'audit impose au bandeau (point 7) qu'un défilement automatique puisse être arrêté. La même règle a été appliquée au carrousel :

- **bouton pause** dans la barre, avec `aria-pressed` et libellés FR/EN ;
- **arrêt au survol et au focus clavier** ;
- **désactivation complète** sous `prefers-reduced-motion` ;
- **ne tourne que si le carrousel est visible à l'écran** (IntersectionObserver, seuil 0,35) et si l'onglet est au premier plan — sans quoi les neuf carrousels de la page défileraient tous en même temps, hors de vue, en chargeant des images pour rien ;
- intervalles décalés d'une carte à l'autre (5,2 s + 0,7 s par rang), pour que les voisines ne tournent pas au même instant.

Vérifié en navigateur, sur la section isolée : compteur à 01/10 au départ, 02/10 après 8 s, puis figé à 02/10 pendant 12 s de survol. Et sous `prefers-reduced-motion`, les neuf carrousels restent à 01.

Recalé au passage : la compensation de hauteur de la carte séminaires, la galerie ayant perdu son cadre. Les cinq titres du bloc restent alignés au pixel (mesuré : 684 px pour la première ligne, 1267 px pour la seconde).

### Les cinq lieux passent en carrousel de section

La grille 3 + 2 laissait une case vide. La section est devenue un carrousel de cartes (`Rail`, dans `components.jsx`) :

- **trois cartes visibles** sur desktop, deux en tablette, une sur mobile ; le rail avance d'une carte à la fois ;
- **trois points centrés** sous la section, et rien d autre. Retirés à la demande du 3 septembre : les flèches, le compteur et le bouton pause. Le défilement reste interruptible — arrêt au survol et au focus clavier, désactivation sous prefers-reduced-motion — mais **il n a plus de commande d arrêt explicite**, ce que l audit demande au point 7 pour tout défilement automatique. À rétablir si la conformité est visée : le composant Gallery en garde un, il suffit de le remonter dans le rail ;
- les cartes gardent la mise en page adoptée le 3 septembre : arche en haut, carte crème en dessous, hauteurs égales sur la ligne.

**Le nombre de points suit les positions atteignables, pas les cartes.** Avec cinq cartes dont trois visibles, le défilement s'arrête à la troisième position — celle qui montre les cartes 3, 4 et 5. Afficher cinq points donnerait deux points qui ne s'allumeraient jamais. Le pas et le nombre de positions sont donc **mesurés** dans le composant (largeur d'une carte + écart, via un `ResizeObserver`), ce qui les fait suivre les paliers responsives sans les écrire deux fois : 3 positions en desktop, 4 en tablette, 5 sur mobile.

Mêmes garde-fous que la galerie : pause, arrêt au survol et au focus clavier, désactivation sous `prefers-reduced-motion`, rien ne tourne hors de l'écran ni onglet en arrière-plan.

Vérifié en navigateur : 5 cartes, 3 points centrés au pixel (centre de la barre et centre des points à 704 px), aucune flèche, aucun compteur ni bouton pause dans le rail, les 8 boutons pause des galeries photo conservés, titres des cinq cartes alignés à 684 px, aucun débordement horizontal. Intervalle du rail vérifié à 5 s.

**Deux niveaux de mouvement coexistent** : le carrousel de section (5 s) et les galeries photo dans chaque carte (5,6 à 8,4 s selon le rang). Chacun a son bouton pause. Les galeries des cartes hors écran ne tournent pas — l'observateur d'intersection tient compte du rognage par le rail, donc seules les cartes visibles s'animent.

Retiré au passage : le bloc CSS de la mise en page « pleine largeur » (photo à gauche, texte à droite), essayé pour la version à une carte par vue et devenu inutile.

### « Nous rejoindre » : une photo par saison (3 septembre)

Le carrousel de trois façades est remplacé par **une seule photo qui suit la saison**, sur le modèle du hero :

- **été** : la façade du restaurant The WHITE éclairée de nuit (`TWV-PIC-04795.jpg`) ;
- **hiver** : le même cadrage sous la neige (`TWV-PIC-04795 - SnowFX.png`).

Le client avait fourni une autre prise sans neige, mais celle retenue offre le cadrage identique à la version enneigée, et elle est plus propre : ni gimbal ni personne dans le champ. La paire fonctionne donc comme HERO1/HERO2 — même composition, seule la saison change.

À savoir : la version enneigée est un **montage** (neige ajoutée en retouche), signalé dès le classement des photos. Vu la règle du docx sur les données non confirmées, c'est un point à valider côté client avant mise en ligne.

Fichiers produits : `dest-ete-{800,1600}.jpg` et `dest-hiver-{800,1600}.jpg` (89 à 349 Ko), servis en `srcset`. Vérifié dans les deux saisons : la bonne image se charge, avec son texte alternatif. Le groupe de galerie « facade » et les règles CSS devenues sans objet ont été retirés. `facade-02` sert désormais de fond à la section Les Lettres de la Vallée ; `facade-01` et `facade-03` restent dans `assets/photos/` sans être utilisés.

### Tri client des photos de suites (3 septembre)

Vues écartées de l affichage, sur demande. Les fichiers restent dans le dossier : remettre l entrée dans le tableau PHOTOS suffit à les réafficher.

| Suite | Écartées | Reste |
|---|---|---|
| Suite Senior Grand lit | 2, 4, 6 | 5 photos |
| Suite Senior Twin | 1, 3 | 6 photos |
| Suite Junior Grand lit | 2, 3, 4 | 5 photos |
| Suite Junior Twin | 1, 4, 6 | 5 photos |

Vérifié en navigateur, galerie par galerie : compteurs 05, 06, 05 et 05, et les fichiers restants sont bien ceux attendus.

Deux effets de bord à connaître : la Suite Senior Grand lit perd sa seule vue de kitchenette, alors que la fiche annonce « kitchenette équipée » ; et la Suite Junior Grand lit garde deux salles de bain sur cinq vues, sans salon.

### Tri client des galeries de lieux (3 septembre)

| Galerie | Demande | Ordre obtenu | Total |
|---|---|---|---|
| Le spa | 3e vue écartée, puis 5e et 6e remontées après la 2e, puis 2e écartée à son tour | 04, 05, 06, 03, 07, 08, 09, 10 | 8 |
| The WHITE | 4e vue en couverture ; 2e et 6e écartées | 04, 01, 03, 05 | 4 |

Les numéros sont ceux des fichiers, pas des positions. Vérifié en navigateur : compteurs 09 et 04, ordre des fichiers conforme. Piscine (4) et salle de sport (3) inchangées.

À noter pour The WHITE : la couverture est maintenant la prise cadrée entre les arbres. Il ne reste que quatre vues, toutes de la façade — le manque de vue intérieure du restaurant devient plus visible.
