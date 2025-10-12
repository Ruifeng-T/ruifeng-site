import Link from "next/link";
import Head from "next/head";

export default function MeituanOptimization() {
  return (
    <>
      <Head>
        <title>Rider Optimization Study and Efficiency Improvement</title>
      </Head>

      <main className="container py-14">
        {/* 顶部：标题 + 返回按钮 */}
        <div className="relative mb-10">
          {/* 标题 */}
          <h1 className="text-4xl font-bold leading-tight">
            🚴 Rider Optimization Study and Efficiency Improvement
          </h1>

          {/* 左下角返回按钮 */}
          <div className="absolute left-0 -bottom-6">
            <Link
              href="/"
              className="text-blue-600 underline text-sm hover:text-blue-800"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Abstract */}
        <section className="card space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">Abstract</h2>
          <p className="text-slate-700">
            This study investigates the drivers of rider performance in Meituan’s delivery network.
            Using December 2024 rider-level data, we build a data-driven scoring system to identify
            high performers, classify riders into full-time and part-time, and estimate drivers of
            efficiency via Logistic Regression. We further apply K-means clustering to profile
            inactive riders and use Random Forests to analyze resilience under adverse weather.
            The analysis provides actionable recommendations on retention, incentive design, and
            weather-specific dispatch strategies.
          </p>
        </section>

        {/* 1. Background & RQs */}
        <section className="card space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">1) Background & Research Questions</h2>
          <p className="text-slate-700">
            Meituan’s instant delivery orders peaked at <strong>98M per day in Q3-2024</strong>,
            yet complaints about late delivery remained high (~0.93M in 2024). After the removal of
            lateness penalties in early 2025, average customer wait time rose by ~1.8 minutes.
            Balancing rider safety with on-time performance is now critical.
          </p>
          <ul className="list-disc pl-6 text-slate-700">
            <li>How to fairly define high performers and identify their drivers?</li>
            <li>Which rider segments face higher inactivity/attrition risk?</li>
            <li>How to optimize rider allocation under adverse weather conditions?</li>
          </ul>
        </section>

        {/* 2. Dataset */}
        <section className="card space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">2) Dataset</h2>
          <p className="text-slate-700">
            The dataset includes rider demographics, daily performance records, and weather conditions for December 2024. 
            Additional derived metrics were created to facilitate analysis.
          </p>

          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border px-4 py-2">Data Category</th>
                  <th className="border px-4 py-2">Provided by Case</th>
                  <th className="border px-4 py-2">Newly Defined Variables</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Rider Demographics</td>
                  <td className="border px-4 py-2">
                    Rider ID, gender, age, education, marital status, registration date, number of children
                  </td>
                  <td className="border px-4 py-2">
                    Tenure (months since registration, calculated as of Dec 31, 2024)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Rider Daily Performance (Dec 2024)</td>
                  <td className="border px-4 py-2">
                    Rider ID, date, completed orders, rejected orders, on-time orders, working hours, busy hours
                  </td>
                  <td className="border px-4 py-2">
                    Rejection Rate = (Rejected / Total Orders) * 100;<br />
                    On-time Rate = (On-time / Completed Orders) * 100
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Weather Conditions</td>
                  <td className="border px-4 py-2">
                    Date, weather severity level, temperature range, perceived temperature range,<br />
                    humidity range, wind speed level range, wind speed range, precipitation level range
                  </td>
                  <td className="border px-4 py-2">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Full-time vs Part-time */}
        <section className="card space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">3) Work Type Classification: Full-time vs Part-time</h2>
          <p className="text-slate-700">
            We constructed work type from actual logs (not self-declared) to reflect true effort and stability.
          </p>
          <ul className="list-disc pl-6 text-slate-700">
            <li><strong>Attendance rate</strong> = worked days / available days</li>
            <li><strong>Avg. daily hours</strong> = total work hours / worked days</li>
          </ul>
          <ul className="list-disc pl-6 text-slate-700">
            <li><strong>New riders:</strong> &lt; 10 available days</li>
            <li><strong>Full-time:</strong> attendance ≥ 70% <em>and</em> avg. daily hours ≥ 8.5</li>
            <li><strong>Part-time:</strong> otherwise</li>
          </ul>
          <p className="text-slate-700">
            <em>Result:</em> ~15% full-time and ~85% part-time — consistent with industry reports
            (~11–15% high-frequency riders).
          </p>
        </section>

