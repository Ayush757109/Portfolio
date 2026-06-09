
import { motion } from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  Send,
  Github,
  Linkedin,
} from "lucide-react";

const letterVariants = {
  hidden: {
    y: 120,
    opacity: 0,
    rotateX: 40,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
};

const line1 = "Full Stack Engineer";
const line2 = "Building AI Products";
const line3 = "That Scale";

function AnimatedLine({
  text,
  startIndex,
  gradient = false,
}: {
  text: string;
  startIndex: number;
  gradient?: boolean;
}) {
  return (
    <span className="block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={`${startIndex}-${i}-${char}`}
          custom={startIndex + i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className={`inline-block ${
            gradient
              ? "bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
              : ""
          }`}
          style={{
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Blur Effects */}
      <div className="absolute top-1/4 right-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>

          <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-gray-500">
            Software Engineer / Full Stack Developer
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="mb-8 text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
          <AnimatedLine text={line1} startIndex={0} />
          <AnimatedLine text={line2} startIndex={line1.length} />
          <AnimatedLine
            text={line3}
            startIndex={line1.length + line2.length}
            gradient
          />
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
        >
          Building scalable SaaS platforms, AI-powered applications,
          and modern web experiences using React, Next.js,
          TypeScript, Node.js, and Generative AI technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:scale-105"
          >
            Explore My Work

            <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-white/5"
          >
            Contact Me

            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="https://github.com/Ayush757109"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 transition hover:bg-white/5"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/ayush2112"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 transition hover:bg-white/5"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "OpenAI",
            "AWS",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:border-cyan-400 hover:bg-cyan-500/10 transition"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {[
            "AI Applications",
            "Full Stack Development",
            "Problem Solving",
            "Open Source",
            "Cloud Learning",
            "Responsive Design",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Resume Button */}
       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2.4 }}
  className="mt-10"
>
  <a
    href="https://drive.google.com/uc?export=download&id=1zioFOwSbItjSG6jpt-bJm0nEinqaKwmD"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16"
      />
    </svg>

    Download Resume
  </a>
</motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}



      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </motion.div>
  


