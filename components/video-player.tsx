"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface VideoPlayerProps {
  src: string
  poster: string
  className?: string
}

export default function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      try {
        video.play().catch((err) => {
          console.warn("Auto-play prevented:", err)
          setHasError(true)
        })
      } catch (err) {
        console.error("Video play error:", err)
        setHasError(true)
      }
    }

    const handleError = () => {
      console.error("Video loading error")
      setHasError(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  if (hasError) {
    return (
      <div className={`relative ${className}`}>
        <Image src={poster || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover rounded-lg" />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={poster}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={poster || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover rounded-lg" />
        </div>
      )}
    </div>
  )
}