{/* 4. Weighted Performance Score */}
<section className="card space-y-4 mb-8">
  <h2 className="text-2xl font-semibold">4) Weighted Performance Score</h2>

  <p className="text-slate-700">
    To identify high-performing riders and quantify their performance, we developed a weighted performance scoring system based on operational priorities and business relevance. Three core KPIs were selected:
  </p>

  <ul className="list-disc pl-6 text-slate-700">
    <li><strong>On-time rate (x₁):</strong> proportion of completed orders delivered on time</li>
    <li><strong>Active time rate (x₂):</strong> proportion of logged-in time spent actively taking orders</li>
    <li><strong>Rejection rate (x₃):</strong> proportion of orders rejected out of total orders</li>
  </ul>

  <p className="text-slate-700">
    Initial weights were determined according to business judgment, reflecting the relative operational importance of each KPI. 
    A Logistic Regression model was subsequently applied <strong>not to estimate coefficients, but to validate the directional and relative effects</strong> of these KPIs in predicting whether a rider belongs to the “high performer” group (y = 1).
  </p>

  <p className="text-slate-700">
    The validation confirmed that <em>on-time rate</em> and <em>active time rate</em> have positive impacts on performance, while <em>rejection rate</em> negatively correlates with it—consistent with the proposed weighting logic. 
    After normalization, the finalized weighted score formula is:
  </p>

  <div className="rounded-xl bg-slate-50 border p-4 text-slate-800 text-sm font-mono">
    Score = 0.4 * x₁ + 0.3 * x₂ − 0.3 * x₃
  </div>

</section>

    {/* 5. Logistic Regression Analysis */}
        <section className="card space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">5) Logistic Regression Analysis</h2>

          <h3 className="text-lg font-semibold">Methodology</h3>
          <ul className="list-disc pl-6 text-slate-700">
            <li>
              <strong>Labeling:</strong> High performers defined within
              <em> work type × tenure bins</em>, using z-standardized scores. Top 25% labeled positive cases.
            </li>
            <li>
              <strong>Model:</strong> P(y=1|X) = 1 / (1 + e<sup>−(β₀ + β₁x₁ + β₂x₂ + ...)</sup>) where y=1 = high performer.
            </li>
            <li>
              <strong>Estimation:</strong> Parameters estimated via MLE with cross-validation.
            </li>
          </ul>

          <h3 className="text-lg font-semibold">Key Findings</h3>
          <ul className="list-disc pl-6 text-slate-700">
            <li>Full-time status is the strongest predictor (β&gt;0, p&lt;0.001), ≈3× higher odds than part-time.</li>
            <li>Experience effects (age & tenure) are positive → maturity & learning-by-doing matter.</li>
            <li>Demographics marginal: gender weakly significant; education, marital, children not significant.</li>
          </ul>

          {/* 图 + 解读 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Image */}
            <div>
              <img
                src="/images/impl/logit.jpg"
                alt="Proportion of Excellent Riders by Rider Type"
                className="rounded-none shadow-none mx-auto w-full max-w-md"
              />
              <p className="text-center text-sm text-slate-500 mt-2">
                Figure 5-1: Proportion of Excellent Riders by Rider Type
              </p>
            </div>

            {/* Right: Interpretation */}
            <div className="text-slate-700">
              <h3 className="text-lg font-semibold">Interpretation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full-time riders make up ~15% of the workforce but nearly 68% of all high performers.</li>
                <li>Probability of being “excellent” is ~65.7% for full-time vs. 17.4% for part-time riders.</li>
                <li>Consistent participation and workload stability are key drivers of efficiency and quality.</li>
                <li>Full-time riders serve as the backbone of high performance in the platform.</li>
              </ul>
            </div>
          </div>
        </section>
{/* 6. K-means Clustering: Inactive Riders */}
<section className="card space-y-4 mb-8">
  <h2 className="text-2xl font-semibold">6) K-means Clustering: Inactive Riders</h2>

  <p className="text-slate-700">
    Inactive riders are defined as those with fewer than 5 orders in Dec-2024 
    (260 riders, ~8% of the total sample). 
    We applied K-means clustering (k=3, selected via the elbow method) 
    on demographic and tenure features, which revealed three distinct groups:
  </p>
<h3 className="text-lg font-semibold">Key Findings</h3>
  <ul className="list-disc pl-6 text-slate-700 space-y-1">
    <li>
      <strong>Emerging Female Riders (27):</strong> younger, short tenure, higher inactivity risk.  
      <span className="block text-slate-500">Attrition risk ≈ 15%</span>
    </li>
    <li>
      <strong>Core Middle-aged Males (68):</strong> longest tenure, stable but moderate inactivity.  
      <span className="block text-slate-500">Attrition risk ≈ 10%</span>
    </li>
    <li>
      <strong>Low-info Males (165):</strong> incomplete demographic profiles, short tenure, 
      highest inactivity rate.  
      <span className="block text-slate-500">Attrition risk ≈ 18%</span>
    </li>
  </ul>

{/* 图 + 解读 */}
<div className="flex flex-col md:flex-row items-center gap-6 mt-6">
  {/* 左边图 */}
  <div className="md:w-1/2">
    <img 
      src="/images/impl/kmeans.jpg" 
      alt="K-means clustering of inactive riders" 
      className="w-full rounded-none shadow-none"
    />
    <p className="text-center text-sm text-slate-500 mt-2">
      Figure 6-1: K-means clustering of inactive riders by demographic and tenure features
    </p>
  </div>

  {/* 右边解释 */}
  <div className="md:w-1/2 text-slate-700">
    <h3 className="text-lg font-semibold">Interpretation</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Three distinct segments of inactive riders are identified.</li>
      <li>Emerging female riders: higher attrition risk due to limited tenure and safety concerns.</li>
      <li>Core middle-aged males: generally stable but still show moderate inactivity.</li>
      <li>Low-info males: incomplete demographic profiles and short tenure, leading to the highest attrition risk.</li>
    </ul>
  </div>
