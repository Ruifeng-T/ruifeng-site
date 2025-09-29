import Head from 'next/head'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

const SITE = {
  name: "Ruifeng Tian",
  title: "Business / Data Analyst",
  tagline: "I turn data into crisp, actionable insight.",
  email: "ruifeng.tian.2026@marshall.usc.edu",
  socials: {
    linkedin: "https://www.linkedin.com/in/usc-marshall-trf/",
    github: "https://github.com/",
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE.name} | {SITE.title}</title>
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <nav className="container h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold text-lg">{SITE.name}</a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
            <a className="hover:text-blue-600 transition" href="#about">About</a>
            <a className="hover:text-blue-600 transition" href="#skills">Skills</a>
            <a className="hover:text-blue-600 transition" href="#projects">Projects</a>
            <a className="hover:text-blue-600 transition" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="container py-20">

        {/* Hero */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-extrabold tracking-tight">{SITE.name}</h1>
          <p className="mt-4 text-2xl text-slate-600">{SITE.title}</p>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">{SITE.tagline}</p>
          <div className="mt-8 flex justify-center gap-4">
            <a className="btn btn-primary flex items-center gap-2" href="#contact">
              Contact Me <ArrowRight className="w-4 h-4" />
            </a>
            <a className="btn btn-outline flex items-center gap-2" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a className="btn btn-outline flex items-center gap-2" href={SITE.socials.github} target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">About</h2>
          <div className="card max-w-3xl mx-auto text-slate-600 leading-relaxed">
            I am a business/data analyst who enjoys turning messy, real-world data into clear insights
            that move teams forward. I work equally well at the macro (market, strategy, structure) and 
            micro (metrics, pipelines, dashboards) levels, and I value straightforward communication 
            and collaborative problem-solving.
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Technical Skills */}
            <div className="card shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Excel</span>
                <span className="chip">SQL</span>
                <span className="chip">Python</span>
                <span className="chip">R</span>
                <span className="chip">Tableau</span>
                <span className="chip">Basic ML</span>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="card shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Communication</span>
                <span className="chip">Teamwork</span>
                <span className="chip">Cross-functional Collaboration</span>
                <span className="chip">Stakeholder Reporting</span>
              </div>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            <a href="/projects/msba-competition" className="min-w-[350px] card block hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">📊 2026 Marshall MSBA Case Competition</h3>
              <p className="text-sm text-slate-500">September 2025</p>
              <p className="mt-2 text-slate-600">Click to see details →</p>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="max-w-xl mx-auto card text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
            </div>
            <div className="flex justify-center gap-4">
              <a className="btn btn-outline" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a className="btn btn-outline" href={SITE.socials.github} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500 border-t">
        © {new Date().getFullYear()} {SITE.name}. Built with ❤️
      </footer>
    </>
  )
}
