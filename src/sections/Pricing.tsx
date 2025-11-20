import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { pricingTiers } from '@/data/pricing';
import { fadeIn, hoverScale, staggerContainer } from '@/animations/motion';

export const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <SectionWrapper
      id="pricing"
      heading="Pricing that scales with the polish you need"
      subheading="Switch billing to see how much you save when you commit to yearly launches."
      className="pb-16"
    >
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm">
          <button
            className={`rounded-full px-4 py-2 transition ${billing === 'monthly' ? 'bg-white/10 text-white' : 'text-white/70'}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`rounded-full px-4 py-2 transition ${billing === 'yearly' ? 'bg-white/10 text-white' : 'text-white/70'}`}
            onClick={() => setBilling('yearly')}
          >
            Yearly <span className="ml-1 rounded-full bg-emerald-400/20 px-2 text-xs text-emerald-200">Save 20%</span>
          </button>
        </div>
        <p className="text-white/60">Try it free for 14 days. Cancel anytime.</p>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-5 md:grid-cols-3"
      >
        {pricingTiers.map((tier, index) => (
          <motion.div key={tier.name} variants={fadeIn(index * 0.08)} className="h-full">
            <Card
              tone={tier.highlighted ? 'interactive' : 'default'}
              interactive
              className="relative flex h-full flex-col gap-4"
            >
              {tier.highlighted && (
                <span className="absolute right-4 top-4 rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-100">
                  Most popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="text-sm text-white/60">{tier.description}</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 text-white">
                <span className="text-4xl font-bold">
                  ${tier.price[billing]}
                </span>
                <span className="text-white/50">/ {billing === 'monthly' ? 'mo' : 'mo, billed yearly'}</span>
              </div>
              <div className="flex flex-col gap-2 text-sm text-white/70">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant={tier.highlighted ? 'primary' : 'secondary'}
                className="mt-auto w-full"
                whileHover={hoverScale.whileHover}
                whileTap={hoverScale.whileTap}
              >
                Choose {tier.name}
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
