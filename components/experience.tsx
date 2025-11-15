export default function Experience() {
  const experiences = [
    {
      title: "Application Developer Intern",
      company: "Visit Health Private Limited",
      location: "Noida, UP",
      period: "June 2025 – July 2025",
      highlights: [
        "Implemented end-to-end Revenue Automation module, eliminating manual processes across Capitation and Subscription revenue streams",
        "Designed 4+ custom Frappe Doctypes to calculate and track monthly revenue with precision",
        "Enabled reliable Excel exports and cross-department validation",
      ],
      tech: ["Frappe Framework", "Python", "JavaScript", "MySQL", "AWS"],
    },
    {
      title: "Information Technology Intern",
      company: "Maruti Suzuki India Private Limited",
      location: "Gurugram, HR",
      period: "June 2024 – July 2024",
      highlights: [
        "Automated loading and unloading process for spares, reducing discrepancies by 30%",
        "Developed digital portal for transporters to list goods with unique item numbers",
        "Projected to save over 1.5 lakh annually by reducing paper usage and manual errors",
      ],
      tech: ["ASP.NET MVC", "C#", "HTML", "SQL"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center py-16 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 hover:bg-secondary/5 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
              </div>

              <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary/20 text-accent text-xs rounded-full font-medium">
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
