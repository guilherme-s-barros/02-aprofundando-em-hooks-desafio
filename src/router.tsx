import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Cart } from './pages/cart'
import { Home } from './pages/home'

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" Component={Home} />
				<Route path="/cart" Component={Cart} />
			</Routes>
		</BrowserRouter>
	)
}
