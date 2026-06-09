import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useSpring(0, {
    stiffness: 300,
    damping: 25,
  });

  const cursorY = useSpring(0, {
    stiffness: 300,
    damping: 25,
  });

  const dotX = useSpring(0, {
    stiffness: 1000,
    damping: 50,
  });

  const dotY = useSpring(0, {
    stiffness: 1000,
    damping: 50,
  });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      dotX.set(e.clientX);
      dotY.set(e.clientY);

      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          'a, button, input, textarea, [data-cursor-hover]'
        )
      ) {
        setHovering(true);
      }
    };

    const out = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          'a, button, input, textarea, [data-cursor-hover]'
        )
      ) {
        setHovering(false);
      }
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, []);

  if (
    typeof window !== 'undefined' &&
    window.innerWidth < 768
  ) {
    return null;
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: hovering
              ? 80
              : clicking
              ? 20
              : 40,
            height: hovering
              ? 80
              : clicking
              ? 20
              : 40,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            relative
            rounded-full
            border
            border-cyan-400/50
            bg-cyan-400/5
            backdrop-blur-md
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/20
              blur-xl
            "
          />

          {/* Text */}
          {hovering && (
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-[10px]
                font-semibold
                tracking-widest
                uppercase
                text-cyan-300
              "
            >
              View
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10001]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: clicking ? 0.7 : 1,
            opacity:
              visible && !hovering
                ? 1
                : 0.8,
          }}
          transition={{
            duration: 0.15,
          }}
          className="
            w-2
            h-2
            rounded-full
            bg-cyan-400
            shadow-[0_0_15px_rgba(34,211,238,0.8)]
          "
        />
      </motion.div>
    </>
  );
}