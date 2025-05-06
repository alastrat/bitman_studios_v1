"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import OptimizedVideoPlayer from "./optimized-video-player"

export default function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMobile()
  const isTablet = useMobile(1024)

  useEffect(() => {
    setIsLoaded(true)

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
    <div
      className={`relative w-full ${isMobile ? "h-auto min-h-[85svh]" : isTablet ? "h-auto min-h-[90svh]" : "h-screen"} overflow-hidden`}
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `scale(1.1) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-600/80 mix-blend-multiply ${isLoaded ? "animate-pulse-slow" : ""}`}
        />
        <Image
          src="/images/colorful-background.png"
          alt="Colorful studio background"
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40" />
        {/* Additional opacity filter overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)] animate-scan`}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full lg:top-0 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="h-full grid grid-cols-1 lg:grid-cols-5 items-center gap-6 md:gap-8 py-16 md:py-0">
          <div className="lg:col-span-2 pt-8 md:pt-12 lg:pt-0">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight font-heading ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            >
              <span className="block">AI Video Ads Studio</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                for eCommerce Brands
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl ${isLoaded ? "animate-fade-in-delay" : "opacity-0"}`}
            >
              We create high-converting video content for DTC brands using AI technology. Faster delivery, lower costs,
              better results.
            </p>

            <div className={`flex flex-wrap gap-3 sm:gap-4 ${isLoaded ? "animate-fade-in-delay-2" : "opacity-0"}`}>
              <Button size={isMobile ? "default" : "lg"} className="bg-white text-purple-900 hover:bg-white/90 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size={isMobile ? "default" : "lg"}
                className="border border-white/80 bg-black/30 text-white hover:bg-black/50"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Showreel
              </Button>
            </div>
          </div>

          <div
            className={`lg:col-span-3 relative rounded-lg overflow-hidden shadow-2xl ${isLoaded ? "animate-fade-in-delay" : "opacity-0"}`}
          >
            <div className="aspect-[16/12] relative">
              <OptimizedVideoPlayer
                src="/videos/hero_video.mp4"
                poster="/video-thumbnail.png"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
