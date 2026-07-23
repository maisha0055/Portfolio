'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useState, useEffect } from 'react'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink, FiStar, FiGitBranch, FiFolder } from 'react-icons/fi'

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
}

const FEATURED_PROJECTS = [
  'GIZMO_Frontend',
  'Shohojogi',
  'ZERO-trust-Banking-system',
  'Residential-Evil',
  'Arduino-flight-controller',
  '422-Prediction-of-Career-Changes-Using-Individual-and-Occupational-Factors'
]

const EXCLUDED_PROJECTS = [
  'maisha0055',
  'worker-calling-frontend',
  'worker_calling_frontend'
]

const PROJECT_DISPLAY_NAMES: Record<string, string> = {
  'GIZMO_Frontend': 'Gizmo',
  'Gizmo_Frontend': 'Gizmo',
  'ZERO-trust-Banking-system': 'Zero Trust Banking System',
  'Zero-Trust-Banking-System': 'Zero Trust Banking System',
  'Arduino-flight-controller': 'Arduino Flight Controller',
  'arduino-flight-controller': 'Arduino Flight Controller',
  'RoadSignNet-Sal': 'RoadSignNet-Sal',
  'roadsignnet-sal': 'RoadSignNet-Sal',
  'thesis-car': 'Bluetooth-Controlled-Arduino-Robot-Car',
  'thesis_car': 'Bluetooth-Controlled-Arduino-Robot-Car',
}

const PROJECT_DESCRIPTIONS: Record<string, string> = {
  'GIZMO_Frontend': 'An integrated career networking and employment platform built with the MERN stack. Features include professional networking, job listings, and career development tools.',
  'Gizmo_Frontend': 'An integrated career networking and employment platform built with the MERN stack. Features include professional networking, job listings, and career development tools.',
  'Shohojogi': 'A full-stack platform that connects users with trusted local workers such as electricians, plumbers, carpenters, and more. Designed to provide reliable service listings, seamless user interactions, and a modern, efficient workflow.',
  'ZERO-trust-Banking-system': 'Developed a secure full-stack banking system using Django REST Framework and React TypeScript, implementing zero-trust security with RSA/ECC encryption, HMAC-SHA256, JWT authentication, and role-based access control. Integrated MySQL with atomic transactions and two-factor authentication, along with full API documentation and testing.',
  'Zero-Trust-Banking-System': 'Developed a secure full-stack banking system using Django REST Framework and React TypeScript, implementing zero-trust security with RSA/ECC encryption, HMAC-SHA256, JWT authentication, and role-based access control. Integrated MySQL with atomic transactions and two-factor authentication, along with full API documentation and testing.',
  'Residential-Evil': 'A 3D horror survival game built with Python and PyOpenGL, featuring real-time rendering, AI-driven mannequin enemies, complex game states, object interactions, and performance optimizations while maintaining a playable and interactive environment.',
  'Arduino-flight-controller': 'Developed a custom Arduino-based quadcopter flight controller with optimized PID tuning, sensor fusion, and a stable 250Hz control loop. Enhanced the original YMFC-AL firmware by fixing critical bugs and improving flight stability and RC signal processing.',
  'arduino-flight-controller': 'Developed a custom Arduino-based quadcopter flight controller with optimized PID tuning, sensor fusion, and a stable 250Hz control loop. Enhanced the original YMFC-AL firmware by fixing critical bugs and improving flight stability and RC signal processing.',
  'RoadSignNet-Sal': 'Built an advanced computer vision system for road sign detection using YOLOv8, EfficientNet, DenseNet, and Vision Transformers. Leveraged hard negative mining and knowledge distillation to improve accuracy, robustness, and inference efficiency.',
  'roadsignnet-sal': 'Built an advanced computer vision system for road sign detection using YOLOv8, EfficientNet, DenseNet, and Vision Transformers. Leveraged hard negative mining and knowledge distillation to improve accuracy, robustness, and inference efficiency.',
  'MiniVSFS-C-based-VSFS-Image-Generator': 'A C-based virtual file system implementation that generates raw disk images with inode-based file system structure.',
  '422-Prediction-of-Career-Changes-Using-Individual-and-Occupational-Factors': 'Machine learning project predicting career changes based on individual and occupational factors using advanced analytics.',
}

const PROJECT_TECHS: Record<string, string[]> = {
  'GIZMO_Frontend': ['React', 'Node.js', 'MongoDB', 'Express'],
  'Gizmo_Frontend': ['React', 'Node.js', 'MongoDB', 'Express'],
  'Shohojogi': ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  'ZERO-trust-Banking-system': ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  'Zero-Trust-Banking-System': ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  'Residential-Evil': ['Python', 'PyOpenGL', 'AI/ML'],
  'Arduino-flight-controller': ['C++', 'Arduino', 'Embedded Systems', 'PID Control'],
  'arduino-flight-controller': ['C++', 'Arduino', 'Embedded Systems', 'PID Control'],
  'RoadSignNet-Sal': ['YOLOv8', 'Computer Vision', 'PyTorch', 'Transformers'],
  'roadsignnet-sal': ['YOLOv8', 'Computer Vision', 'PyTorch', 'Transformers'],
  'MiniVSFS-C-based-VSFS-Image-Generator': ['C', 'File Systems', 'Systems Programming'],
  '422-Prediction-of-Career-Changes-Using-Individual-and-Occupational-Factors': ['Python', 'Machine Learning', 'TensorFlow', 'Data Science'],
}

