"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { DottedText } from "./dotted-text"

const experiences = [
  {
    title: "Junior Data Scientist",
    company: "ATS SPA",
    location: "Milano, Italia",
    period: "Nov 2023 — Presente",
    narrative: "In ATS SPA lavoro all'intersezione tra ricerca e produzione. Le mie giornate comprendono l'esplorazione di nuove frontiere nel machine learning e deep learning per applicazioni finanziarie, per poi tradurre quelle scoperte in infrastrutture robuste. La tela qui è ampia: progetto e costruisco pipeline di prodotti AI, sviluppo applicazioni GenAI e mi assicuro che i modelli passino fluidamente dalla sperimentazione al deployment.",
    technologies: ["GitLab", "AWS", "Docker", "Jira", "ClearML", "Mage.AI", "Langfuse", "PostgreSQL", "PyTorch", "TensorFlow", "Scikit-Learn"]
  }
]

const education = [
  {
    degree: "Specialista AI & Machine Learning",
    institution: "ITS Academy Angelo Rizzoli",
    location: "Milano, Italia",
    period: "Ott 2022 — Lug 2024",
    level: "EQF Livello 5",
    narrative: "Questo programma ha fornito una base completa negli strumenti e nelle tecniche che definiscono la data science moderna. Il curriculum ha coperto statistica descrittiva e inferenziale, programmazione Python e R, database SQL e NoSQL inclusi Redis, MongoDB e Neo4j, oltre a machine learning supervisionato e reinforcement learning. Oltre alle competenze tecniche, il programma ha enfatizzato il problem-solving collaborativo attraverso moduli sul lavoro di squadra, design thinking e project management."
  },
  {
    degree: "Diploma Tecnico Informatico",
    institution: "ITIS G. Cardano",
    location: "Pavia, Italia",
    period: "2016 — 2021",
    level: "EQF Livello 4",
    narrative: "La mia formazione tecnologica è iniziata qui, dove ho appreso i fondamenti della programmazione in diversi linguaggi tra cui C, C++, Java, HTML, CSS e PHP. Il programma copriva informatica, sistemi di rete e telecomunicazioni, stabilendo le basi tecniche su cui la mia carriera in data science si sarebbe poi costruita."
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <DottedText 
            text="PERCORSO" 
            dotSize={3} 
            gap={1}
            accentIndices={[0]}
          />
          
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Il Cammino Finora
          </h2>
          
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Ogni ruolo e ogni corso ha aggiunto nuovi colori alla mia tavolozza. Ecco come 
            il mio percorso professionale e accademico ha plasmato il modo in cui affronto 
            la data science oggi.
          </p>
        </motion.div>
        
        {/* Work Experience */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-foreground/80">Esperienza Lavorativa</h3>
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="group border-t border-border py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </div>
                    <div className="text-xs text-muted-foreground/60 mt-1">
                      {exp.location}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-muted-foreground mt-1">{exp.company}</p>
                    <p className="text-muted-foreground/80 mt-4 leading-relaxed">
                      {exp.narrative}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-24">
          <h3 className="text-xl font-bold mb-8 text-foreground/80">Formazione</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="bg-background p-8 rounded-2xl border border-border hover:border-accent/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-accent font-mono">{edu.period}</span>
                      <span className="text-xs text-muted-foreground/60 px-2 py-0.5 bg-muted rounded-full">{edu.level}</span>
                    </div>
                    <h4 className="text-xl font-bold mt-2">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution} — {edu.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground/80 mt-6 leading-relaxed">
                  {edu.narrative}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
