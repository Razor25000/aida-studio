# A'IDA — Guide de déploiement Vercel

**Date** : 8 octobre 2026
**Repo GitHub** : https://github.com/Razor25000/aida-studio
**Domaine cible** : `www.a-ida.fr` (et `a-ida.fr` en redirect)

---

## Méthode recommandée : import GitHub via vercel.com (5 min)

C'est la méthode la plus simple. Pas besoin de CLI, pas besoin de credentials Vercel en local.

### Étape 1 : Se connecter à Vercel

1. Va sur **https://vercel.com**
2. **Sign Up** ou **Log In** (utilise "Continue with GitHub" pour lier ton compte GitHub @Razor25000)
3. Autorise Vercel à accéder à ton compte GitHub

### Étape 2 : Importer le repo

1. Sur ton dashboard Vercel : **"Add New…"** → **"Project"**
2. **"Import Git Repository"**
3. Cherche `aida-studio` (organisation : Razor25000)
4. Clique **"Import"**

### Étape 3 : Configurer le déploiement

Vercel détecte automatiquement Next.js. Vérifie les paramètres :

| Paramètre | Valeur |
|---|---|
| **Project Name** | `aida-studio` (ou ton nom) |
| **Framework Preset** | Next.js (auto-détecté) |
| **Root Directory** | `./` (racine) |
| **Build Command** | `next build` (par défaut) |
| **Output Directory** | `.next` (par défaut) |
| **Install Command** | `pnpm install` ⚠️ change depuis `npm install` |
| **Node.js Version** | 20.x ou 22.x (LTS) |

⚠️ **Action manuelle critique** : change l'**Install Command** de `npm install` à `pnpm install` (sinon ça plantera, ton projet utilise pnpm-lock.yaml).

### Étape 4 : Variables d'environnement (optionnel pour démarrer)

Tu n'as pas besoin de variables pour la première mise en ligne. Plus tard, tu pourras ajouter :
- `NEXT_PUBLIC_GA_ID` (Google Analytics)
- `NEXT_PUBLIC_SITE_URL` (override du `metadataBase`)

### Étape 5 : Déployer

Clique **"Deploy"**. Vercel va :
1. Cloner le repo
2. Lancer `pnpm install`
3. Lancer `pnpm run build`
4. Déployer sur une URL `aida-studio.vercel.app`
5. Te donner un certificat SSL auto (Let's Encrypt)

⏱️ Durée : 2-4 min pour la première build.

### Étape 6 : Branch deploys

Par défaut, Vercel déploie :
- `main` → production (aida-studio.vercel.app)
- Les PRs → preview URLs (aida-studio-git-feature-xyz.vercel.app)

✅ Comme ton repo a déjà `main` poussé, le site sera live dès que la build passe.

---

## Connecter le domaine `a-ida.fr`

Une fois déployé sur vercel.app, ajoute ton domaine :

1. Vercel → ton projet `aida-studio` → **Settings** → **Domains**
2. Ajoute `a-ida.fr` et `www.a-ida.fr`
3. Vercel affiche les DNS à configurer chez ton registrar (probablement OVH, Gandi, ou autre)

**DNS recommandés (chez ton registrar)** :

| Type | Name | Value |
|---|---|---|
| A | @ | `76.76.21.21` (Vercel IP) |
| CNAME | www | `cname.vercel-dns.com` |

ou plus simple avec les nameservers Vercel :

| Type | Value |
|---|---|
| NS | `ns1.vercel-dns.com` |
| NS | `ns2.vercel-dns.com` |

⏱️ Propagation DNS : 1 à 24h. Vercel génère et renouvelle le SSL automatiquement.

---

## Après le déploiement

### Soumettre à Google Search Console

1. Va sur https://search.google.com/search-console
2. **"Ajouter une propriété"** → type **"Domaine"** (pas URL Prefix)
3. Vérifie via DNS TXT record (Vercel te guide)
4. Soumets le sitemap : `https://www.a-ida.fr/sitemap.xml`
5. Demande l'indexation des 7 pages principales (URL Inspection → "Demander l'indexation")

### Soumettre à Bing Webmaster Tools

1. https://www.bing.com/webmasters
2. Import via Google Search Console (1-click)
3. Soumettre sitemap

### Activer IndexNow (instant indexing)

Tu as déjà créé `public/aida-nextjs.local-indexnow-key.txt` dans le repo. En prod :
1. Génère une vraie clé sur https://www.indexnow.org/
2. Remplace le contenu du fichier `.txt` par ta vraie clé
3. Configure un cron job / GitHub Action qui POST à `https://api.indexnow.org/indexnow` à chaque commit sur main

Exemple de GitHub Action (optionnel, je peux te l'ajouter) :

```yaml
name: IndexNow
on:
  push:
    branches: [main]
jobs:
  submit:
    runs-on: ubuntu-latest
    steps:
      - run: |
          curl -X POST "https://api.indexnow.org/indexnow?url=https://www.a-ida.fr&key=VOTRE_CLE"
```

---

## Alternative : Vercel CLI (pour utilisateurs avancés)

Si tu préfères la ligne de commande :

```bash
# Installation
npm i -g vercel

# Login
vercel login

# Déploiement preview
vercel

# Déploiement production
vercel --prod
```

⚠️ Cette méthode nécessite d'avoir accès à un terminal en mode interactif, ce qui est plus contraignant que l'import web.

---

## Troubleshooting

| Problème | Solution |
|---|---|
| Build fails "Cannot find module" | Vérifie Install Command = `pnpm install` |
| Build fails "next-swc-loader error" | Le repo a peut-être des binaires natifs corrompus (cf. historique). Nettoie le cache Vercel : Settings → General → Clear Cache |
| `Image with src "..." has both "width" and "fill"` | Erreur connue, déjà corrigée dans le code |
| 500 server-side sur home | Vraie erreur, vérifier logs Vercel : Project → Logs |
| Domaine ne fonctionne pas | Vérifier DNS avec `dig a-ida.fr` (ou `nslookup a-ida.fr`) |

---

## Checklist post-déploiement

- [ ] Site accessible sur `aida-studio.vercel.app`
- [ ] Toutes les 7 routes répondent 200
- [ ] `https://aida-studio.vercel.app/sitemap.xml` retourne 22 URLs
- [ ] `https://aida-studio.vercel.app/robots.txt` retourné correctement
- [ ] `https://aida-studio.vercel.app/opengraph-image` retourne une image 1200×630
- [ ] JSON-LD présent (tester avec Google Rich Results Test post-déploiement)
- [ ] Headers sécurité présents (HSTS, CSP, etc.)
- [ ] Domaine `a-ida.fr` configuré
- [ ] Google Search Console + Bing Webmaster Tools configurés
- [ ] IndexNow activé
- [ ] Bing Places + Apple Maps Business réclamés (guide dans `aida-nextjs.local-audit/findings/local-listings-guide.md`)
- [ ] Lighthouse audit (cible : Performance ≥85, SEO ≥95, Accessibility ≥95)

---

**Action immédiate** : Va sur https://vercel.com → "Add New" → "Project" → importe `Razor25000/aida-studio`. Le déploiement prend 3-5 min. Une fois live, dis-le moi et on lance le Lighthouse pour valider les Core Web Vitals en prod.
