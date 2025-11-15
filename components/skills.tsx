export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["HTML5/CSS", "C++", "C#", "Python", "Java", "JavaScript"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Python", "ASP.NET", "Frappe Framework"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Postman", "AWS", "Docker", "VS Code", "IntelliJ"],
    },
    {
      category: "Specializations",
      skills: ["AI/ML Integration", "Full Stack Development", "System Design", "DSA", "API Development"],
    },
  ]

  const interests = [
    {
      title: "Coding Interests",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "System Design & Architecture",
        "Database Management Systems",
        "Operating Systems",
      ],
    },
    {
      title: "Non-Technical Interests",
      items: [
        "Literature & Creative Writing",
        "Competitive Quizzing",
        "Strategic Games & Problem Solving",
        "Mentoring & Leadership",
        "Sports",
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-16 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((group, idx) => (
            <div key={idx} className="bg-secondary/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-accent mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {interests.map((interestGroup, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-r from-secondary/20 to-transparent rounded-lg border border-border"
            >
              <h3 className="text-lg font-semibold text-accent mb-4">{interestGroup.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {interestGroup.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-secondary/20 to-transparent rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-accent mb-4">Competitive Programming & Coding Profiles</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-accent">→</span>{" "}
              <a
                href="https://leetcode.com/u/priyeshxx1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors hover:underline"
              >
                <strong>LeetCode</strong> - 750+ Problems Solved
              </a>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">→</span>{" "}
              <a
                href="https://www.geeksforgeeks.org/user/priyeshncg7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors hover:underline"
              >
                <strong>GeeksforGeeks</strong> - Passionate Contributor
              </a>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">→</span>{" "}
              <a
                href="https://www.codechef.com/users/priyeshxx1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors hover:underline"
              >
                <strong>CodeChef</strong> - 3-Star Competitive Programmer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
