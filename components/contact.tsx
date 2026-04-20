"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, ArrowUpRight } from "lucide-react"
import { DottedText } from "./dotted-text"

const socialLinks = [
  { 
    name: "Email", 
    href: "mailto:civita.matteo02@gmail.com", 
    icon: Mail,
    label: "civita.matteo02@gmail.com"
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/matteo-civita-3a320325b/", 
    icon: Linkedin,
    label: "/in/matteo-civita"
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <DottedText 
            text="CONTATTI" 
            dotSize={3} 
            gap={1}
            accentIndices={[0]}
          />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 text-balance">
            Pronti a dipingere la
            <br />
            <span className="text-accent">prossima tela</span> insieme.
          </h2>
          
          <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Che tu abbia una sfida legata ai dati da risolvere o un progetto AI 
            che richiede una prospettiva fresca, sono interessato a conversazioni 
            che portano a lavoro significativo.
          </p>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all w-full sm:w-auto sm:min-w-80"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-muted rounded-xl group-hover:bg-accent/20 transition-colors">
                  <link.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{link.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{link.label}</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>
        
        {/* Location */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm font-mono">
            Con base a Pavia, Italia
          </p>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="mailto:civita.matteo02@gmail.com"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium text-lg hover:bg-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            Inviami un&apos;email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
