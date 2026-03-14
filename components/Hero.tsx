export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Global Business Leader
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 leading-tight">
          Dnyanesh
          <span className="block text-amber-400">Junnare</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-2 font-medium">
          Global Business Development & Technology Enablement Leader
        </p>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10">
          Enabled $100M+ in Retail Technology &nbsp;|&nbsp; APAC & Global Growth &nbsp;|&nbsp; Stanford LEAD Class of 2025
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#experience"
            className="bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-300 transition-colors text-sm tracking-wide"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="border border-slate-400 text-slate-300 font-semibold px-8 py-3 rounded-full hover:border-amber-400 hover:text-amber-400 transition-colors text-sm tracking-wide"
          >
            Get in Touch
          </a>
        </div>

        {/* Key stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">25+</p>
            <p className="text-slate-400 text-xs mt-1 tracking-wide uppercase">Years Experience</p>
          </div>
          <div className="text-center border-x border-slate-700">
            <p className="text-3xl font-bold text-amber-400">$100M+</p>
            <p className="text-slate-400 text-xs mt-1 tracking-wide uppercase">Revenue Enabled</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">3</p>
            <p className="text-slate-400 text-xs mt-1 tracking-wide uppercase">Global Regions</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
