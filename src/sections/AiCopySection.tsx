import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { mockGenerateLandingCopy } from '@/lib/mockAi';
import { fadeIn, slideUp } from '@/animations/motion';
import { getEnv, maskEnvValue } from '@/lib/env';

export const AiCopySection = () => {
  const apiKey = getEnv('apiKey');
  const appName = getEnv('appName');
  const [product, setProduct] = useState('');
  const [result, setResult] = useState({
    headline: 'Magnetize your hero copy in seconds',
    subheading: 'Drop in a product name and let the generator craft launch-ready messaging.',
    cta: 'Preview headline',
    mode: apiKey ? 'api' : 'offline',
  });
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (seed?: string) => {
    setLoading(true);
    try {
      const generated = await mockGenerateLandingCopy(seed || product || appName, apiKey);
      setResult(generated);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const generated = await mockGenerateLandingCopy(appName, apiKey);
        setResult(generated);
      } finally {
        setLoading(false);
      }
    })();
  }, [apiKey, appName]);

  return (
    <SectionWrapper
      heading="AI-assisted copy that keeps momentum"
      subheading="Mocked suggestions use your `.env` keys so you can wire up a real endpoint when you’re ready."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <motion.div variants={slideUp(0.08)} className="flex flex-col gap-3">
          <label className="text-sm font-medium text-white" htmlFor="product-input">
            What are you launching?
          </label>
          <input
            id="product-input"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="e.g. AI design copilot"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
          />
          <div className="flex items-center gap-3">
            <Button onClick={handleGenerate} disabled={loading}>
              <Sparkles size={16} />
              {loading ? 'Generating...' : 'Generate copy'}
            </Button>
            <span className="text-sm text-white/60">Mocked responses in {apiKey ? 'API-simulated' : 'offline'} mode.</span>
          </div>
          <p className="text-xs text-white/50">
            {apiKey
              ? `Mock service authenticated with ${maskEnvValue(apiKey)}`
              : 'Add VITE_API_KEY to your .env to simulate authenticated requests.'}
          </p>
        </motion.div>
        <motion.div variants={fadeIn(0.12)}>
          <Card tone="elevated" className="space-y-4">
            <div className="flex items-center justify-between text-xs text-white/60">
              <p>Suggested headline</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-white/70">
                {result.mode === 'api' ? 'API key detected' : 'Offline mock'}
              </span>
            </div>
            <h4 className="text-2xl font-semibold text-white">{result.headline}</h4>
            <p className="text-white/70">{result.subheading}</p>
            <Button variant="secondary" className="mt-2">
              {result.cta}
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
