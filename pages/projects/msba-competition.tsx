import Link from "next/link";

export default function MSBACompetition() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold mb-4">📊 2026 Marshall MSBA Case Competition</h1>
      <p className="text-slate-600 mb-6">September 2025</p>

      <div className="prose max-w-none">
        <p>
          This is a placeholder page for project details.
          You can add competition background, your role,
          analysis methods, and results here.
        </p>
        <p>
          Later, you can also insert charts, links to slides, or GitHub repos.
        </p>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
