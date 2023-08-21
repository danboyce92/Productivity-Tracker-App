import { useEffect, useState, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

interface Dimensions {
  width: number;
  height: number;
}

const useResizeObserver = (ref: RefObject<HTMLElement>): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  useEffect(() => {
    const observeTarget = ref.current;

    if (observeTarget) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { width, height } = entry.contentRect;
          setDimensions({ width, height });
        });
      });

      resizeObserver.observe(observeTarget);

      return () => {
        resizeObserver.unobserve(observeTarget);
      };
    }
  }, [ref]);

  return dimensions;
};

export default useResizeObserver;
