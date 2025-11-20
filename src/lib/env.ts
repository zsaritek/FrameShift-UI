type PublicEnv = {
  apiKey?: string;
  appName: string;
};

const normalize = (value: string | boolean | undefined) => {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }
  return undefined;
};

const env: PublicEnv = {
  apiKey: normalize(import.meta.env.VITE_API_KEY),
  appName: normalize(import.meta.env.VITE_APP_NAME) ?? 'StartupLandingGenerator',
};

const requiredKeys: Array<keyof PublicEnv> = ['appName'];
requiredKeys.forEach((key) => {
  if (!env[key]) {
    console.warn(`[env] Missing value for ${key}. Falling back to safe default.`);
  }
});

export const getEnv = <K extends keyof PublicEnv>(key: K): PublicEnv[K] => env[key];

export const maskEnvValue = (value?: string, visibleStart = 3, visibleEnd = 2) => {
  if (!value) return '';
  if (value.length <= visibleStart + visibleEnd) return value;
  const hiddenLength = Math.max(0, value.length - (visibleStart + visibleEnd));
  return `${value.slice(0, visibleStart)}${'•'.repeat(hiddenLength)}${value.slice(-visibleEnd)}`;
};

export const publicEnv = env;

