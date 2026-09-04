import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Battery, SunDim, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Maximum Efficiency",
    description: "Our proprietary monocrystalline architecture achieves 24.5% efficiency, capturing more light across the spectrum.",
    icon: <SunDim className="w-6 h-6 text-amber-400" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Infinite Storage",
    description: "Paired with the Nova Cell, store excess energy with near-zero degradation over 10,000 cycles.",
    icon: <Battery className="w-6 h-6 text-amber-400" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Grid Independence",
    description: "Seamlessly detach from the grid during outages. Nova reacts in milliseconds to keep your home powered.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Armor Glass",
    description: "Engineered to withstand 2-inch hail and hurricane-force winds. Guaranteed for 25 years.",
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    colSpan: "md:col-span-2",
  },
];

function BentoCard({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group ${feature.colSpan}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="mb-12">
        <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center mb-6">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-medium text-white mb-3">{feature.title}</h3>
        <p className="text-neutral-400 leading-relaxed max-w-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Intelligence built in.</h2>
          <p className="text-xl text-neutral-400 max-w-2xl">Nova isn't just a panel; it's a complete, intelligent ecosystem that optimizes your energy continuously.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <BentoCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
