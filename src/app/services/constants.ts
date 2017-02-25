export const MOBILE = (() => {
  if (typeof window === 'undefined') return true;
  if (window.matchMedia) return matchMedia('(max-width: 800px)').matches;
  return window.screen.availWidth < 800;
})();
export const API_BASE_URL: string = `http://${HOST}:${PORT}`;
