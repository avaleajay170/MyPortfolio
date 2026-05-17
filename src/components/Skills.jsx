import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories, techBadges } from '../data/skills';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#F8F9FF] dark:bg-[#0A0A18]">
      <div className="blob w-96 h-96 bg-[#6C63FF] top-0 right-0 opacity-[0.06]" />
      <div className="blob w-80 h-80 bg-[#FF6584] bottom-0 left-0 opacity-[0.06]" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="section-tag">Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-[#1A1A2E] dark:text-white mt-3">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="mt-4 text-[#6E7191] dark:text-[#9999BB] font-inter max-w-xl mx-auto">
            Technologies and tools I use to build secure, practical, and efficient applications.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge.name}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease: 'backOut' }}
              whileHover={{ scale: 1.12, y: -4 }}
              className="px-4 py-2 rounded-full font-semibold text-sm font-inter border shadow-sm cursor-default"
              style={{
                color: badge.color,
                background: badge.bg,
                borderColor: `${badge.color}40`,
              }}
            >
              {badge.name}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={catIdx + 2}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8 shadow-glass card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}>
                  <span className="text-white text-sm font-bold">
                    {catIdx === 0 ? 'FE' : catIdx === 1 ? 'BE' : catIdx === 2 ? 'AI' : 'DB'}
                  </span>
                </div>
                <h3 className="font-sora font-bold text-lg text-[#1A1A2E] dark:text-white">{cat.label}</h3>
              </div>

              <div className="flex flex-col gap-5">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center">
                          {skill.icon}
                        </span>
                        <span className="font-inter font-medium text-sm text-[#1A1A2E] dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#6C63FF] dark:text-[#8B85FF]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 + catIdx * 0.1 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={7}
          className="text-center text-sm text-[#6E7191] dark:text-[#9999BB] mt-12 font-inter"
        >
          Always learning • Always building • Always improving
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
