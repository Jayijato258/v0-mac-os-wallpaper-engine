"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Search, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { language } = useLanguage()
  const { theme, setTheme } = useTheme()

  return (
    <header className="h-16 border-b border-border bg-background/80 glass-effect flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder={getTranslation("searchPlaceholder", language)}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-8 w-8 p-0"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <LanguageToggle />
      </div>
    </header>
  )
}
