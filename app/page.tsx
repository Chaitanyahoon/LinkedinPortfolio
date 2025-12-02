import { projects, experiences, certifications, skills } from "@/lib/data"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Portfolio() {

  return (
    <div className="min-h-screen transition-all duration-500">
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100">
        <Navbar />
        <Hero />
        <About skills={skills} />
        <Projects projects={projects} />
        <ExperienceSection experiences={experiences} />
        <Certifications certifications={certifications} />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
