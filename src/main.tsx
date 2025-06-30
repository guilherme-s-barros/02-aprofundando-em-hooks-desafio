import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app.tsx'

let rootElement = document.getElementById('root')

if (!rootElement) {
	rootElement = document.createElement('div')
	rootElement.id = 'root'

	document.body.prepend(rootElement)
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
