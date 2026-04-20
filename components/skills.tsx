"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { DottedText } from "./dotted-text"
import { SkillIcon } from "./skill-icons"

// Skills ordered by level (descending)
const skillCategories = [
  {
    title: "Data Science Core",
    skills: [
      { name: "Python", level: 95 },
      { name: "Pandas", level: 92 },
      { name: "Anaconda", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Scikit-Learn", level: 88 },
      { name: "Plotly", level: 85 },
    ]
  },
  {
    title: "ML & Deep Learning",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "ClearML", level: 82 },
      { name: "TensorFlow", level: 80 },
      { name: "Mage.AI", level: 78 },
      { name: "Langfuse", level: 75 },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "SQLite", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 72 },
      { name: "Neo4j", level: 70 },
    ]
  },
  {
    title: "Infrastruttura",
    skills: [
      { name: "GitHub", level: 88 },
      { name: "GitLab", level: 85 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
    ]
  },
]

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
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {skillCategories.map((category, categoryIndex) => (
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
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-muted rounded-lg">
                          <SkillIcon name={skill.name} className="w-4 h-4 text-foreground/80" />
                        </div>
                        <span className="text-sm font-mono text-muted-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <DottedText 
                        text={`${skill.level}`}
                        dotSize={2}
                        gap={1}
                        accentColor="#d71921"
                        accentIndices={skill.level > 90 ? [0, 1] : []}
                        animate={false}
                      />
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-foreground"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        style={{
                          background: skill.level > 90 
                            ? 'linear-gradient(90deg, #f1f1f1 0%, #d71921 100%)'
                            : '#f1f1f1'
                        }}
                      />
                    </div>
                  </div>
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