</div>

</section>


{/* 7. Extreme Weather Optimization */}
<section className="card space-y-4 mb-8">
  <h2 className="text-2xl font-semibold">7) Extreme Weather Optimization</h2>

  {/* 方法介绍 */}
  <h3 className="text-lg font-semibold">Data & Method</h3>
  <p className="text-slate-700">
    We classified rider performance by weather level (normal vs. adverse) 
    and computed weighted performance scores under each condition. 
    A Random Forest model was then applied to identify which background 
    features most strongly predict riders’ relative advantage in adverse weather.
  </p>

  {/* 图 + 解读 */}
  <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
    {/* 左边：天气对比图 */}
    <div className="md:w-1/2">
      <img 
        src="/images/impl/weather.jpg" 
        alt="Average performance under normal vs. adverse weather" 
        className="rounded-none shadow-none mx-auto w-full"
      />
      <p className="text-center text-sm text-slate-500 mt-2">
        Figure 7-1: Average daily completed and rejected orders under different weather conditions
      </p>
    </div>

    {/* 右边：特征重要性图 */}
    <div className="md:w-1/2">
      <img 
        src="/images/impl/rf.jpg" 
        alt="Feature importance for weather resilience" 
        className="rounded-none shadow-none mx-auto w-full"
      />
      <p className="text-center text-sm text-slate-500 mt-2">
        Figure 7-2: Feature importance in predicting riders’ relative performance under adverse weather
      </p>
    </div>
  </div>

  {/* 解释 */}
  <div className="text-slate-700 mt-6">
    <h3 className="text-lg font-semibold">Key Findings</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Adverse weather amplifies performance gaps: 1,231 riders perform better, but rejection rates also rise.</li>
      <li>Age and children are the strongest predictors: younger riders and those without children adapt better.</li>
      <li>Gender and education have limited predictive power.</li>
      <li>Most resilient riders are ~30 years old, male, Hebei-based, with secondary education or below.</li>
    </ul>
  </div>

  {/* 商业价值 */}
  <div className="text-slate-700 mt-6">
    <h3 className="text-lg font-semibold">Interpretation</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Younger, childless male riders show stronger adaptability under adverse weather.</li>
      <li>Performance gaps widen in harsh conditions, highlighting unequal resilience.</li>
      <li>Targeted weather incentives and flexible scheduling can improve fairness and safety.</li>
    </ul>
  </div>
</section>

{/* 8) Managerial Implications */}
<section className="mb-12 p-6 rounded-2xl bg-50 border border-gray-200">
  <h2 className="text-2xl font-bold mb-4">8) Managerial Implications</h2>
  <p className="text-slate-700 mb-6">
    Based on the analytical results from Sections 5–7, this section outlines key recommendations for Meituan’s management and operations teams. 
    These insights focus on improving rider retention, optimizing incentive structures, and enhancing operational resilience under varying conditions.
  </p>

  <h3 className="text-lg font-semibold mb-2">(1) Incentive & Retention Strategy</h3>
  <p className="text-slate-700 mb-4">
    Logistic regression results indicate that full-time riders, though only 15% of the workforce, contribute nearly 68% of all high performers. 
    This highlights the need to prioritize stable, high-frequency riders through tiered incentives, long-term contracts, and recognition programs rather than across-the-board subsidies.
  </p>

  <h3 className="text-lg font-semibold mb-2">(2)Female Rider Engagement & Safety Support</h3>
  <p className="text-slate-700 mb-4">
    Emerging female riders show the highest attrition risk (~15%) due to limited tenure and safety concerns. 
    Flexible scheduling, safer route assignments, and gender-sensitive incentive schemes could reduce dropouts and improve engagement.
  </p>

  <h3 className="text-lg font-semibold mb-2">(3)Data-Driven Workforce Planning</h3>
  <p className="text-slate-700 mb-4">
    K-means clustering reveals distinct rider segments with varying stability. 
    Implementing predictive analytics for attrition risk scoring allows management to anticipate turnover, optimize recruitment timing, and allocate training resources more effectively.
  </p>

  <h3 className="text-lg font-semibold mb-2">(4)Weather-Responsive Dispatch & Communication</h3>
  <p className="text-slate-700 mb-4">
    Random Forest analysis shows that younger, childless male riders perform better in adverse weather, while rejection rates rise overall. 
    A weather-based dispatch algorithm, combined with dynamic bonuses and clear rider–customer communication, can enhance fairness, safety, and service reliability.
  </p>
</section>


      </main>
    </>
  );
}

