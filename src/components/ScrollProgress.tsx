import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9999]
                   bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{ scaleX }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] origin-left z-[9998]
                   bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500
                   blur-md opacity-70"
        style={{ scaleX }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] w-32 z-[10000]
                   bg-gradient-to-r from-transparent via-white/80 to-transparent"
        animate={{
          x: ['-20%', '120vw'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </>
  );
}