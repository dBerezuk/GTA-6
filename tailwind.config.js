/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				'roboto-flex': ['roboto flex'],
				'londrina-solid': ['Londrina Solid']
			},
			colors: {
				'solar': '#FFBF76',
				'violet': '#B11778',
				'light-pink': '#E4A1EE'
			},
			backdropBlur: {
				'xs': '2px',
				'mxs': '1px'
			},
			blur: {
				'xs': '2px',
				'mxs': '1px'
			},
			transitionProperty: {
				'filter': 'filter',
				'filter-and-colors': 'filter, background-color, color'
			},
			animation: {
				'bounce-2': 'bounce-2 3s linear infinite',
				'top': 'top 0.7s ease-in-out',
				'left': 'left 1s ease-in-out',
				'scale': 'scale 1s ease-in-out'
			},
			keyframes: {
				'bounce-2': {
					'0%, 100%': { transform: 'scale(1)', opacity: 1 },
					'50%': { transform: 'scale(1.2)', opacity: 0.4 }
				},
				'top': {
					'from': { transform: 'translateY(-110%)', opacity: 0 },
					'to': { transform: 'translateY(0)', opacity: 1 }
				},
				'left': {
					'from': { transform: 'translateX(-110%)', opacity: 0 },
					'to': { transform: 'translateX(0)', opacity: 1 }
				},
				'scale': {
					'from': { scale: '125%' },
					'to': { scale: '100%' }
				}
			}
		}
	},
	plugins: []
};