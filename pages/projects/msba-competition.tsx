import Link from "next/link";
import PlanCarousel from "@/components/PlanCarousel";

export default function MSBACompetition() {
  return (
    <main className="container py-16 relative">
      {/* 顶部：返回按钮 + 标题 */}
      <div className="mb-8 text-center relative">
        {/* 标题部分 */}
        <h1 className="text-4xl font-bold mb-2">
          📊 2026 Marshall MSBA Case Competition
        </h1>

        {/* 返回按钮放在标题下方左对齐 */}
        <div className="w-full text-left">
          <Link
            href="/"
            className="text-blue-600 underline text-sm hover:text-blue-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* 日期 */}
      <p className="text-slate-600 mb-6">September 2025</p>

      {/* 项目介绍 */}
      <div className="prose max-w-none mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Introduction</h2>
        <p>
          The MSBA Case Competition challenged us to design and launch a digital
          platform tailored for USC Marshall students. Our proposed app,
          <strong> USChallengers </strong>, helps students build consistent
          personal and professional habits by combining gamification,
          accountability, and community support.
        </p>
        <p>
          This page summarizes the competition background, my role, analysis
          methods, and results. Below you can also explore a live demo of the app
          prototype.
        </p>
      </div>

      {/* 图片轮播 */}
      <PlanCarousel
        images={[ 
          { src: "/images/impl/1.jpg", caption: "picture1" },
          { src: "/images/impl/2.jpg", caption: "picture2" },
          { src: "/images/impl/3.jpg", caption: "pictute3" },
        ]}
      />

      {/* Demo + Functions 两栏布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16 mt-12">
        {/* 左侧 Demo */}
        <div className="rounded-2xl border overflow-hidden shadow-sm bg-white mx-auto w-[380px]">
          <iframe
            src="/demo"
            className="w-full h-[740px]"
            style={{ border: 0 }}
          />
        </div>

        {/* 右侧功能块 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">🎯 Main Functions</h2>
          <p className="text-slate-600 mb-4">
            Our platform integrates three core modules to build habits, foster community,
            and track progress. Below is a breakdown of each.
          </p>

          <div className="space-y-4">
            {/* Challenge */}
            <div className="p-4 rounded-xl border shadow-sm bg-white">
              <h3 className="font-bold mb-2">⚔️ Challenge</h3>
              <p className="text-sm text-slate-600">
                <strong> • Private: People set their own goals and choose whether to input money or not</strong><br />
                refund if succeed, fail → stake kept by platform. <br />
                <br />
                <strong>• Public: People join or create competition with others; winners share losers’ stakes.</strong><br />
                Platform takes 20% commission.
              </p>
            </div>

            {/* Forum */}
            <div className="p-4 rounded-xl border shadow-sm bg-white">
              <h3 className="font-bold mb-2">💬 Forum Feed</h3>
              <p className="text-sm text-slate-600">
                <strong>A community space for posts & AI suggestions.</strong><br />
                • Students & professors share tips/events.<br />
                • AI pushes relevant career/news content based on school events.<br />
                • Boosts DAU & stickiness by making more student engagement.
              </p>
            </div>

            {/* Progress */}
            <div className="p-4 rounded-xl border shadow-sm bg-white">
              <h3 className="font-bold mb-2">📊 Progress</h3>
              <p className="text-sm text-slate-600">
                <strong>Personal dashboard for tracking habits.</strong><br />
                • Completion bars & streaks.<br />
                • Daily/weekly task checklist.<br />
                • Gamified rewards system.
              </p>
            </div>
          </div>
        </div>
      </div>

{/* Implementation Plan */}
<div className="prose max-w-none mb-16">
  <h2 className="text-3xl font-bold mb-10 text-center">
    🚀 Implementation Plan
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Phase 1 */}
    <div className="bg-white border rounded-2xl shadow p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-4">
        Phase 1 – Public Launch <span className="text-slate-500">(2025 Q4)</span>
      </h3>
      <ol className="list-decimal pl-5 space-y-4 text-slate-700">
        <li>
          <span className="font-semibold">Orientation Launch</span>
          <ul className="list-disc pl-6">
            <li>Live demo</li>
            <li>+$20 credit for all registrants</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Multi-Channel Promotion</span>
          <ul className="list-disc pl-6">
            <li>Instagram, TikTok, WeChat, RedNote, GroupMe</li>
            <li>Marshall building digital billboards</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Classroom / Workshop Integration</span>
          <ul className="list-disc pl-6">
            <li>Career workshops, class challenges</li>
            <li>Professors & Career Center staff post tasks</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Student Ambassador Program</span>
          <ul className="list-disc pl-6">
            <li>5 ambassadors promote on social media</li>
            <li>Promotion credits for ambassadors</li>
          </ul>
        </li>
      </ol>
    </div>

    {/* Phase 2 */}
    <div className="bg-white border rounded-2xl shadow p-6">
      <h3 className="text-xl font-semibold text-yellow-500 mb-4">
        Phase 2 – Habit Formation <span className="text-slate-500">(2026+)</span>
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-4 border rounded-xl bg-slate-50 shadow-sm">
          <h4 className="font-semibold mb-2">📅 Topic of the Month</h4>
          <p className="text-sm text-slate-600">
            Monthly themes that keep challenges fresh and engaging.
          </p>
        </div>
        <div className="p-4 border rounded-xl bg-slate-50 shadow-sm">
          <h4 className="font-semibold mb-2">👥 Community</h4>
          <p className="text-sm text-slate-600">
            Slack & WeChat “Challenge Groups” for sharing progress. Alumni feedback loop.
          </p>
        </div>
        <div className="p-4 border rounded-xl bg-slate-50 shadow-sm">
          <h4 className="font-semibold mb-2">🤖 AI Personalization</h4>
          <p className="text-sm text-slate-600">
            Recommends challenges based on habits and interests. Reduce noise, increase relevance.
          </p>
        </div>
        <div className="p-4 border rounded-xl bg-slate-50 shadow-sm">
          <h4 className="font-semibold mb-2">🔔 Smart Notifications</h4>
          <p className="text-sm text-slate-600">
            Timely reminders like “Don’t forget to complete tasks”. Builds habits and boosts completion rates.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>





      {/* Revenue & Cost Model with Breakeven Analysis */}
<div className="prose max-w-none mb-16">
  <h2 className="text-3xl font-semibold text-center mb-10">
    Revenue & Cost Model with Breakeven Analysis
  </h2>
  


  {/* Scrollable Comparison Table */}
  <div className="overflow-x-auto mt-8">
    <table className="min-w-[1200px] border-collapse border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
          <th className="border border-gray-300 px-4 py-2 text-left">🧮 Stage 1<br/>Year 1 (MVP, MSBA)</th>
          <th className="border border-gray-300 px-4 py-2 text-left">🚀 Stage 2<br/>Year 2 (USC-wide)</th>
          <th className="border border-gray-300 px-4 py-2 text-left">🏁 Stage 3<br/>Years 3–4 (Top CA)</th>
        </tr>
      </thead>
      <tbody>
        {/* Registrations & Traffic */}
        <tr>
          <td className="border px-4 py-2 font-semibold">Registrations & MAU</td>
          <td className="border px-4 py-2">300 (MAU 180, 60%)</td>
          <td className="border px-4 py-2">3,000 (MAU 1,500, 5%)</td>
          <td className="border px-4 py-2">12,000 (MAU 6,000, 5%)</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Challenges/User/Month</td>
          <td className="border px-4 py-2">2.2 (70% Public, 30% Private)</td>
          <td className="border px-4 py-2">2.5 (75% Public, 25% Private)</td>
          <td className="border px-4 py-2">3.0 (80% Public, 20% Private)</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Avg Stakes</td>
          <td className="border px-4 py-2">Public $15, Private $10</td>
          <td className="border px-4 py-2">Public $15, Private $12</td>
          <td className="border px-4 py-2">Public $20, Private $15</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Failure Rates</td>
          <td className="border px-4 py-2">Public 60%, Private 35%</td>
          <td className="border px-4 py-2">Public 60%, Private 30%</td>
          <td className="border px-4 py-2">Public 65%, Private 25%</td>
        </tr>

        {/* Revenue Breakdown */}
        <tr className="bg-gray-50">
          <td className="border px-4 py-2 font-semibold">Annual Revenue</td>
          <td className="border px-4 py-2">
            Private $5,040<br/>
            Public $5,988<br/>
            Ads $1,546<br/>
            <strong>Total $12,574</strong>
          </td>
          <td className="border px-4 py-2">
            Private $40,536<br/>
            Public $60,756<br/>
            Ads $28,320<br/>
            B2B $40,000<br/>
            Subs $4,500<br/>
            <strong>Total $174,112</strong>
          </td>
          <td className="border px-4 py-2">
            Private $162,000<br/>
            Public $449,280<br/>
            Ads & Sponsor $171,600<br/>
            B2B $240,000<br/>
            Subs $180,000<br/>
            <strong>Total $1,202,880</strong>
          </td>
        </tr>

        {/* Cost Breakdown */}
        <tr>
          <td className="border px-4 py-2 font-semibold">Annual Cost</td>
          <td className="border px-4 py-2">
            Dev $4,200<br/>
            Cloud $1,000<br/>
            Credits $3,000<br/>
            Mktg $2,000<br/>
            Fees $2,600<br/>
            Risk $618<br/>
            Legal $1,200<br/>
            <strong>Total $14,618</strong>
          </td>
          <td className="border px-4 py-2">
            Team $120,000<br/>
            Cloud $22,000<br/>
            Credits $27,000<br/>
            Mktg $36,000<br/>
            Fees $30,000<br/>
            Risk $7,790<br/>
            Legal $5,000<br/>
            Support $9,000<br/>
            <strong>Total $256,790</strong>
          </td>
          <td className="border px-4 py-2">
            Team $360,000<br/>
            Cloud $65,000<br/>
            Credits $90,000<br/>
            Mktg $100,000<br/>
            Fees $190,000<br/>
            Risk $51,840<br/>
            Legal $20,000<br/>
            Support $25,200<br/>
            <strong>Total $902,040</strong>
          </td>
        </tr>

        {/* Net Result */}
        <tr className="bg-gray-50">
          <td className="border px-4 py-2 font-semibold">Net Result</td>
          <td className="border px-4 py-2 text-red-600">- $2.0k</td>
          <td className="border px-4 py-2 text-red-600">- $82.7k</td>
          <td className="border px-4 py-2 text-green-600">+ $301k</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Breakeven Summary */}
  <h3 className="text-2xl font-bold mt-10 mb-2">🔔 Breakeven Summary</h3>
  <p>
    Year 1: Small loss (~$2k), focus on validation. <br/>
    Year 2: Near breakeven; achievable with higher public participation,
    ≥3 B2B schools, and stronger slotting fees. <br/>
    Year 3–4: Clear profitability (~$300k net profit/year).
  </p>

  {/* Sensitivity */}
  <h3 className="text-2xl font-bold mt-8 mb-2">🎯 Key Sensitivities</h3>
  <ul>
    <li><strong>Public failure rate</strong> (+/-10%) → strongest revenue driver</li>
    <li><strong>Public share of challenges</strong> → more commission</li>
    <li><strong>Challenge frequency</strong> → boosts revenue, increases fees</li>
    <li><strong>Slotting fees</strong> → pure incremental revenue</li>
    <li><strong>Credit redemption rate</strong> → lower = less cash outflow</li>
    <li><strong>Payment fee %</strong> → small changes = big annual impact</li>
  </ul>
</div>
<a
  href="/files/2025%20Global%20AI%20Case%20competition.pdf"
  download
  className="inline-block mt-6 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  📄 Download presentation Report (PDF)
</a>

  </main>
  
  );
}
