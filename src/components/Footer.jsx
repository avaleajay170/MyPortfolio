import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/avaleajay170', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajay-avale-109a022a0/', label: 'LinkedIn' },
  { icon: MdEmail, href: 'mailto:avaleajay95@gmail.com', label: 'Email' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#0D0D1A] dark:bg-[#07071A] py-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent" />
      <div className="blob w-72 h-72 bg-[#6C63FF] top-0 left-0 opacity-[0.05]" />
      <div className="blob w-60 h-60 bg-[#FF6584] bottom-0 right-0 opacity-[0.05]" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-sm font-sora">AA</span>
              </div>
              <span className="font-sora font-bold text-xl text-white">
                Ajay<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-sm text-[#9999BB] font-inter text-center md:text-left max-w-xs">
              Information Technology student building secure, practical, and user-focused digital products.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-[#9999BB] hover:text-[#8B85FF] transition-colors font-inter"
              >
                {link.label}
              </a>
            ))}
          </div>

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
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9999BB] hover:text-[#8B85FF] hover:bg-white/10 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9999BB] font-inter flex items-center gap-1.5">
            Made with <Heart size={14} className="text-[#FF6584] fill-[#FF6584]" /> by Ajay Avale · {new Date().getFullYear()}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm text-[#9999BB] hover:text-[#8B85FF] transition-colors font-inter"
          >
            Back to top <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
