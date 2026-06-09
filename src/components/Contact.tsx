import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
  MapPin,
  Phone,
} from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ayushmaurya2112@gmail.com',
    href: 'mailto:ayushmaurya2112@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ayush2112',
    href: 'https://www.linkedin.com/in/ayush2112',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Ayush757109',
    href: 'https://github.com/Ayush757109',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-6386699125',
    href: 'tel:+916386699125',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ghaziabad, Uttar Pradesh, India',
    href: '#',
  },
];

export default function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(`
Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
    `);

    window.location.href =
      `mailto:ayushmaurya2112@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="06 / CONTACT"
          title="Let's Build Something Exceptional"
          subtitle="Open to Software Engineering, Full Stack Development, AI Engineering, and Internship opportunities."
        />

        {/* Availability Badge */}
        <div className="mb-12">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-emerald-500/10
              border
              border-emerald-500/20
              text-emerald-400
              text-sm
              font-medium
            "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Full-Time & Internship Opportunities
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold">2</h3>
            <p className="text-sm text-fg-muted mt-1">
              Internships
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-sm text-fg-muted mt-1">
              Production Projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm text-fg-muted mt-1">
              DSA Problems
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold">99.9%</h3>
            <p className="text-sm text-fg-muted mt-1">
              Uptime
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith('http')
                    ? '_blank'
                    : undefined
                }
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  backdrop-blur-sm
                  hover:border-cyan-500/30
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                  transition-all
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <link.icon className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="flex-1">
                  <span className="block text-xs uppercase tracking-wider text-fg-dim mb-1">
                    {link.label}
                  </span>

                  <span className="text-sm">
                    {link.value}
                  </span>
                </div>

                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-sm
              p-8
            "
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">
                Interested in working together?
              </h3>

              <p className="text-fg-muted">
                Whether you're hiring for a Full Stack
                Engineer, Software Developer, or AI
                Engineer role, I'd love to discuss how I
                can contribute.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-4
                  outline-none
                  focus:border-cyan-500/40
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-4
                  outline-none
                  focus:border-cyan-500/40
                "
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-4
                  resize-none
                  outline-none
                  focus:border-cyan-500/40
                "
              />

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                  transition-all
                "
              >
                {submitted
                  ? 'Message Sent ✓'
                  : 'Send Message'}

                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}