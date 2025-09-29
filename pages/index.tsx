import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruifeng Tian</title>
        <meta name="description" content="Personal site of Ruifeng Tian" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-center space-x-6 py-6 border-b">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold">Ruifeng Tian</h1>
          <p className="mt-4 text-lg text-gray-600">Business / Data Analyst</p>
          <p className="mt-2">I turn data into crisp, actionable insight.</p>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p>
            I am a business/data analyst who enjoys turning messy, real-world data
            into clear insights that move teams forward. I work equally well at the
            macro (market, strategy, structure) and micro (metrics, pipelines,
            dashboards) levels, and I value straightforward communication and
            collaborative problem-solving.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-xl">
              <h3 className="font-semibold mb-2">Data & Tools</h3>
              <p>Excel, SQL, Python, R, Tableau, Basic ML</p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="font-semibold mb-2">Business Insight</h3>
              <p>Macro-micro linkage, Industry research, A/B testing, Storytelling</p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="font-semibold mb-2">Collaboration & Delivery</h3>
              <p>Stakeholder comms, Dashboards, SOPs, Bilingual (EN/CH)</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">
                🏥 CVS–Oak Street Health Integration Analysis
              </h3>
              <p className="text-sm text-gray-500">Summer 2025 | Healthcare Product Ops</p>
              <p className="mt-2 text-gray-700">
                Analyzed Medicare Advantage vertical integration strategy, evaluated senior
                clinic models, and built cost analysis framework.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Skills: SQL · Pivot Tables · Strategy Research
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">
                🚗 Automotive OEM Compliance Dashboard
              </h3>
              <p className="text-sm text-gray-500">Summer 2025 | KPMG GRCS</p>
              <p className="mt-2 text-gray-700">
                Built compliance monitoring dashboards for automotive OEMs, mapping CSCS
                frameworks to dealer risk-rating systems.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Skills: Excel · Tableau · Compliance Research
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>Email: ruifeng.tian.2026@marshall.usc.edu</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" className="text-blue-600">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-gray-800">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
