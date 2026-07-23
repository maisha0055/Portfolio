'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  fetchGitHubUser,
  fetchGitHubStats,
  fetchLanguageStats,
  fetchPinnedRepos,
  generateContributionHeatmap,
  GitHubUser,
  Repository,
  LanguageData,
  ContributionDay,
} from '@/lib/github'
import { FiGithub, FiStar, FiUsers } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function GitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [stats, setStats] = useState<any>(null)
  const [languages, setLanguages] = useState<LanguageData | null>(null)
  const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([])
  const [heatmap, setHeatmap] = useState<ContributionDay[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        const [userData, statsData, languagesData, reposData] = await Promise.all([
          fetchGitHubUser(),
          fetchGitHubStats(),
          fetchLanguageStats(),
          fetchPinnedRepos(6),
        ])

        setUser(userData)
        setStats(statsData)
        setLanguages(languagesData)
        setPinnedRepos(reposData)
        setHeatmap(generateContributionHeatmap())
      } catch (error) {
        console.error('Failed to load GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadGitHubData()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground">Loading GitHub data...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiGithub className="w-8 h-8" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GitHub Activity
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my GitHub profile to see all my open source contributions and projects
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {user && (
            <>
              {/* Followers */}
              <motion.div
                variants={item}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FiUsers className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Followers</p>
                <p className="text-3xl font-bold">{user.followers}</p>
              </motion.div>

              {/* Following */}
              <motion.div
                variants={item}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FiUsers className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Following</p>
                <p className="text-3xl font-bold">{user.following}</p>
              </motion.div>

              {/* Repositories */}
              <motion.div
                variants={item}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FiGithub className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Repositories</p>
                <p className="text-3xl font-bold">{user.public_repos}</p>
              </motion.div>

              {/* Gists */}
              <motion.div
                variants={item}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">{'</>'}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Gists</p>
                <p className="text-3xl font-bold">{user.public_gists}</p>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* GitHub Stats Cards */}
        {stats && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* Total Stars */}
            <motion.div
              variants={item}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FiStar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Total Stars</p>
                  <p className="text-3xl font-bold mt-1">{stats.totalStars}</p>
                </div>
              </div>
            </motion.div>

            {/* Total Forks */}
            <motion.div
              variants={item}
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border border-purple-200 dark:border-purple-800 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">⑂</span>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Total Forks</p>
                  <p className="text-3xl font-bold mt-1">{stats.totalForks}</p>
                </div>
              </div>
            </motion.div>

            {/* Total Repos */}
            <motion.div
              variants={item}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border border-green-200 dark:border-green-800 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center">
                  <FiGithub className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Total Repositories</p>
                  <p className="text-3xl font-bold mt-1">{stats.repositoryCount}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">Contribution Graph (52 Weeks)</h3>
          <div className="overflow-x-auto">
            <ContributionHeatmap data={heatmap} />
          </div>
        </motion.div>

        {/* Languages Used */}
        {languages && Object.keys(languages).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">Languages Used</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .map(([language, count], index) => (
                  <motion.div
                    key={language}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <span className="font-medium">{language}</span>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {count}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Pinned Repositories */}
        {pinnedRepos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Top Repositories</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pinnedRepos.map((repo) => (
                <motion.a
                  key={repo.name}
                  variants={item}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold group-hover:text-accent transition-colors">
                        {repo.name}
                      </h4>
                    </div>
                    <FiGithub className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                  </div>
                  
                  {repo.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {repo.description}
                    </p>
                  )}

                  <div className="flex items-center gap-4 mb-4">
                    {repo.language && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-foreground rounded-full text-xs font-medium">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <FiStar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">⑂</span>
                      <span className="text-sm text-muted-foreground">{repo.forks_count}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Contribution Heatmap Component
function ContributionHeatmap({ data }: { data: ContributionDay[] }) {
  const getLevelColor = (level: 0 | 1 | 2 | 3 | 4) => {
    switch (level) {
      case 0:
        return '#f5f5f5'
      case 1:
        return '#c6e48b'
      case 2:
        return '#7bc96f'
      case 3:
        return '#239a3b'
      case 4:
        return '#196127'
      default:
        return '#f5f5f5'
    }
  }

  // Group data by weeks
  const weeks: ContributionDay[][] = []
  let currentWeek: ContributionDay[] = []

  for (const day of data) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  return (
    <div className="flex gap-2 flex-nowrap pb-4">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-1">
          {week.map((day, dayIndex) => (
            <motion.div
              key={`${weekIndex}-${dayIndex}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: (weekIndex * 7 + dayIndex) * 0.01 }}
              viewport={{ once: true }}
              title={`${day.date}: ${day.count} contributions`}
              className="w-3 h-3 rounded cursor-pointer hover:ring-2 hover:ring-accent transition-all"
              style={{ backgroundColor: getLevelColor(day.level) }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
