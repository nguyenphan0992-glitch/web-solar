import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GalaxyScene } from "./Galaxy";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <GalaxyScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10 pointer-events-none" />
      </motion.div>

      <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-amber-500 font-medium tracking-widest uppercase mb-6"
        >
          Introducing Nova
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-8"
        >
          Power, <br />
          pure and simple.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light mb-12"
        >
          Our most efficient solar architecture ever. Designed to capture more light, generate more energy, and seamlessly integrate into your life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
           <button className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-neutral-200 transition-colors">
             Explore Nova
           </button>
           <button className="px-8 py-4 bg-transparent border border-neutral-700 text-white rounded-full font-medium text-lg hover:bg-neutral-900 transition-colors backdrop-blur-sm">
             View Specs
           </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
