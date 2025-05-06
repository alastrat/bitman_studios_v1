"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [language, setLanguage] = useState("EN")

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ES" : "EN")
  }

  return (
    <footer className="bg-zinc-950 py-10 sm:py-12 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl font-heading">
            BitMaN<span className="text-pink-500">.</span>
          </Link>

          {/* Minimal Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2">
            <Link href="#services" className="text-white/70 hover:text-white transition-colors px-2 py-1">
              Services
            </Link>
            <Link href="#work" className="text-white/70 hover:text-white transition-colors px-2 py-1">
              Portfolio
            </Link>
            <Link href="#why-bitmaN" className="text-white/70 hover:text-white transition-colors px-2 py-1">
              About
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors px-2 py-1">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/60 hover:text-pink-500 transition-colors p-2">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-pink-500 transition-colors p-2">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-pink-500 transition-colors p-2">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-pink-500 transition-colors p-2">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-pink-500 transition-colors p-2">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>

          {/* Language Toggle */}
          <div className="flex border border-zinc-800 rounded-md overflow-hidden">
            <Button
              variant="ghost"
              className={`px-3 py-1 h-auto rounded-none ${
                language === "EN" ? "bg-pink-500 text-white" : "bg-transparent text-white/70"
              }`}
              onClick={() => setLanguage("EN")}
            >
              EN
            </Button>
            <Button
              variant="ghost"
              className={`px-3 py-1 h-auto rounded-none ${
                language === "ES" ? "bg-pink-500 text-white" : "bg-transparent text-white/70"
              }`}
              onClick={() => setLanguage("ES")}
            >
              ES
            </Button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-900 text-center">
          <p className="text-white/60">© {new Date().getFullYear()} bitmanstudios.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
