import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { getEnv } from '@/lib/env';

const links = [
  { label: 'Product', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const direction = useScrollDirection(6);
  const appName = getEnv('appName');
  const nameSegments = appName.split(' ');
  const accentWord = nameSegments.length > 1 ? (nameSegments.pop() as string) : '';
  const baseName = nameSegments.length ? nameSegments.join(' ') : appName;

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-40 flex justify-center',
        direction === 'down' ? '-translate-y-full' : 'translate-y-0',
        'transition-transform duration-300',
      )}
    >
      <div className="mt-4 w-full px-4">
        <div className="mx-auto w-full max-w-6xl rounded-[999px] border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
              {baseName}
              {accentWord && <span className="text-gradient text-base font-medium">{accentWord}</span>}
            </a>
            <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" className="text-white/80">
                Docs
              </Button>
              <Button size="sm">Launch Demo</Button>
            </div>
            <button
              className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={open ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3 md:hidden"
              >
                {links.map((link) => (
                  <a key={link.href} href={link.href} className="text-white/80" onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 pt-1">
                  <Button variant="ghost" className="flex-1" size="sm">
                    Docs
                  </Button>
                  <Button className="flex-1" size="sm">
                    Launch Demo
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};
