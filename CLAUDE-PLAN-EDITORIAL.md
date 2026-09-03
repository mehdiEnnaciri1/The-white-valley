# Utiliser Claude pour générer les meilleurs plans éditoriaux

Guide pratique avec prompts prêts à copier-coller.

---

## Étape 0 — Choisir le bon modèle

| Modèle | Quand l'utiliser |
|---|---|
| **Opus** | Stratégie, plan éditorial complet, posts importants |
| **Sonnet** | Rédaction de posts au quotidien |
| **Haiku** | Volume / automatisation (via API, ex. N8N) |

---

## Étape 1 — Apprendre votre style à Claude (« Style DNA »)

À faire **une seule fois**. Copiez ce prompt :

```
Voici 3 à 5 de mes contenus qui ont le mieux fonctionné :

[COLLER VOS POSTS / TRANSCRIPTIONS ICI]

Analyse et résume mon "ADN de style" :
1. Mon ton (familier, expert, direct... ?)
2. La structure de mes accroches
3. Le rythme de mes phrases
4. Le profil psychologique de mon audience
5. Mes expressions récurrentes

Donne-moi ce résumé en un bloc que je pourrai recoller
au début de mes futures conversations.
```

> Gardez le résultat dans un fichier `mon-style.md`. Vous le collerez au début de chaque session.

---

## Étape 2 — Générer le plan éditorial du mois

```
[COLLER VOTRE "ADN DE STYLE"]

Contexte :
- Mon activité : [DÉCRIRE]
- Ma cible : [DÉCRIRE]
- Mon offre : [DÉCRIRE]
- Réseau : [LinkedIn / Instagram...]
- Rythme : 3 posts par semaine (mardi, jeudi, samedi)

Crée mon plan éditorial pour le mois sous forme de tableau :
| Date | Heure | Objectif (Attirer/Engager/Vendre) | Sujet | Angle | Format |

Règles :
- Respecte la séquence Attirer → Engager → Vendre, en boucle
- Chaque séquence de vente doit se boucler en 7 à 10 jours
- Les sujets viennent des vrais problèmes de ma cible : [LISTER 5 PROBLÈMES CLIENTS]
```

---

## Étape 3 — Rédiger les posts

```
[COLLER VOTRE "ADN DE STYLE"]

Rédige le post du [DATE] de mon plan :
- Objectif : [Attirer/Engager/Vendre]
- Sujet : [SUJET]

Structure obligatoire :
1. Accroche : nommer un problème précis (pas de généralité)
2. Déclic : offrir un nouvel angle de lecture
3. Direction : un appel à l'action clair

Propose 3 versions avec 3 accroches différentes.
```

---

## Étape 4 — Auditer avant de publier

```
Audite ce post avant publication :

[COLLER LE POST]

Vérifie :
1. L'accroche donne-t-elle envie de lire la suite en 2 secondes ?
2. Longueur adaptée au réseau ?
3. Les "beats" émotionnels : où le lecteur risque-t-il de décrocher ?
4. L'appel à l'action est-il clair et unique ?

Note /10 et propose les corrections.
```

---

## Étape 5 — Recycler et analyser

**Transformer des notes en posts :**
```
[ADN DE STYLE] + Voici mes notes en vrac : [COLLER].
Transforme-les en 5 posts, chacun avec un angle différent.
```

**Analyser un concurrent :**
```
Voici 3 transcriptions de contenus d'un concurrent qui cartonne : [COLLER].
Qu'est-ce qui fait que ça marche ? Quel rythme, quelles accroches ?
Que puis-je adapter (sans copier) à mon style ?
```

---

## Erreurs à éviter

1. ❌ Publier sans relire — toujours une **validation humaine**.
2. ❌ Demander « écris-moi un post sur X » sans contexte ni style → résultat générique.
3. ❌ Automatiser avant que le processus manuel fonctionne.
4. ❌ Croire que le contenu sauvera une **offre floue** — clarifiez l'offre d'abord.

## Le cycle hebdomadaire idéal (≈ 2h/semaine)

- **Lundi (30 min)** : collecter les questions clients de la semaine
- **Lundi (45 min)** : générer + rédiger les 3 posts avec Claude (étapes 2–3)
- **Lundi (30 min)** : auditer (étape 4), corriger, marquer « approuvé »
- **Mardi/Jeudi/Samedi** : publier (manuellement ou via N8N)
- **Dimanche (15 min)** : noter ce qui a marché → nourrir le prochain lundi
