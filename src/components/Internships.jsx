import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_16px_40px_rgba(32,38,43,0.08)] hover:-translate-y-2 hover:border-amber-700/30 hover:shadow-[0_24px_50px_rgba(32,38,43,0.14)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-slate-500 text-xs font-mono font-bold tracking-widest uppercase">
          {intern.duration}
        </span>
        <span className="bg-slate-100 text-slate-700 text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-slate-200">
          {intern.badge}
        </span>
      </div>
      <h3 className="text-slate-900 text-2xl font-black mb-1 tracking-tight">
        {intern.role}
      </h3>
      <p className="text-amber-700 text-sm font-black tracking-wide mb-6 uppercase">
        {intern.organization}
      </p>

      {/* Skills gained */}
      <div className="mb-6">
        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Skills Gained:</h4>
        <ul className="text-slate-600 text-sm font-medium space-y-1 pl-4 list-disc">
          {intern.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 border-t border-slate-200">
      <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-slate-700 bg-slate-100 rounded-full border border-slate-200 hover:bg-amber-50 hover:border-amber-700/30 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Internships = () => {
  return (
    <section className="bg-[#ff2a2a] pt-40 md:pt-44 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Hands-on experience through personal projects, freelance development, internships, and continuous creative practice.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
