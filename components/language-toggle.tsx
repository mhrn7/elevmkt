"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

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
      className="flex items-center space-x-1"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language === "pt" ? "EN" : "PT"}</span>
    </Button>
  )
}
