export function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jannatul Bushra Maisha',
    url: 'https://jannatul-bushra-maisha.vercel.app',
    jobTitle: 'Full Stack Developer',
    email: 'jannatulbushramaisha713@gmail.com',
    image: 'https://jannatul-bushra-maisha.vercel.app/og-image.jpg',
    sameAs: [
      'https://github.com/maisha0055',
      'https://www.linkedin.com/in/jannatul-bushra-maisha-026a8736a',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Developer',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'BRAC University',
    },
    knowsAbout: [
      'Full Stack Development',
      'Machine Learning',
      'Web Development',
      'Cybersecurity',
      'Python',
      'JavaScript',
      'React',
      'Node.js',
      'Next.js',
      'TailwindCSS',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
