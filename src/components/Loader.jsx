import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="absolute w-96 h-96 rounded-full bg-[#6C63FF] opacity-10 blur-3xl top-20 left-20 animate-float" />
        <div className="absolute w-80 h-80 rounded-full bg-[#FF6584] opacity-10 blur-3xl bottom-20 right-20 animate-float-delayed" />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center shadow-glow animate-glow">
              <span className="text-4xl font-sora font-black text-white">AA</span>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#00D4FF]"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '-28px 28px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-sora font-bold text-white mb-1">
              Ajay <span className="gradient-text">Avale</span>
            </h1>
            <p className="text-sm text-[#9999BB] tracking-widest uppercase font-inter">Portfolio Loading...</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '280px' }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-70 h-1.5 rounded-full bg-white/10 overflow-hidden" style={{ width: '280px' }}>
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] to-[#FF6584]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <span className="text-xs text-[#9999BB] font-inter">{progress}%</span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
