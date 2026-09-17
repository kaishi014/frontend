import stockdzImage from '../assets/stockdz.png';
import hangmanImage from '../assets/siswa hub2.png';
import portfolioImage from '../assets/kalkulator.png';

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
  nwhatsapp: "https://wa.me/6283878085393",
  whatsapp: "https://whatsapp.com/channel/0029VbCzsgDHLHQQJesW7M3b",
  instagram: "https://www.instagram.com/kaishi014/",
  youtube: "https://youtube.com/@HIKARI_144",
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
    category: "PENDIDIKAN",
    title: "Siswa Aktif",
    description: "Fokus mendalami ilmu di sekolah sambil aktif membangun fondasi dalam berorganisasi, manajemen waktu, dan pengembangan logika lewat proyek teknologi.",
    label: "PELAJAR",
    motif: "brackets"
  },
  {
    category: "ORGANISASI",
    title: "Pengalaman Pengurus",
    description: "Aktif berkontribusi dalam organisasi sekolah seperti OSIS dan Tim Adiwiyata untuk mengasah kepemimpinan, kerja sama tim, dan kepedulian lingkungan.",
    label: "ORGANISASI • KEPEMIMPINAN",
    motif: "layers"
  },
  {
    category: "PROYEK KREATIF",
    title: "Pengembangan Aplikasi Siswa",
    description: "Belajar lewat praktik langsung dengan membuat aplikasi produktivitas siswa seperti Siswa Hub dan tools kalkulator untuk membantu kegiatan belajar harian.",
    label: "BELAJAR • KARYA • INOVASI",
    link: "#projects",
    motif: "cursor"
  },
  {
    category: "DESAIN",
    title: "UI/UX & Desain Grafis",
    description: "Eksplorasi pembuatan antarmuka aplikasi dan materi visual organisasi yang bersih, rapi, serta mudah digunakan oleh sesama siswa.",
    tools: ["Figma", "Canva", "UI/UX Design"],
    motif: "layout"
  },
  {
    category: "KEGIATAN",
    title: "Lomba, Seminar & Workshop",
    description: "Gemar mengikuti berbagai kompetisi teknologi dan seminar untuk memperluas wawasan, mengasah ide, serta memperluas jaringan pertemanan.",
    areas: ["Kompetisi", "Workshop", "Seminar Tech"],
    motif: "motion"
  },
  {
    category: "PENGEMBANGAN DIRI",
    title: "Selalu Belajar & Beradaptasi",
    description: "Terus mengeksplorasi skill baru, baik soft skill maupun hard skill, untuk mendukung prestasi akademik, efektivitas organisasi, dan proyek pribadi.",
    label: "BELAJAR → MENGABDI → BERKARYA",
    motif: "orbit"
  },
  {
  category: "EKSTRAKURIKULER",
  title: "Aktif dalam Komunitas Sekolah",
  description: "Terlibat aktif dalam kegiatan ekstrakurikuler untuk mengasah minat, membangun kedisiplinan, serta memperluas kolaborasi antar sesama siswa.",
  label: "EKSKUL • KOLABORASI",
  motif: "motion"
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
  { 
    name: "Leadership", 
    icon: "leadership", 
    desc: "Membimbing tim, mengelola tugas kelompok, dan mendorong penyelesaian kegiatan sekolah dengan visi bersama." 
  },
  { 
    name: "Public Speaking", 
    icon: "speaking", 
    desc: "Tampil percaya diri di depan umum, memandu acara sekolah, dan menyampaikan gagasan secara jelas serta terstruktur." 
  },
  { 
    name: "Team Collaboration", 
    icon: "collaboration", 
    desc: "Bekerja sama secara efektif dalam tim, saling mendukung antaranggota, dan menyelesaikan tugas kelompok dengan solid." 
  },
  { 
    name: "Communication", 
    icon: "communication", 
    desc: "Berkomunikasi secara lancar, santun, dan responsif baik kepada guru, sesama siswa, maupun dalam organisasi." 
  },
  { 
    name: "Problem Solving", 
    icon: "problem-solving", 
    desc: "Menganalisis tantangan belajar dan organisasi untuk menemukan solusi yang praktis, logis, dan efektif." 
  },
  { 
    name: "Adaptability", 
    icon: "adaptability", 
    desc: "Cepat menyesuaikan diri dengan lingkungan baru, materi pelajaran baru, serta perubahan dinamika dalam tim." 
  },
  { 
    name: "Creativity", 
    icon: "creativity", 
    desc: "Mengembangkan ide-ide segar dan tampilan visual yang menarik untuk tugas sekolah, presentasi, serta materi organisasi." 
  },
  { 
    name: "Time Management", 
    icon: "time", 
    desc: "Menyeimbangkan jadwal akademik, aktivitas organisasi seperti OSIS, Adiwiyata & eskul serta tugas pribadi secara teratur." 
  }
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
    id: "siswa-hub",
    number: "02",
    badge: "Web Application",
    title: "Siswa Hub",
    description:
      "Siswa Hub adalah platform manajemen belajar personal yang membantu siswa mencatat PR, melihat jadwal pelajaran, dan membuat catatan cepat. Dilengkapi riwayat tugas serta penyimpanan berkas berbasis Local Storage untuk akses data yang aman dan cepat tanpa internet.",
    techTags: ["React", "JavaScript", "HTML", "CSS", "Local Storage API"],
    image: hangmanImage,
    links: {
      github: null,
      demo: "https://kaishi014.github.io/Ar-RaffiArdhiansyah/siswa.html",
    },
    isFlagship: false,
  },
  {
    id: "portfolio",
    number: "03",
    badge: "UTILITY APP",
    title: "Kalkulator",
    description:
      "Aplikasi kalkulator serbaguna berbasis web yang mendukung berbagai mode perhitungan (Standar, Sains, Keuangan, dan Konverter). Dilengkapi panel riwayat perhitungan (calculation history), fungsionalitas hapus data, serta opsi tema tampilan (Dark/Light Mode).",
    techTags: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    image: portfolioImage,
    links: {
      github: null,
      demo: "https://kaishi014.github.io/Ar-RaffiArdhiansyah/kalkulator.html",
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
