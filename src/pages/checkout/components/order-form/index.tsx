import { zodResolver } from '@hookform/resolvers/zod'
import {
	BankIcon,
	CreditCardIcon,
	CurrencyDollarIcon,
	MapPinLineIcon,
	MoneyIcon,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'

import { useCart } from '../../../../contexts/cart-context'
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

type MakeOrderFormSchema = z.infer<typeof makeOrderFormSchema>

// export interface State {
// 	address: Omit<MakeOrderFormSchema, 'cep' | 'complement' | 'paymentMethod'>
// 	paymentMethod: Pick<MakeOrderFormSchema, 'paymentMethod'>['paymentMethod']
// }

export function OrderForm() {
	const { changeAddress, changePaymentMethod, address, paymentMethod } =
		useCart()
	const navigate = useNavigate()

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(makeOrderFormSchema),
		defaultValues: {
			cep: address?.cep ?? '',
			street: address?.street ?? '',
			number: address?.number ?? '',
			complement: address?.complement ?? '',
			district: address?.district ?? '',
			city: address?.city ?? '',
			uf: address?.uf ?? '',
			paymentMethod: paymentMethod ?? 'credit',
		},
	})

	function handleMakeOrder(data: MakeOrderFormSchema) {
		changeAddress({
			cep: data.cep,
			street: data.street,
			complement: data.complement,
			number: data.number,
			district: data.district,
			city: data.city,
			uf: data.uf,
		})

		changePaymentMethod(data.paymentMethod)
		navigate('/checkout/success')
	}

	return (
		<form id="orderForm" onSubmit={handleSubmit(handleMakeOrder)}>
			<OrderFormSection>
				<header>
					<h3>
						<MapPinLineIcon size={24} /> Endereço de Entrega
					</h3>

					<p>Informe o endereço onde deseja receber seu pedido</p>
				</header>

				<FormContainer>
					<TextInput
						type="text"
						placeholder="CEP"
						maxLength={8}
						required
						{...register('cep')}
					/>

					<TextInput
						type="text"
						placeholder="Rua"
						required
						{...register('street')}
					/>

					<TextInput
						type="text"
						placeholder="Número"
						inputMode="numeric"
						maxLength={5}
						required
						{...register('number')}
					/>

					<OptionalInput>
						<TextInput
							type="text"
							placeholder="Complemento"
							{...register('complement')}
						/>
						<em>Opcional</em>
					</OptionalInput>

					<TextInput
						type="text"
						placeholder="Bairro"
						required
						{...register('district')}
					/>

					<TextInput
						type="text"
						placeholder="Cidade"
						required
						{...register('city')}
					/>

					<TextInput
						type="text"
						placeholder="UF"
						maxLength={2}
						required
						{...register('uf')}
					/>
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
						<input
							type="radio"
							value="credit"
							required
							{...register('paymentMethod')}
						/>

						<span>
							<CreditCardIcon size={16} />
							Cartão de Crédito
						</span>
					</PaymentMethodButton>

					<PaymentMethodButton>
						<input
							type="radio"
							value="debit"
							required
							{...register('paymentMethod')}
						/>

						<span>
							<BankIcon size={16} />
							Cartão de Débito
						</span>
					</PaymentMethodButton>

					<PaymentMethodButton>
						<input
							type="radio"
							value="money"
							required
							{...register('paymentMethod')}
						/>

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
