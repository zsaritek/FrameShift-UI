import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { fadeIn, slideUp, staggerContainer } from '@/animations/motion';
import { getEnv } from '@/lib/env';

export const Hero = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const appName = getEnv('appName');

  return (
    <section id="top" ref={containerRef} className="section-padding scroll-mt-32 md:scroll-mt-40 relative overflow-hidden pb-20 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ y: orbY }} className="absolute left-10 top-16 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
        <motion.div style={{ y: cardParallax }} className="absolute right-20 top-0 h-40 w-40 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute inset-0 bg-grid [background-size:26px_26px] opacity-20" />
      </div>

      <motion.div
        variants={staggerContainer(0.18, 0.08)}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-6xl flex-col gap-10"
      >
        <motion.div className="flex flex-col gap-6" variants={fadeIn(0.05)}>
          <motion.h1
            variants={slideUp(0.08)}
            className="font-display text-4xl leading-tight text-white md:text-6xl"
          >
            {appName} helps you ship Framer-grade landing pages, directly in React.
          </motion.h1>
          <motion.p variants={slideUp(0.12)} className="max-w-2xl text-lg text-white/70 md:text-xl">
            Compose cinematic hero moments, choreograph entire scroll experiences, and keep every preset typed. Tailwind,
            Shadcn UI, and Framer Motion work together out of the box so your next launch feels intentional.
          </motion.p>
          <motion.div variants={slideUp(0.18)} className="flex flex-wrap items-center gap-3">
            <Button size="lg">
              Start generating
              <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" size="lg">
              Watch interactions
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]" variants={fadeIn(0.22)} style={{ y: cardParallax }}>
          <Card tone="interactive" className="relative overflow-hidden p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-transparent to-cyan-400/30" />
            <div className="relative flex flex-col gap-6 p-8">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1">Live preview</span>
                <span>Motion timeline</span>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex flex-col gap-2 rounded-xl bg-white/5 p-3">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>Block {item}</span>
                      <span className="text-emerald-300">Synced</span>
                    </div>
                    <div className="shimmer h-2 rounded-full" />
                    <div className="h-8 rounded-lg bg-gradient-to-r from-indigo-500/70 to-cyan-400/80" />
                    <div className="shimmer h-2 rounded-full" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-white/60">Reveal on scroll</p>
                  <p className="text-lg font-semibold">Smooth spring easing</p>
                </div>
                <Button size="sm" variant="outline">
                  Hand-off
                </Button>
              </div>
            </div>
          </Card>
          <Card tone="elevated" className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Preset library</span>
              <span className="text-emerald-300">Synced</span>
            </div>
            <div className="flex flex-col gap-3">
              {['Fade + slide', 'Parallax', 'Stagger', 'Hover spring'].map((preset) => (
                <div key={preset} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                  <span>{preset}</span>
                  <span className="text-sm text-white/50">Ready</span>
                </div>
              ))}
            </div>
            <Button variant="secondary">Generate variant</Button>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};
