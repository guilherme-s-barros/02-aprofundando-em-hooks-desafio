import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/default'
import { Cart } from './pages/cart'
import { Home } from './pages/home'

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={DefaultLayout}>
					<Route index path="/" Component={Home} />
					<Route path="/cart" Component={Cart} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
