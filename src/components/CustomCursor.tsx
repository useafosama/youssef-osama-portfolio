'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

type CursorType = 'default' | 'project' | 'link' | 'image' | 'drag';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorLabel, setCursorLabel] = useState<string>('');

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check explicit data-cursor attributes first
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as CursorType;
        setCursorType(type);
        if (type === 'project') setCursorLabel('استكشف ↗');
        else if (type === 'link') setCursorLabel('فتح ↗');
        else if (type === 'image') setCursorLabel('عرض');
        else if (type === 'drag') setCursorLabel('اسحب');
        else setCursorLabel('');
        return;
      }

      // Check for project card or links
      if (target.closest('.group\\/preview') || target.closest('#works .group')) {
        setCursorType('project');
        setCursorLabel('استكشف ↗');
      } else if (target.closest('a') || target.closest('button')) {
        setCursorType('link');
        setCursorLabel('فتح ↗');
      } else if (target.closest('img') || target.closest('svg') || target.closest('.visual-preview')) {
        setCursorType('image');
        setCursorLabel('عرض');
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-200"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <AnimatePresence mode="wait">
        {cursorType === 'default' ? (
          <motion.div
            key="default"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-3.5 h-3.5 rounded-full bg-[var(--text-primary)] shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          />
        ) : (
          <motion.div
            key={cursorType}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="px-3.5 py-1.5 rounded-full bg-[var(--accent)] text-white text-xs font-bold shadow-lg shadow-[var(--accent)]/30 backdrop-blur-md flex items-center justify-center whitespace-nowrap"
          >
            {cursorLabel}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
