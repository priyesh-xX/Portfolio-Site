export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer pursuing a B.Tech in Electrical Engineering with a Minor in Computer Science at
              MNNIT Allahabad. I've built production-ready systems at Visit Health and Maruti Suzuki, working across
              backend services, frontend development, databases, and cloud deployments to deliver real-world impact.
            </p>
            <p>
              My interests lie in scalable system design and AI-driven applications, reflected in projects like
              Gnosis—an intelligent quiz platform—and Meraki, a full-stack learning management system with role-based
              workflows.
            </p>
            <p>
              Beyond academics, I stay active in competitive programming, contribute to open-source, and mentor juniors
              through coding sessions and tech initiatives on campus. I enjoy solving complex problems, writing clean,
              maintainable code, and continuously exploring new technologies in an ever-evolving engineering landscape.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-secondary/10 rounded-lg p-4">
              <p className="text-sm font-semibold text-accent mb-3">Quick Facts</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground font-semibold">Location:</span> India
                </li>
                <li>
                  <span className="text-foreground font-semibold">Current:</span> BTech Student (2022-2026)
                </li>
                <li>
                  <span className="text-foreground font-semibold">CPI:</span> 7.84/10
                </li>
                <li>
                  <span className="text-foreground font-semibold">Focus:</span> Full-Stack Development & System Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
