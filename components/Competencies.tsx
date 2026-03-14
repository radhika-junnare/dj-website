"use client";

import { useState } from "react";

const competencies = [
  {
    title: "Business Development & Sales Enablement",
    icon: "📈",
    details: [
      "Grew new product sales from $0 to $5M ARR in under 2 years",
      "Standardized RFP processes driving 30% YoY revenue growth",
      "Built scalable enablement tools for customer-centric selling",
    ],
  },
  {
    title: "Global Go-to-Market (GTM) Strategy",
    icon: "🌐",
    details: [
      "Designed GTM strategies across APAC, EMEA & the Americas",
      "Launched retail-focused offerings across key verticals in India",
      "Executed growth strategy resulting in double-digit CAGR",
    ],
  },
  {
    title: "Value Realization & ROI Assessment",
    icon: "💡",
    details: [
      "Enabled $100M+ in retail technology revenue",
      "Secured a $9.5M single-customer contract at NCR",
      "Delivered ROI analysis and insights at global conferences",
    ],
  },
  {
    title: "Solution Management & New Product Initiatives",
    icon: "🚀",
    details: [
      "Led NPI launches and cross-functional teams to accelerate adoption",
      "Designed SaaS-based RFID solutions for global retailers",
      "Drove multi-country partner engagement for new product rollouts",
    ],
  },
  {
    title: "Market & Competitive Intelligence",
    icon: "🔍",
    details: [
      "Delivered competitive analysis at global industry conferences",
      "Strengthened competitive positioning through market intelligence",
      "Provided insights enabling double-digit CAGR across APAC",
    ],
  },
  {
    title: "Consultative Selling & C-Level Engagement",
    icon: "🤝",
    details: [
      "Closed ERP deal within a day — from demo to purchase order",
      "Secured $9.5M contract through executive-level selling at NCR",
      "Built C-suite relationships across APAC, EMEA & Americas",
    ],
  },
  {
    title: "Digital Transformation & Enterprise SaaS",
    icon: "⚡",
    details: [
      "Designed SaaS-based RFID solutions adopted across global retail",
      "Led ERP and enterprise technology adoption across verticals",
      "Stanford GSB LEAD — deepening expertise in digital transformation",
    ],
  },
  {
    title: "Cross-Functional Leadership & Team Empowerment",
    icon: "👥",
    details: [
      "Directed global Source Tagging enablement across all regions",
      "Led cross-functional APAC teams through NPI launches",
      "Built high-performing teams delivering sustained double-digit growth",
    ],
  },
];

function FlipCard({
  title,
  icon,
  details,
  flipped,
  onClick,
}: {
  title: string;
  icon: string;
  details: string[];
  flipped: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="cursor-pointer h-44"
      style={{ perspective: "1000px" }}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-400/50 transition-all"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-3xl mb-4 block">{icon}</span>
          <p className="text-slate-300 text-sm font-medium leading-snug">{title}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-amber-400 rounded-xl p-5 flex flex-col justify-center gap-2"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {details.map((d) => (
            <div key={d} className="flex gap-2 items-start">
              <span className="text-slate-900 mt-0.5 shrink-0">▸</span>
              <p className="text-slate-900 text-xs font-medium leading-snug">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Competencies() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="competencies" className="py-24 bg-slate-900" onClick={() => setActiveIndex(null)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl font-bold text-white">Core Competencies</h2>
          <p className="text-slate-500 text-sm mt-3">Select a competency to view key achievements</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((item, index) => (
            <FlipCard
              key={item.title}
              {...item}
              flipped={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