const PROJECT_HOMEPAGES: Record<string, string> = {
  'Shohojogi': 'https://shohojogi-beta.vercel.app/',
}

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/maisha0055/repos?per_page=100&sort=updated')
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data = await response.json()
        setRepos(data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories')
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const featuredRepos = repos
    .filter(repo => FEATURED_PROJECTS.some(featured => repo.name.toLowerCase() === featured.toLowerCase()))
    .sort((a, b) => {
      const indexA = FEATURED_PROJECTS.findIndex(f => f.toLowerCase() === a.name.toLowerCase())
      const indexB = FEATURED_PROJECTS.findIndex(f => f.toLowerCase() === b.name.toLowerCase())
      return indexA - indexB
    })
  const otherRepos = repos.filter(
    repo =>
      !FEATURED_PROJECTS.some(featured => repo.name.toLowerCase() === featured.toLowerCase()) &&
      !EXCLUDED_PROJECTS.some(excluded => repo.name.toLowerCase() === excluded.toLowerCase())
  )

  // Duplicate for seamless infinite loop
  const carouselRepos = [...otherRepos, ...otherRepos, ...otherRepos]

  if (loading) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: '#6B8E23', borderTopColor: 'transparent' }} />
              <p style={{ color: '#6B7B5A' }}>Loading projects...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Featured Projects */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Featured <span style={{ color: '#6B8E23' }}>Projects</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7B5A' }}>
              Highlight of my most impactful work and innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredRepos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div className="relative bg-card border border-border/60 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(107,142,35,0.15)] hover:border-olive/30">
                  <div className="flex-1 p-7 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-olive transition-colors duration-300">
                      {PROJECT_DISPLAY_NAMES[repo.name] || repo.name.replace(/-/g, ' ')}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#6B7B5A' }}>
                      {PROJECT_DESCRIPTIONS[repo.name] || repo.description || 'An innovative project showcasing technical expertise.'}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(PROJECT_TECHS[repo.name] || [repo.language].filter(Boolean)).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300"
                          style={{
                            backgroundColor: 'rgba(107,142,35,0.08)',
                            color: '#6B8E23',
                            border: '1px solid rgba(107,142,35,0.15)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 text-sm mb-6 pb-6 border-b border-border/50" style={{ color: '#6B7B5A' }}>
                      <div className="flex items-center gap-1.5">
                        <FiStar size={14} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiGitBranch size={14} />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg text-sm"
                        style={{ backgroundColor: '#6B8E23' }}
                      >
                        <SiGithub size={16} />
                        GitHub
                      </a>
                      {(PROJECT_HOMEPAGES[repo.name] || repo.homepage) && (
                        <a
                          href={PROJECT_HOMEPAGES[repo.name] || repo.homepage || ''}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm border hover:shadow-md"
                          style={{
                            color: '#C84B1A',
                            borderColor: 'rgba(200, 75, 26, 0.4)',
                            backgroundColor: 'rgba(200, 75, 26, 0.08)',
                          }}
                        >
                          <FiExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Section - Infinite Auto-Scrolling Carousel (Right to Left) */}
      {otherRepos.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#F4F7EC' }}>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                More <span style={{ color: '#FFA07A' }}>Projects</span>
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: '#6B7B5A' }}>
                Auto-scrolling showcase of additional technical explorations and repositories
              </p>
            </motion.div>

            {/* Infinite Marquee Container */}
            <div
              className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex gap-6 w-max py-3 animate-marquee-infinite"
                style={{
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                {carouselRepos.map((repo, idx) => {
                  const title = PROJECT_DISPLAY_NAMES[repo.name] || repo.name.replace(/-/g, ' ')
                  const description = PROJECT_DESCRIPTIONS[repo.name] || repo.description || 'A software project exploring modern algorithms and tools.'
                  const techList = PROJECT_TECHS[repo.name] || (repo.language ? [repo.language] : ['Software'])
                  const homepage = PROJECT_HOMEPAGES[repo.name] || repo.homepage

                  return (
                    <div
                      key={`${repo.id}-${idx}`}
                      className="shrink-0 w-[280px] sm:w-[320px] group bg-card border border-border/70 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer relative"
                      style={{
                        boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                      }}
                    >
                      {/* Top Content */}
                      <div>
                        {/* Folder Icon & Primary Tech Tag */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                            style={{ backgroundColor: idx % 2 === 0 ? '#6B8E23' : '#FFA07A' }}
                          >
                            <FiFolder size={18} />
                          </div>
                          <span
                            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border"
                            style={{
                              backgroundColor: idx % 2 === 0 ? 'rgba(107,142,35,0.08)' : 'rgba(255,160,122,0.1)',
                              borderColor: idx % 2 === 0 ? 'rgba(107,142,35,0.2)' : 'rgba(255,160,122,0.25)',
                              color: idx % 2 === 0 ? '#6B8E23' : '#C84B1A',
                            }}
                          >
                            {techList[0] || 'Code'}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-olive transition-colors leading-snug line-clamp-2">
                          {title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: '#6B7B5A' }}>
                          {description}
                        </p>
                      </div>

                      {/* Bottom Actions & Tech Badges */}
                      <div className="pt-4 border-t border-border/40">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {techList.slice(0, 3).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-secondary/60 text-foreground/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Buttons Row */}
                        <div className="flex items-center gap-2">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white transition-all shadow-sm hover:shadow-md active:scale-95"
                            style={{ backgroundColor: '#6B8E23' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SiGithub size={13} />
                            GitHub
                          </a>

                          {homepage && (
                            <a
                              href={homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center p-2 rounded-xl text-xs font-semibold border transition-all hover:shadow-sm"
                              style={{
                                color: '#C84B1A',
                                borderColor: 'rgba(200, 75, 26, 0.4)',
                                backgroundColor: 'rgba(200, 75, 26, 0.08)',
                              }}
                              title="Live Demo"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
