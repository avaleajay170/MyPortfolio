export const projects = [
  {
    id: 1,
    title: 'DocIntegrity AI - AI-Powered Assignment Integrity Verification',
    category: 'AI/ML',
    tags: ['AI/ML', 'Full Stack'],
    description:
      'A web-based system that verifies assignment authenticity using handwriting and AI-content detection.',
    longDescription:
      'Built with Django, Python, MySQL, PyTorch, OCR, and GPTZero API. Developed a Siamese Neural Network using the IAM Handwriting Database and custom student handwriting dataset, achieving 97% validation accuracy. Integrated OCR and GPTZero API to extract text, detect potential AI-generated content, and provide handwriting match and AI-content scores.',
    tech: ['Django', 'Python', 'MySQL', 'PyTorch', 'OCR', 'GPTZero API'],
    github: 'https://github.com/avaleajay170/DocIntegrity-AI',
    demo: null,
    color: 'from-violet-500 to-purple-700',
    emoji: 'DI',
    featured: true,
  },
  {
    id: 2,
    title: 'LegalMind AI - Intelligent Legal Workflow Agent',
    category: 'AI/ML',
    tags: ['AI/ML', 'Full Stack'],
    description:
      'An intelligent legal workflow platform for case, client, document, and deadline management.',
    longDescription:
      'Built with Python, Flask, MongoDB, Google Gemini, LangChain, FAISS, and Bootstrap. Developed a RAG pipeline with FAISS and Gemini for case-aware legal research and AI-assisted conversations. Implemented AI-powered document drafting, legal section suggestions, document analysis, and risk assessment to streamline case preparation.',
    tech: ['Python', 'Flask', 'MongoDB', 'Google Gemini', 'LangChain', 'FAISS', 'Bootstrap'],
    github: 'https://github.com/avaleajay170/LegalMind_AI',
    demo: 'https://legalmind-ai-a23i.onrender.com/auth/login',
    color: 'from-cyan-500 to-blue-700',
    emoji: 'LM',
    featured: true,
  },
  {
    id: 3,
    title: 'CivicSphere - AI-Powered Civic Issue Intelligence Platform',
    category: 'AI/ML',
    tags: ['AI/ML', 'Full Stack'],
    description:
      'A geo-fenced civic issue reporting platform enabling location-aware complaint submission across Pune city.',
    longDescription:
      'Built with Flask, Python, MongoDB, Google Maps API, and Gemini AI. Implemented AI-based classification, constituency detection, smart routing, and SLA escalation. Built a transparent dashboard for real-time complaint tracking, status monitoring, severity analysis, and resolution updates.',
    tech: ['Flask', 'Python', 'MongoDB', 'Google Maps API', 'Gemini AI'],
    github: 'https://github.com/avaleajay170/CivicSphere',
    demo: null,
    color: 'from-emerald-500 to-teal-700',
    emoji: 'CS',
    featured: true,
  },
  {
    id: 4,
    title: 'Smart Attendance System - Browser Fingerprint & Geolocation',
    category: 'Full Stack',
    tags: ['Full Stack'],
    description:
      'An attendance system using browser fingerprinting and geolocation to verify attendance from authorized locations.',
    longDescription:
      'A web-based attendance system focused on location-aware and browser-based verification for attendance tracking.',
    tech: ['Python', 'Flask', 'JavaScript', 'Geolocation API', 'Browser Fingerprinting'],
    github: 'https://github.com/avaleajay170/Smart-Attendance-System-using-Browser-Fingerprint-and-Geolocation',
    demo: null,
    color: 'from-amber-500 to-orange-600',
    emoji: 'SA',
    featured: false,
  },
  {
    id: 5,
    title: 'NyayaVault - Secure Legal Document Management',
    category: 'Full Stack',
    tags: ['Full Stack', 'AI/ML'],
    description:
      'A legal document management platform focused on secure document handling and verification workflows.',
    longDescription:
      'A project centered on legal document management, secure verification, and trustworthy digital workflows.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Hyperledger Fabric'],
    github: 'https://github.com/avaleajay170/NyayaVault',
    demo: null,
    color: 'from-blue-500 to-indigo-700',
    emoji: 'NV',
    featured: false,
  },
  {
    id: 6,
    title: 'LibrarySphere - Smart Library & Resource Intelligence Platform',
    category: 'Full Stack',
    tags: ['Full Stack'],
    description:
      'A smart library management platform for organizing resources, users, borrowing, and library operations.',
    longDescription:
      'A library management and resource intelligence project with a focus on practical backend, database, and workflow implementation.',
    tech: ['Python', 'Flask', 'MySQL', 'Docker'],
    github: 'https://github.com/avaleajay170/LibrarySphere',
    demo: null,
    color: 'from-fuchsia-500 to-pink-700',
    emoji: 'LS',
    featured: false,
  },
  {
    id: 7,
    title: 'Face Recognition Attendance System',
    category: 'AI/ML',
    tags: ['AI/ML', 'Full Stack'],
    description:
      'An attendance system using face recognition for automated identity-based attendance marking.',
    longDescription:
      'A computer-vision based attendance project using face recognition to automate attendance identification.',
    tech: ['Python', 'OpenCV', 'Face Recognition'],
    github: 'https://github.com/avaleajay170/Face-Recognition-Attendance-System',
    demo: null,
    color: 'from-rose-500 to-red-700',
    emoji: 'FR',
    featured: false,
  },
];

export const filterCategories = ['All', 'AI/ML', 'Full Stack'];