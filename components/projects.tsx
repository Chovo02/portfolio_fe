'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react'
import { DottedText } from './dotted-text'
import { ProjectMetrics } from './project-metrics'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  category: 'work' | 'its' | 'personal'
  categoryLabel: string
  image: string
  technologies: string[]
  link?: string
  github?: string
  metrics?: {
    accuracy?: number
    precision?: number
    recall?: number
    f1Score?: number
    auc?: number
  }
  performanceData?: Array<{ name: string; value: number }>
  timelineData?: Array<{ week: string; accuracy: number; loss: number }>
  details?: string
}

const projects: Project[] = [
  // Work Projects
  {
    id: 'work-fraud',
    title: 'Rilevamento Frodi Finanziarie',
    description: 'Sistema ML per identificare transazioni fraudolente in tempo reale utilizzando ensemble methods e feature engineering avanzato.',
    category: 'work',
    categoryLabel: 'Lavoro',
    image: '/images/project-work-1.jpg',
    technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn'],
    metrics: {
      accuracy: 0.96,
      precision: 0.94,
      recall: 0.92,
      f1Score: 0.93,
      auc: 0.98,
    },
    performanceData: [
      { name: 'True Negatives', value: 96 },
      { name: 'True Positives', value: 92 },
      { name: 'False Positives', value: 6 },
      { name: 'False Negatives', value: 8 },
    ],
    timelineData: [
      { week: 'S1', accuracy: 78, loss: 0.45 },
      { week: 'S2', accuracy: 82, loss: 0.38 },
      { week: 'S3', accuracy: 88, loss: 0.28 },
      { week: 'S4', accuracy: 92, loss: 0.15 },
      { week: 'S5', accuracy: 94, loss: 0.08 },
      { week: 'S6', accuracy: 96, loss: 0.04 },
    ],
    details: 'Progetto realizzato presso l\'azienda di fintech. Implementazione di un sistema completo di machine learning per il rilevamento di frodi. Il modello utilizza gradient boosting e viene aggiornato settimanalmente con nuovi dati.',
  },
  {
    id: 'work-risk',
    title: 'Analisi del Rischio di Credito',
    description: 'Pipeline di ML per valutare il rischio creditizio dei clienti, integrando dati storici e comportamentali.',
    category: 'work',
    categoryLabel: 'Lavoro',
    image: '/images/project-work-1.jpg',
    technologies: ['Python', 'LightGBM', 'SQL', 'TensorFlow'],
    metrics: {
      accuracy: 0.92,
      precision: 0.89,
      recall: 0.88,
      auc: 0.95,
    },
    performanceData: [
      { name: 'Basso Rischio', value: 45 },
      { name: 'Medio Rischio', value: 35 },
      { name: 'Alto Rischio', value: 20 },
    ],
    timelineData: [
      { week: 'S1', accuracy: 75, loss: 0.52 },
      { week: 'S2', accuracy: 80, loss: 0.42 },
      { week: 'S3', accuracy: 85, loss: 0.32 },
      { week: 'S4', accuracy: 90, loss: 0.16 },
      { week: 'S5', accuracy: 92, loss: 0.09 },
    ],
    details: 'Sistema per la valutazione automatica del rischio creditizio. Utilizza multiple fonti di dati per creare profili di rischio accurati.',
  },

  // ITS Projects
  {
    id: 'its-nlp',
    title: 'Sentiment Analysis Avanzato',
    description: 'Modello transformer per analisi del sentiment in testi multilingue, sviluppato durante il corso ITS.',
    category: 'its',
    categoryLabel: 'ITS',
    image: '/images/project-its-1.jpg',
    technologies: ['Python', 'PyTorch', 'Transformers', 'BERT'],
    metrics: {
      accuracy: 0.88,
      f1Score: 0.87,
    },
    performanceData: [
      { name: 'Positivo', value: 40 },
      { name: 'Neutro', value: 35 },
      { name: 'Negativo', value: 25 },
    ],
    timelineData: [
      { week: 'S1', accuracy: 70, loss: 0.60 },
      { week: 'S2', accuracy: 76, loss: 0.48 },
      { week: 'S3', accuracy: 82, loss: 0.35 },
      { week: 'S4', accuracy: 88, loss: 0.18 },
    ],
    details: 'Progetto di machine learning avanzato realizzato durante il corso ITS. Implementazione di modelli transformer per l\'analisi del sentiment in più lingue.',
  },
  {
    id: 'its-time-series',
    title: 'Forecasting Serie Temporali',
    description: 'Modello LSTM per la previsione di serie temporali con analisi di trend e seasonality.',
    category: 'its',
    categoryLabel: 'ITS',
    image: '/images/project-its-1.jpg',
    technologies: ['TensorFlow', 'Keras', 'Pandas', 'Statsmodels'],
    metrics: {
      rmse: 0.12,
      mae: 0.09,
      r2Score: 0.94,
    },
    performanceData: [
      { name: 'Trend', value: 50 },
      { name: 'Seasonality', value: 30 },
      { name: 'Residuals', value: 20 },
    ],
    timelineData: [
      { week: 'S1', accuracy: 65, loss: 0.75 },
      { week: 'S2', accuracy: 72, loss: 0.58 },
      { week: 'S3', accuracy: 80, loss: 0.40 },
      { week: 'S4', accuracy: 88, loss: 0.22 },
      { week: 'S5', accuracy: 94, loss: 0.12 },
    ],
    details: 'Sviluppo di un modello LSTM per il forecasting di serie temporali. Incluso analisi di trend e stagionalità con tecniche di preprocessing avanzate.',
  },

  // Personal Projects
  {
    id: 'personal-agent',
    title: 'Sistema di Agent AI Agentico',
    description: 'Framework per agenti AI autonomi con capacità di pianificazione e problem-solving.',
    category: 'personal',
    categoryLabel: 'Personale',
    image: '/images/project-its-1.jpg',
    technologies: ['Python', 'LLMs', 'Agent Framework'],
    github: 'https://github.com',
    details: 'Progetto personale che esplora lo sviluppo di agenti AI autonomi con capacità avanzate di ragionamento.',
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const workProjects = projects.filter((p) => p.category === 'work')
  const itsProjects = projects.filter((p) => p.category === 'its')
  const personalProjects = projects.filter((p) => p.category === 'personal')

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.button
      onClick={() => setSelectedProject(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group text-left"
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 backdrop-blur-sm h-full flex flex-col">
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="text-xs font-mono text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
              {project.categoryLabel}
            </span>
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs bg-border/50 text-foreground/70 px-2 py-1 rounded font-mono">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-border/50 text-foreground/70 px-2 py-1 rounded font-mono">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300">
            <span className="text-sm font-mono uppercase tracking-wider">Dettagli</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.button>
  )

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <DottedText text="PROGETTI" dotSize={3} gap={1} accentIndices={[0]} />

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8">Lavori Selezionati</h2>

          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Una raccolta dei miei progetti professionali, accademici e personali che dimostrano la mia esperienza in machine learning, data science e sviluppo di sistemi AI.
          </p>
        </motion.div>

        {/* Work Projects */}
        {workProjects.length > 0 && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground/90 mb-2">In Azienda</h3>
              <div className="w-12 h-1 bg-accent/30" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {workProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* ITS Projects */}
        {itsProjects.length > 0 && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground/90 mb-2">Studi ITS</h3>
              <div className="w-12 h-1 bg-accent/30" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {itsProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Personal Projects */}
        {personalProjects.length > 0 && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground/90 mb-2">Progetti Personali</h3>
              <div className="w-12 h-1 bg-accent/30" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-secondary border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-secondary border-b border-border p-6 flex items-start justify-between z-10">
                <div>
                  <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                    {selectedProject.categoryLabel}
                  </div>
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-3">
                    Descrizione
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{selectedProject.details}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-3">
                    Tecnologie
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-border px-3 py-2 rounded font-mono text-sm text-foreground hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {(selectedProject.metrics || selectedProject.performanceData || selectedProject.timelineData) && (
                  <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-4">
                      Metriche e Performance
                    </h3>
                    <ProjectMetrics
                      metrics={selectedProject.metrics}
                      performanceData={selectedProject.performanceData}
                      timelineData={selectedProject.timelineData}
                    />
                  </div>
                )}

                {/* Links */}
                {(selectedProject.link || selectedProject.github) && (
                  <div className="flex gap-3 pt-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded font-mono text-sm hover:bg-accent/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visualizza
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-border px-4 py-2 rounded font-mono text-sm hover:bg-border/50 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Codice
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
