import { zodResolver } from '@hookform/resolvers/zod'
import {
	BankIcon,
	CreditCardIcon,
	CurrencyDollarIcon,
	MapPinLineIcon,
	MoneyIcon,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { useCart } from '../../contexts/cart-context'
import { CartItem } from './components/cart-item'
import { EmptyCart } from './components/empty-cart'
import {
	AmountContainer,
	CartContainer,
	CheckoutContainer,
	ConfirmOrderButton,
	FormContainer,
	OptionalInput,
	OrderFormSection,
	PaymentMethodButton,
	PaymentMethods,
	TextInput,
} from './styles'

const makeOrderFormSchema = z.object({
	cep: z.string().length(8, 'CEP inválido'),
	street: z.string().nonempty('Informe a rua'),
	number: z.string().nonempty('Informe o número de sua residência'),
	complement: z.string().optional(),
	district: z.string().nonempty('Informe o bairro'),
	city: z.string().nonempty('Informe a cidade'),
	uf: z.string().length(2, 'UF inválida'),
	paymentMethod: z.enum(['credit', 'debit', 'money'], {
		message: 'Informe um método de pagamento',
	}),
})

export function Checkout() {
	const { cart } = useCart()

	const _makeOrderForm = useForm({
		resolver: zodResolver(makeOrderFormSchema),
	})

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

				<form id="orderForm">
					<OrderFormSection>
						<header>
							<h3>
								<MapPinLineIcon size={24} /> Endereço de Entrega
							</h3>

							<p>Informe o endereço onde deseja receber seu pedido</p>
						</header>

						<FormContainer>
							<TextInput type="text" placeholder="CEP" maxLength={8} required />
							<TextInput type="text" placeholder="Rua" required />
							<TextInput
								type="text"
								placeholder="Número"
								inputMode="numeric"
								maxLength={5}
								required
							/>

							<OptionalInput>
								<TextInput type="text" placeholder="Complemento" />
								<em>Opcional</em>
							</OptionalInput>

							<TextInput type="text" placeholder="Bairro" required />
							<TextInput type="text" placeholder="Cidade" required />
							<TextInput type="text" placeholder="UF" maxLength={2} required />
						</FormContainer>
					</OrderFormSection>
					<OrderFormSection>
						<header>
							<h3>
								<CurrencyDollarIcon size={24} /> Pagamento
							</h3>

							<p>
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</p>
						</header>

						<PaymentMethods>
							<PaymentMethodButton>
								<input type="radio" name="paymentMethod" value="credit" />
								<span>
									<CreditCardIcon size={16} />
									Cartão de Crédito
								</span>
							</PaymentMethodButton>

							<PaymentMethodButton>
								<input type="radio" name="paymentMethod" value="debit" />
								<span>
									<BankIcon size={16} />
									Cartão de Débito
								</span>
							</PaymentMethodButton>

							<PaymentMethodButton>
								<input type="radio" name="paymentMethod" value="money" />
								<span>
									<MoneyIcon size={16} />
									Dinheiro
								</span>
							</PaymentMethodButton>
						</PaymentMethods>
					</OrderFormSection>
				</form>
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
