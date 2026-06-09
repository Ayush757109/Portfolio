import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    label: 'Frontend Engineering',
    icon: '⚛️',
    skills: [
      'React.js',
      'Next.js',
      'Redux',
      'Zustand',
      'Tailwind CSS',
      'Shadcn/UI',
    ],
  },
  {
    label: 'Backend Engineering',
    icon: '🚀',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Prisma ORM',
      'Neon',
    ],
  },
  {
    label: 'Programming',
    icon: '💻',
    skills: [
      'JavaScript',
      'TypeScript',
      'Java',
      'C++',
      'C',
    ],
  },
  {
    label: 'Computer Science',
    icon: '🧠',
    skills: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'System Design',
      'Problem Solving',
    ],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'Vercel',
      'Render',
      'CI/CD',
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="05 / TECH STACK"
          title="Technologies I Build With"
          subtitle="Modern technologies, frameworks, and engineering practices used to build scalable production applications."
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-sm text-fg-muted mt-1">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-sm text-fg-muted mt-1">
              Production Projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm text-fg-muted mt-1">
              DSA Problems
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold">2</h3>
            <p className="text-sm text-fg-muted mt-1">
              Internships
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-sm
                p-6
                hover:border-cyan-500/30
                hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                transition-all
                duration-500
              "
            >
              {/* Glow */}
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
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">
                    {cat.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      {cat.label}
                    </h3>

                    <p className="text-xs text-fg-dim">
                      {cat.skills.length} Technologies
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              scale: 1,
                            }
                          : {}
                      }
                      transition={{
                        delay:
                          catIndex * 0.08 +
                          i * 0.05,
                      }}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="
                        px-3
                        py-2
                        rounded-xl
                        text-xs
                        font-medium
                        bg-gradient-to-r
                        from-cyan-500/10
                        to-blue-500/10
                        border
                        border-cyan-500/20
                        text-cyan-300
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}