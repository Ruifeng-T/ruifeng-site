import Head from 'next/head'
import { Mail, Linkedin, Github } from 'lucide-react'

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
        <title>Ruifeng Tian | Business & Data Analyst</title>
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="container h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold">{SITE.name}</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#skills">Skills</a>
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="container py-16">
        {/* Hero */}
        <section className="py-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{SITE.name}</h1>
          <p className="mt-3 text-xl text-slate-500">{SITE.title}</p>
          <p className="mt-4 text-slate-600">{SITE.tagline}</p>
        </section>

        {/* About */}
        <section id="about" className="py-10">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <div className="card text-slate-600">
            I am a business/data analyst who enjoys turning messy, real-world data into clear insights...
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-10">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">Excel · SQL · Python · R · Tableau · Basic ML</div>
            <div className="card">Macro–micro linkage · Industry research · A/B testing · Storytelling</div>
            <div className="card">Stakeholder communication · Dashboards · SOP · Bilingual (EN/CN)</div>
          </div>
        </section>

        {/* Projects - 横向滚动 */}
        <section id="projects" className="py-10">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            <a href="/projects/msba-competition" className="min-w-[350px] card block hover:shadow-md transition">
              <h3 className="text-lg font-semibold">📊 2026 Marshall MSBA Case Competition</h3>
              <p className="text-sm text-slate-500">September 2025</p>
              <p className="mt-2 text-slate-600">Click to see details →</p>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <div className="card">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
            </div>
            <div className="mt-4 flex gap-3">
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
