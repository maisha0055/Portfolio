'use client'

import { motion } from 'framer-motion'
import {
  FiBookOpen,
  FiTarget,
  FiTrendingUp,
  FiCode,
  FiLayers,
  FiLock,
  FiBarChart2,
  FiDatabase,
  FiCpu,
  FiLayout,
  FiServer,
  FiBox,
  FiFeather
} from 'react-icons/fi'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const skillCategories = [
  {
    category: 'Frontend',
    icon: FiLayout,
    accentColor: '#6B8E23',
    accentRgb: '107, 142, 35',
    skills: ['TypeScript', 'React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    icon: FiServer,
    accentColor: '#FFA07A',
    accentRgb: '255, 160, 122',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST API Development', 'Socket.IO'],
  },
  {
    category: 'Databases',
    icon: FiDatabase,
    accentColor: '#8DB63C',
    accentRgb: '141, 182, 60',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB'],
  },
  {
    category: 'AI & Computer Vision',
    icon: FiCpu,
    accentColor: '#E8845A',
    accentRgb: '232, 132, 90',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Computer Vision'],
  },
  {
    category: 'Developer Ecosystem',
    icon: FiBox,
    accentColor: '#5C7B21',
    accentRgb: '92, 123, 33',
    skills: ['Git & GitHub', 'Vercel', 'Postman', 'Sentry', 'npm'],
  },
  {
    category: 'Design',
    icon: FiFeather,
    accentColor: '#D87040',
    accentRgb: '216, 112, 64',
    skills: ['Figma', 'Canva'],
  },
]

const focusAreas = [
  { label: 'Full-Stack Web Dev', icon: FiLayers, color: '#6B8E23' },
  { label: 'Software Engineering', icon: FiCode, color: '#FFA07A' },
  { label: 'Data Analytics', icon: FiBarChart2, color: '#8DB63C' },
  { label: 'Cybersecurity', icon: FiLock, color: '#E8845A' },
]

const aboutCards = [
  {
    icon: FiBookOpen,
    title: 'Education',
    description: 'Computer Science student at BRAC University, focused on software engineering and emerging technologies.',
    borderHover: '#6B8E23',
  },
  {
    icon: FiTarget,
    title: 'Passion',
    description: 'Driven by solving complex problems with elegant code and creating applications that make a real impact.',
    borderHover: '#FFA07A',
  },
  {
    icon: FiTrendingUp,
    title: 'Growth',
    description: 'Continuously learning and exploring new technologies to stay at the forefront of software development.',
    borderHover: '#8DB63C',
  },
]

export function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div className="mb-14 text-center" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            About <span style={{ color: '#6B8E23' }}>Me</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7B5A' }}>
            Software Engineer passionate about building modern, scalable, and user-centric web applications.
          </p>
        </motion.div>

        {/* Bio Hero Narrative Card */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border/70 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
          style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 100%)' }}
        >
          {/* Accent top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(to right, #6B8E23, #FFA07A, #8DB63C)' }} />

          <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed">
            <p>
              Hi! I&apos;m <span className="font-bold text-foreground" style={{ color: '#6B8E23' }}>Jannatul Bushra Maisha</span>, a Computer Science student at <span className="font-semibold text-foreground">BRAC University</span> and an aspiring <span className="font-semibold text-foreground" style={{ color: '#6B8E23' }}>Software Engineer</span> with a passion for building modern, scalable, and user-centric web applications. I enjoy transforming ideas into real-world software by combining clean code, thoughtful design, and strong engineering principles.
            </p>

            <p style={{ color: '#6B7B5A' }}>
              My primary focus is <span className="font-semibold text-foreground">full-stack web development</span>, where I love creating responsive, secure, and high-performance applications using modern technologies. From designing intuitive user interfaces to developing robust backend systems and APIs, I enjoy every stage of the software development lifecycle. Building projects that solve real-world problems and deliver meaningful user experiences is what motivates me the most.
            </p>

            <p style={{ color: '#6B7B5A' }}>
              Beyond web development, I&apos;m continuously exploring <span className="font-semibold" style={{ color: '#8DB63C' }}>Data Analytics</span>, <span className="font-semibold" style={{ color: '#E8845A' }}>Cybersecurity</span>, and <span className="font-semibold text-foreground">Cryptography</span> ~to deepen my understanding of intelligent and secure software systems. I&apos;m always eager to learn new technologies, collaborate with talented people, and build impactful software that makes a difference.
            </p>
          </div>

          {/* Quick Focus Pill Badges */}
          <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground/50 mr-1">Core Focus:</span>
            {focusAreas.map((area, idx) => {
              const Icon = area.icon
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: `${area.color}10`,
                    borderColor: `${area.color}25`,
                    color: area.color,
                  }}
                >
                  <Icon size={14} />
                  {area.label}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* 3 Overview Cards */}
        <motion.div className="grid md:grid-cols-3 gap-6 mb-24" variants={containerVariants}>
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border/60 transition-all duration-500 cursor-default overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 60px -15px ${card.borderHover}25`,
                  borderColor: card.borderHover,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${card.borderHover}08, ${card.borderHover}03)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: card.borderHover }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-olive transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p style={{ color: '#6B7B5A' }} className="leading-relaxed text-[15px]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technical Skills Section (Static / Categorized Grid) */}
        <motion.div id="skills" variants={containerVariants} className="pt-8">
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
              Technical <span style={{ color: '#FFA07A' }}>Skills</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#6B7B5A' }}>
              Languages, frameworks, databases, and developer tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              const CategoryIcon = cat.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group bg-card border border-border/60 rounded-2xl p-6 transition-all duration-300 hover:border-olive/40 hover:shadow-md flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: cat.accentColor }}
                      >
                        <CategoryIcon size={17} />
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: `rgba(${cat.accentRgb}, 0.08)`,
                            borderColor: `rgba(${cat.accentRgb}, 0.22)`,
                            color: '#2D3B1A',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
