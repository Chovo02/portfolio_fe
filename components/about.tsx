"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { DottedText } from "./dotted-text"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <DottedText 
            text="CHI SONO" 
            dotSize={3} 
            gap={1}
            accentIndices={[0]}
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            {/* Left column - Image and Title */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="relative aspect-square max-w-sm rounded-2xl overflow-hidden border border-border bg-card">
                <Image
                  src="/images/profile-placeholder.png"
                  alt="Matteo Civita"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Placeholder overlay - remove when real image is added */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background/20 flex items-center justify-center">
                </div>
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Dipingo intuizioni sulla tela dei dati.
              </h2>
            </div>
            
            {/* Right column - Bio */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Approccio la data science come un artista si approccia a una tela bianca. 
                I dati grezzi racchiudono un potenziale infinito, e il mio ruolo è rivelare 
                i pattern, le strutture e le storie nascoste al loro interno. Con quasi due 
                anni di esperienza pratica nel settore finanziario, ho sviluppato un mestiere 
                per trasformare dataset complessi in intelligenza azionabile.
              </p>
              <p>
                Il mio lavoro copre l&apos;intero spettro dello sviluppo AI moderno. 
                Dall&apos;analisi esplorativa e modellazione statistica al deployment di 
                sistemi di machine learning pronti per la produzione, costruisco soluzioni 
                che risolvono problemi reali. Mi specializzo in applicazioni GenAI e 
                architetture agent-driven, dove la tela si estende oltre le predizioni 
                statiche verso sistemi intelligenti e dinamici.
              </p>
              <p>
                Con base a Torino, Italia, porto una mentalità metodica ma adattabile a 
                ogni progetto. Apprendere velocemente e pensare sistematicamente sono 
                le pennellate che definiscono il mio approccio alla costruzione della 
                prossima generazione di infrastrutture AI.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { value: "2+", label: "Anni in Finanza" },
            { value: "ML", label: "Specializzazione" },
            { value: "AI", label: "Area di Focus" },
            { value: "B2", label: "Livello Inglese" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center md:text-left flex flex-col items-center md:items-start">
              <DottedText 
                text={stat.value}
                dotSize={5}
                gap={2}
                accentIndices={index === 0 ? [0] : []}
              />
              <div className="text-sm text-muted-foreground mt-3 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
