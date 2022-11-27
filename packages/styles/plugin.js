const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({}){}, {
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
});