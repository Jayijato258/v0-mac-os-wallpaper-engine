export type Language = "en" | "fr"

export const translations = {
  en: {
    // Navigation
    home: "Home",
    myWallpapers: "My Wallpapers",
    favorites: "Favorites",
    settings: "Settings",

    // Main content
    appTitle: "Wallpaper Studio",
    appSubtitle: "Beautiful animated wallpapers for macOS",
    searchPlaceholder: "Search wallpapers...",

    // Wallpaper actions
    setAsWallpaper: "Set as Wallpaper",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    preview: "Preview",
    download: "Download",

    // Categories
    nature: "Nature",
    abstract: "Abstract",
    minimal: "Minimal",
    space: "Space",
    animated: "Animated",

    // Settings
    language: "Language",
    theme: "Theme",
    autoChange: "Auto Change Wallpaper",
    changeInterval: "Change Interval",
    quality: "Quality",

    // Time intervals
    never: "Never",
    hourly: "Every Hour",
    daily: "Daily",
    weekly: "Weekly",

    // Quality options
    high: "High",
    medium: "Medium",
    low: "Low",

    // Messages
    wallpaperSet: "Wallpaper set successfully!",
    addedToFavorites: "Added to favorites",
    removedFromFavorites: "Removed from favorites",
  },
  fr: {
    // Navigation
    home: "Accueil",
    myWallpapers: "Mes Fonds d'écran",
    favorites: "Favoris",
    settings: "Paramètres",

    // Main content
    appTitle: "Studio Fond d'écran",
    appSubtitle: "Magnifiques fonds d'écran animés pour macOS",
    searchPlaceholder: "Rechercher des fonds d'écran...",

    // Wallpaper actions
    setAsWallpaper: "Définir comme Fond d'écran",
    addToFavorites: "Ajouter aux Favoris",
    removeFromFavorites: "Retirer des Favoris",
    preview: "Aperçu",
    download: "Télécharger",

    // Categories
    nature: "Nature",
    abstract: "Abstrait",
    minimal: "Minimal",
    space: "Espace",
    animated: "Animé",

    // Settings
    language: "Langue",
    theme: "Thème",
    autoChange: "Changement Automatique",
    changeInterval: "Intervalle de Changement",
    quality: "Qualité",

    // Time intervals
    never: "Jamais",
    hourly: "Chaque Heure",
    daily: "Quotidien",
    weekly: "Hebdomadaire",

    // Quality options
    high: "Haute",
    medium: "Moyenne",
    low: "Basse",

    // Messages
    wallpaperSet: "Fond d'écran défini avec succès !",
    addedToFavorites: "Ajouté aux favoris",
    removedFromFavorites: "Retiré des favoris",
  },
}

export function getTranslation(key: keyof typeof translations.en, language: Language): string {
  return translations[language][key] || translations.en[key]
}
