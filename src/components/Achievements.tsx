import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {
  Trophy,
  Medal,
  Award,
  Code2,
  ArrowUpRight,
} from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '1st Place – Webathon',
    stat: '#1',
    description:
      'Built an AI-powered MERN e-commerce platform and secured first place among all competing teams.',
  },
  {
    icon: Medal,
    title: 'Top 10 / 200+ Teams',
    stat: 'Top 5%',
    description:
      'Ranked among the top 10 teams with QuizLab AI at the Web Wizard Hackathon.',
  },
  {
    icon: Award,
    title: 'Hackfest 2024',
    stat: 'National',
    description:
      'Developed a disaster management platform focused on emergency response and resource coordination.',
  },
  {
    icon: Code2,
    title: 'DSA & Problem Solving',
    stat: '100+',
    description:
      'Solved 100+ coding problems across LeetCode, HackerRank, and competitive programming platforms.',
  },
];

export default function Achievements() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="achievements"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="04 / ACHIEVEMENTS"
          title="Recognition & Impact"
          subtitle="Highlights that reflect problem-solving ability, technical expertise, and competitive achievements."
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <h3 className="text-3xl font-bold">2</h3>
            <p className="text-sm text-fg-muted mt-1">
              Internships
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-sm text-fg-muted mt-1">
              Projects Built
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm text-fg-muted mt-1">
              DSA Problems
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <h3 className="text-3xl font-bold">Top 5%</h3>
            <p className="text-sm text-fg-muted mt-1">
              Hackathon Ranking
            </p>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
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
                hover:border-yellow-500/30
                hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]
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
                  from-yellow-500/5
                  via-transparent
                  to-orange-500/5
                "
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-yellow-500/10
                      border
                      border-yellow-500/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <item.icon className="w-6 h-6 text-yellow-400" />
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-fg-dim group-hover:text-yellow-400 transition-colors" />
                </div>

                <div className="mb-4">
                  <p className="text-3xl font-bold text-yellow-400">
                    {item.stat}
                  </p>
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
    </section>
  );
}