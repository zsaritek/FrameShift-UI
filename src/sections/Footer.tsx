import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Github, Twitter } from 'lucide-react';
import { getEnv } from '@/lib/env';

export const Footer = () => {
  const appName = getEnv('appName');

  return (
    <SectionWrapper className="pb-12 pt-8">
      <div className="grid gap-8 text-sm text-white/70 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-white">{appName}</div>
          <p className="max-w-md">
            Reusable motion-ready sections, Shadcn components, and a design system tuned for Framer-like polish.
          </p>
          <div className="flex gap-3 text-white">
            <a href="https://github.com" className="rounded-full border border-white/10 p-2 hover:border-white/50" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://twitter.com" className="rounded-full border border-white/10 p-2 hover:border-white/50" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-white">Product</h4>
          <div className="flex flex-col gap-2">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Stories</a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-white">Guides</h4>
          <div className="flex flex-col gap-2">
            <a href="#">Setup</a>
            <a href="#">Components</a>
            <a href="#">Motion tokens</a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-white">Company</h4>
          <div className="flex flex-col gap-2">
            <a href="#">Blog</a>
            <a href="#">Changelog</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/50 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} {appName}. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Status</a>
        </div>
      </div>
    </SectionWrapper>
  );
};
