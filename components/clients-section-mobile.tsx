"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, DollarSign, Film, ExternalLink } from "lucide-react"

export default function TestimonialsMobile() {
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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-zinc-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3 font-heading">Client Success Stories</h2>
          <p className="text-zinc-700 max-w-2xl mx-auto text-base">
            Hear what our clients have to say about working with BitMaN.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
          {/* Company name */}
          <h3 className="text-lg font-bold text-zinc-900 mb-3">{currentTestimonial.company}</h3>

          {/* Quote */}
          <p className="text-zinc-900 text-xl font-medium mb-4 leading-tight">
            "{currentTestimonial.quote.split(".")[0]}.{" "}
            <span className="font-bold">{currentTestimonial.quote.split(".")[1] || ""}</span>"
          </p>

          {/* Author info */}
          <p className="text-zinc-700 mb-6">
            {currentTestimonial.author}, {currentTestimonial.position} at {currentTestimonial.company}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-5 w-5 text-pink-500 mb-1" />
              <p className="text-lg font-bold text-zinc-900">{currentTestimonial.metrics.timeSaved}</p>
              <p className="text-xs text-zinc-600">Time saved</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <DollarSign className="h-5 w-5 text-pink-500 mb-1" />
              <p className="text-lg font-bold text-zinc-900">{currentTestimonial.metrics.costSavings}</p>
              <p className="text-xs text-zinc-600">Cost savings</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Film className="h-5 w-5 text-pink-500 mb-1" />
              <p className="text-lg font-bold text-zinc-900">{currentTestimonial.metrics.videosDelivered}</p>
              <p className="text-xs text-zinc-600">Videos</p>
            </div>
          </div>

          {/* Case study link */}
          <div className="text-center mb-6">
            <a href="#" className="text-sm text-pink-500 flex items-center justify-center hover:underline">
              Read case study <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center text-zinc-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex ? "w-6 h-2 bg-pink-500" : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
                  } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center text-zinc-800"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
