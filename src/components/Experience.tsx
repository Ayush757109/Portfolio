import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Briefcase, MapPin, Calendar } from 'lucide-react';


const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    period: "Nov 2025 – Jan 2026",
    location: "Remote",
    color: "from-cyan-500 to-blue-500",
    points: [
      "Built and deployed production-ready fintech features using React.js, Next.js, Node.js, and MongoDB",
      "Enhanced application performance and optimized API response times across critical workflows",
      "Developed secure authentication flows and financial data integrations",
      "Collaborated with engineering teams in agile sprint cycles and code reviews",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Owl AI",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    color: "from-purple-500 to-pink-500",
    points: [
      "Designed and developed scalable full-stack applications using modern JavaScript frameworks",
      "Implemented REST APIs with JWT authentication and backend caching strategies",
      "Improved application efficiency through optimized service architecture",
      "Maintained and enhanced production systems with a strong focus on reliability",
    ],
  },
];
export default function Experience() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="03 / Experience"
          title="Professional Journey"
        />

        <p className="max-w-2xl text-gray-400 mb-16">
          Hands-on experience building modern web
          applications, AI-powered products, and
          scalable full-stack systems using React,
          Next.js, TypeScript, Node.js, and cloud
          technologies.
        </p>

        <div ref={ref} className="relative">
          {/* Timeline */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: i * 0.2,
              }}
              className="relative pl-14 md:pl-24 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-6 top-4">
                <div className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                  hover:border-cyan-400/30
                  hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)]
                "
              >
                {/* Header */}
                <div className="flex flex-wrap justify-between gap-6 mb-8">
                  <div>
                    <div className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-xs font-semibold text-white mb-4">
                      {exp.company}
                    </div>

                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-right space-y-2">
                    <div className="flex items-center justify-end gap-2 text-gray-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>

                    <div className="flex items-center justify-end gap-2 text-gray-400 text-sm">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {exp.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              x: 0,
                            }
                          : {}
                      }
                      transition={{
                        delay: 0.4 + j * 0.1,
                      }}
                      className="
                        flex
                        items-start
                        gap-3
                        text-gray-300
                        leading-relaxed
                        text-sm
                      "
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "MongoDB",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-3
                        py-1
                        text-xs
                        text-cyan-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

