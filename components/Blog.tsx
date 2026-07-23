'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import { useState } from 'react'

const categories = [
  'All',
  'Machine Learning',
  'Web Development',
  'Cybersecurity',
  'Programming',
  'Software Engineering',
]

const articles = [
  {
    id: 1,
    title: 'Getting Started with Neural Networks',
    excerpt: 'A comprehensive guide to understanding the fundamentals of neural networks and how they power modern AI applications.',
    category: 'Machine Learning',
    date: '2025-01-15',
    readTime: '8 min read',
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    featured: true,
  },
  {
    id: 2,
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn advanced techniques to optimize your React applications for better performance and user experience.',
    category: 'Web Development',
    date: '2025-01-10',
    readTime: '6 min read',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    featured: true,
  },
  {
    id: 3,
    title: 'Web Security Best Practices',
    excerpt: 'Essential security practices every web developer should know to protect their applications from common vulnerabilities.',
    category: 'Cybersecurity',
    date: '2025-01-05',
    readTime: '10 min read',
    image: 'bg-gradient-to-br from-red-500 to-orange-500',
    featured: true,
  },
  {
    id: 4,
    title: 'Python Tips for Data Scientists',
    excerpt: 'Practical Python tips and tricks that will make you more efficient in your data science projects.',
    category: 'Programming',
    date: '2024-12-28',
    readTime: '7 min read',
    image: 'bg-gradient-to-br from-yellow-500 to-green-500',
    featured: false,
  },
  {
    id: 5,
    title: 'Building Scalable Backend Systems',
    excerpt: 'Explore architectural patterns and best practices for building scalable backend systems that can handle millions of users.',
    category: 'Software Engineering',
    date: '2024-12-20',
    readTime: '12 min read',
    image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    featured: false,
  },
  {
    id: 6,
    title: 'Machine Learning Model Deployment',
    excerpt: 'Learn how to deploy machine learning models to production and monitor their performance in real-world applications.',
    category: 'Machine Learning',
    date: '2024-12-15',
    readTime: '9 min read',
    image: 'bg-gradient-to-br from-pink-500 to-red-500',
    featured: false,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory)

  const featuredArticles = filteredArticles.filter(a => a.featured)
  const otherArticles = filteredArticles.filter(a => !a.featured)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Blog & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">
            Insights on Machine Learning, Web Development, Cybersecurity, and Software Engineering.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-card border border-border text-foreground hover:border-accent/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {featuredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                >
                  {/* Image Gradient */}
                  <div className={`h-40 ${article.image} group-hover:scale-105 transition-transform duration-300`} />

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 border-t border-border pt-4">
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiClock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <FiArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        )}

        {/* Other Articles */}
        {otherArticles.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {featuredArticles.length > 0 ? 'Latest Articles' : 'Articles'}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              {otherArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all group cursor-pointer flex items-start gap-6"
                >
                  {/* Thumbnail */}
                  <div className={`h-24 w-24 ${article.image} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiClock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <FiArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No articles in this category yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
