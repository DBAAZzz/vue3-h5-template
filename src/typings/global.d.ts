export {};

declare global {
  /**
   * Window 的类型提示
   */
  interface Window {
    gtag: Function;
  }
}
