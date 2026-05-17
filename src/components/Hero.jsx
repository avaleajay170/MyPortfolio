import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Eye, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ParticlesBackground from './ParticlesBackground';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/avaleajay170', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajay-avale-109a022a0/', label: 'LinkedIn' },
  { icon: MdEmail, href: 'mailto:avaleajay95@gmail.com', label: 'Email' },
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero-light dark:bg-gradient-hero-dark"
    >
      <ParticlesBackground />

      <div className="blob w-[500px] h-[500px] bg-[#6C63FF] top-[-100px] right-[-100px]" />
      <div className="blob w-[400px] h-[400px] bg-[#FF6584] bottom-[-80px] left-[-80px]" />
      <div className="blob w-[300px] h-[300px] bg-[#00D4FF] top-[40%] left-[20%]" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Available for internships and software roles</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-sora font-black text-5xl md:text-6xl xl:text-7xl leading-tight text-[#1A1A2E] dark:text-white">
                Hi, I'm <span className="gradient-text">Ajay</span>
                <br />
                <span className="gradient-text">Avale</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-poppins font-medium text-[#6E7191] dark:text-[#9999BB]"
            >
              <span>I'm an </span>
              <TypeAnimation
                sequence={[
                  'Information Technology Student',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Flutter and Flask Builder',
                  2000,
                  'AI-Powered App Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-bold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#6E7191] dark:text-[#9999BB] text-base md:text-lg leading-relaxed max-w-lg font-inter"
            >
              Information Technology student at VIT Pune with strong foundations in data structures,
              full stack development, and applied AI. I build secure and efficient web and mobile
              applications with Python, Flask, Flutter, Firebase, and REST APIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Eye size={18} />
                <span>View Projects</span>
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                <Download size={18} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                <Mail size={18} />
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-[#6E7191] dark:text-[#9999BB] font-inter">Find me on:</span>
              <div className="flex gap-3">
                {socialLinks.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <motion.a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#6E7191] dark:text-[#9999BB] hover:text-[#6C63FF] dark:hover:text-[#8B85FF] shadow-glass transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#FF6584] blur-2xl opacity-40 animate-pulse-slow scale-110" />
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#6C63FF] via-[#FF6584] to-[#00D4FF] animate-spin-slow opacity-80" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-[#16163A] animate-glow">
                <div className="w-full h-full bg-gradient-to-br from-[#6C63FF] via-[#9B80FF] to-[#FF6584] flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-sora font-black text-white select-none">AA</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 shadow-glass"
              >
                <p className="text-xs font-semibold text-[#6C63FF] dark:text-[#8B85FF] font-inter">Open to Work</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 shadow-glass"
              >
                <p className="text-xs font-semibold text-[#FF6584] dark:text-[#FF85A0] font-inter">CGPA 9.00 / 10.0</p>
              </motion.div>

              {['IT', 'API', 'AI'].map((label, i) => (
                <motion.div
                  key={label}
                  className="absolute w-10 h-10 glass rounded-full flex items-center justify-center shadow-glass text-xs font-semibold"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: i % 2 === 0 ? '-50px' : 'auto',
                    left: i % 2 !== 0 ? '-50px' : 'auto',
                  }}
                  animate={{ y: [-6, 6, -6], rotate: [0, 10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6E7191] dark:text-[#9999BB] hover:text-[#6C63FF] transition-colors"
        >
          <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
