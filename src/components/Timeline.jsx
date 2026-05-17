import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timelineItems } from '../data/timeline';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="timeline" className="section-padding relative overflow-hidden bg-[#F8F9FF] dark:bg-[#0A0A18]">
      <div className="blob w-96 h-96 bg-[#FF6584] top-0 left-0 opacity-[0.06]" />
      <div className="blob w-72 h-72 bg-[#6C63FF] bottom-0 right-0 opacity-[0.06]" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <span className="section-tag">Experience and Education</span>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-[#1A1A2E] dark:text-white mt-3">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-4 text-[#6E7191] dark:text-[#9999BB] font-inter max-w-xl mx-auto">
            Key academic, internship, and achievement milestones that shaped my growth as a developer.
          </p>
        </motion.div>

        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#6C63FF] via-[#FF6584] to-[#00D4FF] opacity-40" />

          <div className="flex flex-col gap-16">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex items-center">
                  <div className="w-1/2 pr-12 flex justify-end">
                    {isLeft ? (
                      <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        custom={index}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="glass rounded-2xl p-6 shadow-glass max-w-sm w-full"
                      >
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white font-inter inline-block mb-3`}>
                          {item.date}
                        </span>
                        <h3 className="font-sora font-bold text-lg text-[#1A1A2E] dark:text-white mb-1">{item.title}</h3>
                        <p className="text-sm font-semibold text-[#6C63FF] dark:text-[#8B85FF] mb-3 font-inter">{item.organization}</p>
                        <p className="text-sm text-[#6E7191] dark:text-[#9999BB] font-inter leading-relaxed">{item.description}</p>
                      </motion.div>
                    ) : (
                      <div className="w-full max-w-sm" />
                    )}
                  </div>

                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={index}
                    className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-sm font-bold text-white shadow-glow z-10`}
                  >
                    {item.icon}
                  </motion.div>

                  <div className="w-1/2 pl-12 flex justify-start">
                    {!isLeft ? (
                      <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        custom={index}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="glass rounded-2xl p-6 shadow-glass max-w-sm w-full"
                      >
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white font-inter inline-block mb-3`}>
                          {item.date}
                        </span>
                        <h3 className="font-sora font-bold text-lg text-[#1A1A2E] dark:text-white mb-1">{item.title}</h3>
                        <p className="text-sm font-semibold text-[#6C63FF] dark:text-[#8B85FF] mb-3 font-inter">{item.organization}</p>
                        <p className="text-sm text-[#6E7191] dark:text-[#9999BB] font-inter leading-relaxed">{item.description}</p>
                      </motion.div>
                    ) : (
                      <div className="w-full max-w-sm" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-6">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={index}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xs font-bold text-white shadow-glow flex-shrink-0 z-10`}>
                  {item.icon}
                </div>
                {index < timelineItems.length - 1 && (
                  <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-[#6C63FF] to-[#FF6584] opacity-30" />
                )}
              </div>
              <div className="glass rounded-2xl p-5 shadow-glass flex-1 mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-inter inline-block`}>
                  {item.date}
                </span>
                <h3 className="font-sora font-bold text-base text-[#1A1A2E] dark:text-white mt-3 mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-[#6C63FF] dark:text-[#8B85FF] mb-2 font-inter">{item.organization}</p>
                <p className="text-sm text-[#6E7191] dark:text-[#9999BB] font-inter leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
