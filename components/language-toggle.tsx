"use client"

import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  language: "pt" | "en"
  setLanguage: (lang: "pt" | "en") => void
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      className="flex items-center space-x-2 hover:bg-white/10"
    >
      {language === "pt" ? (
        // Bandeira dos EUA quando idioma atual é PT (para mudar para EN)
        <div className="flex items-center space-x-1">
          <span className="text-lg">🇺🇸</span>
          <span className="text-sm font-medium text-white">EN</span>
        </div>
      ) : (
        // Bandeira do Brasil quando idioma atual é EN (para mudar para PT)
        <div className="flex items-center space-x-1">
          <span className="text-lg">🇧🇷</span>
          <span className="text-sm font-medium text-white">PT</span>
        </div>
      )}
    </Button>
  )
}
