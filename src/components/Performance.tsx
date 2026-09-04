import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Performance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] max-w-4xl bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-medium tracking-tight mb-6"
            >
              Unrelenting performance.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-neutral-400 leading-relaxed mb-8"
            >
              The Nova cell architecture eliminates busbars and relies on a pure copper foundation to conduct electricity. This significantly reduces resistance and thermal degradation, meaning your system generates more power in high temperatures and lasts decades longer than conventional panels.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <div className="text-4xl font-semibold text-amber-500 mb-1">400W</div>
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Peak Output</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-amber-500 mb-1">0.2%</div>
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Annual Degradation</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-square bg-neutral-900 border border-neutral-800 rounded-3xl relative flex items-center justify-center overflow-hidden"
          >
             {/* Abstract representation of a solar cell */}
             <motion.div 
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               variants={{
                 visible: {
                   transition: { staggerChildren: 0.02 }
                 }
               }}
               className="w-[80%] h-[80%] grid grid-cols-6 gap-1 relative z-10"
             >
                {Array.from({ length: 36 }).map((_, i) => (
                  <motion.div 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-neutral-800 rounded-sm relative overflow-hidden group hover:bg-amber-600/20 transition-colors duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    {/* Busbar lines */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/10 group-hover:bg-amber-400/50 transition-colors duration-300" />
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 group-hover:bg-amber-400/50 transition-colors duration-300" />
                  </motion.div>
                ))}
             </motion.div>
             
             {/* Glow effect matching cell layout */}
             <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-transparent opacity-50 mix-blend-screen" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
