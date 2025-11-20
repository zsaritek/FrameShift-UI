import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { fadeIn, slideUp } from '@/animations/motion';
import { getEnv } from '@/lib/env';

export const CallToAction = () => {
  const appName = getEnv('appName');

  return (
    <SectionWrapper className="pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-cyan-500/20 p-[1px]">
        <div className="relative overflow-hidden rounded-[22px] bg-white/5">
          <motion.div
            aria-hidden
            initial={{ opacity: 0.6 }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at bottom right, rgba(14,165,233,0.2), transparent 40%)',
            }}
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn(0.05)}
            className="relative flex flex-col gap-6 px-8 py-12 text-center md:px-14"
          >
            <motion.h3 variants={slideUp(0.08)} className="text-3xl font-semibold text-white md:text-4xl">
              Ready to choreograph your next launch with {appName}?
            </motion.h3>
            <motion.p variants={slideUp(0.12)} className="mx-auto max-w-2xl text-lg text-white/75">
              Import the sections you need, tune the motion presets, and publish a landing page that moves with intent.
            </motion.p>
            <motion.div variants={slideUp(0.18)} className="flex flex-wrap items-center justify-center gap-3">
              <Button size="lg">Launch the starter</Button>
              <Button size="lg" variant="secondary">
                Explore docs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
