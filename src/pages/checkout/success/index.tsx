import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { IconContainer } from '../../../components/icon-container'
import {
	OrderInfoContainer,
	OrderInfoContent,
	SuccessContainer,
	TextContainer,
} from './styles'

export function Success() {
	return (
		<SuccessContainer>
			<TextContainer>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>

				<OrderInfoContainer>
					<OrderInfoContent>
						<span>
							<IconContainer $backgroundColor="purple">
								<MapPin weight="fill" size={16} />
							</IconContainer>

							<p>
								Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
								<br />
								Farrapos - Porto Alegre, RS
							</p>
						</span>

						<span>
							<IconContainer $backgroundColor="yellow">
								<Timer weight="fill" size={16} />
							</IconContainer>

							<p>
								Previsão de entrega <br />
								<strong>20 min - 30 min</strong>
							</p>
						</span>

						<span>
							<IconContainer $backgroundColor="purple">
								<CurrencyDollar size={16} />
							</IconContainer>

							<p>
								Pagamento na entrega <br />
								<strong>Cartão de Crédito</strong>
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
