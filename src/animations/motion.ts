import { Variants, Transition } from "framer-motion";
import { motion as motionTokens } from "@/design-system/tokens";

const baseTransition = (overrides?: Partial<Transition>): Transition => ({
  duration: motionTokens.durations.base,
  ease: motionTokens.easings.entrance,
  ...overrides,
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: baseTransition({ delay }) },
});

export const slideUp = (delay = 0, distance = 32): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: baseTransition({ delay }) },
});

export const slideLeft = (delay = 0, distance = 48): Variants => ({
  hidden: { opacity: 0, x: distance },
  show: { opacity: 1, x: 0, transition: baseTransition({ delay }) },
});

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.05
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const parallax = (strength = 40) => ({
  offscreen: { y: strength, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ...motionTokens.spring,
      ease: motionTokens.easings.smooth,
    },
  },
});

export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: motionTokens.durations.fast,
      ease: motionTokens.easings.smooth,
    },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: motionTokens.durations.ultraFast },
  },
};

export const smoothSpring: Transition = {
  type: "spring",
  stiffness: motionTokens.spring.stiffness,
  damping: motionTokens.spring.damping,
  mass: motionTokens.spring.mass,
};

export const smoothEase = motionTokens.easings.smooth;
