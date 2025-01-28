import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '440px',
        md: '780px',
        lg: '1000px',
        xl: '1200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeOut: 'fadeOut 1s ease-out forwards',
        bounceIn: 'bounceIn 1s ease-out forwards',
        bounceOut: 'bounceOut 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
        slideDown: 'slideDown 1s ease-out forwards',
        zoomIn: 'zoomIn 1s ease-out forwards',
        zoomOut: 'zoomOut 1s ease-out forwards',
        rotateIn: 'rotateIn 1s ease-out forwards',
        rotateOut: 'rotateOut 1s ease-out forwards',
        pulse: 'pulse 1.5s infinite',
        shake: 'shake 0.5s ease-in-out forwards',
        slideLeft: 'slideLeft 1s ease-out forwards',
        slideRight: 'slideRight 1s ease-out forwards',
        flip: 'flip 1s ease-out forwards',
        scaleUp: 'scaleUp 1s ease-out forwards',
        scaleDown: 'scaleDown 1s ease-out forwards',
        swing: 'swing 1s ease-out forwards',
        heartBeat: 'heartBeat 1.5s infinite',
        bounce: 'bounce 1s ease-in-out infinite',
        lightSpeedIn: 'lightSpeedIn 1s ease-out forwards',
        rollIn: 'rollIn 1s ease-out forwards',
        flipInX: 'flipInX 1s ease-out forwards',
        flipOutX: 'flipOutX 1s ease-out forwards',
        rubberBand: 'rubberBand 1s ease-out forwards',
        tada: 'tada 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '0', transform: 'scale(0.3)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(180deg)' },
          '100%': { opacity: '1', transform: 'rotate(0deg)' },
        },
        rotateOut: {
          '0%': { opacity: '1', transform: 'rotate(0deg)' },
          '100%': { opacity: '0', transform: 'rotate(180deg)' },
        },
        pulse: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        flip: {
          '0%': { opacity: '0', transform: 'rotateY(180deg)' },
          '100%': { opacity: '1', transform: 'rotateY(0deg)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleDown: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)' },
        },
        swing: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
        lightSpeedIn: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rollIn: {
          '0%': { opacity: '0', transform: 'rotate(90deg)' },
          '100%': { opacity: '1', transform: 'rotate(0deg)' },
        },
        flipInX: {
          '0%': { opacity: '0', transform: 'rotateX(-180deg)' },
          '100%': { opacity: '1', transform: 'rotateX(0deg)' },
        },
        flipOutX: {
          '0%': { opacity: '1', transform: 'rotateX(0deg)' },
          '100%': { opacity: '0', transform: 'rotateX(-180deg)' },
        },
        rubberBand: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.25)' },
          '40%': { transform: 'scale(0.75)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9) rotate(-3deg)' },
          '20%': { transform: 'scale(1.1) rotate(3deg)' },
          '30%': { transform: 'scale(1.1) rotate(-3deg)' },
          '40%': { transform: 'scale(1.1) rotate(3deg)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
