import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
				alt: ['Patrick Hand', 'cursive'],
				display: ['Caveat Brush', 'cursive'],
				emoji: ['Noto Color Emoji', 'sans-serif'],
			},
		},
	},
	plugins: ['@tailwindcss/typography'],
};
