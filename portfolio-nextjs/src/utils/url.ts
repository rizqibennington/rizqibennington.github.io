export const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    const host = window.location.host;
    const protocol = window.location.protocol;
    return `${protocol}//${host}`;
  }

  return "https://rizqibennington.com";
};

export const getAppUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
