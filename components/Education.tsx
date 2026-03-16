import Image from "next/image";

const education = [
  {
    institution: "Stanford Graduate School of Business",
    degree: "LEAD Program",
    year: "Class of 2025",
    description: "Leadership, Strategy, Innovation & Digital Transformation",
    highlight: true,
    logo: "/stanford-logo.png",
  },
  {
    institution: "Pune University",
    degree: "Bachelor of Engineering",
    year: "Class of 1994",
    description: "Instrumentation Engineering",
    highlight: false,
    logo: "/pune-university-logo.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className={`rounded-2xl p-8 border ${
                edu.highlight
                  ? "bg-slate-900 border-amber-400/30"
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {edu.logo && (
                  <div className="bg-white rounded-xl p-2 flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                )}
                <h3
                  className={`font-bold text-xl ${
                    edu.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {edu.institution}
                </h3>
              </div>
              <p
                className={`font-semibold mb-1 ${
                  edu.highlight ? "text-amber-400" : "text-amber-600"
                }`}
              >
                {edu.degree}
              </p>
              {edu.year && (
                <p className={`text-sm mb-3 ${edu.highlight ? "text-slate-400" : "text-slate-400"}`}>
                  {edu.year}
                </p>
              )}
              <p className={`text-sm ${edu.highlight ? "text-slate-300" : "text-slate-600"}`}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
