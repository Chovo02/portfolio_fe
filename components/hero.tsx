"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { DottedText } from "./dotted-text"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f1f1f1 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Accent circle */}
      <motion.div 
        className="absolute -right-32 top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <DottedText 
            text="DATA SCIENTIST" 
            dotSize={3} 
            gap={1}
            accentIndices={[0, 1, 2, 3]}
          />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-9xl font-bold mt-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-foreground">Matteo</span>
          <br />
          <span className="text-foreground/80">Civita</span>
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground text-lg md:text-xl max-w-xl mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ogni dataset è una tela. Porto struttura alla complessità attraverso 
          modelli di machine learning, applicazioni guidate da agenti e 
          infrastrutture AI pronte per la produzione nel settore finanziario.
        </motion.p>
        
        <motion.div 
          className="flex items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a 
            href="#projects" 
            className="group flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
          >
            Vedi Progetti
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Contattami
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
