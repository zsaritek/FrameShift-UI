import { useCallback, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { testimonials } from '@/data/testimonials';

export const Testimonials = () => {
  const controls = useAnimationControls();
  const dragLimit = -(testimonials.length * 260);
  const startAutoplay = useCallback(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { duration: 36, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
    });
  }, [controls]);

  useEffect(() => {
    startAutoplay();
  }, [startAutoplay]);

  return (
    <SectionWrapper
      id="testimonials"
      heading="Teams who love building with movement"
      subheading="Drag through the carousel or let it flow automatically—motion stays buttery smooth."
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/5 bg-white/5 p-4 md:p-6">
        <motion.div
          className="flex gap-4"
          drag="x"
          dragElastic={0.1}
          dragConstraints={{ left: dragLimit, right: 0 }}
          animate={controls}
          onDragStart={() => controls.stop()}
          onDragEnd={() => startAutoplay()}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <Card key={index} tone="interactive" className="min-w-[280px] max-w-sm flex-1">
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full border border-white/10 object-cover" />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/60">{item.title}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">“{item.quote}”</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
