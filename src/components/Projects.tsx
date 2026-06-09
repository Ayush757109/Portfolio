import { useRef,  } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink, Github,  } from 'lucide-react';

const projects = [
  {
    badge: '750+ Daily Prompts',
    title: 'QuickAI',
    subtitle: 'AI-Powered Content & Image Generation Platform',

    tech: [
      'React.js',
      'Express.js',
      'PostgreSQL',
      'Gemini AI',
      'Cloudinary',
      'Clerk'
    ],

    metrics: [
      '99.9% Uptime',
      '<2s Latency',
      '35% Faster API'
    ],

    architecture:
      'Microservices • REST APIs • Intelligent Caching • Subscription Billing',

    description:
      'Built a production-ready AI SaaS platform processing 750+ daily prompts for content and image generation. Implemented intelligent caching, authentication, payments, and scalable backend services.',

    features: [
      'AI Content Generation',
      'AI Image Generation',
      'Secure Authentication',
      'Subscription Payments',
      'Cloud Media Storage'
    ],

    links: {
      live: 'https://quick-ai-g.vercel.app/',
      github: 'https://github.com/Ayush757109/QuickAI/'
    }
  },

  {
    badge: '75% Engagement Boost',
    title: 'HealthAI',
    subtitle: 'AI Healthcare Consultation Platform',
    

    tech: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'Neon',
      'Vapi',
      'Clerk'
    ],

    metrics: [
      '40% Faster Load',
      '75% More Engagement',
      'HIPAA Ready'
    ],

    architecture:
      'SSR • RBAC • AI Voice Agents • Secure Medical Records',

    description:
      'Developed an AI-powered healthcare consultation system with real-time voice interactions, secure patient management, and server-side rendering for optimal performance.',

    features: [
      'Voice Consultation',
      'Role-Based Access',
      'Appointment Scheduling',
      'Medical Records',
      'Secure Authentication'
    ],

    links: {
      live: 'https://ai-dentwise-ccun.vercel.app/',
      github: 'https://github.com/Ayush757109/AI-Dentwise/'
    }
  },

  {
    badge: '30% Lower Latency',
    title: 'ZoomClone',
    subtitle: 'Real-Time Video Conferencing Platform',
    image: '/projects/zoomclone.png',

    tech: [
      'React.js',
      'Node.js',
      'MongoDB',
      'WebRTC',
      'Socket.IO'
    ],

    metrics: [
      'Real-Time Video',
      '30% Faster Signaling',
      'Low Latency'
    ],

    architecture:
      'WebRTC • Socket.IO • P2P Communication • Token Authentication',

    description:
      'Built a scalable real-time video conferencing platform with peer-to-peer communication, secure room access, and optimized WebRTC signaling architecture.',

    features: [
      'Video Calls',
      'Audio Calls',
      'Screen Sharing',
      'Chat System',
      'Secure Rooms'
    ],

    links: {
      live: 'https://zoomvideocall-frontend.onrender.com/',
      github: 'https://github.com/Ayush757109/ZoomVideoCall'
    }
  }
];

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
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
        hover:border-cyan-500/30
        hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
        transition-all
        duration-500
      "
    >
      {/* Glow Effect */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-r
          from-cyan-500/5
          via-transparent
          to-violet-500/5
        "
      />

      <div className="relative z-10 p-8 md:p-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="
                px-4
                py-1.5
                rounded-full
                text-xs
                font-semibold
                bg-emerald-500/10
                text-emerald-400
                border
                border-emerald-500/20
              "
            >
              ● Production Ready
            </span>

            <span
              className="
                px-4
                py-1.5
                rounded-full
                text-xs
                font-semibold
                bg-cyan-500/10
                text-cyan-400
                border
                border-cyan-500/20
              "
            >
              {project.badge}
            </span>
          </div>

          <div className="flex gap-3">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-cyan-500
                text-black
                font-medium
                hover:scale-105
                transition-all
              "
            >
              <ExternalLink className="w-4 h-4" />
              Launch Project
            </a>

            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                border
                border-white/10
                hover:border-cyan-500/30
                hover:bg-cyan-500/5
                transition-all
              "
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-cyan-400 text-sm mb-5">
              {project.subtitle}
            </p>

            <p className="text-fg-muted leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-4
                    text-center
                  "
                >
                  <p className="font-bold text-lg">{metric}</p>

                  <p className="text-xs text-fg-muted mt-1">
                    Impact
                  </p>
                </div>
              ))}
            </div>

            {/* Architecture */}
            <div
              className="
                rounded-2xl
                border
                border-cyan-500/10
                bg-cyan-500/[0.03]
                p-5
                mb-8
              "
            >
              <p className="text-xs uppercase tracking-wider text-cyan-400 mb-3">
                SYSTEM ARCHITECTURE
              </p>

              <p className="font-mono text-sm text-cyan-300">
                {project.architecture}
              </p>
            </div>

            {/* Features */}
            <div>
              <p className="text-xs uppercase tracking-wider text-fg-dim mb-4">
                WHAT I BUILT
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      p-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.02]
                    "
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />

                    <span className="text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-cyan-400 mb-5">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
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
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-cyan-400 mb-5">
                Key Highlights
              </h4>

              <div className="space-y-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      p-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.02]
                    "
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />

                    <span className="text-sm text-fg-muted">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                <p className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
                  Engineering Focus
                </p>

                <p className="text-sm text-fg-muted">
                  Scalable Architecture • Performance Optimization •
                  Authentication • Real-Time Systems • Cloud Deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="02 / FEATURED PROJECTS"
          title="Production Systems I've Built"
          subtitle="AI products, real-time applications, and scalable full-stack systems designed for production use."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
            <p className="text-3xl font-bold">3+</p>
            <p className="text-sm text-fg-muted mt-1">
              Production Projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
            <p className="text-3xl font-bold">750+</p>
            <p className="text-sm text-fg-muted mt-1">
              Daily AI Requests
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
            <p className="text-3xl font-bold">99.9%</p>
            <p className="text-sm text-fg-muted mt-1">
              Uptime Achieved
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
            <p className="text-3xl font-bold">100+</p>
            <p className="text-sm text-fg-muted mt-1">
              DSA Problems Solved
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-fg-muted text-sm">
              Interested in seeing more?
            </p>

            <a
              href="https://github.com/Ayush757109"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                rounded-2xl
                border border-cyan-500/30
                bg-cyan-500/5
                hover:bg-cyan-500/10
                hover:border-cyan-500/50
                transition-all duration-300
                font-medium
              "
            >
              Explore All Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}