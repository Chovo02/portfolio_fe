"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { X, ExternalLink, Github, ArrowRight } from "lucide-react"
import { DottedText } from "./dotted-text"

const projects = [
  {
    id: 1,
    title: "Sistema di Rilevamento Anomalie Finanziarie",
    category: "Finanza / Machine Learning",
    shortDesc: "Rilevamento in tempo reale di pattern insoliti nei dati transazionali",
    narrative: "Questo progetto è nato da una domanda semplice: come identifichiamo irregolarità finanziarie prima che diventino problemi? La risposta ha richiesto la costruzione di un sistema che elabora flussi di transazioni in tempo reale, applicando metodi ensemble per segnalare anomalie minimizzando i falsi positivi. La tela qui era composta da dataset massicci e il vincolo era la latenza — ogni millisecondo contava.",
    objective: "Costruire una pipeline di anomaly detection pronta per la produzione, capace di elaborare dati finanziari ad alta frequenza con tempi di risposta inferiori al secondo.",
    technologies: ["PyTorch", "Scikit-Learn", "PostgreSQL", "Docker", "AWS", "ClearML"],
    metrics: [
      { label: "Velocità Elaborazione", value: "<100ms" },
      { label: "Tasso Falsi Positivi", value: "-45%" },
      { label: "Transazioni Giornaliere", value: "1M+" },
    ],
    phases: ["Pipeline Dati", "Sviluppo Modello", "Deploy Produzione"],
    color: "#d71921"
  },
  {
    id: 2,
    title: "Assistente Documentale GenAI",
    category: "GenAI / NLP",
    shortDesc: "Sistema intelligente di elaborazione e interrogazione documenti",
    narrative: "I documenti contengono risposte, ma trovarle richiede comprensione del contesto, della struttura e dell'intento. Questa applicazione GenAI trasforma il modo in cui i team interagiscono con i loro archivi documentali. Usando large language models combinati con retrieval-augmented generation, il sistema fornisce risposte accurate e contestuali mantenendo la tracciabilità verso i materiali sorgente.",
    objective: "Creare un assistente intelligente che comprende il contenuto dei documenti e fornisce risposte accurate e referenziate alle domande degli utenti.",
    technologies: ["Langfuse", "Mage.AI", "PostgreSQL", "Docker", "GitLab CI"],
    metrics: [
      { label: "Accuratezza Query", value: "94%" },
      { label: "Tempo Risposta", value: "<2s" },
      { label: "Documenti Indicizzati", value: "10K+" },
    ],
    phases: ["Design Architettura", "Implementazione RAG", "Integrazione UI"],
    color: "#f1f1f1"
  },
  {
    id: 3,
    title: "Modello di Credit Risk Scoring",
    category: "Finanza / Predictive Analytics",
    shortDesc: "Valutazione creditizia ML-powered per decisioni di prestito",
    narrative: "Le decisioni di credito plasmano i futuri finanziari. Questo progetto ha sviluppato un modello di scoring che valuta l'affidabilità creditizia usando pattern di dati storici, segnali comportamentali e indicatori finanziari tradizionali. La sfida era bilanciare l'accuratezza predittiva con l'interpretabilità, poiché gli stakeholder dovevano capire perché il modello raggiungeva le sue conclusioni.",
    objective: "Sviluppare un sistema di credit scoring esplicabile che migliori i metodi di valutazione tradizionali rispettando i requisiti normativi.",
    technologies: ["Scikit-Learn", "Pandas", "Plotly", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Score AUC", value: "0.89" },
      { label: "Accuratezza Modello", value: "92%" },
      { label: "Feature Importance", value: "Esplicabile" },
    ],
    phases: ["Feature Engineering", "Training Modello", "Layer Explainability"],
    color: "#d71921"
  },
  {
    id: 4,
    title: "Automazione Workflow Agent-Driven",
    category: "GenAI / Automazione",
    shortDesc: "Agenti autonomi per processi aziendali ripetitivi",
    narrative: "Alcune attività sono troppo sfumate per l'automazione semplice ma troppo ripetitive per l'attenzione umana. Questo progetto ha introdotto agenti AI capaci di gestire workflow complessi multi-step, prendendo decisioni basate sul contesto ed escalando quando necessario. Gli agenti apprendono dal feedback, migliorando le loro performance nel tempo riducendo l'intervento manuale.",
    objective: "Costruire agenti autonomi che gestiscono workflow aziendali complessi con minima supervisione umana mantenendo accuratezza e compliance.",
    technologies: ["Langfuse", "Mage.AI", "Redis", "PostgreSQL", "AWS", "Docker"],
    metrics: [
      { label: "Tasso Automazione", value: "78%" },
      { label: "Riduzione Errori", value: "-60%" },
      { label: "Tempo Elaborazione", value: "-4ore" },
    ],
    phases: ["Architettura Agenti", "Mapping Workflow", "Apprendimento Continuo"],
    color: "#f1f1f1"
  },
  {
    id: 5,
    title: "Motore di Forecasting Time Series",
    category: "Finanza / Deep Learning",
    shortDesc: "Sistema di previsione finanziaria basato su reti neurali",
    narrative: "I mercati finanziari sono rumorosi, ma i pattern esistono per chi sa trovarli. Questo motore di forecasting usa architetture deep learning progettate specificamente per dati sequenziali, catturando sia fluttuazioni a breve termine che trend a lungo termine. Il modello fornisce previsioni probabilistiche, quantificando l'incertezza invece di offrire falsa precisione.",
    objective: "Creare un sistema di forecasting che fornisce previsioni affidabili con stime di incertezza calibrate per la pianificazione finanziaria.",
    technologies: ["PyTorch", "TensorFlow", "Pandas", "ClearML", "PostgreSQL"],
    metrics: [
      { label: "MAPE", value: "4.2%" },
      { label: "Orizzonte Previsione", value: "90 giorni" },
      { label: "Calibrazione Confidenza", value: "95%" },
    ],
    phases: ["Preparazione Dati", "Design Architettura", "Quantificazione Incertezza"],
    color: "#d71921"
  },
  {
    id: 6,
    title: "Piattaforma Monitoraggio Qualità Dati",
    category: "MLOps / Infrastruttura",
    shortDesc: "Sistema automatizzato di rilevamento drift e qualità dati",
    narrative: "I modelli sono buoni quanto i loro dati. Questa piattaforma monitora le pipeline dati per problemi di qualità, cambiamenti di schema e drift di distribuzione prima che impattino i modelli downstream. Pensala come un sistema di controllo qualità per la tela dei dati, assicurando che ogni pennellata sia consistente e affidabile.",
    objective: "Implementare monitoraggio continuo della qualità dati attraverso tutte le pipeline ML, abilitando rilevamento proattivo dei problemi e risoluzione.",
    technologies: ["ClearML", "PostgreSQL", "Docker", "GitLab CI", "AWS"],
    metrics: [
      { label: "Problemi Rilevati", value: "100+" },
      { label: "Latenza Alert", value: "<5min" },
      { label: "Copertura Pipeline", value: "100%" },
    ],
    phases: ["Definizione Metriche", "Setup Monitoraggio", "Sistema Alert"],
    color: "#f1f1f1"
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <DottedText 
            text="PROGETTI" 
            dotSize={3} 
            gap={1}
            accentIndices={[0]}
          />
          
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Lavori Selezionati
          </h2>
          
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Ogni progetto rappresenta una tela unica, dove le tecniche di data science 
            incontrano le sfide del mondo reale. Clicca su qualsiasi card per esplorare 
            la storia completa.
          </p>
        </motion.div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl p-6 cursor-pointer hover:border-accent/50 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Accent indicator */}
              <div 
                className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.color }}
              />
              
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {project.category}
              </div>
              
              <h3 className="text-xl font-bold mt-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                {project.shortDesc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-muted rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 mt-6 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Vedi Dettagli <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: typeof projects[0]
  onClose: () => void 
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Modal Content */}
      <motion.div
        className="relative bg-card border border-border rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between z-10">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">{project.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Chiudi modale"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Narrative */}
          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              La Storia
            </h4>
            <p className="text-foreground/90 leading-relaxed">
              {project.narrative}
            </p>
          </div>
          
          {/* Objective */}
          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Obiettivo
            </h4>
            <p className="text-foreground/90 leading-relaxed">
              {project.objective}
            </p>
          </div>
          
          {/* Metrics */}
          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Risultati Chiave
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div 
                  key={metric.label}
                  className="bg-muted/50 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-mono">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Roadmap */}
          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Fasi di Sviluppo
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.phases.map((phase, index) => (
                <div key={phase} className="flex items-center">
                  <div className="bg-accent/20 border border-accent/30 rounded-full px-4 py-2 text-sm">
                    <span className="text-accent font-mono mr-2">{index + 1}</span>
                    {phase}
                  </div>
                  {index < project.phases.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Tecnologie
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-mono text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <button className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors">
              <ExternalLink className="w-4 h-4" />
              Vedi Demo
            </button>
            <button className="flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors">
              <Github className="w-4 h-4" />
              Codice Sorgente
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
