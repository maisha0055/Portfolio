import { ReactNode, ComponentProps } from 'react'
import { motion } from 'framer-motion'

interface GradientCardProps extends ComponentProps<'div'> {
  children: ReactNode
  gradient: string
  border?: string
  className?: string
  hover?: boolean
}

export function GradientCard({
  children,
  gradient,
  border = 'border-gray-200 dark:border-gray-800',
  className = '',
  hover = true,
  ...props
}: GradientCardProps) {
  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} border ${border} rounded-xl p-6 ${hover ? 'hover:shadow-lg' : ''} transition-shadow ${className}`}
      whileHover={hover ? { y: -5 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StatCardProps {
  icon: ReactNode
  label: string
  value: string | number
  color: string
  accentColor: string
}

export function StatCard({ icon, label, value, color, accentColor }: StatCardProps) {
  return (
    <motion.div
      className={`bg-gradient-to-br ${color} border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 ${accentColor} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <p className="text-muted-foreground text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  highlighted?: string
}

export function SectionHeader({ title, subtitle, highlighted }: SectionHeaderProps) {
  const parts = title.split(highlighted || '')

  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {parts[0]}
        {highlighted && (
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {highlighted}
          </span>
        )}
        {parts[1]}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
