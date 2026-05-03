
"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Mail, MessageCircle, MapPin, Twitter, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-headline font-bold mb-8">Let's <span className="gradient-text">Connect</span></h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Have a project in mind or just want to say hello? Fill out the form or reach out via our social channels.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-muted-foreground">hello@otical.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp</h4>
                    <p className="text-muted-foreground">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/5 flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Twitter className="w-5 h-5" /> Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card/50 backdrop-blur-xl p-8 lg:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
