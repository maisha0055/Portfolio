'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiAward, FiExternalLink, FiCheck } from 'react-icons/fi'

interface Certificate {
  id: number
  title: string
  issuer: string
  credentialId: string
  date: string
  pdfUrl: string
  imgUrl: string
  accentColor: string
  accentRgb: string
  bullets?: string[]
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Data Visualization and Dashboards with Excel and Cognos',
    issuer: 'IBM via Coursera',
    credentialId: 'O4WMP683JMHG',
    date: '2023',
    pdfUrl: '/certificates/coursera_o4wmp683jmhg.pdf',
    imgUrl: '/certificates/coursera_o4wmp683jmhg.pdf.png',
    accentColor: '#6B8E23',
    accentRgb: '107, 142, 35',
    bullets: [
      'Completed training in Data Visualization and Dashboards using Microsoft Excel and IBM Cognos Analytics.',
      'Built interactive dashboards and visual reports to communicate data-driven insights.',
      'Applied data analysis techniques including pivot tables, charts, and reporting tools.',
      'Gained practical skills in transforming raw data into clear, actionable business insights.',
    ],
  },
  {
    id: 2,
    title: 'Excel Basics for Data Analysis',
    issuer: 'Coursera',
    credentialId: 'JWNFYD5X7B70',
    date: '2023',
    pdfUrl: '/certificates/coursera_jwnfyd5x7b70.pdf',
    imgUrl: '/certificates/coursera_jwnfyd5x7b70.pdf.png',
    accentColor: '#FFA07A',
    accentRgb: '255, 160, 122',
    bullets: [
      'Display working knowledge of Excel for Data Analysis.',
      'Perform basic spreadsheet tasks including navigation, data entry, and using formulas.',
      'Employ data quality techniques to import and clean data in Excel.',
      'Analyze data in spreadsheets by using filter, sort, look-up functions, as well as pivot tables.',
    ],
  },
  {
    id: 3,
    title: 'Keys and Constraints in MySQL',
    issuer: 'IBM via Cognitive Class',
    credentialId: 'GPXX01RYEN',
    date: '2024',
    pdfUrl: '/certificates/keys_and_constraints_in_mysql.pdf',
    imgUrl: '/certificates/keys_and_constraints_in_mysql.pdf.png',
    accentColor: '#8DB63C',
    accentRgb: '141, 182, 60',
    bullets: [
      'Implemented primary and foreign keys to maintain data integrity and relational consistency in MySQL.',
      'Applied constraints such as NOT NULL, UNIQUE, DEFAULT, and CHECK to enforce data validity.',
      'Designed normalized tables to reduce redundancy and improve database efficiency.',
      'Ensured accurate relationships and controlled data entry through proper key and constraint management.',
    ],
  },
  {
    id: 4,
    title: 'Data Analysis with Python',
    issuer: 'IBM via Cognitive Class',
    credentialId: 'GPXX0MIIEN',
    date: '2024',
    pdfUrl: '/certificates/data_analysis_with_python.pdf',
    imgUrl: '/certificates/data_analysis_with_python.pdf.png',
    accentColor: '#E8845A',
    accentRgb: '232, 132, 90',
  },
]

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

export function Certificates() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F4F7EC' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Certifications & <span style={{ color: '#FFA07A' }}>Achievements</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7B5A' }}>
            Professional certifications validating expertise in data analysis, databases, and data visualization. Hover over a certificate to view details.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert, index) => {
            const isHovered = hoveredId === cert.id

            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setHoveredId(cert.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Minimal Certificate Card (Thumbnail only) */}
                <div
                  className="bg-card rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm relative group cursor-pointer"
                  style={{
                    borderColor: isHovered ? `rgba(${cert.accentRgb}, 0.6)` : 'rgba(226,221,207,0.7)',
                    boxShadow: isHovered
                      ? `0 12px 30px -10px rgba(${cert.accentRgb}, 0.25)`
                      : '0 2px 10px rgba(0,0,0,0.03)',
                  }}
                >
                  <div className="relative w-full bg-white overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={cert.imgUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `linear-gradient(180deg, transparent 50%, rgba(${cert.accentRgb}, 0.15) 100%)` }}
                    />
                  </div>

                  {/* Minimal Title Label */}
                  <div className="p-3 bg-card border-t border-border/40 flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: cert.accentColor }}
                    >
                      <FiAward className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-xs font-bold text-foreground truncate flex-1">
                      {cert.title}
                    </p>
                  </div>
                </div>

                {/* Premium Floating Popover on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute z-50 w-80 p-5 rounded-2xl bg-card/95 backdrop-blur-xl border shadow-2xl pointer-events-auto ${
                        index % 4 >= 2 ? 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2' : 'left-0 sm:left-1/2 sm:-translate-x-1/2'
                      } bottom-full mb-3`}
                      style={{
                        borderColor: `rgba(${cert.accentRgb}, 0.3)`,
                        boxShadow: `0 25px 60px -15px rgba(0,0,0,0.15), 0 0 0 1px rgba(${cert.accentRgb}, 0.2)`,
                      }}
                    >
                      {/* Popover Header Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                          style={{
                            backgroundColor: `rgba(${cert.accentRgb}, 0.1)`,
                            borderColor: `rgba(${cert.accentRgb}, 0.25)`,
                            color: cert.accentColor,
                          }}
                        >
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-medium text-foreground/50">{cert.date}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-bold text-foreground mb-2 leading-snug">
                        {cert.title}
                      </h4>

                      {/* Description Bullets */}
                      {cert.bullets && cert.bullets.length > 0 ? (
                        <ul className="space-y-1.5 mb-4">
                          {cert.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs leading-relaxed" style={{ color: '#6B7B5A' }}>
                              <span
                                className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ backgroundColor: `rgba(${cert.accentRgb}, 0.15)`, color: cert.accentColor }}
                              >
                                <FiCheck size={9} />
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs leading-relaxed mb-4" style={{ color: '#6B7B5A' }}>
                          Verified certificate of completion covering data analysis techniques, data wrangling, and predictive modeling algorithms.
                        </p>
                      )}

                      <p className="text-[10px] mb-3 text-foreground/50 font-mono">
                        Credential ID: {cert.credentialId}
                      </p>

                      {/* View Certificate CTA Button */}
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all shadow-sm hover:shadow-md active:scale-95"
                        style={{ backgroundColor: cert.accentColor }}
                      >
                        <FiExternalLink size={13} />
                        View Certificate
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
