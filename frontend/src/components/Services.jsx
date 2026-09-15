import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

const ProcessIcon = ({ type }) => {
  const paths = {
    understand: 'M9 18h6M10 21h4M8 14a6 6 0 118-0c-1 1-2 2-2 4h-4c0-2-1-3-2-4zM12 2v2',
    design: 'M4 5h16v14H4V5zm4 0v14M8 9h8M8 13h5',
    build: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
    refine: 'M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3zM9 21h6',
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d={paths[type] || paths.understand} />
    </svg>
  );
};

const ProcessStep = ({ card, index, reducedMotion }) => {
  const stepRef = useRef(null);
  const active = useInView(stepRef, { amount: 0.55, once: false });

  return (
    <motion.article
      ref={stepRef}
      initial={reducedMotion ? false : { opacity: 0, y: 30, scale: 0.96 }}
      animate={reducedMotion || active ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.7, delay: reducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative pl-14 md:pl-0 ${index % 2 === 1 ? 'md:pt-12' : ''}`}
    >
      <div className="absolute left-3 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#f6f5f2] bg-slate-900 text-[10px] font-black text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-700 md:relative md:left-auto md:top-auto md:mx-auto md:mb-8">
        {card.number}
      </div>

      <div className={`rounded-[1.5rem] border p-6 transition-all duration-500 md:min-h-[300px] md:p-7 ${active ? 'border-amber-700/30 bg-white shadow-[0_20px_45px_rgba(32,38,43,0.10)]' : 'border-slate-200 bg-white/70 shadow-[0_10px_30px_rgba(32,38,43,0.04)]'} group-hover:-translate-y-1 group-hover:border-amber-700/30`}>
        <div className="mb-5 flex items-center justify-between">
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${active ? 'bg-amber-700 text-white' : 'bg-[#ebe9e3] text-amber-700'} group-hover:rotate-6`}>
            <ProcessIcon type={card.icon} />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Stage {card.number}</span>
        </div>
        <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-transform duration-500 group-hover:translate-x-1">{card.title}</h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 md:text-base">{card.text}</p>
        <div className={`mt-6 flex flex-wrap gap-2 transition-all duration-500 ${active ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80'}`}>
          {card.keywords.map((keyword) => <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">{keyword}</span>)}
        </div>
      </div>
    </motion.article>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 70%', 'end 40%'] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });

  return (
    <section id="process" ref={sectionRef} className="relative overflow-hidden bg-[#f6f5f2] px-6 pb-32 pt-28 font-sans bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px] md:px-12 md:pt-36">
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-amber-700/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="mb-16 max-w-4xl md:mb-20">
          <span className="inline-block rounded-full border border-slate-300 bg-white px-5 py-1.5 text-sm font-bold text-slate-600 shadow-sm">{skillsContent.badge}</span>
          <h2 className="mt-7 text-4xl font-black leading-[1.02] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">{skillsContent.heading}</h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">{skillsContent.description}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-slate-200 md:bottom-auto md:left-0 md:right-0 md:top-[1.1rem] md:h-px md:w-auto" />
          <motion.div style={reducedMotion ? undefined : { scaleX: lineProgress, scaleY: lineProgress }} className="absolute left-[1.15rem] top-0 h-full w-1 origin-top rounded-full bg-amber-700 md:left-0 md:top-[1.1rem] md:h-1 md:w-full md:origin-left" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-5">
            {skillsContent.cards.map((card, index) => <ProcessStep key={card.number} card={card} index={index} reducedMotion={reducedMotion} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;