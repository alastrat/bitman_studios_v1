"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Film, Smartphone, CuboidIcon as Cube, BarChart2, Wand2, Megaphone } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const services = [
  {
    id: "product-videos",
    icon: <Film className="h-8 w-8 sm:h-10 sm:w-10 text-pink-500" />,
    title: "Product Videos",
    description: "High-quality product videos enhanced with AI technology for faster production and lower costs.",
    image: "/product-video-service.jpg",
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    id: "ugc-content",
    icon: <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />,
    title: "UGC & Social",
    description: "Authentic user-generated style content optimized for social media platforms and maximum engagement.",
    image: "/ugc-content-service.jpg",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    id: "3d-animation",
    icon: <Cube className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-500" />,
    title: "3D Animation",
    description: "Stunning 3D product visualizations and animations that showcase your products from every angle.",
    image: "/3d-animation-service.jpg",
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    id: "creative-strategy",
    icon: <BarChart2 className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />,
    title: "Creative Strategy",
    description:
      "Data-driven creative strategies tailored specifically for direct-to-consumer brands and their audiences.",
    image: "/creative-strategy-service.jpg",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "ai-editing",
    icon: <Wand2 className="h-8 w-8 sm:h-10 sm:w-10 text-teal-500" />,
    title: "AI Video Editing",
    description: "Cutting-edge AI-powered editing that reduces production time while maintaining premium quality.",
    image: "/ai-editing-service.jpg",
    color: "from-teal-500/20 to-teal-500/5",
  },
  {
    id: "ad-campaigns",
    icon: <Megaphone className="h-8 w-8 sm:h-10 sm:w-10 text-rose-500" />,
    title: "Ad Campaigns",
    description: "Full-service video ad campaigns designed to convert viewers into customers across all platforms.",
    image: "/ad-campaign-service.png",
    color: "from-rose-500/20 to-rose-500/5",
  },
]

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const isMobile = useMobile()
  const isTablet = useMobile(1024)
  const isSmallScreen = isMobile || isTablet
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="services" className={`${isMobile ? "py-10" : isTablet ? "py-16" : "py-24"} bg-black`}>
      <div className={`container mx-auto px-4 ${isMobile ? "mb-4" : isTablet ? "mb-8" : "mb-16"}`}>
        <div className={`text-center ${isMobile ? "mb-6" : isTablet ? "mb-10" : "mb-16"}`}>
          <h2
            className={`${isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-3xl md:text-5xl"} font-bold text-white mb-3 sm:mb-4 font-heading`}
          >
            Our Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            We create stunning video content that helps e-commerce brands stand out in a crowded market.
          </p>
        </div>

        {isSmallScreen ? (
          // Mobile and Tablet Layout - Vertical expansion on hover
          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => {
              const isHovered = hoveredId === service.id

              return (
                <motion.div
                  key={service.id}
                  className="relative rounded-lg overflow-hidden cursor-pointer border border-zinc-800/50"
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onTouchStart={() => setHoveredId(service.id)}
                  onTouchEnd={() => setHoveredId(null)}
                  initial={{ height: 180 }}
                  animate={{
                    height: isHovered ? 360 : 180,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-80`}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-4 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-black/30 p-2 rounded-full">{service.icon}</div>
                      <h3 className="text-white font-bold text-lg">{service.title}</h3>
                    </div>

                    {/* Description - Visible on hover */}
                    <motion.div
                      className="mt-2 flex-grow"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {isHovered && (
                        <div className="bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                          <p className="text-white/80 text-sm">{service.description}</p>
                          <button className="mt-3 text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors">
                            Learn more →
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        ) : (
          // Desktop Layout - Horizontal expansion
          <div className="flex flex-nowrap gap-3 justify-center h-[600px] overflow-hidden">
            {services.map((service) => {
              const isHovered = hoveredId === service.id

              return (
                <motion.div
                  key={service.id}
                  className="relative h-full rounded-lg overflow-hidden cursor-pointer group border border-zinc-800/50"
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={{ flex: 1 }}
                  animate={{
                    flex: isHovered ? 5 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    boxShadow: isHovered ? "0 0 20px rgba(0,0,0,0.5)" : "none",
                    zIndex: isHovered ? 10 : 1,
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="33vw"
                      priority
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-80`}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  {/* Content - Vertical Title (Always Visible) */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                  >
                    <h3 className="text-white font-bold text-2xl transform -rotate-90 whitespace-nowrap">
                      {service.title}
                    </h3>
                  </div>

                  {/* Expanded Content (Visible on Hover) */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 100,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/80 text-base">{service.description}</p>
                      <button className="mt-4 text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors">
                        Learn more →
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
