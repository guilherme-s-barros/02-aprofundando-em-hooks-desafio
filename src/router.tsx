import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/default'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { Success } from './pages/success'

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={DefaultLayout}>
					<Route index path="/" Component={Home} />
					<Route path="/checkout" Component={Checkout} />
					<Route path="/checkout/success" Component={Success} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
