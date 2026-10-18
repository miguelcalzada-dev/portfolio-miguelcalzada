"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ArrowIndicator({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={`arrow-indicator${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0 }}
      animate={reduce ? undefined : { opacity: 1, y: [0, 8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 1.5 },
        y: { duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 1.5 },
      }}
    >
      <ArrowDown />
    </motion.span>
  );
}
