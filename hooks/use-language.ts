"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Language } from "@/lib/i18n"

interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "wallpaper-language",
    },
  ),
)
