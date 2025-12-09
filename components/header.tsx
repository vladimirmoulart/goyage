"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState("FR")

  const languages = [
    { label: "Français", code: "FR", flag: "🇫🇷" },
    { label: "English", code: "EN", flag: "🇬🇧" },
    { label: "Español", code: "ES", flag: "🇪🇸" },
    { label: "Deutsch", code: "DE", flag: "🇩🇪" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-goyage.png" alt="GOYAGE" className="h-14 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/activites-locales" className="text-foreground hover:text-coral transition-colors font-medium">
              Activités locales
            </Link>
            <Link href="/destinations" className="text-foreground hover:text-coral transition-colors font-medium">
              Destinations
            </Link>
            <Link href="/boxes" className="text-foreground hover:text-coral transition-colors font-medium">
              Box GOYAGE
            </Link>
            <Link href="/faq" className="text-foreground hover:text-coral transition-colors font-medium">
              FAQ
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-foreground hover:text-coral">
                  <Globe className="w-4 h-4 mr-1" />
                  <span className="mr-1">{languages.find((lang) => lang.code === language)?.flag ?? "🌍"}</span>
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-2xl border border-pink/30 bg-white shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              asChild
              variant="outline"
              className="border-coral text-coral hover:bg-coral hover:text-white rounded-full bg-transparent"
            >
              <Link href="/connexion">Connexion</Link>
            </Button>
            <Button asChild className="bg-coral hover:bg-coral/90 text-white rounded-full">
              <Link href="/inscription">Devenir membre</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink/30">
            <nav className="flex flex-col gap-4">
              <Link href="/activites-locales" className="text-foreground hover:text-coral transition-colors font-medium py-2">
                Activités locales
              </Link>
              <Link
                href="/destinations"
                className="text-foreground hover:text-coral transition-colors font-medium py-2"
              >
                Destinations
              </Link>
              <Link href="/boxes" className="text-foreground hover:text-coral transition-colors font-medium py-2">
                Box GOYAGE
              </Link>
              <Link href="/faq" className="text-foreground hover:text-coral transition-colors font-medium py-2">
                FAQ
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-pink/30">
                <Button
                  asChild
                  variant="outline"
                  className="border-coral text-coral hover:bg-coral hover:text-white rounded-full w-full bg-transparent"
                >
                  <Link href="/connexion">Connexion</Link>
                </Button>
                <Button asChild className="bg-coral hover:bg-coral/90 text-white rounded-full w-full">
                  <Link href="/inscription">Devenir membre</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
