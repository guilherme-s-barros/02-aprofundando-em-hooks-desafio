import { css } from 'styled-components'

const _primitives = {
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

export const defaultTheme = {
	color: {
		brand: {
			primaryLight: _primitives.color.yellow[10],
			primary: _primitives.color.yellow[50],
			primaryDark: _primitives.color.yellow[60],

			secondaryLight: _primitives.color.purple[10],
			secondary: _primitives.color.purple[50],
			secondaryDark: _primitives.color.purple[60],
		},
		base: {
			title: _primitives.color.gray[90],
			subtitle: _primitives.color.gray[80],
			text: _primitives.color.gray[70],
			label: _primitives.color.gray[60],
			hover: _primitives.color.gray[50],
			button: _primitives.color.gray[40],
			input: _primitives.color.gray[30],
			card: _primitives.color.gray[20],
			background: _primitives.color.gray[10],
			white: _primitives.color.gray[5],
		},
	},
	text: {
		heading: {
			titleXL: css`
        font-family: ${_primitives.text.font.display}, 'sans-serif';
        font-size: ${_primitives.text.size['4xl']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.extraBold};
      `,
			titleL: css`
        font-family: ${_primitives.text.font.display}, sans-serif;
        font-size: ${_primitives.text.size['3xl']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.extraBold};
      `,
			titleM: css`
        font-family: ${_primitives.text.font.display}, sans-serif;
        font-size: ${_primitives.text.size['2xl']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.extraBold};
      `,
			titleS: css`
        font-family: ${_primitives.text.font.display}, sans-serif;
        font-size: ${_primitives.text.size.xl};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			titleXS: css`
        font-family: ${_primitives.text.font.display}, sans-serif;
        font-size: ${_primitives.text.size.lg};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
		},
		body: {
			regularL: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.xl};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.regular};
      `,
			regularM: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.md};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.regular};
      `,
			regularS: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.sm};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.regular};
      `,
			boldL: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.xl};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			boldM: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.md};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			boldS: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.xs};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
		},
		component: {
			tag: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size['2xs']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			buttonL: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.sm};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.bold};
      `,
			buttonM: css`
        font-family: ${_primitives.text.font.sans}, 'sans-serif';
        font-size: ${_primitives.text.size.xs};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.regular};
      `,
		},
	},
} as const
