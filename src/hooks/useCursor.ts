import { useState, useEffect, useCallback } from 'react';

type CursorVariant = 'default' | 'link' | 'project' | 'inverted';

interface CursorState {
  x: number;
  y: number;
  variant: CursorVariant;
}

export function useCursor() {
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0, variant: 'default' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only on fine pointer devices
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || prefersReduced) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.18);
      currentY = lerp(currentY, targetY, 0.18);
      setCursor((prev) => ({ ...prev, x: currentX, y: currentY }));
      raf = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(raf);
    };
  }, [isVisible]);

  const setVariant = useCallback((variant: CursorVariant) => {
    setCursor((prev) => ({ ...prev, variant }));
  }, []);

  return { cursor, isVisible, setVariant };
}
