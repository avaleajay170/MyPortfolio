import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, filterCategories } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.85 }}
    transition={{ duration: 0.4 }}
    whileHover={{ y: -8 }}
    onClick={() => onClick(project)}
    className="group glass rounded-3xl overflow-hidden shadow-glass cursor-pointer card-hover"
  >
    {/* Color banner */}
    <div className={`relative h-40 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
      <span className="text-7xl opacity-70 group-hover:scale-110 transition-transform duration-500">
        {project.emoji}
      </span>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-semibold text-sm font-inter bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
          View Details
        </span>
      </div>
      {/* Badge */}
      {project.badge && (
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/60 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-amber-600 dark:text-amber-400">
          {project.badge}
        </div>
      )}
      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-xs font-medium px-3 py-1 rounded-full text-white font-inter">
        {project.category}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="font-sora font-bold text-lg text-[#1A1A2E] dark:text-white mb-2 group-hover:text-[#6C63FF] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-[#6E7191] dark:text-[#9999BB] font-inter leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>
      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map(t => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] dark:text-[#8B85FF] font-medium font-inter"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 font-inter">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>
      {/* Links */}
      <div className="flex gap-3" onClick={e => e.stopPropagation()}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-[#6E7191] dark:text-[#9999BB] hover:text-[#6C63FF] dark:hover:text-[#8B85FF] transition-colors font-inter"
        >
          <FaGithub size={14} /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-[#6E7191] dark:text-[#9999BB] hover:text-[#FF6584] dark:hover:text-[#FF85A0] transition-colors font-inter"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 40 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full max-w-2xl bg-white dark:bg-[#16163A] rounded-3xl overflow-hidden shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      {/* Banner */}
      <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
        <span className="text-8xl opacity-80">{project.emoji}</span>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
        >
          <X size={18} />
        </button>
        {project.badge && (
          <div className="absolute bottom-4 left-6 bg-white/90 dark:bg-black/70 text-xs font-bold px-3 py-1 rounded-full text-amber-600">
            {project.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-8">
        <h3 className="font-sora font-bold text-2xl text-[#1A1A2E] dark:text-white mb-4">{project.title}</h3>
        <p className="text-[#6E7191] dark:text-[#9999BB] font-inter leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Full tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-sm px-3 py-1.5 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] dark:text-[#8B85FF] font-medium font-inter"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center">
            <FaGithub size={18} /> View Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center">
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-white dark:bg-[#0D0D1A]">
      <div className="blob w-96 h-96 bg-[#00D4FF] top-0 right-0 opacity-[0.06]" />
      <div className="blob w-80 h-80 bg-[#6C63FF] bottom-20 left-0 opacity-[0.06]" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <span className="section-tag">Projects Showcase</span>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-[#1A1A2E] dark:text-white mt-3">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="mt-4 text-[#6E7191] dark:text-[#9999BB] font-inter max-w-xl mx-auto">
            A curated collection of projects across web development, AI/ML, and IoT
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterCategories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-inter transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#6C63FF] to-[#FF6584] text-white shadow-glow'
                  : 'glass text-[#6E7191] dark:text-[#9999BB] hover:text-[#6C63FF] dark:hover:text-[#8B85FF]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#6E7191] dark:text-[#9999BB] font-inter">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
