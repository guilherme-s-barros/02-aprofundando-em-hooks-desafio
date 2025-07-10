import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { useCart } from '../../contexts/cart-context'
import { Badge, HeaderContainer, InfoContainer } from './styles'

export function Header() {
	const { cart } = useCart()

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

				<Link to="/checkout" title="Ir ao carrinho">
					<ShoppingCart weight="fill" size={24} />
					{cart.length > 0 && <Badge>{cart.length}</Badge>}
				</Link>
			</InfoContainer>
		</HeaderContainer>
	)
}
