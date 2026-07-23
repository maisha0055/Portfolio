'use client'

import { motion } from 'framer-motion'

export function Navbar() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/50 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <a
            href="#"
            className="text-xl font-bold tracking-tight"
            style={{ color: '#6B8E23' }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            JBM<span style={{ color: '#FFA07A' }}>.</span>
          </a>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {[
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Projects', id: 'projects' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className="relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-olive-50 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
