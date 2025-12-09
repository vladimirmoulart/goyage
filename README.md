# GOYAGE – Expériences locales & coffrets voyages

Application marketing réalisée avec Next.js (App Router) pour présenter les expériences GOYAGE et leurs déclinaisons : activités locales, destinations, box cadeaux, FAQ, inscription/connexion.

## Stack & scripts

- **Next.js 16 / React 19**
- **TypeScript** strict, Tailwind v4, DaisyUI (mockup)
- **Lucide Icons**, Radix UI (dropdown, dialog)
- **Embla** déjà disponible pour futurs carrousels

```bash
npm run dev     # lance le serveur en mode développeur
npm run build   # build production
npm start       # sert le build
npm run lint    # vérifie le lint (eslint-config-next)
```

## Architecture

```
app/
  page.tsx                     -> landing page
  activites/page.tsx           -> grille activités locales
  activites/[id]/page.tsx      -> détail activité (données mock)
  activites-locales/page.tsx   -> page éditoriale activités locales
  destinations/page.tsx        -> catalogue + filtres + carte modale
  destinations/[slug]/page.tsx -> fallback dynamique
  destinations/{ville}/page.tsx -> pages statiques (Marrakech, Kyoto…)
  boxes/page.tsx               -> landing coffrets
  boxes/[id]/page.tsx          -> détail coffret
  faq/page.tsx                 -> FAQ enrichie + contact
  connexion/page.tsx           -> page connexion
  inscription/...              -> formulaires hôte/voyageur
components/
  hero-section.tsx             -> section hero (CTA, badges store)
  hero-visual.tsx              -> alternance image/mokup iPhone
  header.tsx / footer.tsx
  activities/*                 -> sections activités
  destinations/*               -> hero, filtres, grille, régions
  destination-detail/*         -> sous-sections (hero, about, hosts, etc.)
  boxes/*                      -> hero, catégories, grille, box detail
  ui/button.tsx / dropdown-menu.tsx / dialog.tsx
lib/
  utils.ts                     -> helper Tailwind `cn`
  (ajouter `lib/activities.ts` & `lib/destinations.ts` pour centraliser les mocks si besoin)
public/
  ...assets marketing (photos, mockup-iphone.png, play-store.webp…)
```

## Fonctionnalités principales

- **Hero animé** : fade entre l’image marketing et un mockup iPhone, CTA vers App Store/Google Play (liens placeholder).
- **Activités locales** :
  - filtres caté, grille statique 8 activités.
  - pages `/activites/{id}` → contenu détaillé (highlights, itinéraire, inclus, host).
- **Destinations** :
  - hero + CTA “Voir la carte” ouvrant un modal (DaisyUI + carte fictive).
  - filtres (continents/types) stylés, grille d’aperçus.
  - pages dédiées pour chaque destination (Marrakech, Bali, etc.) + route dynamique fallback.
- **Box GOYAGE** :
  - hero uniformisé, catégories, grille, gift section.
  - détail `/boxes/[id]` (hero + expériences, hôtes, avis, FAQ, carte booking).
- **FAQ** riche + contact e-mail/téléphone.
- **Connexion / Inscription** :
  - pages stylées hôte & voyageur.
  - CTA “Créer un compte” renvoie vers `/inscription`.
- **Header** :
  - logo image, menu desktop/mobile, dropdown langues avec drapeaux, bouton box.

## Personnalisation & évolutions

- **Mock données** : centralisez les objets (activités/destinations) dans `lib/` si vous ajoutez un back-end ou CMS.
- **Carrousel hero** : `hero-visual` peut être relié à Embla pour plus de slides.
- **Carte interactive** : placeholder embeddable via `react-simple-maps` ou Mapbox.
- **CTA stores** : remplacez les liens `#` par vos URLs officielles.

## Déploiement

- Projet prêt pour Vercel ou tout hébergeur Next.js (build statique + pages dynamiques).
- Variables d’environnement non utilisées pour l’instant : vous pouvez intégrer un back-end (Supabase / REST) en ajoutant des routes API dans `app/api`.

Bon build ! Jump dans `npm run dev` et personnalisez selon vos besoins (CMS, data, contenu marketing).***
