import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="font-mono text-fg-muted text-sm tracking-[0.3em] uppercase mb-6">Ayush Kumar Maurya</p>
        <div className="relative w-48 h-[1px] bg-border mx-auto mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-fg"
            style={{ width: `${count}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <span className="font-mono text-fg-dim text-xs">{count}%</span>
      </motion.div>
    </motion.div>
  );
}
