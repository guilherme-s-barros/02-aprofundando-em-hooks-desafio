import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react'

import {
	CartContainer,
	FormContainer,
	OptionalInput,
	OrderFormSection,
	PaymentMethodButton,
	PaymentMethods,
	TextInput,
} from './styles'

export function Cart() {
	return (
		<CartContainer>
			<section>
				<h2>Complete seu pedido</h2>

				<form>
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
			</section>
		</CartContainer>
	)
}
