import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    [1, 2.5, 4.2, 1]
  );
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["0vw", "-55vw", "-135vw", "-18vw"]
  );
  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.75, 1],
    ["0vh", "40vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);



  return (
    <section ref={targetRef} className="relative z-10 mt-[-30vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, x, y }} className="box-button origin-top">
              <motion.img
                style={{ opacity }}
                src="/main-screen.svg"
                className="h-auto max-h-none w-[70vw]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
