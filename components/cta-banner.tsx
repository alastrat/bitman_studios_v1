"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CTABanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `scale(1.1) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <Image
          src="/images/colorful-background.png"
          alt="Colorful background"
          fill
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-600/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* Animated lines effect */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)] animate-scan" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0)_100%)] animate-scan-vertical" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight font-heading">
          Let&apos;s create something unforgettable together
        </h2>

        <Link href="/contact">
          <Button
            variant="outline"
            size="lg"
            className="border border-white/80 bg-black/30 text-white hover:bg-black/50 text-lg px-8 py-6 h-auto group"
          >
            <Play className="h-5 w-5 mr-2" />
            Book a Call
          </Button>
        </Link>
      </div>
    </section>
  )
}
