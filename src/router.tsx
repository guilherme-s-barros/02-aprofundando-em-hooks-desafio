import { type ReactNode, useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import { DefaultLayout } from './layout/default'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { Success } from './pages/success'

interface WrapperProps {
	children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
	const location = useLocation()

	useLayoutEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
	}, [location.pathname])

	return children
}

export function Router() {
	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path="/" Component={DefaultLayout}>
						<Route index path="/" Component={Home} />
						<Route path="/checkout" Component={Checkout} />
						<Route path="/checkout/success" Component={Success} />
					</Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	)
}
