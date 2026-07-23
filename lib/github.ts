// GitHub API utilities for fetching user and contribution data
const GITHUB_API_BASE = 'https://api.github.com'
const USERNAME = 'maisha0055'

export interface GitHubUser {
  login: string
  name: string
  bio: string
  followers: number
  following: number
  public_repos: number
  public_gists: number
  created_at: string
  updated_at: string
  avatar_url: string
  company?: string
  location?: string
  blog?: string
}

export interface Repository {
  name: string
  description: string
  url: string
  homepage: string
  language: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  topics: string[]
  pushed_at: string
}

export interface LanguageData {
  [key: string]: number
}

export interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

// Fetch user profile data
export async function fetchGitHubUser(): Promise<GitHubUser> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}`)
    if (!response.ok) throw new Error('Failed to fetch user data')
    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    throw error
  }
}

// Fetch user repositories
export async function fetchGitHubRepos(): Promise<Repository[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${USERNAME}/repos?per_page=100&sort=updated`
    )
    if (!response.ok) throw new Error('Failed to fetch repos')
    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    throw error
  }
}

// Calculate language statistics
export async function fetchLanguageStats(): Promise<LanguageData> {
  try {
    const repos = await fetchGitHubRepos()
    const languages: LanguageData = {}

    for (const repo of repos) {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1
      }
    }

    return languages
  } catch (error) {
    console.error('Error calculating language stats:', error)
    throw error
  }
}

// Calculate total stats across all repos
export async function fetchGitHubStats() {
  try {
    const repos = await fetchGitHubRepos()

    const stats = {
      totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
      totalWatchers: repos.reduce((sum, repo) => sum + repo.watchers_count, 0),
      repositoryCount: repos.length,
    }

    return stats
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    throw error
  }
}

// Generate a 52-week contribution heatmap
export function generateContributionHeatmap(): ContributionDay[] {
  const heatmap: ContributionDay[] = []
  const today = new Date()

  // Go back 52 weeks
  for (let i = 363; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Generate pseudo-random contribution data (in a real app, fetch from GitHub API)
    const dayOfWeek = date.getDay()
    const dayOfMonth = date.getDate()
    const randomSeed = (dayOfWeek * 7 + dayOfMonth) % 100

    let count = 0
    let level: 0 | 1 | 2 | 3 | 4 = 0

    if (randomSeed < 40) {
      count = 0
      level = 0
    } else if (randomSeed < 60) {
      count = Math.floor(Math.random() * 5) + 1
      level = 1
    } else if (randomSeed < 75) {
      count = Math.floor(Math.random() * 10) + 5
      level = 2
    } else if (randomSeed < 88) {
      count = Math.floor(Math.random() * 15) + 10
      level = 3
    } else {
      count = Math.floor(Math.random() * 20) + 15
      level = 4
    }

    heatmap.push({
      date: date.toISOString().split('T')[0],
      count,
      level,
    })
  }

  return heatmap
}

// Get pinned repositories (first 6 or as specified)
export async function fetchPinnedRepos(limit: number = 6): Promise<Repository[]> {
  try {
    const repos = await fetchGitHubRepos()
    // Sort by stars and return top N
    return repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
  } catch (error) {
    console.error('Error fetching pinned repos:', error)
    throw error
  }
}
