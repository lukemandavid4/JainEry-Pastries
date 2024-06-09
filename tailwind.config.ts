import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'calc-25-minus-10': 'calc(25% - 20px)',
      },
      padding: {
        'lr-custom': 'max(19vw, 2rem)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.w-calc-25-minus-10': {
          width: 'calc(25% - 20px)',
        },
      });
    },
  ],
};

export default config;
