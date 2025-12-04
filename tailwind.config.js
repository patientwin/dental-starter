/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    fontSize: {
      '5xl': ['3.25rem', '1.05'],
      '4xl': ['2.6rem', '1.15'],
      '3xl': ['2.1rem', '1.2'],
      '2xl': ['1.75rem', '1.25'],
      xl: ['1.4rem', '1.35'],
      lg: ['1.2rem', '1.6'],
      base: ['1rem', '1.65'],
      sm: ['0.95rem', '1.55'],
      xs: ['0.85rem', '1.45'],
    },
    extend: {
      colors: {
        ink: {
          900: '#0F172A',
          700: '#111827',
          600: '#1F2937',
          400: '#6B7280',
        },
        brand: {
          50: '#EEF2FF',
          100: '#E0EAFF',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        accent: {
          50: '#D9FBEA',
          100: '#BBF7D0',
          500: '#16A34A',
        },
        warm: {
          100: '#FFF7ED',
          400: '#FDBA74',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F5F5F7',
          border: '#E5E7EB',
        },
        halo: {
          blue: '#ECF4FF',
          mint: '#E6FFF4',
        },
        // Legacy mappings for compatibility
        primary: {
          DEFAULT: '#2563EB',
          light: '#E0EAFF',
          dark: '#1D4ED8',
        },
        secondary: '#16A34A',
        background: '#F5F5F7',
        surfaceColor: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Manrope"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"DM Sans"', '"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.06)',
        soft: '0 20px 60px rgba(43, 117, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
