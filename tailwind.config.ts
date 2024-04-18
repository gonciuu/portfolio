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
          100: '#ffffff',
          200: '#e7e7e7',
          300: '#c1c1c1',
          400: '#a3a3a3',
          500: '#848484',
          600: '#666666',
          700: '#474747',
          800: '#292929',
          900: '#030712',
        },
      },
    },
  },
  plugins: [],
};
export default config;
