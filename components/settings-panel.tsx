"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { useSettings } from "@/hooks/use-settings"
import { getTranslation } from "@/lib/i18n"
import { useTheme } from "next-themes"
import { Languages, Palette, Clock, Zap, RotateCcw, Trash2 } from "lucide-react"
import type { Language } from "@/lib/i18n"
import type { ChangeInterval, Quality } from "@/hooks/use-settings"

export function SettingsPanel() {
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const {
    autoChange,
    changeInterval,
    quality,
    enableAnimations,
    enableNotifications,
    setAutoChange,
    setChangeInterval,
    setQuality,
    setEnableAnimations,
    setEnableNotifications,
  } = useSettings()

  const handleResetSettings = () => {
    setAutoChange(false)
    setChangeInterval("daily")
    setQuality("high")
    setEnableAnimations(true)
    setEnableNotifications(true)
  }

  return (
    <div className="h-full custom-scrollbar overflow-y-auto">
      <div className="p-6 space-y-6 max-w-2xl">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-balance">{getTranslation("settings", language)}</h2>
          <p className="text-muted-foreground mt-1">Customize your wallpaper experience</p>
        </div>

        {/* Language & Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="w-5 h-5" />
              Language & Appearance
            </CardTitle>
            <CardDescription>Configure language and visual preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="language" className="text-sm font-medium">
                {getTranslation("language", language)}
              </Label>
              <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="theme" className="text-sm font-medium">
                {getTranslation("theme", language)}
              </Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Wallpaper Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Wallpaper Management
            </CardTitle>
            <CardDescription>Configure automatic wallpaper changes and quality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-change" className="text-sm font-medium">
                  {getTranslation("autoChange", language)}
                </Label>
                <p className="text-xs text-muted-foreground">Automatically change wallpaper at set intervals</p>
              </div>
              <Switch id="auto-change" checked={autoChange} onCheckedChange={setAutoChange} />
            </div>

            {autoChange && (
              <div className="flex items-center justify-between">
                <Label htmlFor="change-interval" className="text-sm font-medium">
                  {getTranslation("changeInterval", language)}
                </Label>
                <Select value={changeInterval} onValueChange={(value: ChangeInterval) => setChangeInterval(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">{getTranslation("never", language)}</SelectItem>
                    <SelectItem value="hourly">{getTranslation("hourly", language)}</SelectItem>
                    <SelectItem value="daily">{getTranslation("daily", language)}</SelectItem>
                    <SelectItem value="weekly">{getTranslation("weekly", language)}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="flex items-center justify-between">
              <Label htmlFor="quality" className="text-sm font-medium">
                {getTranslation("quality", language)}
              </Label>
              <Select value={quality} onValueChange={(value: Quality) => setQuality(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">{getTranslation("high", language)}</SelectItem>
                  <SelectItem value="medium">{getTranslation("medium", language)}</SelectItem>
                  <SelectItem value="low">{getTranslation("low", language)}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Performance & Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Performance & Notifications
            </CardTitle>
            <CardDescription>Optimize performance and manage notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations" className="text-sm font-medium">
                  Enable Animations
                </Label>
                <p className="text-xs text-muted-foreground">Show smooth transitions and animations</p>
              </div>
              <Switch id="animations" checked={enableAnimations} onCheckedChange={setEnableAnimations} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications" className="text-sm font-medium">
                  Enable Notifications
                </Label>
                <p className="text-xs text-muted-foreground">Get notified when wallpaper changes</p>
              </div>
              <Switch id="notifications" checked={enableNotifications} onCheckedChange={setEnableNotifications} />
            </div>
          </CardContent>
        </Card>

        {/* Storage & Data */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Storage & Data
            </CardTitle>
            <CardDescription>Manage your wallpaper collection and app data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground">Wallpapers</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Favorites</p>
              </div>
            </div>

            <Separator />

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleResetSettings} className="gap-2 bg-transparent">
                <RotateCcw className="w-4 h-4" />
                Reset Settings
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 text-destructive hover:text-destructive bg-transparent"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cache
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle>About Wallpaper Studio</CardTitle>
            <CardDescription>Version 1.0.0 - Built with Next.js and Tailwind CSS</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A beautiful wallpaper management application designed specifically for macOS, featuring animated
              backgrounds and multilingual support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
