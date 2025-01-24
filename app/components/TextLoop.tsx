"use client";
import { cn } from "../lib/utils";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

type TextLoopProps = {
  currentIndex: number;
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  variants?: Variants;
};

export function TextLoop({
  currentIndex,
  children,
  className,
  transition = { duration: 0.3 },
  variants,
}: TextLoopProps) {
  const items = children;

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div className={cn("relative inline-block whitespace-nowrap", className)}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}