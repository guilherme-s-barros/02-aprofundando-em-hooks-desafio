import { css } from 'styled-components'

import { _primitives } from './_primitives'

export const defaultTheme = {
	color: {
		brand: {
			primaryLight: _primitives.color.yellow[10],
			primary: _primitives.color.yellow[50],
			primaryDark: _primitives.color.yellow[60],

			secondaryLight: _primitives.color.purple[10],
			secondary: _primitives.color.purple[50],
			secondaryDark: _primitives.color.purple[60],

			gradient: css`
        background:
          linear-gradient(
            90deg,
            ${_primitives.color.yellow[50]},
            ${_primitives.color.purple[50]}
          );
      `,
		},
		feedback: {
			success: _primitives.color.green[50],
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
        font-family: '${_primitives.text.font.display}', sans-serif;
        font-size: ${_primitives.text.size['4xl']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.extraBold};
      `,
			titleL: css`
        font-family: '${_primitives.text.font.display}', sans-serif;
        font-size: ${_primitives.text.size['3xl']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.extraBold};
      `,
			titleM: css`
        font-family: '${_primitives.text.font.display}', sans-serif;
        font-size: ${_primitives.text.size['2xl']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.extraBold};
      `,
			titleS: css`
        font-family: '${_primitives.text.font.display}', sans-serif;
        font-size: ${_primitives.text.size.xl};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			titleXS: css`
        font-family: '${_primitives.text.font.display}', sans-serif;
        font-size: ${_primitives.text.size.lg};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
		},
		body: {
			regularL: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.xl};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.regular};
      `,
			regularM: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.md};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.regular};
      `,
			regularS: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.sm};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.regular};
      `,
			boldL: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.xl};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			boldM: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.md};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			boldS: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.xs};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
		},
		component: {
			tag: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size['2xs']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
        letter-spacing: 0.1rem;
      `,
			buttonL: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.sm};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.bold};
      `,
			buttonM: css`
        font-family: '${_primitives.text.font.sans}', sans-serif;
        font-size: ${_primitives.text.size.xs};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.regular};
      `,
		},
	},
} as const
