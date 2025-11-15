import { ExternalLink, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-4">Priyesh</h1>
            <p className="text-xl text-accent font-semibold mb-2">Full Stack Developer & AI Enthusiast</p>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed">
              Building scalable web applications and AI-powered platforms. Passionate about crafting seamless user
              experiences with cutting-edge technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity w-fit"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/impriyeshx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary/10 transition-colors w-fit"
            >
              LinkedIn
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
