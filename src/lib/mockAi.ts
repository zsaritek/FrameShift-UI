import { wait } from '@/lib/utils';

const sampleHeadlines = [
  'Design momentum that sells',
  'Prototype campaigns in hours',
  'Ship cinematic product tours',
  'Craft narrative-grade launches',
  'Compose responsive hero stories',
];

const sampleSubheads = [
  'Pair adaptive layouts with precision motion across every section block.',
  'Launch faster with reusable design tokens, curated presets, and typed animations.',
  'Keep marketing, design, and engineering in sync with a shared motion language.',
];

const sampleCtas = ['Generate layout', 'Preview gradients', 'Launch template'];

type MockCopyResponse = {
  headline: string;
  subheading: string;
  cta: string;
  mode: 'api' | 'offline';
};

const randomFrom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const mockGenerateLandingCopy = async (productName: string, apiKey?: string): Promise<MockCopyResponse> => {
  await wait(apiKey ? 420 : 650);
  const base = productName?.trim() || 'your launch';
  const headline = `${randomFrom(sampleHeadlines)} for ${base}`;
  const subheading = randomFrom(sampleSubheads);
  const cta = `${randomFrom(sampleCtas)} now`;

  return {
    headline,
    subheading,
    cta,
    mode: apiKey ? 'api' : 'offline',
  };
};
