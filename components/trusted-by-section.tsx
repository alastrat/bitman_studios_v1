"use client"

import { useRef, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6", "Client 7", "Client 8"]

export default function TrustedBySection() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const isTablet = useMobile(1024)

  useEffect(() => {
    const scrollSpeed = 0.5
    let animationId: number
    let scrollPos = 0

    const scroll = () => {
      if (marqueeRef.current) {
        scrollPos += scrollSpeed

        // Reset position when we've scrolled the width of half the content
        if (scrollPos >= marqueeRef.current.scrollWidth / 2) {
          scrollPos = 0
        }

        marqueeRef.current.style.transform = `translateX(-${scrollPos}px)`
      }

      animationId = requestAnimationFrame(scroll)
    }

    scroll()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className={`${isMobile ? "py-6" : isTablet ? "py-10" : "py-16"} bg-zinc-950 ${isMobile ? "-mt-2" : ""}`}>
      <div className="container mx-auto px-4">
        <div className={`text-center ${isMobile ? "mb-4" : isTablet ? "mb-6" : "mb-10"}`}>
          <h2
            className={`${isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-2xl md:text-3xl"} font-bold text-white font-heading`}
          >
            Trusted By <span className="text-pink-500">200+ Popular Clients</span>
          </h2>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

          <div className="flex whitespace-nowrap overflow-hidden">
            <div
              ref={marqueeRef}
              className={`flex items-center gap-8 sm:gap-16 ${isMobile ? "py-3" : isTablet ? "py-4" : "py-6"}`}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${isMobile ? "h-10 w-28" : isTablet ? "h-12 w-32" : "h-16 w-40"} bg-zinc-800/50 rounded-md flex items-center justify-center text-white/40 font-medium border border-zinc-700/30`}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
