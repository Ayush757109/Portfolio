import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {
  Zap,
  Code2,
  Users,
  Brain,
  Rocket,
  Shield,
} from 'lucide-react';

const highlights = [
  {
    icon: Rocket,
    title: 'Production Engineering',
    description:
      'Built and deployed scalable full-stack applications serving real users with high availability and performance.',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description:
      'Developing intelligent systems using modern AI APIs, voice agents, and automation workflows.',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description:
      'Focused on maintainable codebases, scalable architecture, and engineering best practices.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description:
      'Optimizing systems for speed, reliability, caching, and seamless user experiences.',
  },
  {
    icon: Users,
    title: 'User Focused',
    description:
      'Designing products around user needs, accessibility, and intuitive experiences.',
  },
  {
    icon: Shield,
    title: 'Secure Systems',
    description:
      'Building applications with authentication, authorization, and security best practices.',
  },
];

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="01 / ABOUT ME"
          title="Building Scalable Digital Experiences"
          subtitle="Full Stack Developer & AI Enthusiast focused on building impactful products with modern technologies."
        />

        {/* Top Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-bold">750+</h3>
            <p className="text-sm text-fg-muted mt-2">
              Daily AI Requests
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-bold">99.9%</h3>
            <p className="text-sm text-fg-muted mt-2">
              Uptime Achieved
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-bold">40%</h3>
            <p className="text-sm text-fg-muted mt-2">
              Faster Load Speed
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-sm text-fg-muted mt-2">
              DSA Problems
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div ref={ref} className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
                <span className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20 mb-6">
                  Available for Opportunities
                </span>

                <h3 className="text-3xl font-bold mb-6">
                  Hi, I'm Ayush 👋
                </h3>

                <p className="text-fg-muted leading-relaxed mb-5">
                  Computer Science student specializing in Artificial
                  Intelligence with experience building production-ready
                  full-stack applications, AI platforms, and real-time
                  systems.
                </p>

                <p className="text-fg-muted leading-relaxed mb-5">
                  I've worked across modern web technologies including
                  React, Next.js, Node.js, MongoDB, PostgreSQL, and AI
                  integrations, focusing on scalability, performance,
                  and user experience.
                </p>

                <p className="text-fg-muted leading-relaxed">
                  Currently focused on building intelligent products,
                  scalable architectures, and solving real-world
                  problems through software engineering.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-6
                    backdrop-blur-sm
                    hover:border-cyan-500/30
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                    transition-all
                    duration-500
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-gradient-to-br
                      from-cyan-500/5
                      via-transparent
                      to-blue-500/5
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        flex
                        items-center
                        justify-center
                        mb-5
                      "
                    >
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <h3 className="font-semibold text-lg mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-fg-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}