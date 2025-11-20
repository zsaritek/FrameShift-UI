import { motion } from 'framer-motion';
import { LayoutDashboard, MousePointer2, PanelsTopLeft, ScrollText, Sparkles, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { fadeIn, slideUp, staggerContainer } from '@/animations/motion';

const items = [
  {
    icon: Sparkles,
    title: 'Motion system',
    description: 'Reusable presets and section wrappers keep your animations consistent.',
  },
  {
    icon: ScrollText,
    title: 'Scroll choreography',
    description: 'Parallax + staggered entrances tuned for landing-page pacing.',
  },
  {
    icon: MousePointer2,
    title: 'Micro-interactions',
    description: 'Hover states, tap feedback, and focus rings that feel intentional.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Composable sections',
    description: 'Stack hero, feature, pricing, and CTA blocks like a design system.',
  },
  {
    icon: LayoutDashboard,
    title: 'Design tokens',
    description: 'Update spacing, typography, and colors from a single source of truth.',
  },
  {
    icon: Zap,
    title: 'Ship-ready code',
    description: 'TypeScript + Tailwind + Shadcn UI integration ready for production.',
  },
];

export const Features = () => {
  return (
    <SectionWrapper
      id="features"
      heading="A modular canvas for interactive stories"
      subheading="Mix motion presets, adaptive layouts, and composable UI blocks to ship Framer-style experiences directly in React."
    >
      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item, index) => (
          <motion.div key={item.title} variants={fadeIn(index * 0.05)} className="h-full">
            <Card interactive className="flex h-full flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                <item.icon />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
