
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center font-bold">
              A
            </div>

           <div className="hidden sm:block text-left">
  <h2 className="font-bold text-white">
    Ayush Maurya
  </h2>

  <p className="text-xs text-gray-400">
    Software Engineer | Full Stack & AI Applications
  </p>
</div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="
                  relative
                  text-sm
                  text-gray-300
                  hover:text-white
                  transition
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  hover:after:w-full
                "
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-xs text-green-300">
                Available
              </span>
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1zioFOwSbItjSG6jpt-bJm0nEinqaKwmD"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                px-5 py-2
                text-sm
                font-medium
                text-white
                hover:scale-105
                transition
              "
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-40
              bg-black/95
              backdrop-blur-xl
              flex flex-col
              items-center
              justify-center
              gap-8
            "
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-3xl font-bold"
              >
                {link.label}
              </button>
            ))}

            <a
              href="https://drive.google.com/uc?export=download&id=1zioFOwSbItjSG6jpt-bJm0nEinqaKwmD"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                px-6 py-3
                font-medium
              "
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

