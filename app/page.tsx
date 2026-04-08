import { ModuleCard } from "@/app/components/module-card";
import { appConcept, modules, pricing, stack } from "@/lib/blueprint";

const mvpPlan = [
  "Days 1-3: onboarding, URL ingestion, auth, project workspace.",
  "Days 4-8: audit parser + report generator with exportable PDF.",
  "Days 9-14: fixer engine + prioritized backlog + script generator.",
  "Days 15-21: ads generator + funnel builder + templates.",
  "Days 22-30: billing, usage limits, analytics, and Vercel production hardening."
];

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <p className="kicker">Professional-grade AI SaaS blueprint (2026)</p>
        <h1>{appConcept.names[0]}</h1>
        <p>{appConcept.valueProposition}</p>
      </header>

      <section>
        <h2>1) App Concept</h2>
        <p><strong>Alternative names:</strong> {appConcept.names.slice(1).join(", ")}</p>
        <p><strong>Target audience:</strong> {appConcept.targetAudience.join(" • ")}</p>
        <p><strong>Unique mechanism:</strong> {appConcept.uniqueMechanism}</p>
      </section>

      <section>
        <h2>2) Core Features</h2>
        <div className="grid">
          {modules.map((module) => (
            <ModuleCard key={module.title} title={module.title} outcomes={module.outcomes as string[]} />
          ))}
        </div>
      </section>

      <section>
        <h2>3) User Flow</h2>
        <ol>
          <li>User signs in, creates a workspace, and submits URL + optional niche, audience, price, and report.</li>
          <li>AI audit pipeline crawls landing pages, pricing, offer stack, and trust signals.</li>
          <li>Fixer engine scores issues by revenue impact and ease of implementation.</li>
          <li>Sales + ads agents generate scripts/creatives mapped to objections and ICP segments.</li>
          <li>Automation agent produces CRM workflows, follow-up flows, and chatbot intents.</li>
          <li>Dashboard ships all assets with one-click export to CRM/ad managers.</li>
        </ol>
      </section>

      <section>
        <h2>4) Tech Stack (Vercel-ready)</h2>
        <ul>
          <li><strong>Frontend:</strong> {stack.frontend}</li>
          <li><strong>Backend:</strong> {stack.backend}</li>
          <li><strong>AI:</strong> {stack.ai}</li>
          <li><strong>Data:</strong> {stack.data}</li>
          <li><strong>Integrations:</strong> {stack.integrations.join(", ")}</li>
        </ul>
      </section>

      <section>
        <h2>5-10) Architecture, Automation, Monetization, Advantage, MVP, Scale</h2>
        <ul>
          <li><strong>Prompt architecture:</strong> structured JSON contracts + rubric grading + self-critique loops per agent.</li>
          <li><strong>Memory:</strong> long-term project memory in Postgres/pgvector; short-term run context in Redis.</li>
          <li><strong>Automation logic:</strong> audit → problems → solutions → scripts/ads → deployment checklists.</li>
          <li><strong>Pricing:</strong> Starter $99/mo, Growth $299/mo, Scale $999/mo (+ annual discounts below).</li>
          <li><strong>Competitive edge:</strong> speed to usable assets, cross-module consistency, and quantified revenue lift scores.</li>
          <li><strong>Scale path:</strong> $10k via founder-led outreach, $100k via partnerships, $1M via channel + API ecosystem.</li>
        </ul>
        <div className="grid">
          {pricing.map((p) => (
            <article className="card" key={p.tier}>
              <h3>{p.tier}</h3>
              <p>${p.monthly}/month • ${p.annual}/year</p>
              <p>{p.seats}</p>
              <p>{p.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>11) UI / UX</h2>
        <p>Premium command-center layout with left navigation:</p>
        <ul>
          <li>Reports</li>
          <li>Scripts</li>
          <li>Ads</li>
          <li>Automations</li>
          <li>Experiments (A/B tests + revenue deltas)</li>
        </ul>
      </section>

      <section>
        <h2>MVP (0-30 days)</h2>
        <ol>
          {mvpPlan.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
