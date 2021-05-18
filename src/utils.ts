export const clamp = (val: number, n: number, m: number): number => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  return Math.min(Math.max(val, min), max);
};

/**
 * @ref https://github.com/vuejs/vue/issues/9200#issuecomment-468512304
 */
export const doubleRaf = (cb: () => void): void => {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
};

export type Vector = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type Dimension = {
  scale: number;
  offset: Vector;
  position: Vector;
  translate: Vector;
  size: Size;
  naturalSize: Size;
};

export const getDimension = (el: HTMLImageElement): Dimension => {
  const { naturalWidth, naturalHeight } = el;
  const rect = el.getBoundingClientRect();

  const height = clamp(naturalHeight, 0, window.innerHeight * 0.9);
  const width = naturalWidth * (height / naturalHeight);

  return {
    scale: rect.height / height,
    offset: { x: 0, y: 0 },
    position: {
      x: rect.left + (rect.width - width) / 2,
      y: rect.top + (rect.height - height) / 2,
    },
    translate: { x: 0, y: 0 },
    size: { width, height },
    naturalSize: {
      width: naturalWidth,
      height: naturalHeight,
    },
  };
};

export const getPosition = (e: MouseEvent | TouchEvent): Vector => {
  const p = 'touches' in e ? e.touches[0] : e;
  return { x: p.clientX, y: p.clientY };
};
