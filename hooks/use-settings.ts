"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type ChangeInterval = "never" | "hourly" | "daily" | "weekly"
export type Quality = "high" | "medium" | "low"

interface SettingsStore {
  autoChange: boolean
  changeInterval: ChangeInterval
  quality: Quality
  enableAnimations: boolean
  enableNotifications: boolean
  setAutoChange: (enabled: boolean) => void
  setChangeInterval: (interval: ChangeInterval) => void
  setQuality: (quality: Quality) => void
  setEnableAnimations: (enabled: boolean) => void
  setEnableNotifications: (enabled: boolean) => void
}

export const useSettings = create<SettingsStore>()(
  persist(
    (set) => ({
      autoChange: false,
      changeInterval: "daily",
      quality: "high",
      enableAnimations: true,
      enableNotifications: true,
      setAutoChange: (autoChange) => set({ autoChange }),
      setChangeInterval: (changeInterval) => set({ changeInterval }),
      setQuality: (quality) => set({ quality }),
      setEnableAnimations: (enableAnimations) => set({ enableAnimations }),
      setEnableNotifications: (enableNotifications) => set({ enableNotifications }),
    }),
    {
      name: "wallpaper-settings",
    },
  ),
)
