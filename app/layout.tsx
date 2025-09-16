import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client"

export const metadata: Metadata = {
  title: "Wallpaper Studio - Beautiful animated wallpapers for macOS",
  description: "A native macOS wallpaper management application with animated backgrounds and multilingual support",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'