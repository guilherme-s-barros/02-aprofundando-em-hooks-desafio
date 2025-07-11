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

import {
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

export function OrderForm() {
	const _makeOrderForm = useForm({
		resolver: zodResolver(makeOrderFormSchema),
	})

	return (
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
	)
}
