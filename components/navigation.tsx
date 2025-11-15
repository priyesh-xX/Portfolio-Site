"use client"

import { Menu, X } from "lucide-react"

interface NavigationProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export default function Navigation({ menuOpen, setMenuOpen }: NavigationProps) {
  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-accent">P</div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
