import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
	Trash,
} from 'phosphor-react'

import { QuantityInput } from '../../components/quantity-input'
import {
	AmountContainer,
	CartContainer,
	CartItem,
	CartItemActions,
	CartItemDetails,
	CartItemInfo,
	CheckoutContainer,
	ConfirmOrderButton,
	FormContainer,
	OptionalInput,
	OrderFormSection,
	PaymentMethodButton,
	PaymentMethods,
	RemoveCartItemButton,
	TextInput,
} from './styles'

export function Checkout() {
	return (
		<CheckoutContainer>
			<section>
				<h2>Complete seu pedido</h2>

				<form id="orderForm">
					<OrderFormSection>
						<header>
							<h3>
								<MapPinLine size={24} /> Endereço de Entrega
							</h3>

							<p>Informe o endereço onde deseja receber seu pedido</p>
						</header>

						<FormContainer>
							<TextInput type="text" placeholder="CEP" maxLength={9} required />
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
								<CurrencyDollar size={24} /> Pagamento
							</h3>

							<p>
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</p>
						</header>

						<PaymentMethods>
							<PaymentMethodButton>
								<input type="radio" name="paymentMethod" id="creditCard" />
								<span>
									<CreditCard size={16} />
									Cartão de Crédito
								</span>
							</PaymentMethodButton>

							<PaymentMethodButton>
								<input type="radio" name="paymentMethod" id="creditCard" />
								<span>
									<Bank size={16} />
									Cartão de Débito
								</span>
							</PaymentMethodButton>

							<PaymentMethodButton>
								<input type="radio" name="paymentMethod" id="creditCard" />
								<span>
									<Money size={16} />
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
					<div>
						<CartItem>
							<CartItemInfo>
								<img
									src="/images/coffees/expresso.png"
									alt="Expresso tradicional"
								/>

								<CartItemDetails>
									<p>Expresso tradicional</p>

									<CartItemActions>
										<QuantityInput />

										<RemoveCartItemButton type="button">
											<Trash size={16} />
											Remover
										</RemoveCartItemButton>
									</CartItemActions>
								</CartItemDetails>
							</CartItemInfo>

							<strong>R$ 9,90</strong>
						</CartItem>
						<CartItem>
							<CartItemInfo>
								<img src="/images/coffees/latte.png" alt="Latte" />

								<CartItemDetails>
									<p>Latte</p>

									<CartItemActions>
										<QuantityInput />

										<RemoveCartItemButton type="button">
											<Trash size={16} />
											Remover
										</RemoveCartItemButton>
									</CartItemActions>
								</CartItemDetails>
							</CartItemInfo>

							<strong>R$ 19,90</strong>
						</CartItem>
					</div>

					<AmountContainer>
						<p>
							<span>Total de itens</span>
							R$ 29,70
						</p>

						<p>
							<span>Entrega</span>
							R$ 3,50
						</p>

						<strong>
							<span>Total</span>
							R$ 33,20
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
