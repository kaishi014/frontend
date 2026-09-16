import { projects } from '../data/portfolioData';

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, index }) => (
  <article data-aos="fade-up" data-aos-delay={index * 120} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(32,38,43,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-700/30 hover:shadow-[0_24px_55px_rgba(32,38,43,0.14)]">
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
      <img src={project.image} alt={`${project.title} project preview`} className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-[1.04]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-70" />
      <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-700 backdrop-blur-sm">{project.badge}</span>
      <span className="absolute bottom-4 right-5 text-4xl font-black italic tracking-tight text-white/80">{project.number}</span>
    </div>

    <div className="flex flex-1 flex-col p-6 md:p-7">
      <h3 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-slate-600 md:text-base">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
        {project.techTags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600 transition group-hover:border-amber-700/20 group-hover:bg-amber-50 group-hover:text-amber-800">{tag}</span>)}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-amber-700"><ExternalLinkIcon />View Project</a>
        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-900 hover:text-slate-900">Live Demo<ExternalLinkIcon /></a>
      </div>
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" className="relative w-full overflow-hidden bg-[#f6f5f2] px-6 pb-32 pt-28 md:px-12 md:pt-36">
    <div className="pointer-events-none absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-amber-700/5 blur-3xl" />
    <div className="relative z-10 mx-auto max-w-7xl">
      <div data-aos="fade-up" className="mb-14 max-w-3xl md:mb-18">
        <span className="inline-block rounded-full border border-slate-300 bg-white px-5 py-1.5 text-sm font-bold text-slate-600 shadow-sm">Featured Projects</span>
        <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl">Karya yang berbicara dengan sendirinya</h2>
        <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">Koleksi karya pilihan yang berfokus pada antarmuka yang bersih, interaksi yang terkonsep, dan pengalaman digital yang praktis.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </div>
  </section>
);

export default Projects;