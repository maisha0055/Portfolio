'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi'

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const contactLinks = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'jannatulbushramaisha713@gmail.com',
      href: 'mailto:jannatulbushramaisha713@gmail.com',
      accentColor: '#6B8E23',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'jannatul-bushra-maisha-026a8736a',
      href: 'https://www.linkedin.com/in/jannatul-bushra-maisha-026a8736a',
      accentColor: '#FFA07A',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'maisha0055',
      href: 'https://github.com/maisha0055',
      accentColor: '#8DB63C',
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s{' '}
            <span style={{ color: '#6B8E23' }}>Connect</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7B5A' }}>
            I&apos;m always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-5"
        >
          <motion.div variants={itemVariants}>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{ 
                backgroundColor: 'rgba(107, 142, 35, 0.06)',
                borderColor: 'rgba(107, 142, 35, 0.2)',
                color: '#6B8E23'
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#6B8E23' }} />
              <p className="text-sm font-medium">Open to opportunities and collaborations</p>
            </div>
          </motion.div>

          {/* Contact Cards */}
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border/60 rounded-2xl p-6 transition-all duration-500 group"
                style={{ '--hover-color': link.accentColor } as React.CSSProperties}
                whileHover={{ 
                  y: -3,
                  boxShadow: `0 15px 40px -15px ${link.accentColor}20`,
                  borderColor: link.accentColor + '40',
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: link.accentColor }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider mb-0.5" style={{ color: '#6B7B5A' }}>{link.label}</p>
                    <p className="text-base font-semibold group-hover:text-olive transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" style={{ color: '#6B7B5A' }} />
                </div>
              </motion.a>
            )
          })}

          {/* CTA for Recruiters */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border/60 rounded-2xl p-8 mt-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #6B8E23, #FFA07A)' }} />
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#FFA07A' }}>
              For Recruiters
            </p>
            <h3 className="text-xl font-bold mb-3">Excited to explore new roles</h3>
            <p className="mb-6 text-[15px] leading-relaxed" style={{ color: '#6B7B5A' }}>
              I&apos;m looking for opportunities where I can contribute to innovative projects and continue growing as a developer.
            </p>
            <a
              href="mailto:jannatulbushramaisha713@gmail.com?subject=Job Opportunity"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group hover:shadow-lg"
              style={{ backgroundColor: '#6B8E23' }}
            >
              Start a Conversation
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
