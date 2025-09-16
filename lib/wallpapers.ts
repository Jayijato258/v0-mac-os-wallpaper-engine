export interface Wallpaper {
  id: string
  title: string
  category: string
  type: "static" | "animated" | "video"
  thumbnail: string
  fullImage: string
  tags: string[]
  isFavorite: boolean
  resolution: string
  fileSize: string
  author: string
}

// Sample wallpaper data
export const sampleWallpapers: Wallpaper[] = [
  {
    id: "1",
    title: "Mountain Sunrise",
    category: "nature",
    type: "static",
    thumbnail: "/mountain-sunrise-landscape.jpg",
    fullImage: "/mountain-sunrise-landscape.jpg",
    tags: ["mountain", "sunrise", "landscape", "peaceful"],
    isFavorite: false,
    resolution: "1920x1080",
    fileSize: "2.4 MB",
    author: "Nature Studio",
  },
  {
    id: "2",
    title: "Abstract Flow",
    category: "abstract",
    type: "animated",
    thumbnail: "/abstract-flowing-colors-animation.jpg",
    fullImage: "/abstract-flowing-colors-animation.jpg",
    tags: ["abstract", "flow", "colorful", "modern"],
    isFavorite: true,
    resolution: "1920x1080",
    fileSize: "8.7 MB",
    author: "Digital Arts",
  },
  {
    id: "3",
    title: "Minimal Gradient",
    category: "minimal",
    type: "static",
    thumbnail: "/minimal-gradient-purple-blue.jpg",
    fullImage: "/minimal-gradient-purple-blue.jpg",
    tags: ["minimal", "gradient", "clean", "simple"],
    isFavorite: false,
    resolution: "1920x1080",
    fileSize: "1.2 MB",
    author: "Minimal Co",
  },
  {
    id: "4",
    title: "Galaxy Nebula",
    category: "space",
    type: "video",
    thumbnail: "/galaxy-nebula-stars-space.jpg",
    fullImage: "/galaxy-nebula-stars-space.jpg",
    tags: ["space", "galaxy", "nebula", "stars"],
    isFavorite: true,
    resolution: "1920x1080",
    fileSize: "15.3 MB",
    author: "Cosmos Studio",
  },
  {
    id: "5",
    title: "Ocean Waves",
    category: "nature",
    type: "animated",
    thumbnail: "/ocean-waves-animated-water.jpg",
    fullImage: "/ocean-waves-animated-water.jpg",
    tags: ["ocean", "waves", "water", "relaxing"],
    isFavorite: false,
    resolution: "1920x1080",
    fileSize: "12.1 MB",
    author: "Ocean Dreams",
  },
  {
    id: "6",
    title: "Geometric Patterns",
    category: "abstract",
    type: "static",
    thumbnail: "/geometric-patterns-abstract-shapes.jpg",
    fullImage: "/geometric-patterns-abstract-shapes.jpg",
    tags: ["geometric", "patterns", "abstract", "modern"],
    isFavorite: false,
    resolution: "1920x1080",
    fileSize: "3.8 MB",
    author: "Geo Studio",
  },
  {
    id: "7",
    title: "Forest Path",
    category: "nature",
    type: "static",
    thumbnail: "/forest-path-trees-nature.jpg",
    fullImage: "/forest-path-trees-nature.jpg",
    tags: ["forest", "path", "trees", "nature"],
    isFavorite: true,
    resolution: "1920x1080",
    fileSize: "4.2 MB",
    author: "Forest Studio",
  },
  {
    id: "8",
    title: "Particle Animation",
    category: "animated",
    type: "animated",
    thumbnail: "/particle-animation-glowing-dots.jpg",
    fullImage: "/particle-animation-glowing-dots.jpg",
    tags: ["particles", "animation", "glowing", "modern"],
    isFavorite: false,
    resolution: "1920x1080",
    fileSize: "9.5 MB",
    author: "Particle Lab",
  },
]

export function getWallpapersByCategory(category: string): Wallpaper[] {
  if (category === "home" || category === "myWallpapers") {
    return sampleWallpapers
  }
  if (category === "favorites") {
    return sampleWallpapers.filter((w) => w.isFavorite)
  }
  return sampleWallpapers.filter((w) => w.category === category)
}

export function searchWallpapers(query: string, wallpapers: Wallpaper[]): Wallpaper[] {
  if (!query.trim()) return wallpapers

  const searchTerm = query.toLowerCase()
  return wallpapers.filter(
    (wallpaper) =>
      wallpaper.title.toLowerCase().includes(searchTerm) ||
      wallpaper.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      wallpaper.author.toLowerCase().includes(searchTerm),
  )
}
