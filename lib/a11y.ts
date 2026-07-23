// Accessibility utilities and ARIA configurations

export const ariaLabels = {
  navbar: {
    nav: 'Main navigation',
    toggleMenu: 'Toggle navigation menu',
  },
  hero: {
    section: 'Hero section',
    cta: 'Call to action buttons',
  },
  skills: {
    section: 'Technical skills section',
    skillsList: 'List of technical skills',
  },
  projects: {
    section: 'Projects showcase',
    projectsList: 'List of featured projects',
  },
  github: {
    section: 'GitHub statistics',
    stats: 'GitHub account statistics',
    contributions: 'Contribution heatmap',
  },
  certificates: {
    section: 'Certificates and achievements',
    certificatesList: 'List of certificates',
  },
  blog: {
    section: 'Blog articles',
    articleList: 'List of blog articles',
    categoryFilter: 'Filter articles by category',
  },
  contact: {
    section: 'Contact section',
    form: 'Contact form',
    formSubmit: 'Submit contact form',
  },
  footer: {
    contentInfo: 'Site footer',
    backToTop: 'Back to top button',
  },
}

// Focus management utilities
export function manageFocus(event: React.KeyboardEvent<HTMLElement>) {
  if (event.key === 'Escape') {
    event.currentTarget.blur()
  }
}

// Skip to main content utility
export const skipToMainContent = () => {
  const mainElement = document.querySelector('main')
  if (mainElement) {
    mainElement.setAttribute('tabIndex', '-1')
    mainElement.focus()
    mainElement.removeAttribute('tabIndex')
  }
}
