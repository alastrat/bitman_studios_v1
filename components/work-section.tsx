"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "luxury-cosmetics",
    title: "Luxury Cosmetics",
    category: "Product Video",
    client: "BeautyGlow",
    result: "+32% ROAS",
    image: "/work-cosmetics.jpg",
  },
  {
    id: "fashion-lookbook",
    title: "Fashion Lookbook",
    category: "Social Media",
    client: "Urban Style",
    result: "+45% CTR",
    image: "/work-fashion.jpg",
  },
  {
    id: "tech-gadget",
    title: "Tech Gadget Launch",
    category: "3D Animation",
    client: "NextGen Tech",
    result: "+28% Conversion",
    image: "/work-tech.jpg",
  },
  {
    id: "sustainable-brand",
    title: "Sustainable Brand",
    category: "Brand Story",
    client: "EcoLife",
    result: "+52% Engagement",
    image: "/work-sustainable.jpg",
  },
  {
    id: "fitness-app",
    title: "Fitness App Promo",
    category: "App Marketing",
    client: "FitLife",
    result: "+63% Downloads",
    image: "/work-fitness.jpg",
  },
  {
    id: "food-delivery",
    title: "Food Delivery Service",
    category: "Ad Campaign",
    client: "QuickBite",
    result: "+41% Orders",
    image: "/work-food.png",
  },
]

// Duplicate the projects array to create a seamless loop
const allProjects = [...projects, ...projects]

export default function WorkSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      // Set the width of the carousel
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  return (
    <section id="work" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-pink-500 uppercase tracking-wider text-sm font-medium">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4 font-heading">
            Every type of video content you'll
            <br />
            ever need, <span className="italic font-normal text-white/80">and more</span>
          </h2>
          <p className="text-white/70 max-w-2xl text-lg">
            Browse our portfolio of high-converting video projects for leading e-commerce brands.
          </p>
        </div>

        <div className="overflow-hidden relative">
          <motion.div
            ref={carouselRef}
            className="flex gap-6 cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: isPaused ? undefined : -width }}
            transition={{
              x: {
                duration: 40,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              },
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className="min-w-[350px] md:min-w-[400px] h-[500px] relative rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-white/80 text-sm uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mt-2">{project.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">{project.client}</span>
                      <span className="bg-green-500/20 text-green-400 text-sm font-bold px-2 py-1 rounded">
                        {project.result}
                      </span>
                    </div>

                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center text-white hover:text-pink-400 transition-colors"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
