"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { DottedText } from "./dotted-text"

export function Inspiration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <DottedText 
            text="DESIGN" 
            dotSize={3} 
            gap={1}
            accentIndices={[0]}
          />
          
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Ispirato dal Minimalismo
          </h2>
          
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Interfacce pulite, design intenzionale e attenzione ai dettagli. 
            Proprio come i sistemi AI che costruisco — eleganti, efficienti e focalizzati.
          </p>
        </motion.div>
        
        {/* Design Philosophy Narrative */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">L&apos;Estetica del Vuoto</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Questo portfolio abbraccia una filosofia visiva dove il nero profondo 
                diventa spazio infinito e il bianco puro emerge come luce digitale. 
                Lo sfondo scuro non è semplicemente assenza di colore, ma una tela 
                che amplifica ogni elemento presente, creando profondità e dimensione 
                in un ambiente bidimensionale.
              </p>
              <p>
                Il rosso — usato con estrema parsimonia — funge da accento che cattura 
                l&apos;attenzione senza gridare. È il battito cardiaco visivo dell&apos;interfaccia, 
                un punto focale che guida l&apos;occhio verso le informazioni più rilevanti 
                senza sovraccaricare i sensi.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Tipografia come Architettura</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                La tipografia qui non è decorazione ma struttura. I font scelti — 
                Space Grotesk per i titoli e JetBrains Mono per i dettagli tecnici — 
                creano una gerarchia visiva immediata. Il font a punti, ispirato ai 
                display LED, aggiunge un carattere distintivo che richiama l&apos;estetica 
                tecnologica senza sacrificare la leggibilità.
              </p>
              <p>
                Ogni peso tipografico, ogni spaziatura è calibrata per creare ritmo 
                visivo. Il testo respira attraverso spazi bianchi generosi, permettendo 
                all&apos;informazione di essere assorbita naturalmente invece di competere 
                per l&apos;attenzione.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Visual Elements Description */}
        <motion.div
          className="mt-16 p-8 md:p-12 bg-card rounded-3xl border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">Il Linguaggio Visivo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-lg" />
              </div>
              <h4 className="font-bold">Geometria Essenziale</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Forme rettangolari con angoli arrotondati definiscono ogni elemento 
                interattivo. Questa consistenza crea un sistema di design coeso dove 
                ogni componente parla lo stesso linguaggio visivo.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                </div>
              </div>
              <h4 className="font-bold">Pattern a Punti</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Il pattern puntinato dello sfondo e la tipografia a matrice di punti 
                creano texture sottili che aggiungono profondità senza distrarre. 
                È un richiamo all&apos;estetica digitale nella sua forma più pura.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-foreground/5 to-foreground/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-px bg-foreground/50" />
              </div>
              <h4 className="font-bold">Micro-Animazioni</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transizioni fluide e sottili guidano l&apos;utente attraverso l&apos;interfaccia. 
                Ogni hover, ogni scroll trigger è un momento di feedback che rende 
                l&apos;esperienza tangibile e responsiva.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Mood Description */}
        <motion.div
          className="mt-16 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold">L&apos;Atmosfera</h3>
          <div className="text-muted-foreground leading-relaxed max-w-4xl space-y-4">
            <p>
              L&apos;atmosfera complessiva evoca un laboratorio tecnologico notturno — 
              quello spazio mentale dove la concentrazione è massima e le distrazioni 
              svaniscono. È l&apos;ambiente visivo di chi scrive codice a tarda notte, 
              illuminato solo dallo schermo, immerso nel flusso creativo della 
              risoluzione di problemi complessi.
            </p>
            <p>
              Il contrasto netto tra elementi chiari e sfondo scuro non è solo una 
              scelta estetica ma funzionale: riduce l&apos;affaticamento visivo in sessioni 
              di lettura prolungate e mette in risalto l&apos;informazione importante. 
              È design che serve chi lo usa, non che chiede attenzione per se stesso.
            </p>
            <p>
              L&apos;ispirazione viene dal design industriale giapponese, dal minimalismo 
              scandinavo e dall&apos;estetica dei dispositivi Nothing — prodotti dove ogni 
              dettaglio è intenzionale, dove il superfluo è stato rimosso fino a 
              raggiungere l&apos;essenza. Questo portfolio cerca di incarnare gli stessi 
              principi applicati alla presentazione professionale di un data scientist.
            </p>
          </div>
        </motion.div>
        
        {/* Design Principles */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            {
              title: "Chiarezza",
              description: "Ogni elemento ha uno scopo. Niente rumore visivo, solo informazioni essenziali."
            },
            {
              title: "Contrasto",
              description: "Tipografia bold e uso strategico dei colori accent creano gerarchia visiva."
            },
            {
              title: "Coerenza",
              description: "Linguaggio di design unificato in tutti i touchpoint per un&apos;esperienza fluida."
            },
          ].map((principle, index) => (
            <div key={principle.title} className="text-center md:text-left">
              <div className="mb-4">
                <DottedText 
                  text={`0${index + 1}`}
                  dotSize={4}
                  gap={2}
                  accentIndices={[1]}
                  animate={false}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
