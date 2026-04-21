"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { DottedText } from "./dotted-text"
import { SkillIcon } from "./skill-icons"

type ExperienceLevel = "Base" | "Medio" | "Avanzato" | "Esperto"

const levelConfig: Record<ExperienceLevel, { color: string; width: string; order: number }> = {
  "Esperto": { color: "#d71921", width: "100%", order: 1 },
  "Avanzato": { color: "#f1f1f1", width: "75%", order: 2 },
  "Medio": { color: "#888888", width: "50%", order: 3 },
  "Base": { color: "#2a2d30", width: "25%", order: 4 },
}

// Skills ordered by level (descending: Esperto -> Avanzato -> Medio -> Base)
const skillCategories = [
  {
    title: "Data Science Core",
    skills: [
      { name: "Python", level: "Esperto" as ExperienceLevel },
      { name: "Pandas", level: "Esperto" as ExperienceLevel },
      { name: "NumPy", level: "Avanzato" as ExperienceLevel },
      { name: "Anaconda", level: "Avanzato" as ExperienceLevel },
      { name: "Scikit-Learn", level: "Avanzato" as ExperienceLevel },
      { name: "Plotly", level: "Avanzato" as ExperienceLevel },
    ]
  },
  {
    title: "ML & Deep Learning",
    skills: [
      { name: "PyTorch", level: "Avanzato" as ExperienceLevel },
      { name: "ClearML", level: "Avanzato" as ExperienceLevel },
      { name: "TensorFlow", level: "Medio" as ExperienceLevel },
      { name: "Mage.AI", level: "Medio" as ExperienceLevel },
      { name: "Langfuse", level: "Medio" as ExperienceLevel },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "SQLite", level: "Avanzato" as ExperienceLevel },
      { name: "PostgreSQL", level: "Avanzato" as ExperienceLevel },
      { name: "MongoDB", level: "Medio" as ExperienceLevel },
      { name: "Redis", level: "Medio" as ExperienceLevel },
      { name: "Neo4j", level: "Base" as ExperienceLevel },
    ]
  },
  {
    title: "Infrastruttura",
    skills: [
      { name: "GitHub", level: "Avanzato" as ExperienceLevel },
      { name: "GitLab", level: "Avanzato" as ExperienceLevel },
      { name: "Docker", level: "Medio" as ExperienceLevel },
      { name: "AWS", level: "Medio" as ExperienceLevel },
    ]
  },
]

// Sort skills within each category by level
const sortedSkillCategories = skillCategories.map(category => ({
  ...category,
  skills: [...category.skills].sort((a, b) => levelConfig[a.level].order - levelConfig[b.level].order)
}))

function LevelBadge({ level }: { level: ExperienceLevel }) {
  const config = levelConfig[level]
  return (
    <span 
      className="px-2 py-0.5 text-xs font-mono rounded-full border"
      style={{ 
        borderColor: config.color,
        color: config.color,
        backgroundColor: `${config.color}10`
      }}
    >
      {level}
    </span>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <DottedText 
            text="COMPETENZE" 
            dotSize={3} 
            gap={1}
            accentIndices={[0]}
          />
          
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Il Toolkit
          </h2>
          
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Questi sono gli strumenti che utilizzo quando dipingo sulla tela dei dati. 
            Ognuno ha uno scopo preciso, dall&apos;esplorazione iniziale fino al deployment 
            in produzione.
          </p>
          
          {/* Level Legend */}
          <div className="flex flex-wrap gap-4 mt-6">
            {(["Esperto", "Avanzato", "Medio", "Base"] as ExperienceLevel[]).map((level) => (
              <div key={level} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: levelConfig[level].color }}
                />
                <span className="text-xs font-mono text-muted-foreground">{level}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {sortedSkillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground/90">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${levelConfig[skill.level].color}15` }}
                      >
                        <SkillIcon 
                          name={skill.name} 
                          className="w-5 h-5" 
                          style={{ color: levelConfig[skill.level].color }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <LevelBadge level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Skills - Narrative Format */}
        <motion.div 
          className="mt-20 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg font-bold mb-4 text-foreground/80">Oltre lo Stack Principale</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Il mio toolkit si estende oltre queste tecnologie primarie. Lavoro con 
            naturalezza con strumenti di visualizzazione dati, sistemi di experiment 
            tracking e piattaforme di orchestrazione. Le fondamenta poste in C, C++, 
            Java e tecnologie web durante gli anni accademici forniscono la versatilità 
            per adattarmi a nuovi framework e paradigmi secondo le esigenze dei progetti.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "C", "C++", "Java", "HTML", "CSS", "PHP", "R",
              "Jira", "Data Visualization", "Analisi Statistica",
              "GenAI", "Agent-Driven Apps", "MLOps"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 text-sm font-mono bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
