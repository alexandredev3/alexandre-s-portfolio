/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
		fontSize: {
			sm: 16,
			md: 24,
			lg: 32
		},
		colors: {
			yellow: {
				300: '#F0DB4F'
			},
			gray: {
				200: '#ABB2BF',
				500: '#767C87',
				800: '#282C33',
			},
			white: '#FFFFFF'
		},
    fontFamily: {
      'fira_code': ['"Fira Code"', 'sans-serif']
    }
  }
}
