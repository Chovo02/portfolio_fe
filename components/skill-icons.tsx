"use client"

// Minimalist dot-matrix style icons for skills
// Consistent with the Nothing-inspired aesthetic

export function PythonIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 6 4.02 6 5.5v2.5h6v1H4.5C2.57 9 1 10.74 1 13.5S2.57 18 4.5 18H6v-2.5c0-1.93 1.57-3.5 3.5-3.5h5c1.93 0 3.5-1.57 3.5-3.5v-3C18 3.57 16.43 2 14.5 2H12zm-1.5 2a1 1 0 110 2 1 1 0 010-2z"/>
      <path d="M18 6v2.5c0 1.93-1.57 3.5-3.5 3.5h-5c-1.93 0-3.5 1.57-3.5 3.5v3c0 1.93 1.57 3.5 3.5 3.5h3c1.93 0 3.5-1.57 3.5-3.5V16h-6v-1h7.5c1.93 0 3.5-1.74 3.5-4.5S21.43 6 19.5 6H18zm-4.5 12a1 1 0 110 2 1 1 0 010-2z"/>
    </svg>
  )
}

export function PandasIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect x="4" y="2" width="4" height="6" rx="1"/>
      <rect x="4" y="10" width="4" height="4" rx="1"/>
      <rect x="4" y="16" width="4" height="6" rx="1"/>
      <rect x="10" y="4" width="4" height="16" rx="1"/>
      <rect x="16" y="2" width="4" height="6" rx="1"/>
      <rect x="16" y="10" width="4" height="4" rx="1"/>
      <rect x="16" y="16" width="4" height="6" rx="1"/>
    </svg>
  )
}

export function NumPyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5" opacity="0.5"/>
      <path d="M2 12l10 5 10-5" opacity="0.75"/>
    </svg>
  )
}

export function PyTorchIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5l5.5 2.75L12 10l-5.5-2.75L12 4.5z"/>
      <circle cx="12" cy="8" r="1.5"/>
    </svg>
  )
}

export function TensorFlowIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3l6 3.5v7L12 19l-6-3.5v-7L12 5z"/>
      <path d="M12 8v8M8 10v4M16 10v4"/>
    </svg>
  )
}

export function ScikitLearnIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="6" cy="6" r="2"/>
      <circle cx="18" cy="6" r="2"/>
      <circle cx="6" cy="18" r="2"/>
      <circle cx="18" cy="18" r="2"/>
      <path d="M9 9L7 7M15 9l2-2M9 15l-2 2M15 15l2 2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

export function PostgreSQLIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C8 2 5 5 5 9c0 2 .5 3.5 1.5 4.5l-1 6.5h3l.5-3h6l.5 3h3l-1-6.5c1-1 1.5-2.5 1.5-4.5 0-4-3-7-7-7zm-2 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
    </svg>
  )
}

export function SQLiteIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M4 9h16M9 4v16" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export function MongoDBIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C10.5 2 9.5 4 9.5 6c0 3 1 5 2 7 .3.5.5 1 .5 1.5V22h0c1 0 1-.5 1-1v-6.5c0-.5.2-1 .5-1.5 1-2 2-4 2-7 0-2-1-4-2.5-4h-1z"/>
    </svg>
  )
}

export function RedisIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
      <ellipse cx="12" cy="12" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export function Neo4jIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="6" r="3"/>
      <circle cx="18" cy="18" r="3"/>
      <path d="M9 12h6M15 8l-6 4 6 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

export function DockerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13 3h3v3h-3zM9 3h3v3H9zM5 3h3v3H5zM13 7h3v3h-3zM9 7h3v3H9zM5 7h3v3H5zM1 11h3v3H1zM5 11h3v3H5zM9 11h3v3H9z"/>
      <path d="M21 12c-.5-2-2-3-4-3h-4c-1 0-2 .5-2.5 1.5-.3.5-.5 1-.5 1.5H1c0 4 3 7 7 7h7c3 0 5.5-2 6-5 .1-.3.1-.6 0-1v-.5c0-.2 0-.4 0-.5z"/>
    </svg>
  )
}

export function AWSIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6 12l6-8 6 8-6 8-6-8z"/>
      <path d="M3 16l9 4 9-4" opacity="0.6"/>
    </svg>
  )
}

export function GitLabIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 22L2 14l3-10h4l3 10h0l3-10h4l3 10-10 8z"/>
    </svg>
  )
}

export function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8.3 7 9.5.5.1.7-.2.7-.5v-2c-3 .5-3.5-1.5-3.5-1.5-.5-1-1-1.5-1-1.5-1-.5 0-.5 0-.5 1 0 1.5 1 1.5 1 1 1.5 2.5 1 3 .8 0-.5.5-1 .8-1.5-2.5-.3-5-1.3-5-5.5 0-1.2.5-2.2 1-3-.1-.3-.5-1.5.1-3 0 0 1-.3 3 1 1-.3 2-.4 3-.4s2 .1 3 .4c2-1.3 3-1 3-1 .6 1.5.2 2.7.1 3 .5.8 1 1.8 1 3 0 4.2-2.5 5.2-5 5.5.5.4.8 1.2.8 2.5v3.5c0 .3.2.6.7.5 4-1.2 7-5 7-9.5 0-5.5-4.5-10-10-10z"/>
    </svg>
  )
}

export function AnacondaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.5 0 3-.6 4-1.5"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
}

export function PlotlyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 20h18v2H3zM5 18V8h3v10zM10 18V4h3v14zM15 18v-8h3v8z"/>
    </svg>
  )
}

export function ClearMLIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
}

export function MageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L4 8v8l8 6 8-6V8l-8-6zm0 4l4 3v6l-4 3-4-3V9l4-3z"/>
    </svg>
  )
}

export function LangfuseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect x="3" y="6" width="6" height="12" rx="1"/>
      <rect x="11" y="4" width="2" height="16" rx="1"/>
      <rect x="15" y="8" width="6" height="8" rx="1"/>
    </svg>
  )
}

// Icon mapping for easy access
export const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Python": PythonIcon,
  "Pandas": PandasIcon,
  "NumPy": NumPyIcon,
  "PyTorch": PyTorchIcon,
  "TensorFlow": TensorFlowIcon,
  "Scikit-Learn": ScikitLearnIcon,
  "PostgreSQL": PostgreSQLIcon,
  "SQLite": SQLiteIcon,
  "MongoDB": MongoDBIcon,
  "Redis": RedisIcon,
  "Neo4j": Neo4jIcon,
  "Docker": DockerIcon,
  "AWS": AWSIcon,
  "GitLab": GitLabIcon,
  "GitHub": GitHubIcon,
  "Anaconda": AnacondaIcon,
  "Plotly": PlotlyIcon,
  "ClearML": ClearMLIcon,
  "Mage.AI": MageIcon,
  "Langfuse": LangfuseIcon,
}

export function SkillIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const IconComponent = skillIcons[name]
  
  if (!IconComponent) {
    // Default generic icon
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-2 h-2 rounded-full bg-current" />
      </div>
    )
  }
  
  return <IconComponent className={className} />
}
