export const _primitives = {
	color: {
		yellow: {
			10: '#F1E9C9',
			50: '#DBAC2C',
			60: '#C47F17',
		},
		purple: {
			10: '#EBE5F9',
			50: '#8047F8',
			60: '#4B2995',
		},
		gray: {
			5: '#FFFFFF',
			10: '#FAFAFA',
			20: '#F3F2F2',
			30: '#EDEDED',
			40: '#E6E5E5',
			50: '#D7D5D5',
			60: '#8D8686',
			70: '#574F4D',
			80: '#403937',
			90: '#272221',
		},
		neutral: {
			white: '#FFFFFF',
		},
	},
	text: {
		font: {
			display: 'Baloo 2',
			sans: 'Roboto',
		},
		size: {
			'2xs': '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
			'4xl': '3rem',
		},
		height: {
			sm: '130%',
			lg: '160%',
		},
		weight: {
			regular: 400,
			bold: 700,
			extraBold: 800,
		},
	},
} as const
