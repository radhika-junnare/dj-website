const offerings = [
  {
    title: "Go-to-Market Strategy",
    description:
      "Crafting tailored GTM strategies that accelerate market entry, drive adoption, and unlock revenue growth across global and regional markets.",
  },
  {
    title: "Sales Enablement",
    description:
      "Building scalable enablement frameworks, RFP processes, and tools that equip sales teams to win more deals with confidence.",
  },
  {
    title: "Business Development Advisory",
    description:
      "Strategic guidance for identifying new opportunities, building partner ecosystems, and expanding into APAC, EMEA, and the Americas.",
  },
  {
    title: "Digital Transformation",
    description:
      "Helping organizations navigate enterprise SaaS, RFID, and ERP adoption to achieve operational efficiency and competitive advantage.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Consulting
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Services</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Leveraging 25+ years of global executive experience to help businesses grow, scale, and lead in competitive markets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="border border-slate-100 rounded-2xl p-7 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-1 bg-amber-400 rounded mb-4 group-hover:w-16 transition-all duration-300" />
              <h3 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA to external consulting site */}
        <div className="bg-slate-900 rounded-2xl p-10 text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Consulting Practice
          </p>
          <h3 className="text-white text-2xl font-bold mb-3">Reverse Flow</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-7 leading-relaxed">
            Visit the official consulting website to explore service offerings, case studies, and get in touch directly.
          </p>
          <a
            href="https://reverseflow.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-300 transition-colors text-sm"
          >
            Visit reverseflow.co.uk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
