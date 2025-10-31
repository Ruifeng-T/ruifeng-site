import Head from 'next/head'
import { Mail, Linkedin, Github, FileText, ArrowRight } from 'lucide-react'
import emailjs from "emailjs-com";

const SITE = {
  name: "Ruifeng(Vincent)Tian",
  tagline: "I turn data into crisp, actionable insight.",
  email: "ruifeng.tian.2026@marshall.usc.edu",
  socials: {
    linkedin: "https://www.linkedin.com/in/usc-marshall-trf/",
    github: "https://github.com/",
    resume: "#"
  }
};

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
        <section className="py-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              Open to Summer 2026 internships
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{SITE.name}</h1>
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
      <li>
        <strong>Teamwork & collaboration.</strong> Work effectively in diverse teams, support one another, and move work forward through clear coordination and interpersonal skills.
      </li>
      <li>
        <strong>Macro reasoning + data-driven validation.</strong> Blend macro-level framing with machine learning as a data-driven method, grounded in a multi-industry background to deliver practical, evidence-based solutions.
      </li>
      <li>
        <strong>Executive-ready delivery.</strong> Build stakeholder-facing dashboards and narrative slide decks that distill complex analysis into clear business decisions.
      </li>
    </ul>
  </div>
</div>

{/* About */}
<section id="about" className="py-10">
  <h2 className="text-3xl font-semibold tracking-tight mb-4">About</h2>
  <div className="card text-slate-600 space-y-4 leading-relaxed">
    <p>
      Hi, my name is <strong>Ruifeng Tian</strong>, but feel free to call me <strong>Vincent</strong>. 
      I’m someone who truly believes in the power of collaboration — I find energy and meaning in 
      working with others, supporting teammates, and building things together.
    </p>

    <p>
      With a background in <strong>Economics</strong> from the University of Washington and current 
      <strong> MSBA</strong> training at USC, I combine macro-level reasoning with data-driven methods 
      to analyze complex problems and deliver practical, actionable insights. My internships across 
      <strong> finance, healthcare, and technology</strong> have shaped a cross-industry mindset that 
      helps me bridge strategy and analytics.
    </p>

    <p>
      I’m naturally curious and self-disciplined — I enjoy setting goals, taking initiative, and 
      constantly learning new things, whether it’s mastering a new model or creating AI-powered 
      projects like this website.
    </p>

    <p>
      Thanks for taking the time to read my little biography — I hope you have a wonderful day ahead!
    </p>
  </div>
</section>


        {/* Skills */}
        <section id="skills" className="py-10">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Excel</span>
                <span className="chip">SQL</span>
                <span className="chip">Python</span>
                <span className="chip">R</span>
                <span className="chip">Tableau</span>
                <span className="chip"> Machine Learning</span>
                <span className="chip">GenerativeAI</span>
              </div>
            </div>
            {/* Soft */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Cross-functional Collaboration</span>
                <span className="chip">Communication</span>
                <span className="chip">Stakeholder Reporting</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects - 横屏滚动 */}
        <section id="projects" className="py-10">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Projects</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            <a href="/projects/msba-competition" className="min-w-[350px] card block hover:shadow-md transition">
              <h3 className="text-lg font-semibold">📊 2026 Marshall MSBA Case Competition</h3>
              <p className="text-sm text-slate-500">September 2025</p>
              <p className="mt-2 text-slate-600">Click to see details →</p>
            </a>
            <a href="/projects/meituan-optimization" className="min-w-[350px] card block hover:shadow-md transition">
  <h3 className="text-lg font-semibold">🚴 Meituan Business Analytics Elite Competition</h3>
  <p className="text-sm text-slate-500">October 2025</p>
  <p className="mt-2 text-slate-600">Click to see details →</p>
</a>

          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="py-10">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Interests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    
    {/* Bodybuilding */}
    <div className="card text-center">
      <span className="text-2xl">💪</span>
      <p className="mt-2 text-sm font-medium text-slate-600">Bodybuilding</p>
    </div>

    {/* Whiskey */}
    <div className="card text-center">
      <span className="text-2xl">🥃</span>
      <p className="mt-2 text-sm font-medium text-slate-600">Whiskey</p>
    </div>

    {/* Cooking */}
    <div className="card text-center">
      <span className="text-2xl">🍳</span>
      <p className="mt-2 text-sm font-medium text-slate-600">Cooking</p>
    </div>

    {/* Tennis */}
    <div className="card text-center">
      <span className="text-2xl">🎾</span>
      <p className="mt-2 text-sm font-medium text-slate-600">Tennis</p>
    </div>

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
              <h3 className="text-lg font-semibold mb-3">Quick Message</h3>
<form
  onSubmit={(e: any) => {
    e.preventDefault();

    emailjs.send(
      "RuifengTian",           // ✅ Service ID
      "template_jmw6x4x",      // ✅ Template ID
      {
        from_name: e.target[0].value,   // 第一个 input
        reply_to: e.target[1].value,    // 第二个 input
        message: e.target[2].value,     // textarea
      },
      "g1AU8NQmE_4MPnE3Q"   // ✅ 你自己的 Public Key
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      e.target.reset();
    })
    .catch((err) => {
      console.log(err);
      alert("❌ Failed to send message, try again later.");
    });
  }}
  className="space-y-3"
>
  <input
    name="from_name"
    className="w-full border rounded-xl px-3 py-2"
    placeholder="Your name"
    required
  />
  <input
    name="reply_to"
    className="w-full border rounded-xl px-3 py-2"
    type="email"
    placeholder="Email"
    required
  />
  <textarea
    name="message"
    className="w-full border rounded-xl px-3 py-2"
    placeholder="What would you like to talk about?"
    rows={5}
    required
  />
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
