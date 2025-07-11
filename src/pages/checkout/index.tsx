import { useCart } from '../../contexts/cart-context'
import { CartItem } from './components/cart-item'
import { EmptyCart } from './components/empty-cart'
import { OrderForm } from './components/order-form'
import {
	AmountContainer,
	CartContainer,
	CheckoutContainer,
	ConfirmOrderButton,
} from './styles'

export function Checkout() {
	const { cart } = useCart()

	const currencyFormat = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	const subtotal = cart.reduce((acc, item) => {
		return acc + item.coffee.price * item.quantity
	}, 0)

	const total = subtotal + 3.5
	const deliveryRate = 3.5

	const formattedSubtotal = currencyFormat.format(subtotal)
	const formattedDeliveryRate = currencyFormat.format(deliveryRate)
	const formattedTotal = currencyFormat.format(total)

	if (cart.length === 0) {
		return <EmptyCart />
	}

	return (
		<CheckoutContainer>
			<section>
				<h2>Complete seu pedido</h2>

				<OrderForm />
			</section>
			<section>
				<h2>Cafés selecionados</h2>

				<CartContainer>
					<ul>
						{cart.map((cartItem) => {
							return <CartItem key={cartItem.coffee.id} item={cartItem} />
						})}
					</ul>

					<AmountContainer>
						<p>
							<span>Subtotal</span>
							{formattedSubtotal}
						</p>
						<p>
							<span>Entrega</span>
							{formattedDeliveryRate}
						</p>
						<strong>
							<span>Total</span>
							{formattedTotal}
						</strong>
					</AmountContainer>

					<ConfirmOrderButton type="submit" form="orderForm">
						Confirmar pedido
					</ConfirmOrderButton>
				</CartContainer>
			</section>
		</CheckoutContainer>
	)
}
