interface IntersectionObserverMockInit {
  root?: Element | null;
  rootMargin?: string;
  thresholds?: number | number[];
}

class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;

  private callback: IntersectionObserverCallback;
  private options: IntersectionObserverInit;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverMockInit) {
    this.callback = callback;
    this.options = options || {};
    this.root = this.options.root || null;
    this.rootMargin = this.options.rootMargin || '';
    this.thresholds = Array.isArray(this.options.thresholds) ? this.options.thresholds : [this.options.thresholds || 0];
  }

  observe(target: Element) {
    this.callback([
      {
        isIntersecting: true,
        target: target,
        intersectionRatio: 1,
      }
    ]);
  }

  unobserve(target: Element) {
    // Implementar si es necesario
  }

  disconnect() {
    // Implementar si es necesario
  }
}

export default IntersectionObserverMock;