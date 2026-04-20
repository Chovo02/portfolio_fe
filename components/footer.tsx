"use client"

import { DottedText, DottedDivider } from "./dotted-text"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <DottedDivider className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <DottedText 
              text="MC" 
              dotSize={3} 
              gap={1}
              accentIndices={[0]}
              animate={false}
            />
            <span className="text-muted-foreground text-sm">
              {new Date().getFullYear()} Matteo Civita
            </span>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Chi Sono
            </a>
            <a 
              href="#experience" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Percorso
            </a>
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Progetti
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contatti
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <DottedText 
              text="2026" 
              dotSize={2} 
              gap={1}
              accentIndices={[]}
              animate={false}
              color="#888888"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
