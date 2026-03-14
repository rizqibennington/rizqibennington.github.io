/**
 * Get the base URL for the application depending on the environment.
 * Handles:
 * - Local development (localhost:3000)
 * - Production (rizqibennington.com)
 * - Other environments if needed
 */
export const getBaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    // Client-side: use window.location
    const host = window.location.host;
    const protocol = window.location.protocol;
    return `${protocol}//${host}`;
  }
  
  // Server-side fallback (mostly for production builds)
  return 'https://rizqibennington.com';
};

/**
 * Get the full URL for a specific path, handling potential subpaths if necessary.
 * @param path The path to append to the base URL (e.g., '/turnbasedgame/')
 */
export const getAppUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  // Ensure path starts with / if not present
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
