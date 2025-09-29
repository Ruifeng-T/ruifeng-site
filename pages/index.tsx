import Head from 'next/head'
import { Mail, Linkedin, Github, FileText, ArrowRight } from 'lucide-react'

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

const SKILLS: { name: string; items: string[] }[] = [
  { name: "Data & Tools", items: ["Excel", "SQL", "Python", "R", "Tableau", "Basic ML"] },
  { name: "Business Insight", items: ["Macro–micro linkage", "Competitive & industry research", "Causal / A/B testing", "Visual storytelling"] },
  { name: "Collaboration & Delivery", items: ["Stakeholder communication", "Dashboards & monitoring", "SOP / templating", "Bilingual (EN/CN)"] }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruifeng Tian | Business & Data Analyst</title>
        <meta name="description" content="Ruifeng Tian - Business/Data Analyst. Turning data into clear, actionable insights. Open to Summer 2026 internships." />
        <meta name="keywords" content="Ruifeng Tian, Data Analyst, Business Analyst, USC MSBA, Summer Internship 2026" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="container h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold">{SITE.name}</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#skills">Skills</a>
            <a className="hover:underline" href="#contact">Contact</a>
            <a className="btn btn-primary text-sm" href={SITE.socials.resume} target="_blank" rel="noreferrer">
              <FileText className="w-4 h-4" /> Resume
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="container py-16">
        {/* Hero */}
        <section className="py-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              Open to Summer 2026 internships
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{SITE.name}</h1>
            <p className="mt-3 text-xl text-slate-500">{SITE.title}</p>
            <p className="mt-4 text-slate-600 max-w-prose">{SITE.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary" href="#contact">
                Contact me <ArrowRight className="w-4 h-4" />
              </a>
              <a className="btn btn-outline" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a className="btn btn-outline" href={SITE.socials.github} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          <div className="w-full">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">What I Bring</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong>Explain business problems with data.</strong> Build metric systems, detect anomalies, validate causality, and turn results into playbooks.</li>
                <li><strong>Pragmatic risk & compliance mindset.</strong> Hands-on with GRC / internal controls—balancing speed and robustness.</li>
                <li><strong>Clear communication & collaboration.</strong> Distill complex findings into crisp narratives for decision-makers.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">Target roles: Business Analysis · Data Analysis · Strategy Research</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">About</h2>
          <div className="card text-slate-600">
            I am a business/data analyst who enjoys turning messy, real-world data into clear insights that move teams forward. I work equally well at the macro (market, strategy, structure) and micro (metrics, pipelines, dashboards) levels, and I value straightforward communication and collaborative problem-solving.
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-10">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((s) => (
              <div key={s.name} className="card">
                <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
                <div className="flex flex-wrap">
                  {s.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Contact</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Email</h3>
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

            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Quick Message (Demo)</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("Demo form only — connect it to your backend or a form service."); }} className="space-y-3">
                <input className="w-full border rounded-xl px-3 py-2" placeholder="Your name" required />
                <input className="w-full border rounded-xl px-3 py-2" type="email" placeholder="Email" required />
                <textarea className="w-full border rounded-xl px-3 py-2" placeholder="What would you like to talk about?" rows={5} required />
                <button type="submit" className="w-full btn btn-primary">Send</button>
              </form>
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
