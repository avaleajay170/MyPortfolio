import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { stats, certifications, achievements } from '../data/achievements';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Counter = ({ target, suffix = '', inView }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-white dark:bg-[#0D0D1A]">
      <div className="blob w-96 h-96 bg-[#6C63FF] top-20 right-0 opacity-[0.07]" />
      <div className="blob w-80 h-80 bg-[#00D4FF] bottom-0 left-0 opacity-[0.07]" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="section-tag">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-[#1A1A2E] dark:text-white mt-3">
            Recognition and <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(108,99,255,0.2)' }}
              className="glass rounded-2xl p-5 text-center shadow-glass"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-sora font-black gradient-text">
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-xs text-[#6E7191] dark:text-[#9999BB] font-inter mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className={`grid gap-12 ${certifications.length > 0 ? 'lg:grid-cols-2' : ''}`}>
          <div>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
              className="font-sora font-bold text-2xl text-[#1A1A2E] dark:text-white mb-6"
            >
              Notable Achievements
            </motion.h3>
            <div className="flex flex-col gap-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i + 3}
                  whileHover={{ x: 6 }}
                  className="glass rounded-2xl p-5 shadow-glass flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center flex-shrink-0 shadow-glow text-xs font-bold text-white">
                    {ach.result.split(' ')[0]}
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-sm text-[#1A1A2E] dark:text-white group-hover:text-[#6C63FF] transition-colors">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[#6C63FF] dark:text-[#8B85FF] font-semibold font-inter mt-0.5">
                      {ach.result}
                    </p>
                    <p className="text-xs text-[#6E7191] dark:text-[#9999BB] font-inter mt-0.5">{ach.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {certifications.length > 0 && (
            <div>
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={2}
                className="font-sora font-bold text-2xl text-[#1A1A2E] dark:text-white mb-6"
              >
                Certifications
              </motion.h3>
              <div className="grid gap-4">
                {certifications.map((cert, i) => (
                  <motion.a
                    key={cert.id}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={i + 3}
                    whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(108,99,255,0.2)' }}
                    className="glass rounded-2xl p-5 shadow-glass flex items-center gap-4 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-sora font-bold text-sm text-[#1A1A2E] dark:text-white group-hover:text-[#6C63FF] transition-colors truncate">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#6E7191] dark:text-[#9999BB] font-inter">{cert.issuer}</p>
                      <p className="text-xs text-[#6C63FF] dark:text-[#8B85FF] font-semibold font-inter mt-0.5">{cert.date}</p>
                    </div>
                    <ExternalLink size={14} className="text-[#6E7191] dark:text-[#9999BB] group-hover:text-[#6C63FF] flex-shrink-0 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
