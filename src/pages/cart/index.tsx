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
	Amount,
	AmountContainer,
	CartContainer,
	CartItem,
	CartItemActions,
	CartItemDetails,
	CartItemInfo,
	ConfirmOrderButton,
	FormContainer,
	InvoiceContainer,
	OptionalInput,
	OrderFormSection,
	PaymentMethodButton,
	PaymentMethods,
	RemoveCartItemButton,
	TextInput,
} from './styles'

export function Cart() {
	return (
		<CartContainer>
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

				<InvoiceContainer>
					<div>
						<CartItem>
							<CartItemInfo>
								<img
									src="/images/coffees/expresso.png"
									alt="Expresso tradicional"
								/>

								<CartItemDetails>
									<span>Expresso tradicional</span>

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
									<span>Latte</span>

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
						<Amount>
							<span>Total de itens</span>
							<span>R$ 29,70</span>
						</Amount>
						<Amount>
							<span>Total de entrega</span>
							<span>R$ 3,50</span>
						</Amount>
						<Amount>
							<strong>Total</strong>
							<strong>R$ 33,20</strong>
						</Amount>
					</AmountContainer>

					<ConfirmOrderButton type="submit" form="orderForm">
						Confirmar pedido
					</ConfirmOrderButton>
				</InvoiceContainer>
			</section>
		</CartContainer>
	)
}
