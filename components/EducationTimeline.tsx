'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiShield, FiBriefcase } from 'react-icons/fi'
import { FiBook } from 'react-icons/fi'

const educationData = {
  university: {
    name: 'BRAC University',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2022 – 2026',
    cgpa: 'Current CGPA: 3.44',
    icon: FiBook,
  },
}

const timelineEvents = [
  {
    year: '2022',
    title: 'Started Computer Science',
    description: 'Began my journey in Computer Science at BRAC University',
    icon: FiBook,
    color: 'bg-blue-600',
  },
  {
    year: '2023',
    title: 'Focused on MERN Stack',
    description: 'Developed expertise in MongoDB, Express, React, and Node.js',
    icon: FiCode,
    color: 'bg-green-600',
  },
  {
    year: '2024',
    title: 'Built Full Stack Applications',
    description: 'Created production-ready applications with modern tech stack',
    icon: FiDatabase,
    color: 'bg-purple-600',
  },
  {
    year: '2025',
    title: 'ML & Cybersecurity Projects',
    description: 'Explored Machine Learning and Cybersecurity domains',
    icon: FiShield,
    color: 'bg-orange-600',
  },
  {
    year: '2026',
    title: 'Seeking Opportunities',
    description: 'Looking for Software Engineering roles and internships',
    icon: FiBriefcase,
    color: 'bg-red-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function EducationTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Education & Timeline
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            My academic journey and professional milestones
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 rounded-xl p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiBook className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {educationData.university.name}
                </h3>
                <p className="text-lg text-muted-foreground mb-3">
                  {educationData.university.degree}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-foreground">
                    {educationData.university.duration}
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    {educationData.university.cgpa}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Journey</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon
                const isLast = index === timelineEvents.length - 1

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-6 group"
                  >
                    {/* Timeline Line and Dot */}
                    <div className="flex flex-col items-center">
                      {/* Dot */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Vertical Line */}
                      {!isLast && (
                        <div className="w-1 h-24 bg-gradient-to-b from-foreground/20 to-foreground/5 mt-4" />
                      )}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="flex-1 pt-2 pb-4"
                    >
                      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow group-hover:border-accent/50">
                        <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-xl font-bold text-accent">
                            {event.year}
                          </span>
                          <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                            {event.title}
                          </h4>
                        </div>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
