"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, Clock, DollarSign, Film, ExternalLink } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "BitMaN helped us increase our ROAS by 40% with their AI-powered video content. Their team's creativity and technical expertise routinely save the day!",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Luxury Beauty Co.",
      metrics: {
        timeSaved: "45%",
        costSavings: "$8,250",
        videosDelivered: "15",
      },
      caseStudy: {
        title: "How Luxury Beauty Co. Increased ROAS by 40%",
        image: "/beauty-products-collection.png",
      },
    },
    {
      quote:
        "The 48-hour turnaround time is a game-changer for our social media strategy. BitMaN's team consistently delivers high-quality content that exceeds our expectations.",
      author: "Michael Chen",
      position: "E-commerce Manager",
      company: "Modern Home Goods",
      metrics: {
        timeSaved: "57%",
        costSavings: "$10,775",
        videosDelivered: "20",
      },
      caseStudy: {
        title: "How Modern Home Goods Scales Content Creation",
        image: "/placeholder.svg?key=ho4h0",
      },
    },
    {
      quote:
        "Their understanding of the Latino market helped us connect with our target audience. I am beyond happy with the work BitMaN has done for our brand.",
      author: "Emma Rodriguez",
      position: "Brand Manager",
      company: "Fashion Forward",
      metrics: {
        timeSaved: "38%",
        costSavings: "$7,500",
        videosDelivered: "12",
      },
      caseStudy: {
        title: "Fashion Forward's Latino Market Expansion",
        image: "/diverse-fashion-collection.png",
      },
    },
    {
      quote:
        "The quality of BitMaN's video production has elevated our brand perception significantly. Their creative team consistently delivers content that resonates with our audience.",
      author: "David Kim",
      position: "CEO",
      company: "Tech Innovations",
      metrics: {
        timeSaved: "62%",
        costSavings: "$15,300",
        videosDelivered: "25",
      },
      caseStudy: {
        title: "Tech Innovations' Brand Transformation",
        image: "/tech-gadgets-display.png",
      },
    },
    {
      quote:
        "Working with BitMaN has transformed how we approach video marketing completely. Their strategic insights have been invaluable to our growth.",
      author: "Priya Patel",
      position: "Digital Marketing Lead",
      company: "Global Retail",
      metrics: {
        timeSaved: "51%",
        costSavings: "$12,450",
        videosDelivered: "18",
      },
      caseStudy: {
        title: "Global Retail's Video Marketing Revolution",
        image: "/placeholder.svg?key=bgddu",
      },
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setIsAnimating(true)
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    setIsAnimating(true)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAnimating(true)
  }

  // Auto-advance the slider every 8 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex, isAnimating, isPaused])

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 bg-zinc-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-900 mb-3 sm:mb-4 font-heading">
            Client Success Stories
          </h2>
          <p className="text-zinc-700 max-w-2xl mx-auto text-base sm:text-lg">
            Hear what our clients have to say about working with BitMaN.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            {/* Profile images column - visible on larger screens */}
            <div className="hidden md:flex flex-col space-y-6 w-24 lg:w-32">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${index === currentIndex ? "scale-110" : "opacity-50 scale-90"}`}
                >
                  <button
                    onClick={() => goToSlide(index)}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      index === currentIndex ? "border-pink-500" : "border-transparent"
                    }`}
                    aria-label={`View testimonial from ${testimonial.author}`}
                  >
                    <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-800 text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Testimonial content */}
            <div className="flex-grow relative">
              <div className="relative min-h-[450px] sm:min-h-[400px] overflow-hidden">
                <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full"
                  >
                    <div className="p-4 sm:p-6 md:p-8">
                      {/* Company name */}
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3 md:mb-4">
                        {testimonials[currentIndex].company}
                      </h3>

                      {/* Quote */}
                      <p className="text-zinc-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 leading-tight">
                        "{testimonials[currentIndex].quote.split(".")[0]}.{" "}
                        <span className="font-bold">{testimonials[currentIndex].quote.split(".")[1] || ""}</span>"
                      </p>

                      {/* Author info */}
                      <p className="text-zinc-700 mb-6 sm:mb-8 md:mb-10">
                        {testimonials[currentIndex].author}, {testimonials[currentIndex].position} at{" "}
                        {testimonials[currentIndex].company}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 flex-shrink-0" />
                          <div>
                            <p className="text-xl sm:text-2xl font-bold text-zinc-900">
                              {testimonials[currentIndex].metrics.timeSaved}
                            </p>
                            <p className="text-xs sm:text-sm text-zinc-600">Production time saved</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 flex-shrink-0" />
                          <div>
                            <p className="text-xl sm:text-2xl font-bold text-zinc-900">
                              {testimonials[currentIndex].metrics.costSavings}
                            </p>
                            <p className="text-xs sm:text-sm text-zinc-600">Cost savings</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Film className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 flex-shrink-0" />
                          <div>
                            <p className="text-xl sm:text-2xl font-bold text-zinc-900">
                              {testimonials[currentIndex].metrics.videosDelivered}
                            </p>
                            <p className="text-xs sm:text-sm text-zinc-600">Videos delivered</p>
                          </div>
                        </div>
                      </div>

                      {/* Case study card */}
                      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 flex items-center max-w-md">
                        <div className="w-16 sm:w-24 h-12 sm:h-16 bg-zinc-200 rounded mr-3 sm:mr-4 overflow-hidden flex-shrink-0">
                          <img
                            src={testimonials[currentIndex].caseStudy.image || "/placeholder.svg"}
                            alt={testimonials[currentIndex].company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-zinc-500 uppercase font-bold mb-1 truncate">
                            {testimonials[currentIndex].company}
                          </p>
                          <p className="text-xs sm:text-sm font-medium text-zinc-900 line-clamp-2">
                            {testimonials[currentIndex].caseStudy.title}
                          </p>
                          <a href="#" className="text-xs text-pink-500 flex items-center mt-1 hover:underline">
                            Read case study <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Vertical navigation arrows */}
            <div className="hidden md:flex flex-col space-y-4 items-center">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center text-zinc-800"
                aria-label="Previous testimonial"
              >
                <ChevronUp className="h-5 w-5" />
              </button>

              <button
                onClick={goToNext}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center text-zinc-800"
                aria-label="Next testimonial"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden justify-center items-center mt-8 space-x-4">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center text-zinc-800"
              aria-label="Previous testimonial"
            >
              <ChevronUp className="h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex ? "w-8 h-2 bg-pink-500" : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
                  } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center text-zinc-800"
              aria-label="Next testimonial"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
