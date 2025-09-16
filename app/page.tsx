"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { WallpaperGallery } from "@/components/wallpaper-gallery"
import { SettingsPanel } from "@/components/settings-panel"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")

  const renderContent = () => {
    switch (activeSection) {
      case "settings":
        return <SettingsPanel />
      default:
        return <WallpaperGallery category={activeSection} searchQuery={searchQuery} />
    }
  }

  return (
    <div className="h-screen flex bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="flex-1 overflow-hidden">{renderContent()}</main>
      </div>
    </div>
  )
}
