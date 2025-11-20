import { useEffect, useState } from 'react';

type Direction = 'up' | 'down';

export const useScrollDirection = (threshold = 10): Direction => {
  const [direction, setDirection] = useState<Direction>('up');

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < threshold) return;
      setDirection(y > lastY ? 'down' : 'up');
      lastY = y > 0 ? y : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return direction;
};
