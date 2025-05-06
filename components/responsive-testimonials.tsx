"use client"

import { useState, useEffect } from "react"
import TestimonialsSection from "@/components/clients-section"
import TestimonialsMobile from "@/components/clients-section-mobile"

export default function ResponsiveTestimonials() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  if (isMobile) {
    return <TestimonialsMobile />
  }

  return <TestimonialsSection />
}
