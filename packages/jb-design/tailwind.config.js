/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', "[class~='dark']"],
  important: true,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/*.{less}',
    './styles/**/*.{css,less}',
  ],
  prefix: 'jb-',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: 'var(--gray-1)',
          gray2: 'var(--gray-2)',
          gray3: 'var(--gray-3)',
          gray4: 'var(--gray-4)',
          gray5: 'var(--gray-5)',
          gray6: 'var(--gray-6)',
          gray7: 'var(--gray-7)',
          gray8: 'var(--gray-8)',
          gray9: 'var(--gray-9)',
          gray10: 'var(--gray-10)',
          gray11: 'var(--gray-11)',
          gray12: 'var(--gray-12)',
          gray13: 'var(--gray-13)',
          gray14: 'var(--gray-14)',
        },
        blue: {
          DEFAULT: 'var(--blue-4)',
          blue1: 'var(--blue-1)',
          blue2: 'var(--blue-2)',
          blue3: 'var(--blue-3)',
          blue5: 'var(--blue-5)',
          blue6: 'var(--blue-6)',
          blue7: 'var(--blue-7)',
          blue8: 'var(--blue-8)',
          blue9: 'var(--blue-9)',
          blue10: 'var(--blue-10)',
          blue11: 'var(--blue-11)',
          blue12: 'var(--blue-12)',
          blue13: 'var(--blue-13)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'var(--gray-1)',
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))',
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
