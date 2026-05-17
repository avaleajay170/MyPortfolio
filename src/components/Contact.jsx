import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/avaleajay170', label: 'GitHub', color: 'hover:text-[#333] dark:hover:text-white' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajay-avale-109a022a0/', label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
  { icon: MdEmail, href: 'mailto:avaleajay95@gmail.com', label: 'Email', color: 'hover:text-[#FF6584]' },
];

const contactInfo = [
  { icon: MdEmail, label: 'Email', value: 'avaleajay95@gmail.com', href: 'mailto:avaleajay95@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
  { icon: Phone, label: 'Phone', value: '+91 8624020411', href: 'tel:+918624020411' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 1500));
    console.log('Form data:', data);
    setSubmitStatus('success');
    reset();
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#F8F9FF] dark:bg-[#0A0A18]">
      <div className="blob w-96 h-96 bg-[#6C63FF] -top-20 -right-20 opacity-[0.08]" />
      <div className="blob w-80 h-80 bg-[#FF6584] -bottom-16 -left-16 opacity-[0.08]" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-[#1A1A2E] dark:text-white mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-[#6E7191] dark:text-[#9999BB] font-inter max-w-xl mx-auto">
            Open to internships, collaboration opportunities, and meaningful software conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
              <h3 className="font-sora font-bold text-2xl text-[#1A1A2E] dark:text-white mb-4">Say Hello</h3>
              <p className="text-[#6E7191] dark:text-[#9999BB] font-inter leading-relaxed">
                If you have an internship opportunity, a project idea, or want to discuss technology,
                feel free to reach out. I would be glad to connect.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={info.label}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={i + 2}
                    whileHover={{ x: 6 }}
                    className="glass rounded-2xl p-5 shadow-glass flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center shadow-glow flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6E7191] dark:text-[#9999BB] font-inter mb-0.5">{info.label}</p>
                      <p className="font-semibold text-sm text-[#1A1A2E] dark:text-white group-hover:text-[#6C63FF] dark:group-hover:text-[#8B85FF] transition-colors font-inter">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={6}>
              <p className="text-sm text-[#6E7191] dark:text-[#9999BB] font-inter mb-4">Find me on social media:</p>
              <div className="flex gap-4">
                {socialLinks.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <motion.a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 glass rounded-2xl flex items-center justify-center text-[#6E7191] dark:text-[#9999BB] shadow-glass transition-colors ${soc.color}`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            className="glass rounded-3xl p-8 shadow-glass"
          >
            <h3 className="font-sora font-bold text-xl text-[#1A1A2E] dark:text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] dark:text-white mb-2 font-inter">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-white/5 text-[#1A1A2E] dark:text-white placeholder-[#9999BB] font-inter text-sm outline-none transition-all focus:ring-2 focus:ring-[#6C63FF]/40 ${
                    errors.name ? 'border-[#FF6584]' : 'border-[#6C63FF]/20 focus:border-[#6C63FF]'
                  }`}
                />
                {errors.name && <p className="text-xs text-[#FF6584] mt-1 font-inter">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] dark:text-white mb-2 font-inter">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
                  })}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-white/5 text-[#1A1A2E] dark:text-white placeholder-[#9999BB] font-inter text-sm outline-none transition-all focus:ring-2 focus:ring-[#6C63FF]/40 ${
                    errors.email ? 'border-[#FF6584]' : 'border-[#6C63FF]/20 focus:border-[#6C63FF]'
                  }`}
                />
                {errors.email && <p className="text-xs text-[#FF6584] mt-1 font-inter">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] dark:text-white mb-2 font-inter">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="Internship Opportunity / Collaboration"
                  className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-white/5 text-[#1A1A2E] dark:text-white placeholder-[#9999BB] font-inter text-sm outline-none transition-all focus:ring-2 focus:ring-[#6C63FF]/40 ${
                    errors.subject ? 'border-[#FF6584]' : 'border-[#6C63FF]/20 focus:border-[#6C63FF]'
                  }`}
                />
                {errors.subject && <p className="text-xs text-[#FF6584] mt-1 font-inter">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] dark:text-white mb-2 font-inter">
                  Message *
                </label>
                <textarea
                  rows={4}
                  {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-white/5 text-[#1A1A2E] dark:text-white placeholder-[#9999BB] font-inter text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-[#6C63FF]/40 ${
                    errors.message ? 'border-[#FF6584]' : 'border-[#6C63FF]/20 focus:border-[#6C63FF]'
                  }`}
                />
                {errors.message && <p className="text-xs text-[#FF6584] mt-1 font-inter">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700"
                  >
                    <CheckCircle size={18} className="text-emerald-500" />
                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 font-inter">
                      Message received. I will get back to you soon.
                    </p>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700"
                  >
                    <AlertCircle size={18} className="text-red-500" />
                    <p className="text-sm font-medium text-red-700 dark:text-red-400 font-inter">
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
