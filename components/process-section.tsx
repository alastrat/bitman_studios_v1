"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your brand, products, and target audience to create a tailored strategy.",
  },
  {
    number: "02",
    title: "Concept",
    description: "Our creative team develops unique concepts that align with your brand identity and marketing goals.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Using state-of-the-art equipment, we capture stunning footage that showcases your products at their best.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Our editors and VFX artists transform raw footage into polished videos with color grading and sound design.",
  },
  {
    number: "05",
    title: "Delivery",
    description: "We provide final videos optimized for various platforms to maximize impact across all channels.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">Our Process</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A streamlined approach to creating exceptional video content for your e-commerce brand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  {step.number}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-white text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block h-20 w-px bg-gradient-to-b from-pink-500 to-purple-600 absolute left-8 mt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
