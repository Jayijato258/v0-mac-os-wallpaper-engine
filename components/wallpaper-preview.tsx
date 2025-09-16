"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Heart, Download, Monitor, X, Play, Pause, Info, User, HardDrive, Maximize } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Wallpaper } from "@/lib/wallpapers"

interface WallpaperPreviewProps {
  wallpaper: Wallpaper
  onClose: () => void
  onSetWallpaper: (wallpaper: Wallpaper) => void
  onToggleFavorite: (id: string) => void
}

export function WallpaperPreview({ wallpaper, onClose, onSetWallpaper, onToggleFavorite }: WallpaperPreviewProps) {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const handleSetWallpaper = () => {
    onSetWallpaper(wallpaper)
    onClose()
  }

  const handleToggleFavorite = () => {
    onToggleFavorite(wallpaper.id)
  }

  const getTypeIcon = () => {
    switch (wallpaper.type) {
      case "animated":
      case "video":
        return <Play className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-0 gap-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">{wallpaper.title}</DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowInfo(!showInfo)} className="h-8 w-8 p-0">
                <Info className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 flex gap-6 p-6 pt-4">
          {/* Preview Area */}
          <div className="flex-1 flex flex-col">
            <div className="relative flex-1 bg-muted rounded-lg overflow-hidden group">
              <img
                src={wallpaper.fullImage || wallpaper.thumbnail || "/placeholder.svg"}
                alt={wallpaper.title}
                className="w-full h-full object-cover"
              />

              {/* Type indicator */}
              {getTypeIcon() && (
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="gap-1">
                    {getTypeIcon()}
                    {wallpaper.type}
                  </Badge>
                </div>
              )}

              {/* Play/Pause for animated content */}
              {(wallpaper.type === "animated" || wallpaper.type === "video") && (
                <Button
                  variant="secondary"
                  size="lg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 macos-transition"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
              )}

              {/* Fullscreen button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 h-8 w-8 p-0 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 macos-transition"
              >
                <Maximize className="w-4 h-4" />
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleToggleFavorite} className="gap-2 bg-transparent">
                  <Heart className={cn("w-4 h-4", wallpaper.isFavorite ? "fill-red-500 text-red-500" : "")} />
                  {wallpaper.isFavorite
                    ? getTranslation("removeFromFavorites", language)
                    : getTranslation("addToFavorites", language)}
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  {getTranslation("download", language)}
                </Button>
              </div>
              <Button onClick={handleSetWallpaper} className="gap-2">
                <Monitor className="w-4 h-4" />
                {getTranslation("setAsWallpaper", language)}
              </Button>
            </div>
          </div>

          {/* Info Panel */}
          {showInfo && (
            <div className="w-80 bg-card rounded-lg p-6 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Author</p>
                      <p className="text-sm text-muted-foreground">{wallpaper.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Maximize className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Resolution</p>
                      <p className="text-sm text-muted-foreground">{wallpaper.resolution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">File Size</p>
                      <p className="text-sm text-muted-foreground">{wallpaper.fileSize}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {wallpaper.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Category</h3>
                <Badge variant="secondary" className="capitalize">
                  {getTranslation(wallpaper.category as keyof typeof getTranslation, language)}
                </Badge>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
