import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { fadeIn, staggerContainer } from '@/animations/motion';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className,
  heading,
  subheading,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id={id} ref={ref} className={cn('section-padding scroll-mt-32 md:scroll-mt-40', className)}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="mx-auto flex max-w-6xl flex-col gap-6"
      >
        {(heading || subheading) && (
          <div className="flex flex-col gap-2">
            {heading && (
              <motion.h2 className="text-3xl font-semibold leading-tight text-white" variants={fadeIn(0.05)}>
                {heading}
              </motion.h2>
            )}
            {subheading && (
              <motion.p className="max-w-2xl text-lg text-white/70" variants={fadeIn(0.1)}>
                {subheading}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};
