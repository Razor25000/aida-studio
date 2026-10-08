# A'IDA — Atelier d'Ingénieurs, Designers & Architectes

Site officiel d'A'IDA, studio d'architecture, design et ingénierie basé à Paris depuis 2020.

**Stack** : Next.js 15.5 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · GSAP

## Démarrage local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Serveur de production (après build) |
| `npm run lint` | ESLint |

## Structure

```
app/
  layout.tsx        # Layout global + Organization JSON-LD + Person
  page.tsx          # Home (hero, disciplines, featured, about, awards, FAQ, presse, CTA)
  architecture/    # Liste + détails des 19 projets
  about/            # Page studio (fondateurs, méthode, reconnaissance)
  design/           # Pôle design
  publication/      # Presse & publications
  contact/          # Formulaire de contact
  components/       # Nav, Footer, ProjectCard, MotionController, Breadcrumb
  data/projects.ts  # 19 projets d'architecture (source de vérité)
  robots.ts         # robots.txt dynamique
  sitemap.ts        # sitemap.xml dynamique
  opengraph-image.tsx # OG image 1200×630 auto-généré
  icon.tsx / apple-icon.tsx
public/
  img/              # Photos des projets (Juan Jerez ©)
  manifest.webmanifest
  favicon.ico
```

## SEO

- **Structured data** : Organization, WebSite, Person, ProfessionalService, 3× Service, FAQPage, BreadcrumbList, CreativeWork
- **Sitemap** : `app/sitemap.ts` (Next.js MetadataRoute)
- **robots.txt** : `app/robots.ts` (Googlebot autorisé, AI training crawlers bloqués, citations crawlers autorisés)
- **OpenGraph / Twitter** : via `metadata` dans chaque layout
- **Headers sécurité** : HSTS, CSP, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy
- **Images** : next/image avec WebP/AVIF auto, alt text descriptif, lazy loading
- **Geo + openingHours + aggregateRating** : dans schema Organization
- **NAP** : 40 rue des Blancs Manteaux, 75004 Paris · +33 7 64 84 75 71 · studio@a-ida.fr

## Déploiement

Cible : **Vercel** (zero-config Next.js).

```bash
# 1. Push sur GitHub
git init && git add -A && git commit -m "Initial commit"
gh repo create a-ida/studio --public --source=. --remote=origin --push

# 2. Connecter le repo sur vercel.com
# 3. Vercel détecte Next.js automatiquement et déploie
```

Domaine cible : `a-ida.fr` (DNS à configurer dans Vercel + registrar).

## Identité légale

- **Forme** : SAS (Société par Actions Simplifiée)
- **SIREN** : 884 119 843
- **Code APE** : 7111Z (Activités d'architecture)
- **Président** : Romain Gaillard
- **Adresse** : 40 rue des Blancs Manteaux, 75004 Paris

## Crédits

- Direction artistique & code : Romain Gaillard, Thibaut Etcheverry, Quentin Bellancourt
- Photographies : © Juan Jerez Studio (et autres crédits par projet)
- Fonts : PP Neue Montreal (license requise pour la prod) · fallback Inter

## License

Code : MIT (ou propriétaire — à définir par les fondateurs).
Contenus (textes, photos) : © A'IDA — tous droits réservés.
