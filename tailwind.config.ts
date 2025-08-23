import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))',
					dark: 'hsl(var(--secondary-dark))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))',
					dark: 'hsl(var(--accent-dark))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Brand colors - exact from logo palette
				'wine-red': {
					DEFAULT: 'hsl(var(--wine-red))',
					light: 'hsl(var(--wine-red-light))',
					dark: 'hsl(var(--wine-red-dark))'
				},
				'gray-tone': {
					DEFAULT: 'hsl(var(--gray-tone))',
					light: 'hsl(var(--gray-tone-light))',
					dark: 'hsl(var(--gray-tone-dark))'
				},
				'sand-tone': {
					DEFAULT: 'hsl(var(--sand-tone))',
					light: 'hsl(var(--sand-tone-light))',
					dark: 'hsl(var(--sand-tone-dark))'
				},
				// Neutral text colors
				'graphit': {
					DEFAULT: 'hsl(0 0% 17%)', /* #2B2B2B */
				},
				'dark-gray': {
					DEFAULT: 'hsl(0 0% 29%)', /* #4A4A4A */
				},
				'medium-gray': {
					DEFAULT: 'hsl(315 2% 47%)', /* #797578 */
				},
				'light-gray': {
					DEFAULT: 'hsl(315 2% 62%)', /* #9E9B9F */
					border: 'hsl(240 5% 88%)', /* #E0E0E3 */
				},
				// Status colors
				success: {
					DEFAULT: 'hsl(142 17% 29%)', /* #3E5747 */
					foreground: 'hsl(0 0% 100%)'
				},
				warning: {
					DEFAULT: 'hsl(40 52% 53%)', /* #C39B4A */
					foreground: 'hsl(0 0% 100%)'
				},
				// Legacy wood/stone colors for compatibility
				wood: {
					DEFAULT: 'hsl(var(--wood))',
					light: 'hsl(var(--wood-light))',
					dark: 'hsl(var(--wood-dark))'
				},
				stone: {
					DEFAULT: 'hsl(var(--stone))',
					light: 'hsl(var(--stone-light))',
					dark: 'hsl(var(--stone-dark))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-warm': 'var(--gradient-warm)',
				'gradient-wood': 'var(--gradient-wood)',
				'gradient-elegant': 'var(--gradient-elegant)'
			},
			boxShadow: {
				'warm': 'var(--shadow-warm)',
				'card': 'var(--shadow-card)',
				'hero': 'var(--shadow-hero)'
			},
			fontFamily: {
				'serif': ['Georgia', 'Times New Roman', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
