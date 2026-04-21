"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { DottedText } from "./dotted-text"
import { ExternalLink, GitFork, Star, Code2, Users, BookOpen, Activity } from "lucide-react"

interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
  topics: string[]
}

interface GitHubEvent {
  id: string
  type: string
  repo: { name: string }
  created_at: string
}

const GITHUB_USERNAME = "Chovo02"

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Jupyter: "#DA5B0B",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "Jupyter Notebook": "#DA5B0B",
  default: "#d71921"
}

export function GitHub() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"repos" | "activity">("repos")

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`)
        ])
        
        if (userRes.ok) {
          const userData = await userRes.json()
          setUser(userData)
        }
        
        if (reposRes.ok) {
          const reposData = await reposRes.json()
          setRepos(reposData)
        }
        
        if (eventsRes.ok) {
          const eventsData = await eventsRes.json()
          setEvents(eventsData)
        }
      } catch (error) {
        console.error("Errore nel caricamento dati GitHub:", error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchGitHubData()
  }, [])

  const formatEventType = (type: string) => {
    const eventTypes: Record<string, string> = {
      PushEvent: "Push",
      CreateEvent: "Creazione",
      PullRequestEvent: "Pull Request",
      IssuesEvent: "Issue",
      WatchEvent: "Star",
      ForkEvent: "Fork",
      DeleteEvent: "Eliminazione",
      PublicEvent: "Pubblico"
    }
    return eventTypes[type] || type.replace("Event", "")
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    
    if (days === 0) return "Oggi"
    if (days === 1) return "Ieri"
    if (days < 7) return `${days} giorni fa`
    if (days < 30) return `${Math.floor(days / 7)} settimane fa`
    return `${Math.floor(days / 30)} mesi fa`
  }

  return (
    <section id="github" ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <DottedText 
            text="GITHUB" 
            dotSize={3} 
            gap={1}
            accentIndices={[0, 1]}
          />
          
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Open Source
          </h2>
          
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Esplora i miei progetti pubblici, contributi e attività su GitHub. 
            Il codice racconta la storia meglio di mille parole.
          </p>
        </motion.div>

        {loading ? (
          <motion.div 
            className="mt-12 flex items-center justify-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200" />
              <span className="text-muted-foreground ml-2">Caricamento dati GitHub...</span>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Profile Card */}
            {user && (
              <motion.div
                className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="relative">
                    <img 
                      src={user.avatar_url} 
                      alt={user.name || user.login}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-accent/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Code2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="text-2xl font-bold">{user.name || user.login}</h3>
                      <span className="text-muted-foreground font-mono text-sm">@{user.login}</span>
                    </div>
                    {user.bio && (
                      <p className="text-muted-foreground mt-2 text-sm md:text-base">{user.bio}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-6 mt-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <span className="font-bold">{user.public_repos}</span>
                        <span className="text-muted-foreground text-sm">Repository</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="font-bold">{user.followers}</span>
                        <span className="text-muted-foreground text-sm">Follower</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="font-bold">{user.following}</span>
                        <span className="text-muted-foreground text-sm">Following</span>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-accent hover:text-white transition-colors font-medium"
                  >
                    Visita Profilo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* Tabs */}
            <motion.div
              className="mt-8 flex gap-4 border-b border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => setActiveTab("repos")}
                className={`pb-4 px-2 text-sm font-medium transition-colors relative ${
                  activeTab === "repos" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Repository
                {activeTab === "repos" && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    layoutId="activeTab"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("activity")}
                className={`pb-4 px-2 text-sm font-medium transition-colors relative ${
                  activeTab === "activity" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Attività Recente
                {activeTab === "activity" && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    layoutId="activeTab"
                  />
                )}
              </button>
            </motion.div>

            {/* Content */}
            {activeTab === "repos" ? (
              <motion.div
                className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {repos.map((repo, index) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-foreground group-hover:text-accent transition-colors truncate pr-2">
                        {repo.name}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2 min-h-[2.5rem]">
                      {repo.description || "Nessuna descrizione disponibile"}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: languageColors[repo.language] || languageColors.default }}
                          />
                          <span className="text-xs text-muted-foreground">{repo.language}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{repo.stargazers_count}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{repo.forks_count}</span>
                      </div>
                    </div>
                    
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span 
                            key={topic}
                            className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.a>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="mt-8 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {events.length > 0 ? (
                  events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-5 h-5 text-accent" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded font-mono">
                            {formatEventType(event.type)}
                          </span>
                          <span className="text-foreground font-medium truncate">
                            {event.repo.name.split("/")[1]}
                          </span>
                        </div>
                      </div>
                      
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatDate(event.created_at)}
                      </span>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    Nessuna attività recente disponibile
                  </div>
                )}
              </motion.div>
            )}

            {/* View All Button */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-mono text-sm"
              >
                Vedi tutti i repository
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
