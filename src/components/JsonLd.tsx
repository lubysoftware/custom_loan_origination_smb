const SITE_URL = "https://landing.luby.co/ai_oriented_development";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Luby Software",
  url: "https://luby.com.br",
  logo: "https://landing.luby.co/ai_oriented_development/logoluby.svg",
  description:
    "Engineering teams fluent in Claude Code, MCP, and AI agents. AI-Oriented Development.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-3055-3404",
    contactType: "sales",
    areaServed: ["BR", "US"],
    availableLanguage: ["Portuguese", "English"],
    email: "comercial@luby.com.br",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Luby AI Developers",
  url: SITE_URL,
  description:
    "AI-Oriented Development. Teams fluent in Claude Code, MCP, and AI agents.",
  publisher: { "@id": "#organization" },
  potentialAction: {
    "@type": "ReadAction",
    target: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this just outsourcing with an AI layer on top?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AI-Oriented Development is a different operating model. Our engineers use AI as a force multiplier within a disciplined architectural process — not as a shortcut that skips that step.",
      },
    },
    {
      "@type": "Question",
      name: "What if our team has never worked with Claude Code or agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly where we deliver the most value. We bring the fluency, workflows, and patterns — and transfer everything to your team throughout the project.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from vibe coding or hiring a prompt engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vibe coding generates quick prototypes. AI-Oriented Development generates production systems. The difference lies in the architecture, security review, and engineering discipline.",
      },
    },
    {
      "@type": "Question",
      name: "What type of project benefits the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any project where you need speed and reliability: new products, legacy system modernization, AI-native features, agent integrations, or scaling an existing platform.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can the team get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects kick off within 2–3 weeks after the discovery sprint. We move fast because our teams are already trained and the stack is configured.",
      },
    },
  ],
};

const schemaWithIds = {
  ...organizationSchema,
  "@id": "#organization",
};

export default function JsonLd() {
  const jsonLd = [
    schemaWithIds,
    { ...webSiteSchema, publisher: { "@id": "#organization" } },
    faqSchema,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
