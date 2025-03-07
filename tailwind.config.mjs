export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jura', 'sans-serif'],
			},
			screens: {
				sm_xl: { min: "320px", max: "425px" },
				md: { min: "426px", max: "768px" },
				lg: { min: "769px", max: "1024px" },
				xl: { min: "1025px", max: "1239px" },
				"2xl": { min: "1240px", max: "1440px" },
				"3xl": { min: "1441px", max: "1560px" },
				"4xl": { min: "1561px", max: "1920px" },
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
				'blue-gradient-start': '#1E3A8A',
				'blue-gradient-end': '#60A5FA',
			},
			backgroundSize: {
				'gradient-size': '200% 200%',
			},
			animation: {
				'gradient-flow': 'gradientMove 3s ease infinite',
				'glow': 'glow 3s ease infinite',
			},
			keyframes: {
				gradientMove: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				glow: {
					'0%': { textShadow: '0 0 10px rgba(0, 140, 255, 0.7)' },
					'50%': { textShadow: '0 0 20px rgba(0, 140, 255, 0.7)' },
					'100%': { textShadow: '0 0 10px rgba(0, 140, 255, 0.7)' },
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
