import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* CTA Section */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Let's Build Something Amazing
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-fg-muted max-w-2xl mx-auto leading-relaxed"
          >
            Open to Software Engineering, Full Stack Development,
            AI Engineering, and Internship opportunities.
          </motion.p>

          <motion.a
            href="mailto:ayushmaurya2112@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold
              hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              transition-all
            "
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold">
              Ayush Maurya
            </h3>

            <p className="text-fg-muted mt-2">
              Full Stack Developer • AI Enthusiast
            </p>

            <p className="text-xs text-fg-dim mt-3">
              Building scalable applications and intelligent systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Ayush757109"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                flex
                items-center
                justify-center
                hover:border-cyan-500/30
                hover:bg-cyan-500/5
                hover:-translate-y-1
                transition-all
              "
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/ayush2112"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                flex
                items-center
                justify-center
                hover:border-cyan-500/30
                hover:bg-cyan-500/5
                hover:-translate-y-1
                transition-all
              "
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:ayushmaurya2112@gmail.com"
              className="
                w-12
                h-12
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                flex
                items-center
                justify-center
                hover:border-cyan-500/30
                hover:bg-cyan-500/5
                hover:-translate-y-1
                transition-all
              "
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-fg-dim">
              © {new Date().getFullYear()} Ayush Maurya. All rights reserved.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-fg-dim"
            >
        
              
            </motion.div>

          </div>
        </div>
      </div>
    </footer>
  );
}