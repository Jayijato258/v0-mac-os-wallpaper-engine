"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Heart, Eye, Monitor, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Wallpaper } from "@/lib/wallpapers"

interface WallpaperCardProps {
  wallpaper: Wallpaper
  onPreview: (wallpaper: Wallpaper) => void
  onToggleFavorite: (id: string) => void
  onSetWallpaper: (wallpaper: Wallpaper) => void
}

export function WallpaperCard({ wallpaper, onPreview, onToggleFavorite, onSetWallpaper }: WallpaperCardProps) {
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  const getTypeIcon = () => {
    switch (wallpaper.type) {
      case "animated":
      case "video":
        return <Play className="w-3 h-3" />
      default:
        return null
    }
  }

  return (
    <Card
      className="group overflow-hidden border-0 shadow-sm hover:shadow-lg macos-transition cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPreview(wallpaper)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={wallpaper.thumbnail || "/placeholder.svg"}
            alt={wallpaper.title}
            className="w-full h-full object-cover group-hover:scale-105 macos-transition"
          />

          {/* Type indicator */}
          {getTypeIcon() && (
            <div className="absolute top-2 left-2">
              <Badge variant="secondary" className="gap-1 text-xs">
                {getTypeIcon()}
                {wallpaper.type}
              </Badge>
            </div>
          )}

          {/* Favorite button */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background/90 macos-transition",
              isHovered ? "opacity-100" : "opacity-0",
            )}
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite(wallpaper.id)
            }}
          >
            <Heart
              className={cn("w-4 h-4", wallpaper.isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground")}
            />
          </Button>

          {/* Overlay actions */}
          <div
            className={cn(
              "absolute inset-0 bg-black/40 flex items-center justify-center gap-2 macos-transition",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          >
            <Button
              variant="secondary"
              size="sm"
              className="gap-2"
              onClick={(e) => {
                e.stopPropagation()
                onPreview(wallpaper)
              }}
            >
              <Eye className="w-4 h-4" />
              {getTranslation("preview", language)}
            </Button>
            <Button
              variant="default"
              size="sm"
              className="gap-2"
              onClick={(e) => {
                e.stopPropagation()
                onSetWallpaper(wallpaper)
              }}
            >
              <Monitor className="w-4 h-4" />
              {getTranslation("setAsWallpaper", language)}
            </Button>
          </div>
        </div>

        {/* Card info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{wallpaper.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{wallpaper.author}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{wallpaper.resolution}</p>
              <p className="text-xs text-muted-foreground">{wallpaper.fileSize}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {wallpaper.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {wallpaper.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{wallpaper.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
