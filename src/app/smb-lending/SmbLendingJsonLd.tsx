import { SMB_FAQ_ITEMS } from "./faq-data";

const PAGE_URL = "https://landing.luby.co/custom_loan_origination/";
const OG_IMAGE = "https://landing.luby.co/custom_loan_origination/mockup-hero.png";

export default function SmbLendingJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SMB_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Custom Loan Origination Platform for SMB Lenders | Luby",
    description:
      "Luby builds custom loan origination platforms for SMB and SBA lenders — integrated with your systems, designed for your credit model, and fully under your control. You own the code.",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Luby",
      url: "https://landing.luby.co/",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE,
    },
  };

  const graph = [webPageSchema, faqSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
