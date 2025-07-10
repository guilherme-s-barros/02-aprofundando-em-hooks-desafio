import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './contexts/cart-context'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<CartContextProvider>
				<Router />
			</CartContextProvider>
		</ThemeProvider>
	)
}
