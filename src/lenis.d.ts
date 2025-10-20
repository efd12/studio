declare module 'lenis' {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smooth?: boolean;
    smoothWheel?: boolean;
  }

  class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    destroy(): void;
  }
  
  export default Lenis;
}