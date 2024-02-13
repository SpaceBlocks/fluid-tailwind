declare module 'bun:test' {
  interface AsymmetricMatchers {
    async toMatchFormattedCss(expected: string): void;
  }
  interface Matchers<R> {
    toMatchFormattedCss(expected: string): R;
  }
}

export {}