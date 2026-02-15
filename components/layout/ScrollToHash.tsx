import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 80;

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutId: number | undefined;
    let attempts = 0;
    const maxAttempts = 10;

    const scrollToTarget = () => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (!element) {
        if (attempts < maxAttempts) {
          attempts += 1;
          timeoutId = window.setTimeout(scrollToTarget, 100);
        }
        return;
      }

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - HEADER_OFFSET;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    };

    scrollToTarget();
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
