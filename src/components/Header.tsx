import { motion } from "motion/react";
import { Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Sun className="w-6 h-6 text-amber-500" />
          <span className="font-semibold text-lg tracking-wide">SolarTech</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Research", "Products", "Safety", "Company"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-white hover:text-amber-400 transition-colors">
            Log in
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
            Order Nova
          </button>
        </div>
      </div>
    </motion.header>
  );
}
