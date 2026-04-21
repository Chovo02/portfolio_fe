"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Inspiration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Design ispirato all&apos;estetica Nothing — minimalismo, contrasti netti 
              e attenzione ai dettagli. Ogni elemento ha uno scopo.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            {[
              { color: "#0a0a0a", label: "Nero" },
              { color: "#f1f1f1", label: "Bianco" },
              { color: "#d71921", label: "Rosso" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs font-mono text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
