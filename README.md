# macOS Wallpaper Engine

Une application de gestion de fonds d'écran pour macOS avec support français/anglais.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jayijato-8486s-projects/v0-mac-os-wallpaper-engine)

## ✨ Fonctionnalités

- Interface native macOS avec effets de verre
- Support multilingue (français/anglais)
- Galerie de fonds d'écran avec prévisualisation
- Paramètres personnalisables
- Performance optimisée

## 🚀 Installation

\`\`\`bash
# Cloner et installer
git clone https://github.com/votre-username/v0-mac-os-wallpaper-engine.git
cd v0-mac-os-wallpaper-engine
npm install

# Lancer en développement
npm run dev
\`\`\`

## 📦 Compilation

### Web Standard
\`\`\`bash
npm run build
npm run start
\`\`\`

### Application Desktop (Recommandé)
\`\`\`bash
BUILD_STANDALONE=true npm run build:standalone
\`\`\`

### App macOS Native
\`\`\`bash
# Avec Electron
npm install --save-dev electron electron-builder
npm run build:standalone
npx electron-builder --mac

# Ou avec Tauri (plus léger)
npm install --save-dev @tauri-apps/cli
npx tauri init
npx tauri build --target universal-apple-darwin
\`\`\`

## 🛠️ Scripts

\`\`\`bash
npm run dev          # Développement
npm run build        # Production
npm run build:macos  # Build optimisé macOS
npm run optimize     # Analyse des bundles
\`\`\`

## 📁 Structure

\`\`\`
├── app/             # Pages Next.js
├── components/      # Composants React
├── lib/            # Utilitaires
├── hooks/          # Hooks personnalisés
└── public/         # Assets
\`\`\`

## 🌐 Configuration

\`\`\`bash
# .env.local
NEXT_PUBLIC_APP_NAME="macOS Wallpaper Engine"
NEXT_PUBLIC_DEFAULT_LANGUAGE="fr"
BUILD_STANDALONE=false
\`\`\`

## 📄 Licence

MIT License - voir `LICENSE` pour plus de détails.

## 🔗 Liens

- [Application Live](https://vercel.com/jayijato-8486s-projects/v0-mac-os-wallpaper-engine)
- [Développement v0](https://v0.app/chat/projects/SAtKUgTkVAR)
