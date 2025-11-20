import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverScale } from '@/animations/motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 gap-2',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-glow',
        secondary: 'bg-white/10 text-white border border-white/10 hover:border-white/30',
        outline: 'border border-white/20 text-white hover:border-white/50 bg-white/5',
        ghost: 'text-white hover:bg-white/5',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function ButtonBase(
  { className, variant, size, asChild = false, ...props }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

const Base = React.forwardRef(ButtonBase);

export const Button = motion(
  React.forwardRef<HTMLButtonElement, ButtonProps>(function MotionButtonWrapper(props, ref) {
    return <Base ref={ref} {...props} />;
  }),
);

Button.defaultProps = {
  whileHover: hoverScale.whileHover,
  whileTap: hoverScale.whileTap,
};

Button.displayName = 'Button';
export { buttonVariants };
