import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/achievements';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white dark:bg-[#0D0D1A]">
      <div className="blob w-96 h-96 bg-[#6C63FF] -top-20 -left-20 opacity-[0.07]" />
      <div className="blob w-72 h-72 bg-[#FF6584] bottom-0 right-0 opacity-[0.07]" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="section-tag">About Me</span>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-[#1A1A2E] dark:text-white mt-3">
            Building Practical <span className="gradient-text">Software</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
              className="relative"
            >
              <span className="absolute -top-6 -left-4 text-7xl text-[#6C63FF] opacity-15 font-sora font-black select-none">"</span>
              <p className="text-[#6E7191] dark:text-[#9999BB] text-lg leading-relaxed font-inter relative z-10">
                I'm an Information Technology student at Vishwakarma Institute of Technology, Pune,
                with strong foundations in data structures, full stack development, and artificial intelligence.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
              className="text-[#6E7191] dark:text-[#9999BB] text-base leading-relaxed font-inter"
            >
              I have hands-on experience building scalable web and mobile applications using Python,
              Flask, Flutter, Firebase, MySQL, and REST APIs, with a focus on secure and efficient software systems.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
              className="text-[#6E7191] dark:text-[#9999BB] text-base leading-relaxed font-inter"
            >
              My internship at Sumago Infotech strengthened my backend, database, and UI development
              skills, and my projects reflect interests in fintech security, civic technology, and reliable verification systems.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={4}
              className="flex flex-wrap gap-4 mt-2"
            >
              <a href="/resume.pdf" download className="btn-primary">
                <span>Download Resume</span>
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Let's Talk
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 2}
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ duration: 0.25 }}
                className="glass rounded-2xl p-5 text-center shadow-glass card-hover"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-sora font-black gradient-text">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs text-[#6E7191] dark:text-[#9999BB] font-inter mt-1 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={8}
          className="grid sm:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: '01',
              title: 'Full Stack Mindset',
              desc: 'Comfortable with backend logic, databases, APIs, and responsive frontend interfaces.',
            },
            {
              icon: '02',
              title: 'Security Focused',
              desc: 'Interested in fraud detection, secure authentication, and trustworthy product workflows.',
            },
            {
              icon: '03',
              title: 'Continuous Learner',
              desc: 'Always improving through projects, internships, and hands-on implementation.',
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(108,99,255,0.15)' }}
              className="glass rounded-2xl p-6 shadow-glass transition-all"
            >
              <div className="text-2xl mb-4 font-sora font-black gradient-text">{card.icon}</div>
              <h3 className="font-sora font-bold text-lg text-[#1A1A2E] dark:text-white mb-2">{card.title}</h3>
              <p className="text-sm text-[#6E7191] dark:text-[#9999BB] font-inter leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
