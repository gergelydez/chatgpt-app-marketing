export const appConcept = {
  names: ["RevenueOS AI", "CloserForge", "GrowthPilot AI"],
  targetAudience: ["Performance agencies", "Ecommerce brands", "Coaches/info-product founders", "B2B SaaS sales teams"],
  valueProposition:
    "One system that turns a URL into actionable growth plans, sales assets, ad creatives, and CRM automations in minutes.",
  uniqueMechanism:
    "A specialized multi-agent pipeline that scores the current funnel, predicts revenue lift by fix priority, and auto-generates execution-ready assets."
};

export const modules = [
  {
    title: "AI Audit Engine",
    outcomes: ["Parses website, offer, checkout, and messaging", "Builds CVR + CAC risk report", "Benchmarks against niche leaders"]
  },
  {
    title: "AI Fixer Engine",
    outcomes: ["Flags leak points", "Creates ranked fix backlog", "Generates implementation playbooks"]
  },
  {
    title: "Sales Script Generator",
    outcomes: ["DM scripts by objection", "Discovery + close call scripts", "High-ticket closing frameworks"]
  },
  {
    title: "Viral Ads Generator",
    outcomes: ["TikTok/Reels hooks", "Creative briefs + shot lists", "Direct-response ad copy variations"]
  },
  {
    title: "Funnel Builder",
    outcomes: ["Selects funnel archetype", "Creates page-by-page wireframe", "Outputs conversion-focused copy"]
  },
  {
    title: "AI Automation System",
    outcomes: ["Lead scoring model", "Follow-up cadences", "CRM pipeline automations + chatbot flows"]
  }
] as const;

export const pricing = [
  { tier: "Starter", monthly: 99, annual: 948, seats: "1 seat", notes: "Audit + scripts + limited generations" },
  { tier: "Growth", monthly: 299, annual: 2868, seats: "5 seats", notes: "Full modules + integrations + automation" },
  { tier: "Scale", monthly: 999, annual: 9588, seats: "Unlimited", notes: "Agency white-label + API + priority support" }
] as const;

export const stack = {
  frontend: "Next.js 15 (App Router, Server Actions), TypeScript, Tailwind, shadcn/ui",
  backend: "Next.js Route Handlers + Python microservices for async enrichment",
  ai: "OpenAI reasoning + realtime models, retrieval, tool-calling agents, evaluation loops",
  data: "Postgres + pgvector, Redis for queues/cache, object storage for artifacts",
  integrations: ["Stripe", "HubSpot/Salesforce", "Meta Ads", "TikTok Ads", "Klaviyo", "Zapier/Make"]
};
