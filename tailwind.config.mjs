/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4F4CC9',
          deep: '#2F2E8A',
          light: '#7A78D9',
          tint: '#EEEDF9',
          ink: '#13123A',
        },
        warm: {
          DEFAULT: '#D97757',
          deep: '#B45A3C',
          light: '#F1C9B4',
          tint: '#FBF1EB',
        },
        ink: {
          DEFAULT: '#0F0F0E',
          strong: '#1A1A18',
          muted: '#57544D',
          subtle: '#8A867D',
          faint: '#B8B4AB',
        },
        surface: {
          DEFAULT: '#FAFAF7',
          raised: '#FFFFFF',
          sunken: '#F4F3ED',
          deep: '#EFEDE6',
          dark: '#13120F',
        },
        hairline: {
          DEFAULT: '#E5E2DA',
          strong: '#D2CEC3',
          subtle: '#EFEDE6',
          dark: 'rgba(255,255,255,0.08)',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          deep: '#1FAE54',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.14em', fontWeight: '600' }],
        'display-1': ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '450' }],
        'display-2': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '450' }],
        'display-3': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '500' }],
        'lead': ['clamp(1.075rem, 1.4vw, 1.25rem)', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
      },
      maxWidth: {
        container: '1240px',
        prose: '68ch',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,15,14,0.04), 0 4px 12px rgba(15,15,14,0.04)',
        'raised': '0 1px 2px rgba(15,15,14,0.05), 0 8px 24px -8px rgba(15,15,14,0.08)',
        'float': '0 2px 4px rgba(15,15,14,0.04), 0 16px 40px -12px rgba(15,15,14,0.12)',
        'brand-glow': '0 8px 32px -8px rgba(79,76,201,0.35)',
        'inner-hairline': 'inset 0 0 0 1px rgba(15,15,14,0.06)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.45)' },
          '70%': { boxShadow: '0 0 0 18px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        'dot-grid': 'radial-gradient(circle at 1px 1px, rgba(15,15,14,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
