import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/use-cart'
import { Badge, HeaderContainer, HeaderContent, InfoContainer } from './styles'

export function Header() {
	const { cart, address } = useCart()

	return (
		<HeaderContainer>
			<HeaderContent>
				<Link to="/">
					<img src="/logo.svg" alt="Logotipo Coffee Delivery" />
				</Link>

				<InfoContainer>
					{address && (
						<span>
							<MapPinIcon weight="fill" size={24} />
							{address.city}, {address.uf}
						</span>
					)}

					<Link to="/checkout" title="Ir ao carrinho">
						<ShoppingCartIcon weight="fill" size={24} />
						{cart.length > 0 && <Badge>{cart.length}</Badge>}
					</Link>
				</InfoContainer>
			</HeaderContent>
		</HeaderContainer>
	)
}
