"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-2xl font-heading z-10">
            BitMaN<span className="text-pink-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/#work" className="text-white/80 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/#about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-20 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden bg-black/95 backdrop-blur-md fixed top-0 left-0 right-0 h-screen z-10 transform transition-transform duration-300 ease-in-out pt-20 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto px-4 py-5 flex flex-col space-y-4">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors py-3 text-lg"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-white/80 hover:text-white transition-colors py-3 text-lg"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            href="/#work"
            className="text-white/80 hover:text-white transition-colors py-3 text-lg"
            onClick={handleLinkClick}
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-white/80 hover:text-white transition-colors py-3 text-lg"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-white transition-colors py-3 text-lg"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 w-full py-6 mt-4">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
