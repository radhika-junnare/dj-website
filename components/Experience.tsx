const experiences = [
  {
    company: "Sensormatic by Johnson Controls, Inc.",
    location: "California, USA",
    tenure: "Oct 2008 – Jan 2025",
    roles: [
      {
        title: "Director – Global Sales Enablement",
        period: "Apr 2023 – Jan 2025",
        bullets: [
          "Directed global Source Tagging sales enablement across all regions.",
          "Standardized RFP processes and streamlined sales operations, driving 30% YoY revenue growth.",
          "Built scalable enablement tools and insights for customer-centric selling.",
        ],
      },
      {
        title: "Lead – Business Development & Solution Management (APAC)",
        period: "Oct 2017 – Apr 2023",
        bullets: [
          "Drove new product sales from $0 to $5M ARR in under 2 years through multi-country partner engagement.",
          "Partnered with APAC leadership to execute growth strategy resulting in double-digit CAGR.",
          "Launched NPIs and led cross-functional teams to accelerate adoption.",
          "Delivered competitive analysis and industry presentations at global conferences.",
        ],
      },
      {
        title: "Business Development Manager – APAC",
        period: "Oct 2012 – Sep 2017",
        bullets: [
          "Designed SaaS-based RFID solutions and promotional strategies.",
          "Strengthened competitive positioning through enablement and market intelligence.",
        ],
      },
      {
        title: "Business Development Manager – India",
        period: "Oct 2008 – Sep 2012",
        bullets: [
          "Developed GTM strategies tailored to Indian retail.",
          "Launched successful retail-focused offerings across key verticals.",
        ],
      },
    ],
  },
  {
    company: "NCR Corporation",
    location: "India",
    tenure: "Dec 2007 – Oct 2008",
    roles: [
      {
        title: "Sales Manager",
        period: "Dec 2007 – Oct 2008",
        bullets: [
          "Secured a $9.5M contract with a single customer, boosting retail division revenue.",
        ],
      },
    ],
  },
  {
    company: "Godrej Infotech Ltd.",
    location: "India",
    tenure: "May 2004 – Aug 2006",
    roles: [
      {
        title: "Business Development Manager",
        period: "May 2004 – Aug 2006",
        bullets: [
          "Closed ERP deal within a day from demo to purchase order.",
        ],
      },
    ],
  },
];

const earlierCareer = [
  "Sahajanand Impex Pvt. Ltd.",
  "Dynalog India Ltd.",
  "HCL Infosystems Ltd.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Professional Experience</h2>
        </div>

        <div className="relative pl-6 border-l-2 border-slate-200 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[2.19rem] top-5 w-4 h-4 bg-amber-400 rounded-full border-4 border-slate-50" />

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                {/* Card header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-7 py-5 border-b border-slate-100 bg-slate-50/60">
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">{exp.company}</h3>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                    {exp.tenure}
                  </span>
                </div>

                {/* Roles */}
                <div className="divide-y divide-slate-100">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="px-7 py-5 grid sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <h4 className="text-amber-600 font-semibold text-sm leading-snug mb-1">{role.title}</h4>
                        <span className="text-xs text-slate-400">{role.period}</span>
                      </div>
                      <ul className="sm:col-span-2 space-y-2">
                        {role.bullets.map((b) => (
                          <li key={b} className="flex gap-2 text-slate-600 text-sm">
                            <span className="text-amber-400 mt-1 shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Earlier career */}
          <div className="relative">
            <div className="absolute -left-[2.19rem] top-5 w-4 h-4 bg-slate-300 rounded-full border-4 border-slate-50" />
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-7 py-5">
              <h3 className="text-slate-500 font-semibold text-sm uppercase tracking-widest mb-4">Earlier Career</h3>
              <div className="flex flex-wrap gap-3">
                {earlierCareer.map((co) => (
                  <span key={co} className="text-slate-600 text-sm bg-slate-50 border border-slate-200 px-4 py-2 rounded-full">
                    {co}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
