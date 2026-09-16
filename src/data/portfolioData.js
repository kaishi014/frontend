import stockdzImage from '../assets/stockdz.png';
import hangmanImage from '../assets/hangman.png';
import portfolioImage from '../assets/prt.png';

// ============================================================
// portfolioData.js — Centralized configuration for ARRAFFI's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Ar Raffi Ardhiansyah",
  firstName: "Raffi",
  brandName: "ARRAFFI",
  title: "Software Developer",
  location: "",
  phone: "",
  emails: {
    primary: "",
    secondary: "",
  },
  summary:
    "A software developer focused on thoughtful digital experiences, clean interfaces, and dependable engineering.",
  resumeUrl: "ARRAFFI_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/kaishi014",
  whatsapp: "https://whatsapp.com/channel/0029VbCzsgDHLHQQJesW7M3b",
  instagram: "https://www.instagram.com/kaishi014/",
  tiktok: "https://tiktok.com/@hikari_144?si=JWlCDvYc3dpRUw21",
  discord: "https://discord.gg/mBYyDnJA",
};

export const heroContent = {
  greeting: "Hi, I'm ARRAFFI",
  titleHighlight: "Web Developer",
  rotatingTitles: [
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
  ],
  subtitle:
    "Saya membangun pengalaman digital terkonsep dengan sudut pandang yang bersih dan modern.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "View Resume", href: "ARRAFFI_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Halo, nama saya <span class="text-slate-900 text-xl font-black mx-1 tracking-wide uppercase">ARRAFFI</span>.. Saya seorang pelajar yang memiliki ketertarikan mendalam dalam dunia teknologi, khususnya coding, robotik, dan networking.`,
  techStack: ["Java", "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "MY PROCESS",
  heading: "Bagaimana Saya Membangun",
  description:
    "Dari ide sederhana menjadi pengalaman digital yang matang — saya memadukan pengembangan, desain, dan pemikiran kreatif di setiap tahapan.",
  cards: [
    {
      number: "01",
      title: "Pahami",
      text: "Saya mulai dengan memahami ide, masalah, dan apa yang ingin dicapai dari pengalaman akhir. Saya memecah ide menjadi tujuan yang jelas sebelum menulis kode.",
      keywords: ["Idea", "Goals", "Requirements"],
      icon: "understand",
    },
    {
      number: "02",
      title: "Design",
      text: "Saya membentuk pengalaman sebelum membangunnya — memikirkan layout, hierarki visual, interaksi, dan perilaku responsif. Saya menggunakan alat seperti Figma untuk mengeksplorasi dan menyempurnakan antarmuka.",
      keywords: ["UI/UX", "Figma", "Layout", "Interaction"],
      icon: "design",
    },
    {
      number: "03",
      title: "Build",
      text: "Saya mengubah desain menjadi produk nyata menggunakan teknologi web modern. Saya fokus pada struktur yang bersih, antarmuka responsif, komponen yang dapat digunakan kembali, dan menyelesaikan masalah di sepanjang jalan.",
      keywords: ["Frontend", "Backend", "Components", "Code"],
      icon: "build",
    },
    {
      number: "04",
      title: "Refine",
      text: "Setelah versi pertama berfungsi, saya menguji, meningkatkan, merawat detail, dan membuat pengalaman terasa lebih halus. Saya peduli pada kinerja, responsivitas, animasi, dan detail kecil yang membuat produk terasa lengkap.",
      keywords: ["Testing", "Performance", "Animation", "Polish"],
      icon: "refine",
    },
  ],
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "n8n", level: 82 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "CREATIVE SIDE",
  heading: "Beyond Code",
  description: "I don't only build digital experiences — I also care about design, motion, visuals, and the details that give an idea its identity.",
  categories: [
    {
      title: "UI/UX Design",
      description: "I enjoy designing clean, modern interfaces where visual hierarchy, usability, and interaction work together. I use design to turn ideas into clear and engaging digital experiences.",
      practice: "DESIGN PRACTICE",
      tools: ["Figma", "UI/UX", "Visual Design"],
      icon: "design"
    },
    {
      title: "Motion & Animation",
      description: "I explore motion and animation to make digital experiences feel more alive. I enjoy working with transitions, timing, visual rhythm, and animated interactions.",
      practice: "MOTION PRACTICE",
      tools: ["After Effects", "Motion Design", "Animation", "Visual Effects"],
      icon: "motion"
    },
    {
      title: "Creative Editing",
      description: "Visual editing is another part of my creative workflow. I enjoy experimenting with composition, transitions, effects, and visual storytelling to give content a stronger identity.",
      practice: "EDITING PRACTICE",
      tools: ["Photoshop", "After Effects", "Creative Editing", "Visual Composition"],
      icon: "editing"
    },
    {
      title: "3D & Visualization",
      description: "I also explore 3D modeling, rendering, and visualization, combining technical thinking with visual creativity to build detailed and expressive scenes.",
      practice: "3D PRACTICE",
      tools: ["3D Modeling", "Rendering", "Visualization"],
      icon: "three-dimensional"
    },
    {
      title: "Code × Design",
      description: "I like working at the intersection of development and visual design — building functional products while paying attention to the interaction, motion, and details that make them feel polished.",
      practice: "MY APPROACH",
      tools: ["Web Development", "UI/UX", "Animation", "Creative Problem Solving"],
      icon: "code-design"
    }
  ]
};

// Beyond Code journey data
export const leadershipList = [
  {
    category: "EDUCATION",
    title: "Computer Science",
    description: "I'm studying Computer Science at USTHB, building a strong foundation in programming, problem solving, algorithms, data structures, databases, and software development.",
    label: "USTHB",
    motif: "brackets"
  },
  {
    category: "BUILDING",
    title: "Personal Projects",
    description: "I learn by building. My personal projects give me a space to experiment with ideas, improve my development skills, and turn concepts into real digital experiences.",
    label: "BUILD • LEARN • IMPROVE",
    link: "#projects",
    motif: "layers"
  },
  {
    category: "WORK",
    title: "Freelance Developer",
    description: "Working on real development tasks has helped me improve how I approach problems, implement features, fix issues, and turn requirements into working solutions.",
    label: "WEB DEVELOPMENT",
    motif: "cursor"
  },
  {
    category: "CREATIVE",
    title: "UI/UX & Visual Design",
    description: "I enjoy exploring UI/UX, visual composition, and interface design. I like turning ideas into clean, intuitive experiences where design and functionality work together.",
    tools: ["Figma", "UI/UX", "Visual Design"],
    motif: "layout"
  },
  {
    category: "MOTION",
    title: "Creative Editing & Motion",
    description: "I also explore creative editing, motion, transitions, and visual storytelling. It gives me another way to experiment with timing, composition, and interaction.",
    areas: ["After Effects", "Photoshop", "Motion", "Visual Editing"],
    motif: "motion"
  },
  {
    category: "EXPLORATION",
    title: "3D & Visualization",
    description: "I explore 3D modeling, rendering, and visualization as another part of my creative side, combining technical thinking with visual experimentation.",
    areas: ["3D Modeling", "Rendering", "Visualization"],
    motif: "cube"
  },
  {
    category: "GROWTH",
    title: "Always Learning",
    description: "I continuously explore new technologies, development techniques, design ideas, and creative tools. Learning, experimenting, and building are a constant part of my journey.",
    label: "LEARN → EXPERIMENT → BUILD",
    motif: "orbit"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Ketua Sekbid 3",
    role: "OSIS & Leadership",
    duration: "2024 - Present",
    skills: ["Public speaking", "Komunikasi", "Kerja Sama Tim", "Problem Solving"],
    tech: ["Excel", "PowerPoint", "Internet", "Medsos", "Canva", "world"],
    badge: "Organisasi",
  },
  {
    organization: "Ketua Pokja",
    role: "Tim Adiwiyata",
    duration: "2024 - Present",
    skills: ["Pengelolaan Program & Lingkungan", "Kerja Sama Tim & Responsivitas", "Kesadaran Ekologis & Edukasi Publik", "Perencanaan & Eksekusi Kegiatan"],
    tech: ["Google Workspace", "Canva", "Spreadsheet", "Calendar"],
    badge: "Organisasi",
  },
  {
    organization: "FRONTEND DEVELOPER",
    role: "Programming Experience",
    duration: "2024 - Present",
    skills: ["Frontend","Modern Web Architecture", "UI/UX Design","Logical Thinking", "Responsive Interfaces", "Team Collaboration"],
    tech: ["React", "JavaScript", "HTML","GitHub","Git","VSCODE","Deploy", "CSS3"],
    badge: "Personal Project",
  },
  {
    organization: "PARTICIPANT & DELEGATE",
    role: "Competitions, Seminars & Workshops",
    duration: "2024 - Present",
    skills: ["Wawasan Industri","Tren Teknologi Terbaru","Pemecahan Masalah","Berpikir Kritis","Networking","Relasi","Manajemen waktu","Disiplin","Public Speaking"],
    tech: ["ZOOM","Google Meet","Canva","PowerPoint","IOT","AI Tools"],
    badge: "EVENTS & COMPETITIONS",
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "leadership", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "speaking", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "collaboration", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "communication", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "problem-solving", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "adaptability", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "creativity", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "time", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "spiderman-porto",
    number: "01",
    badge: "Personal Portfolio",
    title: "SpiderMan Porto",
    description:
      "SpiderMan Porto adalah platform web portofolio personal bertema Spider-Man yang dirancang untuk menampilkan rekam jejak, sertifikat, dan momen berharga melalui antarmuka yang unik dan interaktif. Proyek ini dibuat untuk memberikan pengalaman yang menyenangkan bagi pengunjung dalam menjelajahi pencapaian, galeri momen, dan informasi profesional saya.",
    techTags: ["HTML", "JavaScript", "CSS3"],
    image: stockdzImage,
    links: {
      github: null,
      demo: "https://kaishi014.github.io/Ar-RaffiArdhiansyah",
    },
    isFlagship: false,
  },
  {
    id: "hangman",
    number: "02",
    badge: "Interactive Game",
    title: "Hangman",
    description:
      "Hangman is an interactive word-guessing game where players try to discover the hidden word before running out of attempts. The project focuses on simple gameplay, responsive interaction, and a clean user experience.",
    techTags: ["JavaScript", "HTML", "CSS3"],
    image: hangmanImage,
    links: {
      github: null,
      demo: "https://hangman-aminecodes.netlify.app/",
    },
    isFlagship: false,
  },
  {
    id: "portfolio",
    number: "03",
    badge: "Personal Platform",
    title: "Portfolio",
    description:
      "A modern personal portfolio website designed to showcase projects, technical skills, experience, and professional information through a clean and responsive interface.",
    techTags: ["React.js", "Vite", "JavaScript", "CSS3", "Font Awesome / Boxicons", "Scroll animations"],
    image: portfolioImage,
    links: {
      github: null,
      demo: "https://saboo24.github.io/Portfolio11/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Programming in Java (94%)",
      issuer: "NPTEL",
      icon: "☕",
    },
    {
      name: "C Programming & Assembly Language",
      issuer: "NPTEL",
      icon: "⚙️",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      icon: "💼",
    },
    {
      name: "Career Edge – IT Primer",
      issuer: "TCS iON",
      icon: "🎓",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Lumenore",
      icon: "📊",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "IES College of Technology (RGPV)",
  cgpa: "8.35",
  graduation: "2027",
  twelfth: "12th Science – 81%",
  tenth: "10th CBSE – 70%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.35",
  copyright: `© ${new Date().getFullYear()} ARRAFFI | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
