"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.12,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-reveal
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduce ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
