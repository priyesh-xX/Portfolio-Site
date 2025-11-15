import { Mail, Github, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-16 px-4 border-t border-border bg-secondary/5">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Let's Connect</h2>

        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to interesting opportunities and discussions. Whether you have a project in mind or just
            want to chat, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:priyeshmnnit@gmail.com"
            className="flex items-center gap-4 p-6 border border-border rounded-lg hover:bg-secondary/10 transition-colors group"
          >
            <Mail size={32} className="text-accent group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground">priyeshmnnit@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+919981150611"
            className="flex items-center gap-4 p-6 border border-border rounded-lg hover:bg-secondary/10 transition-colors group"
          >
            <Phone size={32} className="text-accent group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold text-foreground">+91 9981150611</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/impriyeshx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 border border-border rounded-lg hover:bg-secondary/10 transition-colors group"
          >
            <Linkedin size={32} className="text-accent group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="font-semibold text-foreground">linkedin.com/in/impriyeshx</p>
            </div>
          </a>

          <a
            href="https://github.com/priyesh-xX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 border border-border rounded-lg hover:bg-secondary/10 transition-colors group"
          >
            <Github size={32} className="text-accent group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-muted-foreground">GitHub</p>
              <p className="font-semibold text-foreground">github.com/priyesh-xX</p>
            </div>
          </a>
        </div>

        <div className="text-center p-8 border border-accent/20 rounded-lg bg-accent/5">
          <p className="text-lg font-semibold text-accent mb-2">Open to Opportunities</p>
          <p className="text-muted-foreground">
            I'm actively looking for internships and full-time positions in full-stack development and AI applications.
          </p>
        </div>
      </div>
    </section>
  )
}
