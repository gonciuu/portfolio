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
          100: '#ececec',
          200: '#eaeaea',
          300: '#dcdcdc',
          400: '#bcbcbc',
          500: '#9e9e9e',
          600: '#7e7e7e',
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
