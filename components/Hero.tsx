'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.section
      className="min-h-[calc(100vh-64px)] mt-16 flex items-center justify-center px-4 py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
              style={{ 
                backgroundColor: 'rgba(107, 142, 35, 0.08)',
                borderColor: 'rgba(107, 142, 35, 0.2)',
                color: '#6B8E23'
              }}
              variants={itemVariants}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#6B8E23' }} />
              Open to opportunities
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              variants={itemVariants}
            >
              <span className="text-foreground">Building </span>
              <span style={{ color: '#6B8E23' }}>Secure</span>
              <span className="text-foreground">, </span>
              <span style={{ color: '#FFA07A' }}>Intelligent</span>
              <span className="text-foreground"> & Scalable Software.</span>
            </motion.h1>
          </div>

          <motion.p
            className="text-lg leading-relaxed max-w-xl"
            style={{ color: '#6B7B5A' }}
            variants={itemVariants}
          >
            I&apos;m a Computer Science undergraduate at BRAC University passionate about full-stack development, machine learning, cybersecurity, and software engineering.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollTo('projects')}
              className="group px-8 py-4 text-base font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#6B8E23' }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollTo('contact')}
              className="group px-8 py-4 text-base font-semibold rounded-xl border-2 transition-all duration-300"
              style={{ 
                borderColor: '#FFA07A',
                color: '#E8845A',
              }}
              whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255, 160, 122, 0.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Contact Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="relative h-[520px] rounded-3xl overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          {/* Decorative border glow */}
          <div className="absolute -inset-[1px] rounded-3xl z-0" style={{ background: 'linear-gradient(135deg, #6B8E23, #FFA07A, #6B8E23)' }} />
          <div className="absolute inset-[3px] rounded-[calc(1.5rem-3px)] overflow-hidden z-10 bg-background">
            <Image
              src="/profile.jpg"
              alt="Jannatul Bushra Maisha - Professional Portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
