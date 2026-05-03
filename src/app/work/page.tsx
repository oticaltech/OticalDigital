
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: "project-1",
    title: "Scale SaaS Dashboard",
    category: "Web App",
    tech: ["Next.js", "Tailwind", "Firebase"],
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl
  },
  {
    id: "project-2",
    title: "Luxe E-commerce",
    category: "Storefront",
    tech: ["Shopify", "React", "Node.js"],
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl
  },
  {
    id: "project-3",
    title: "AI Marketing Suite",
    category: "AI Tool",
    tech: ["Python", "Next.js", "GPT-4"],
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-headline font-bold mb-6">Our <span className="text-primary">Work</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of high-performance digital products we've crafted for clients around the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/5 bg-card">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="secondary" className="rounded-full px-6">
                      <ExternalLink className="w-4 h-4 mr-2" /> View Site
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-medium text-primary mb-2 block uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-3xl font-headline font-bold mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client List / Social Proof */}
      <section className="py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-12">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale contrast-125">
             <div className="text-2xl font-bold font-headline">ACME Corp</div>
             <div className="text-2xl font-bold font-headline">GLOBALTECH</div>
             <div className="text-2xl font-bold font-headline">SKYLINE</div>
             <div className="text-2xl font-bold font-headline">NEXUS</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
