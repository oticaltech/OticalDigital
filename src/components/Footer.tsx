
import Link from "next/link"
import { Zap, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-headline font-bold tracking-tight">
                Otical<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              High-performance web development agency specializing in modern SaaS and business solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Landing Pages</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Firebase Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>hello@otical.com</li>
              <li>+1 (555) 000-0000</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Otical Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
