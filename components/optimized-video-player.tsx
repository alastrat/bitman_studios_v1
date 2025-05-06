"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface OptimizedVideoPlayerProps {
  src: string
  mobileSrc?: string
  poster: string
  className?: string
}

export default function OptimizedVideoPlayer({ src, mobileSrc, poster, className = "" }: OptimizedVideoPlayerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Use Intersection Observer to detect when the video is in viewport
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Handle video loading and playing states based on events
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlaying = () => {
      setIsPlaying(true)
      setIsLoaded(true) // If it's playing, it's definitely loaded
    }

    const handleCanPlay = () => {
      setIsLoaded(true)
      // Attempt to play if visible and not already playing (autoPlay might handle this)
      // Browsers are strict about play() calls not initiated by user interaction
      // but autoPlay muted should work. This is a fallback.
      if (isVisible && video.paused) {
        video.play().catch(error => console.warn("Fallback play attempt prevented:", error));
      }
    }

    const handleWaiting = () => {
      // Optionally, handle buffering state if needed
      // setIsPlaying(false);
    }

    const handleError = () => {
      console.error("Video error occurred.")
      setIsLoaded(false) // Mark as not loaded on error
      setIsPlaying(false)
    }

    // If the video is already visible and ready, try to play
    // This handles cases where isVisible is true on initial render
    if (isVisible && video.readyState >= 3 && video.paused) { // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
        video.play().catch(error => console.warn("Initial visible play attempt prevented:", error));
    }

    video.addEventListener("playing", handlePlaying)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("waiting", handleWaiting)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("playing", handlePlaying)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("waiting", handleWaiting)
      video.removeEventListener("error", handleError)
    }
  }, [isVisible]) // Re-run when visibility changes

  // Get the appropriate video source based on device
  const videoSrc = isMobile && mobileSrc ? mobileSrc : src

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Always show the poster image initially */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${isLoaded && isPlaying ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={poster || "/placeholder.svg"}
          alt="Video thumbnail"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Video element with preload="metadata" to load just enough data */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-700 ${isLoaded && isPlaying ? "opacity-100" : "opacity-0"}`}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
