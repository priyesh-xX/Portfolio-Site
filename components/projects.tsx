export default function Projects() {
  const projects = [
    {
      title: "Gnosis",
      description:
        "AI-powered quizzing platform with intelligent answer evaluation using ML models and Stripe subscriptions",
      highlights: [
        "Full-stack quiz platform with 5+ topic genres",
        "GPT-powered timed quizzes in challenge mode",
        "Keyword extraction with Dice's Coefficient for smart grading",
        "XP system and credit-based 3-tier Stripe subscription plans",
        "Real-time activity tracking and interactive features",
      ],
      tech: ["React.js", "Express.js", "Node.js", "PostgreSQL", "Tailwind CSS", "OpenAI API", "Stripe"],
      date: "May 2025",
      link: "#",
    },
    {
      title: "Meraki",
      description:
        "Full-stack learning platform enabling instructors to create and manage courses with real-time learner access",
      highlights: [
        "Role-based access control for instructors and learners",
        "20+ courses with video delivery capabilities",
        "Interactive features: enrollment, video playback, progress tracking",
        "Responsive UI with enhanced user engagement",
        "Real-time learner management",
      ],
      tech: ["HTML5", "CSS", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      date: "November 2024",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center py-16 px-4 border-t border-border bg-secondary/5">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 bg-background hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <p className="text-sm text-accent font-semibold mt-3 md:mt-0 md:text-right">{project.date}</p>
              </div>

              <div className="mb-4 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <p key={i} className="text-sm text-muted-foreground flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>{highlight}</span>
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
