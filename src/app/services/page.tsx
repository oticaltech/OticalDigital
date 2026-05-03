
"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Layout, Rocket, Database, CheckCircle, ArrowRight } from "lucide-react"

const detailedServices = [
  {
    title: "Web Development",
    icon: Code,
    benefits: ["SEO Optimized", "Blazing Fast Load Times", "Responsive Architecture", "Custom Logic"],
    content: "We create performant, accessible websites using the modern web stack. From complex SaaS platforms to lightweight business sites."
  },
  {
    title: "UI/UX Design",
    icon: Layout,
    benefits: ["User Research", "Wireframing", "High-Fidelity Prototyping", "Design Systems"],
    content: "Our design process focuses on user engagement and conversion. We build interfaces that are beautiful and easy to use."
  },
  {
    title: "Firebase Integration",
    icon: Database,
    benefits: ["Real-time Sync", "Cloud Functions", "Secure Auth", "Dynamic Scaling"],
    content: "Leverage the power of Google's Firebase to build serverless apps that scale automatically to millions of users."
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-headline font-bold mb-6">Our <span className="text-primary">Expertise</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We specialize in modern web technologies to deliver solutions that drive measurable business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {detailedServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card h-full border-primary/10">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.content}
                    </p>
                    <ul className="space-y-3">
                      {service.benefits.map(benefit => (
                        <li key={benefit} className="flex items-center gap-3 text-sm font-medium">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 bg-card/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground">Our 3-step process to ensure project success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Strategy", text: "We define project goals, user personas, and technical requirements before writing code." },
              { step: "02", title: "Execution", text: "Regular updates and agile development ensures we stay on track and meet deadlines." },
              { step: "03", title: "Deployment", text: "We handle the launch, SEO setup, and post-launch support to keep things running smoothly." }
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <span className="text-8xl font-headline font-bold text-primary/5 absolute -top-10 -left-4 select-none">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg group">
            <Link href="/contact" className="flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
