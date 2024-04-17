import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#030712',
          100: '#030712',
          200: '#030712',
          300: '#030712',
          400: '#030712',
          500: '#030712',
          600: '#030712',
          700: '#030712',
          800: '#030712',
          900: '#030712',
        },
      },
    },
  },
  plugins: [],
};
export default config;
