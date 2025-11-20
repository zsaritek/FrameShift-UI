export const spacing = {
  0: '0rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

export const typography = {
  display: 'clamp(3rem, 6vw, 4.8rem)',
  h1: 'clamp(2.4rem, 5vw, 3.8rem)',
  h2: 'clamp(1.8rem, 4vw, 2.6rem)',
  h3: 'clamp(1.4rem, 3vw, 2rem)',
  body: '1rem',
  detail: '0.9rem',
};

export const radii = {
  xs: '8px',
  sm: '12px',
  md: '18px',
  lg: '24px',
  pill: '999px',
};

export const shadows = {
  soft: '0 20px 60px rgba(15, 23, 42, 0.25)',
  strong: '0 30px 120px rgba(59, 7, 100, 0.35)',
  glow: '0 12px 60px rgba(14, 165, 233, 0.35)',
  outline: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
};

export const colors = {
  primary: '#7c3aed',
  secondary: '#22d3ee',
  accent: '#f472b6',
  neutral: {
    50: '#f8fafc',
    100: '#e2e8f0',
    500: '#64748b',
    900: '#0f172a',
  },
  surface: '#050816',
  glass: 'rgba(255,255,255,0.05)',
};

export const motion = {
  durations: {
    ultraFast: 0.18,
    fast: 0.28,
    base: 0.5,
    relaxed: 0.85,
  },
  easings: {
    entrance: [0.16, 1, 0.3, 1] as [number, number, number, number],
    smooth: [0.22, 0.61, 0.36, 1] as [number, number, number, number],
    exit: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
  spring: {
    type: 'spring' as const,
    stiffness: 170,
    damping: 20,
    mass: 0.8,
  },
};

export const tokens = {
  spacing,
  typography,
  radii,
  shadows,
  colors,
  motion,
};

export type Tokens = typeof tokens;
