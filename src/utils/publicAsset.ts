/**
 * Build a URL for an asset stored in /public.
 * import.meta.env.BASE_URL is / locally and /Cloudxglobal/ on GitHub Pages,
 * so the same source code works in both environments.
 */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
