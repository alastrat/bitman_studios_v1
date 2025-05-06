"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, Users, Sparkles, BarChart, Globe } from "lucide-react"

export default function WhyBitMaNSection() {
  return (
    <section id="why-bitmaN" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
              AI-powered and made to{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                work for you
              </span>
              .
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-white/70 text-lg">
              No matter your e-commerce needs, creating high-converting video content is now faster, more affordable,
              and effortless with BitMaN.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Latino-owned - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-2xl p-8 md:col-span-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Users className="h-8 w-8 text-pink-500 mb-4" />
                <h3 className="text-white text-2xl font-bold mb-3">Latino-owned. We understand your audience.</h3>
                <p className="text-white/70 mb-4">
                  Our diverse team brings cultural insights that resonate with Latino and multicultural audiences. We
                  create authentic content that connects with your target demographic on a deeper level.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span> Bilingual creative team
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span> Cultural nuance expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span> Authentic representation
                  </li>
                </ul>
              </div>

              <div className="flex-1 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?key=diverse-team"
                  alt="Diverse creative team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* 48h Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Clock className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-white text-2xl font-bold mb-3">Delivery in 48h</h3>
            <p className="text-white/70 mb-4">
              Our streamlined production process ensures quick turnaround without sacrificing quality. Get your content
              when you need it.
            </p>

            <div className="mt-6 relative h-[120px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-purple-900/30 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">48h</div>
                  <div className="text-white/70 text-sm">Average delivery time</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI-enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Sparkles className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-white text-2xl font-bold mb-3">AI-enhanced = Lower costs</h3>
            <p className="text-white/70 mb-4">
              We leverage AI technology to reduce production costs while maintaining premium quality. Get more for your
              budget.
            </p>

            <div className="mt-6 relative h-[120px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?key=ai-editing"
                alt="AI video editing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Multicultural Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-2xl p-8 md:col-span-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Globe className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-white text-2xl font-bold mb-3">Multicultural approach for global reach</h3>
                <p className="text-white/70 mb-4">
                  We create content that resonates across cultures and borders. Expand your brand's reach with
                  culturally intelligent video content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">English</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Spanish</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Portuguese</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">French</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">+ More</span>
                </div>
              </div>

              <div className="flex-1 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?key=global-audience"
                  alt="Global audience reach"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
