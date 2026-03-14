import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Col 1: photo + quick profile */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-56 h-56 rounded-full overflow-hidden ring-4 ring-amber-400 ring-offset-4 ring-offset-white">
                <Image
                  src="/profile.png"
                  alt="Dnyanesh Junnare"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-slate-900 font-semibold text-lg">Dnyanesh Junnare</p>
                <p className="text-amber-500 text-sm">Global Business Leader</p>
              </div>
            </div>

            {/* Quick Profile */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-slate-900 font-semibold text-lg mb-6">Quick Profile</h3>
            <ul className="space-y-4">
              {[
                { label: "Known As", value: "DJ" },
                { label: "Location", value: "Pune, India" },
                { label: "Phone", value: "+91 9820703751" },
                { label: "Email", value: "dnyanesh.junnare@gmail.com" },
                { label: "LinkedIn", value: "linkedin.com/in/dnyanesh-junnare", isLink: true, href: "https://www.linkedin.com/in/dnyanesh-junnare" },
                { label: "Education", value: "Stanford GSB LEAD | B.E. Instrumentation Engg." },
                { label: "Expertise", value: "RFID · Enterprise SaaS · ERP · Retail Tech" },
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="text-amber-500 font-semibold text-sm w-24 shrink-0">{item.label}</span>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 text-sm hover:text-amber-500 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-700 text-sm">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
            </div>
          </div>

          {/* Col 2-3: text */}
          <div className="md:col-span-2">
            <p className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              About
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Strategic Executive.<br />Global Impact.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Strategic executive with <strong>25+ years of experience</strong> driving business development,
              sales enablement, and global go-to-market strategy. Proven record of enabling double-digit
              growth, building high-performing teams, and leading cross-regional mandates across{" "}
              <strong>APAC, EMEA & the Americas</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Currently enrolled in the <strong>Stanford GSB LEAD program</strong>, strengthening expertise
              in leadership, innovation, and digital transformation. Skilled in consultative selling,
              RFID, enterprise SaaS, ERP, and retail technology solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With a track record of helping organizations achieve sustainable ROI, operational efficiency,
              and competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
