#!/bin/bash

# Script de compilation optimisé pour macOS
# Usage: ./scripts/build-macos.sh [web|standalone|electron]

set -e

echo "🍎 macOS Wallpaper Engine - Script de Compilation"
echo "=================================================="

# Vérifier Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "❌ Node.js >= 18.0.0 requis. Version actuelle: $NODE_VERSION"
    exit 1
fi

# Nettoyer les builds précédents
echo "🧹 Nettoyage des builds précédents..."
rm -rf .next dist out

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm ci

# Type checking
echo "🔍 Vérification TypeScript..."
npm run type-check

BUILD_TYPE=${1:-web}

case $BUILD_TYPE in
    "web")
        echo "🌐 Build Web Standard..."
        npm run build
        echo "✅ Build web terminé! Utilisez 'npm start' pour lancer."
        ;;
    "standalone")
        echo "💻 Build Standalone pour Desktop..."
        BUILD_STANDALONE=true npm run build:standalone
        echo "✅ Build standalone terminé! Fichiers dans ./dist/"
        ;;
    "electron")
        echo "⚡ Build Electron pour macOS..."
        if ! command -v electron &> /dev/null; then
            echo "📦 Installation d'Electron..."
            npm install --save-dev electron electron-builder
        fi
        BUILD_STANDALONE=true npm run build:standalone
        # Créer electron.js si n'existe pas
        if [ ! -f "electron.js" ]; then
            cat > electron.js << 'EOF'
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    
    win.loadFile('dist/index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
EOF
        fi
        npx electron-builder --mac
        echo "✅ App Electron créée! Vérifiez le dossier dist/"
        ;;
    *)
        echo "❌ Type de build invalide. Utilisez: web, standalone, ou electron"
        exit 1
        ;;
esac

echo ""
echo "🎉 Compilation terminée avec succès!"
echo "📁 Fichiers générés selon le type de build choisi."
