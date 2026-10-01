import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Code2, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="resume" className="section-padding relative overflow-hidden bg-[#F8F9FF] dark:bg-[#0A0A18]">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10">
          <span className="section-tag">Resume</span>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-[#1A1A2E] dark:text-white mt-3">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="mt-4 text-[#6E7191] dark:text-[#9999BB] font-inter">Resume information is displayed here for viewing only.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}
          className="max-w-5xl mx-auto bg-white dark:bg-[#111126] rounded-3xl shadow-glass p-6 md:p-10 border border-[#6C63FF]/10">
          <div className="text-center border-b border-gray-200 dark:border-white/10 pb-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-sora font-black text-[#1A1A2E] dark:text-white">AJAY AVALE</h1>
            <p className="text-[#6E7191] dark:text-[#9999BB] mt-2">Pune, Maharashtra, India</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-4 text-sm text-[#6E7191] dark:text-[#9999BB]">
              <span className="flex items-center gap-1.5"><Phone size={14} /> +91-8624020411</span>
              <span className="flex items-center gap-1.5"><Mail size={14} /> avaleajay95@gmail.com</span>
              <a href="https://www.linkedin.com/in/ajay-avale-109a022a0/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#6C63FF]"><Linkedin size={14} /> LinkedIn</a>
              <a href="https://github.com/avaleajay170" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#6C63FF]"><Github size={14} /> GitHub</a>
              <a href="https://leetcode.com/u/avaleajay170/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#6C63FF]"><Code2 size={14} /> LeetCode</a>
            </div>
          </div>

          <div className="space-y-9 text-[#6E7191] dark:text-[#B5B5CF] font-inter">
            <ResumeSection title="Education">
              <ResumeItem title="Vishwakarma Institute of Technology, Pune" right="2025 - 2028 (Expected)" subtitle="B.Tech in Information Technology — CGPA: 9.12/10.0" />
              <ResumeItem title="AISSMS Polytechnic, Pune" right="2022 - 2025" subtitle="Diploma in Information Technology — Percentage: 92.06%" />
            </ResumeSection>

            <ResumeSection title="Experience">
              <ResumeItem title="Sumago Infotech Pvt. Ltd." right="June 2024 - July 2024" subtitle="Trainee Software Developer Intern — Pune, India">
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm"><li>Developed full-stack web applications using Python, Django, and Flask.</li><li>Gained hands-on experience in backend development, database integration, CRUD operations, and UI development during a 6-week industrial training program.</li></ul>
              </ResumeItem>
            </ResumeSection>

            <ResumeSection title="Projects">
              <ResumeItem title="DocIntegrity AI — AI-Powered Assignment Integrity Verification" subtitle="Django, Python, MySQL, PyTorch, OCR, GPTZero API">
                <ProjectLinks github="https://github.com/avaleajay170/DocIntegrity-AI" />
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm"><li>Built a web-based system to verify assignment authenticity using handwriting and AI-content detection.</li><li>Developed a Siamese Neural Network using the IAM Handwriting Database and custom student handwriting dataset, achieving 97% validation accuracy.</li><li>Integrated OCR and GPTZero API to extract text, detect potential AI-generated content, and provide handwriting match and AI-content scores.</li></ul>
              </ResumeItem>
              <ResumeItem title="LegalMind AI — Intelligent Legal Workflow Agent" subtitle="Python, Flask, MongoDB, Google Gemini, LangChain, FAISS, Bootstrap">
                <ProjectLinks github="https://github.com/avaleajay170/LegalMind_AI" demo="https://legalmind-ai-a23i.onrender.com/auth/login" />
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm"><li>Built a legal workflow platform for case, client, document, and deadline management using Python Flask.</li><li>Developed a RAG pipeline with FAISS and Gemini for case-aware legal research and AI-assisted conversations.</li><li>Implemented AI-powered document drafting, legal section suggestions, document analysis, and risk assessment.</li></ul>
              </ResumeItem>
              <ResumeItem title="CivicSphere — AI-Powered Civic Issue Intelligence Platform" subtitle="Flask, Python, MongoDB, Google Maps API, Gemini AI">
                <ProjectLinks github="https://github.com/avaleajay170/CivicSphere" />
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm"><li>Developed a geo-fenced civic issue reporting platform enabling location-aware complaint submission across Pune city.</li><li>Implemented AI-based classification, constituency detection, smart routing, and SLA escalation.</li><li>Built a transparent dashboard for real-time complaint tracking, status monitoring, severity analysis, and resolution updates.</li></ul>
              </ResumeItem>
            </ResumeSection>

            <ResumeSection title="Technical Skills">
              <p className="text-sm leading-7"><b className="text-[#1A1A2E] dark:text-white">Languages:</b> C, C++, Java, Python, JavaScript</p>
              <p className="text-sm leading-7"><b className="text-[#1A1A2E] dark:text-white">AI/ML:</b> ML, DL, PyTorch, Scikit-learn, OpenCV, OCR, Siamese NN, NumPy, Pandas, Matplotlib</p>
              <p className="text-sm leading-7"><b className="text-[#1A1A2E] dark:text-white">Frameworks:</b> Django, Flask, Flutter, React</p>
              <p className="text-sm leading-7"><b className="text-[#1A1A2E] dark:text-white">Databases:</b> MySQL, MongoDB, Firebase</p>
              <p className="text-sm leading-7"><b className="text-[#1A1A2E] dark:text-white">Tools:</b> Git, GitHub, Docker, VS Code, Android Studio</p>
              <p className="text-sm leading-7"><b className="text-[#1A1A2E] dark:text-white">Core CS:</b> DSA, OOP, DBMS, Operating Systems, Computer Networks</p>
            </ResumeSection>

            <ResumeSection title="Certifications">
              <p className="text-sm">SQL (Advanced) — HackerRank</p><p className="text-sm">REST API (Intermediate) — HackerRank</p><p className="text-sm">Docker and Kubernetes: The Complete Guide — Udemy</p>
            </ResumeSection>

            <ResumeSection title="Achievements">
              <ul className="list-disc ml-5 space-y-2 text-sm"><li><b className="text-[#1A1A2E] dark:text-white">DSA & Competitive Programming:</b> Solved 150+ problems on LeetCode and GeeksforGeeks.</li><li><b className="text-[#1A1A2E] dark:text-white">Techathon:</b> Best Solution Award at Innovate You National Level Techathon 3.0 (2026); Top 15/455+ teams, INR 10,000 prize.</li><li><b className="text-[#1A1A2E] dark:text-white">Uplifter Award:</b> Recognized by Sumago Infotech Pvt. Ltd. for outstanding performance during 6-week Full Stack Development training.</li><li><b className="text-[#1A1A2E] dark:text-white">Research:</b> Filed 2 patents and published 2 IEEE papers, including 1 Scopus-indexed publication.</li></ul>
            </ResumeSection>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ResumeSection = ({ title, children }) => <div><h3 className="text-xl font-sora font-bold text-[#1A1A2E] dark:text-white border-b border-[#6C63FF]/20 pb-2 mb-4">{title}</h3><div className="space-y-5">{children}</div></div>;

const ResumeItem = ({ title, right, subtitle, children }) => <div><div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1"><div><h4 className="font-sora font-bold text-base text-[#1A1A2E] dark:text-white">{title}</h4>{subtitle && <p className="text-sm mt-1">{subtitle}</p>}</div>{right && <span className="text-xs md:text-sm font-semibold text-[#6C63FF]">{right}</span>}</div>{children}</div>;

const ProjectLinks = ({ github, demo }) => <div className="flex flex-wrap gap-3 mt-2 text-xs"><a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#6C63FF] hover:underline"><Github size={13} /> GitHub</a>{demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#6C63FF] hover:underline"><ExternalLink size={13} /> Live Demo</a>}</div>;

export default Resume;
