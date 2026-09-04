import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Statement() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"],
  });

  const words = "The sun delivers more energy to Earth in a single hour than humanity consumes in an entire year. We built Nova to finally capture it properly.".split(" ");

  return (
    <section ref={container} className="py-32 md:py-48 px-6 bg-black text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-4 justify-center text-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}
