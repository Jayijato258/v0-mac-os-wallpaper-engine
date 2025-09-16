# macOS Wallpaper Engine

Une application native de gestion de fonds d'écran pour macOS, similaire à Wallpaper Engine, avec support multilingue (français/anglais).

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jayijato-8486s-projects/v0-mac-os-wallpaper-engine)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/SAtKUgTkVAR)

## 🎯 Fonctionnalités

- **Interface native macOS** - Design optimisé pour macOS avec effets de verre et animations fluides
- **Support multilingue** - Interface disponible en français et anglais
- **Galerie de fonds d'écran** - Navigation intuitive avec aperçu en temps réel
- **Prévisualisation avancée** - Modal de prévisualisation avec informations détaillées
- **Paramètres personnalisables** - Qualité, animations, langue et thème
- **Performance optimisée** - Chargement rapide et utilisation mémoire minimale

## 🚀 Installation et Compilation pour macOS

### Prérequis

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **macOS** (optimisé pour Intel et Apple Silicon)

### Installation rapide

\`\`\`bash
# Cloner le repository
git clone https://github.com/votre-username/v0-mac-os-wallpaper-engine.git
cd v0-mac-os-wallpaper-engine

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
\`\`\`

### Compilation pour Production

#### 1. Build Web Standard
\`\`\`bash
# Build pour déploiement web
npm run build
npm run start
\`\`\`

#### 2. Build Standalone (Recommandé pour macOS)
\`\`\`bash
# Build optimisé pour application desktop
BUILD_STANDALONE=true npm run build:standalone

# Les fichiers seront générés dans le dossier 'dist/'
\`\`\`

#### 3. Build avec Analyse des Bundles
\`\`\`bash
# Analyser la taille des bundles pour optimisation
npm run optimize
\`\`\`

### 🖥️ Création d'une App macOS Native

Pour créer une vraie application macOS, vous pouvez utiliser **Electron** ou **Tauri** :

#### Option A: Avec Electron
\`\`\`bash
# Installer Electron
npm install --save-dev electron electron-builder

# Ajouter à package.json:
# "main": "electron.js",
# "homepage": "./",

# Créer electron.js et builder la app
npm run build:standalone
npx electron-builder --mac
\`\`\`

#### Option B: Avec Tauri (Plus léger)
\`\`\`bash
# Installer Tauri CLI
npm install --save-dev @tauri-apps/cli

# Initialiser Tauri
npx tauri init

# Builder pour macOS
npx tauri build --target universal-apple-darwin
\`\`\`

## 📁 Structure du Projet

\`\`\`
├── app/                    # Pages Next.js App Router
│   ├── layout.tsx         # Layout principal avec providers
│   ├── page.tsx           # Page d'accueil
│   ├── client.tsx         # Composant client principal
│   └── globals.css        # Styles globaux optimisés macOS
├── components/            # Composants React
│   ├── ui/               # Composants UI de base (shadcn)
│   ├── header.tsx        # En-tête avec navigation
│   ├── sidebar.tsx       # Barre latérale de navigation
│   ├── wallpaper-gallery.tsx  # Galerie principale
│   ├── wallpaper-preview.tsx  # Modal de prévisualisation
│   └── settings-panel.tsx     # Panneau de paramètres
├── lib/                  # Utilitaires et configuration
│   ├── i18n.ts          # Système de traduction
│   └── wallpapers.ts    # Données des fonds d'écran
├── hooks/               # Hooks React personnalisés
│   ├── use-language.ts  # Gestion de la langue
│   └── use-settings.ts  # Gestion des paramètres
└── public/             # Assets statiques et images
\`\`\`

## ⚡ Optimisations macOS

### Performance
- **Bundle splitting** automatique pour un chargement rapide
- **Image optimization** avec WebP/AVIF
- **CSS optimization** en production
- **Tree shaking** pour réduire la taille des bundles

### Interface Native
- **Effets de verre** (`backdrop-blur`)
- **Animations fluides** avec transitions CSS optimisées
- **Couleurs système** qui s'adaptent au thème macOS
- **Typography** optimisée pour les écrans Retina

### Mémoire
- **Lazy loading** des images
- **State management** optimisé avec Zustand
- **Component memoization** pour éviter les re-renders

## 🌐 Support Multilingue

L'application supporte nativement :
- **Français** (fr)
- **Anglais** (en)

Changement de langue en temps réel via le toggle dans l'en-tête.

## 🛠️ Scripts Disponibles

\`\`\`bash
npm run dev          # Développement avec hot-reload
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
npm run type-check   # Vérification TypeScript
npm run build:macos  # Build optimisé pour macOS
npm run optimize     # Build avec analyse des bundles
npm run preview      # Aperçu de la version de production
\`\`\`

## 🚀 Déploiement

### Vercel (Recommandé)
\`\`\`bash
# Déploiement automatique via Git
git push origin main
\`\`\`

### Build Local
\`\`\`bash
# Générer les fichiers statiques
npm run build:standalone

# Servir localement
npx serve dist/
\`\`\`

## 📋 Configuration

### Variables d'Environnement
\`\`\`bash
# .env.local
NEXT_PUBLIC_APP_NAME="macOS Wallpaper Engine"
NEXT_PUBLIC_DEFAULT_LANGUAGE="fr"
BUILD_STANDALONE=false
\`\`\`

### Personnalisation
- Modifier `lib/wallpapers.ts` pour ajouter vos fonds d'écran
- Ajuster `app/globals.css` pour personnaliser les couleurs
- Éditer `lib/i18n.ts` pour ajouter d'autres langues

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changes (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🔗 Liens Utiles

- **Application Live**: [https://vercel.com/jayijato-8486s-projects/v0-mac-os-wallpaper-engine](https://vercel.com/jayijato-8486s-projects/v0-mac-os-wallpaper-engine)
- **Développement v0**: [https://v0.app/chat/projects/SAtKUgTkVAR](https://v0.app/chat/projects/SAtKUgTkVAR)
- **Documentation Next.js**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tauri (App Native)**: [https://tauri.app](https://tauri.app)
