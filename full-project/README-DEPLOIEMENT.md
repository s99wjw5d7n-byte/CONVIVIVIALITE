# Convivialité urbaine — projet source

Ce dossier contient le **code source complet** du site (React + Vite + TailwindCSS v4). Contrairement à la version statique déjà déployée sur Netlify, celui-ci te permet de modifier le contenu, les images, les couleurs, etc., puis de republier.

## 1. Installer les outils (une seule fois)

Il faut Node.js (version 18 ou plus récente). Télécharge-le sur https://nodejs.org si tu ne l'as pas.

## 2. Installer les dépendances du projet

Ouvre un terminal dans ce dossier et lance :

```bash
npm install
```

## 3. Tester en local

```bash
npm run dev
```

Puis ouvre l'adresse affichée (en général http://localhost:5173) dans ton navigateur. Le site se recharge automatiquement à chaque modification.

## 4. Modifier le contenu

- **Textes des pages** : dans `src/pages/*.jsx` (voir le guide détaillé fourni précédemment, `Guide_de_modification_du_site_web...md`)
- **Contenu structuré** (certains textes de la page d'accueil) : `src/content.json`
- **Images** : remplace les fichiers dans `src/assets/images/` en gardant le même nom, ou ajoute-en de nouvelles et mets à jour les imports dans les fichiers `.jsx` concernés
- **Couleurs / styles globaux** : `src/App.css`

## 5. Republier les modifications sur Netlify

Deux façons de faire, de la plus simple à la plus pratique sur la durée :

### Option A — Glisser-déposer (rapide, manuel à chaque fois)

```bash
npm run build
```

Cela génère un dossier `dist/`. Va sur https://app.netlify.com, ouvre ton site existant, puis dans l'onglet **Deploys**, glisse le dossier `dist` sur la zone de dépôt. Le site est mis à jour en quelques secondes.

### Option B — Connecter le projet à GitHub (recommandé si tu modifies souvent)

1. Crée un dépôt sur https://github.com et envoie ce dossier dedans (`git init`, `git add .`, `git commit`, `git push`).
2. Sur Netlify : **Add new site → Import an existing project → GitHub**, choisis ton dépôt.
3. Renseigne :
   - Build command : `npm run build`
   - Publish directory : `dist`
4. À partir de là, chaque fois que tu modifies un fichier et fais un `git push`, Netlify reconstruit et republie le site automatiquement — sans jamais retoucher au terminal pour le déploiement.

## Remarque sur le fichier `_redirects`

Le fichier `public/_redirects` est indispensable : il permet aux URLs internes (`/mesures`, `/contact`, etc.) de fonctionner correctement une fois le site déployé sur Netlify (équivalent du `.htaccess` utilisé sur un hébergement Apache classique).

## 6. Back-office pour éditer le contenu sans coder (Decap CMS)

Ce projet inclut déjà **Decap CMS** (gratuit), configuré pour éditer `src/content.json` — c'est-à-dire quasiment tous les textes du site (titres, textes, témoignages, coordonnées de contact...) — via une interface web avec formulaires, à l'adresse `https://ton-site.netlify.app/admin`.

⚠️ Le CMS a besoin que le site soit déployé **via un dépôt GitHub connecté à Netlify** (pas en glisser-déposer), car il doit pouvoir écrire les modifications dans le dépôt. Voici la mise en place, à faire une seule fois.

### Étape 1 — Mettre le projet sur GitHub

```bash
cd full-project
git init
git add .
git commit -m "Premier envoi du site"
```
Crée un dépôt (public ou privé) sur https://github.com/new, puis :
```bash
git remote add origin https://github.com/TON-COMPTE/convivialite-urbaine.git
git branch -M main
git push -u origin main
```

### Étape 2 — Connecter ce dépôt à Netlify

1. Sur https://app.netlify.com : **Add new site → Import an existing project → GitHub**, choisis ton dépôt.
2. Renseigne :
   - Build command : `npm run build`
   - Publish directory : `dist`
3. Déploie. Note l'URL donnée (ex. `random-name-123.netlify.app`).

### Étape 3 — Activer Netlify Identity et Git Gateway (gratuit)

1. Dans le tableau de bord Netlify de ton site → onglet **Identity** → **Enable Identity**.
2. Toujours dans Identity → **Registration** → mets sur **Invite only** (pour que seul toi puisse créer un compte admin).
3. Descends jusqu'à **Services → Git Gateway** → **Enable Git Gateway**. C'est cette brique qui permet au CMS d'écrire dans GitHub à ta place, sans que tu aies besoin de gérer de token.
4. Toujours dans Identity → **Invite users** → entre ton adresse email. Tu recevras un email d'invitation Netlify : clique dessus et choisis un mot de passe.

### Étape 4 — Corriger `config.yml`

Ouvre `public/admin/config.yml` et remplace les deux occurrences de `https://TON-SITE.netlify.app` par ta vraie URL Netlify (celle notée à l'étape 2), puis renvoie ce changement sur GitHub (`git add`, `git commit`, `git push`) — Netlify republiera automatiquement.

### Étape 5 — Se connecter au back-office

Va sur `https://ton-site.netlify.app/admin`, connecte-toi avec l'email/mot de passe créés à l'étape 3. Tu arrives sur une interface avec un formulaire pour chaque page du site : modifie un champ, clique sur **Publish** — Netlify reconstruit et republie automatiquement le site en 1 à 2 minutes, sans que tu aies besoin de toucher au code ni au terminal.

**Bon à savoir :**
- Les images du site restent à remplacer manuellement dans `src/assets/images/` pour l'instant (le CMS gère surtout les textes) ; je peux ajouter des champs d'upload d'image dans le CMS si tu le souhaites.
- Tu peux inviter d'autres personnes (ex. un collègue) à éditer le site de la même façon, depuis Identity → Invite users.
