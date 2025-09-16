"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Home, ImageIcon, Heart, Settings, Palette, Sparkles, Mountain, Atom, Rocket } from "lucide-react"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { language } = useLanguage()

  const navigationItems = [
    { id: "home", icon: Home, label: getTranslation("home", language) },
    { id: "myWallpapers", icon: ImageIcon, label: getTranslation("myWallpapers", language) },
    { id: "favorites", icon: Heart, label: getTranslation("favorites", language) },
    { id: "settings", icon: Settings, label: getTranslation("settings", language) },
  ]

  const categories = [
    { id: "nature", icon: Mountain, label: getTranslation("nature", language) },
    { id: "abstract", icon: Atom, label: getTranslation("abstract", language) },
    { id: "minimal", icon: Palette, label: getTranslation("minimal", language) },
    { id: "space", icon: Rocket, label: getTranslation("space", language) },
    { id: "animated", icon: Sparkles, label: getTranslation("animated", language) },
  ]

  return (
    <div className="w-64 h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* App Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-sidebar-foreground">{getTranslation("appTitle", language)}</h1>
            <p className="text-xs text-muted-foreground">{getTranslation("appSubtitle", language)}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-6 custom-scrollbar overflow-y-auto">
        <div>
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-10 macos-transition",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={() => onSectionChange(item.id)}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">Categories</h3>
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeSection === category.id

              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 h-9 macos-transition",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={() => onSectionChange(category.id)}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
