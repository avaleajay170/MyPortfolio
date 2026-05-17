export const projects = [
  {
    id: 1,
    title: 'Attendance System with Geolocation and Browser Fingerprinting',
    category: 'Web Development',
    tags: ['Web Development', 'Full Stack'],
    description:
      'A secure attendance system that uses geolocation and browser fingerprinting to reduce proxy attendance and improve transparency.',
    longDescription:
      'Built with Python, Flask, MySQL, and JavaScript, this web application verifies user context before recording attendance. It focuses on automated authentication, real-time attendance logging, and stronger trust in the overall attendance workflow.',
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/avaleajay170',
    demo: 'https://github.com/avaleajay170',
    color: 'from-violet-500 to-purple-700',
    emoji: 'AT',
    featured: true,
  },
  {
    id: 2,
    title: 'TrustPay - AI-Powered Fintech Payment App',
    category: 'AI/ML',
    tags: ['AI/ML', 'Full Stack'],
    description:
      'A fintech payment app with Flutter frontend and Flask backend designed for secure UPI-style transactions.',
    longDescription:
      'TrustPay combines Flutter, Firebase, Flask, and REST APIs to support secure transactions and real-time monitoring. Key fraud detection features include device binding, SIM change detection, geo-velocity checks, and a Trusted Circle alert system powered by Firebase security workflows.',
    tech: ['Flutter', 'Firebase', 'Flask', 'REST APIs', 'Python', 'Fraud Detection'],
    github: 'https://github.com/avaleajay170',
    demo: 'https://github.com/avaleajay170',
    color: 'from-cyan-500 to-blue-700',
    emoji: 'TP',
    featured: true,
  },
  {
    id: 3,
    title: 'CivicSphere - Civic Issue Intelligence Platform',
    category: 'Web Development',
    tags: ['Web Development', 'AI/ML'],
    description:
      'A geo-fenced civic reporting platform for municipal issue reporting, complaint routing, and public transparency.',
    longDescription:
      'CivicSphere helps citizens report civic issues within Pune city using Flask, Firebase, Python, and Google Maps API. It includes automatic constituency detection, smart complaint routing, escalation workflows, and a public dashboard that tracks complaint status and resolution updates.',
    tech: ['Flask', 'Firebase', 'Google Maps API', 'Python', 'Geo-fencing'],
    github: 'https://github.com/avaleajay170',
    demo: 'https://github.com/avaleajay170',
    color: 'from-emerald-500 to-teal-700',
    emoji: 'CS',
    featured: true,
  },
];

export const filterCategories = ['All', 'Web Development', 'AI/ML', 'Full Stack'];
