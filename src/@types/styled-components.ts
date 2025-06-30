import type { CSSProp } from 'styled-components'

import type { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
	// biome-ignore lint/correctness/noUnusedVariables: All 'DOMAttributes' declarations must have identical type parameters
	interface DOMAttributes<T> {
		css?: CSSProp
	}
}
