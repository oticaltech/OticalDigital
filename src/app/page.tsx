
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Layout, Rocket, Shield, ArrowRight, Star, Zap, Globe, Smartphone, Database } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const services = [
  {
    title: "Web Development",
    icon: Code,
    description: "Robust, high-performance web applications built with the latest technologies like Next.js and React."
  },
  {
    title: "UI/UX Design",
    icon: Layout,
    description: "Intuitive, accessible, and stunning user interfaces that convert visitors into loyal customers."
  },
  {
    title: "Landing Pages",
    icon: Rocket,
    description: "Highly optimized landing pages designed to maximize conversion rates and drive business growth."
  },
  {
    title: "Firebase Integration",
    icon: Database,
    description: "Scalable backend solutions with real-time database, authentication, and cloud functions."
  }
]

const testimonials = [
  {
    name: "Alex Rivers",
    role: "Founder, TechScale",
    content: "Otical Digital completely transformed our online presence. The speed and quality of their work is unmatched in the industry.",
    avatar: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Bloom",
    content: "Working with the team was seamless. They understood our brand immediately and delivered a website that exceeded our goals.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  }
]

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-abstract');

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Modern Digital Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight mb-6">
                We build <span className="gradient-text">high-performance</span> websites that grow businesses.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Expert web development and design for startups and established companies looking to scale their digital impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg">
                  <Link href="/work">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
            >
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all group">
                  <CardContent className="p-8 text-left">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-headline font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-headline font-bold mb-4">Recent Projects</h2>
              <p className="text-muted-foreground text-lg">See how we've helped others build amazing products.</p>
            </motion.div>
            <Button asChild variant="link" className="text-primary hidden md:flex items-center gap-2 group">
              <Link href="/work">
                View all projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PlaceHolderImages.filter(img => img.id.startsWith('project')).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <h3 className="text-xl font-headline font-bold mb-1">{project.description}</h3>
                <p className="text-muted-foreground text-sm flex gap-2">
                  <span>Next.js</span> • <span>Tailwind</span> • <span>Cloud</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-4xl font-headline font-bold mb-8">Why work with Otical?</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Blazing Performance</h4>
                      <p className="text-muted-foreground">Websites that load in milliseconds, optimizing for Core Web Vitals and SEO.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Scalable & Secure</h4>
                      <p className="text-muted-foreground">Built on solid foundations that grow with your user base without compromise.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Modern Tech Stack</h4>
                      <p className="text-muted-foreground">We use industry-leading tools like React, Next.js, and Firebase to deliver the best results.</p>
                    </div>
                  </div>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] border border-white/5 relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 blur-[100px] -mr-32 -mt-32" />
                <div className="relative z-10">
                   <h3 className="text-3xl font-headline font-bold mb-6">Our Process</h3>
                   <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</span>
                        <p className="font-medium">Discovery & Strategy</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</span>
                        <p className="font-medium">Design & Prototyping</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</span>
                        <p className="font-medium">Agile Development</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</span>
                        <p className="font-medium">Launch & Support</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <p className="text-lg italic mb-8 leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="font-bold">{t.name}</h5>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-white mb-6">Let's build your next project together</h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Ready to take your business to the next level? Contact us today for a free consultation.
              </p>
              <Button asChild size="lg" variant="secondary" className="h-14 px-10 rounded-full text-lg font-bold">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
