import {
	CurrencyDollarIcon,
	MapPinIcon,
	TimerIcon,
} from '@phosphor-icons/react'
import { Navigate } from 'react-router-dom'

import { IconContainer } from '../../components/icon-container'
import { paymentMethodMap } from '../../contexts/cart-context'
import { useCart } from '../../hooks/use-cart'
import {
	OrderInfoContainer,
	OrderInfoContent,
	SuccessContainer,
	TextContainer,
} from './styles'

export function Success() {
	const { address, paymentMethod } = useCart()

	if (!address || !paymentMethod) {
		return <Navigate to="/" replace />
	}

	return (
		<SuccessContainer>
			<TextContainer>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>

				<OrderInfoContainer>
					<OrderInfoContent>
						<span>
							<IconContainer $backgroundColor="purple">
								<MapPinIcon weight="fill" size={16} />
							</IconContainer>

							<p>
								Entrega em{' '}
								<strong>
									{address.street}, {address.number}
								</strong>
								<br />
								{address.district} - {address.city}, {address.uf}
							</p>
						</span>

						<span>
							<IconContainer $backgroundColor="yellow">
								<TimerIcon weight="fill" size={16} />
							</IconContainer>

							<p>
								Previsão de entrega <br />
								<strong>20 min - 30 min</strong>
							</p>
						</span>

						<span>
							<IconContainer $backgroundColor="yellowDark">
								<CurrencyDollarIcon size={16} />
							</IconContainer>

							<p>
								Pagamento na entrega <br />
								<strong>{paymentMethodMap[paymentMethod]}</strong>
							</p>
						</span>
					</OrderInfoContent>
				</OrderInfoContainer>
			</TextContainer>

			<img
				src="/images/delivery.svg"
				alt="Motoboy em uma moto roxa indo fazer a entrega de um pacote"
			/>
		</SuccessContainer>
	)
}
