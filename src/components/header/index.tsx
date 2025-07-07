import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { HeaderContainer, InfoContainer } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<Link to="/">
				<img src="/logo.svg" alt="Logotipo Coffee Delivery" />
			</Link>

			<InfoContainer>
				<span>
					<MapPin weight="fill" size={24} />
					São Paulo, SP
				</span>

				<Link to="/cart" title="Ir ao carrinho">
					<ShoppingCart weight="fill" size={24} />
				</Link>
			</InfoContainer>
		</HeaderContainer>
	)
}
