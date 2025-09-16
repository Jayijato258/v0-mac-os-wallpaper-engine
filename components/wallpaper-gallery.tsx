"use client"

import { useState, useMemo } from "react"
import { WallpaperCard } from "@/components/wallpaper-card"
import { WallpaperPreview } from "@/components/wallpaper-preview"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { getWallpapersByCategory, searchWallpapers, sampleWallpapers } from "@/lib/wallpapers"
import type { Wallpaper } from "@/lib/wallpapers"
import { useToast } from "@/hooks/use-toast"

interface WallpaperGalleryProps {
  category: string
  searchQuery: string
}

export function WallpaperGallery({ category, searchQuery }: WallpaperGalleryProps) {
  const { language } = useLanguage()
  const { toast } = useToast()
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null)
  const [wallpapers, setWallpapers] = useState(sampleWallpapers)

  const filteredWallpapers = useMemo(() => {
    const categoryWallpapers = getWallpapersByCategory(category)
    return searchWallpapers(searchQuery, categoryWallpapers)
  }, [category, searchQuery])

  const handleToggleFavorite = (id: string) => {
    setWallpapers((prev) => prev.map((w) => (w.id === id ? { ...w, isFavorite: !w.isFavorite } : w)))

    const wallpaper = wallpapers.find((w) => w.id === id)
    if (wallpaper) {
      toast({
        title: wallpaper.isFavorite
          ? getTranslation("removedFromFavorites", language)
          : getTranslation("addedToFavorites", language),
        duration: 2000,
      })
    }
  }

  const handleSetWallpaper = (wallpaper: Wallpaper) => {
    // In a real app, this would set the system wallpaper
    toast({
      title: getTranslation("wallpaperSet", language),
      description: wallpaper.title,
      duration: 3000,
    })
  }

  const getCategoryTitle = () => {
    switch (category) {
      case "home":
        return "All Wallpapers"
      case "myWallpapers":
        return getTranslation("myWallpapers", language)
      case "favorites":
        return getTranslation("favorites", language)
      default:
        return getTranslation(category as keyof typeof getTranslation, language)
    }
  }

  return (
    <>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-semibold text-balance">{getCategoryTitle()}</h2>
          <p className="text-muted-foreground mt-1">{filteredWallpapers.length} wallpapers</p>
        </div>

        {/* Gallery */}
        <div className="flex-1 p-6 custom-scrollbar overflow-y-auto">
          {filteredWallpapers.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-muted-foreground">No wallpapers found</p>
                {searchQuery && <p className="text-sm text-muted-foreground mt-1">Try adjusting your search terms</p>}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWallpapers.map((wallpaper) => (
                <WallpaperCard
                  key={wallpaper.id}
                  wallpaper={wallpaper}
                  onPreview={setSelectedWallpaper}
                  onToggleFavorite={handleToggleFavorite}
                  onSetWallpaper={handleSetWallpaper}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedWallpaper && (
        <WallpaperPreview
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
          onSetWallpaper={handleSetWallpaper}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </>
  )
}
