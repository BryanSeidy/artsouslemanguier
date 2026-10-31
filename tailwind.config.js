/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: {
        // Identity derived from the real logo (asm.jpg): deep forest green #104020,
        // lighter foliage green #307050. Warm neutrals, dark ink, discrete earth accent.
        ink: '#1d1b17',
        surface: '#faf7f1',
        'surface-alt': '#f2ede2',
        border: '#e4ded4',
        green: '#2e7a5f',
        'green-dark': '#104020',
        'green-light': '#3a8a6f',
        earth: '#9a774f',
        'ink-soft': '#5c584f',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink'),
            a: { color: theme('colors.green-dark'), textDecoration: 'underline', fontWeight: '500' },
            h1: { color: theme('colors.ink'), fontWeight: '700', lineHeight: '1.15' },
            h2: { color: theme('colors.ink'), fontWeight: '700', lineHeight: '1.25' },
            h3: { color: theme('colors.ink'), fontWeight: '600', lineHeight: '1.35' },
            strong: { color: theme('colors.ink'), fontWeight: '600' },
          },
        },
      }),
    },
  },
  plugins: [],
};
