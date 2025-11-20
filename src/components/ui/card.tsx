import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverScale } from '@/animations/motion';

const cardVariants = cva(
  'relative rounded-2xl border border-white/5 bg-white/5 p-6 text-white shadow-soft backdrop-blur-lg',
  {
    variants: {
      tone: {
        default: 'bg-white/5',
        elevated: 'bg-white/10 shadow-glow',
        interactive: 'bg-gradient-to-br from-white/8 to-white/3 border-white/10',
      },
    },
    defaultVariants: {
      tone: 'default',
    },
  },
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  interactive?: boolean;
}

const MotionDiv = motion.div;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, tone, interactive, ...props }, ref) => {
    const motionProps = interactive ? hoverScale : {};
    return (
      <MotionDiv ref={ref} className={cn(cardVariants({ tone }), className)} {...motionProps} {...props} />
    );
  },
);

Card.displayName = 'Card';
