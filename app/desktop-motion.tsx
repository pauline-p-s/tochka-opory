'use client';

import { useEffect } from 'react';

const DESKTOP_MOTION =
  '(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

export default function DesktopMotion() {
  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MOTION);
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (!media.matches || !('IntersectionObserver' in window)) return;
      const elements = document.querySelectorAll<HTMLElement>('.hero, .reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('motion-entered');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.06 },
      );
      elements.forEach((element) => {
        if (element.getBoundingClientRect().bottom <= 0) return;
        observer.observe(element);
      });
      cleanup = () => {
        observer.disconnect();
        elements.forEach((element) =>
          element.classList.remove('motion-entered'),
        );
      };
    };
    setup();
    media.addEventListener('change', setup);
    return () => {
      cleanup();
      media.removeEventListener('change', setup);
    };
  }, []);
  return null;
}
