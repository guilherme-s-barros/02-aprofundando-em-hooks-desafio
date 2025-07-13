import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollarIcon, MapPinLineIcon } from '@phosphor-icons/react'
import type { FocusEvent } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'

import { useCart } from '../../../../hooks/use-cart'
import { getAddressByCEP } from '../../../../services/get-address-by-cep'
import { PaymentMethodButton } from '../payment-method-button'
import { TextInput } from '../text-input'
import { FormContainer, OrderFormSection, PaymentMethods } from './styles'

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

export function OrderForm() {
	const { address, paymentMethod, makeOrder } = useCart()
	const navigate = useNavigate()

	const orderForm = useForm({
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

	const { handleSubmit, setValue } = orderForm

	function handleMakeOrder(data: MakeOrderFormSchema) {
		const address = {
			cep: data.cep,
			street: data.street,
			complement: data.complement,
			number: data.number,
			district: data.district,
			city: data.city,
			uf: data.uf,
		}

		const paymentMethod = data.paymentMethod

		makeOrder({
			address,
			paymentMethod,
		})

		navigate('/checkout/success')
	}

	async function handleAutoCompleteAddress(
		event: FocusEvent<HTMLInputElement>,
	) {
		try {
			const address = await getAddressByCEP(event.target.value)

			setValue('street', address.logradouro)
			setValue('district', address.bairro)
			setValue('city', address.localidade)
			setValue('uf', address.uf)
		} catch (_error) {
			console.log('CEP Inválido')
		}
	}

	return (
		<form id="orderForm" onSubmit={handleSubmit(handleMakeOrder)}>
			<FormProvider {...orderForm}>
				<OrderFormSection>
					<header>
						<h3>
							<MapPinLineIcon size={24} /> Endereço de Entrega
						</h3>

						<p>Informe o endereço onde deseja receber seu pedido</p>
					</header>

					<FormContainer>
						<TextInput
							placeholder="CEP"
							maxLength={8}
							formRegister="cep"
							onBlur={handleAutoCompleteAddress}
						/>

						<TextInput placeholder="Rua" formRegister="street" />

						<TextInput
							placeholder="Número"
							inputMode="numeric"
							maxLength={5}
							formRegister="number"
						/>

						<TextInput
							placeholder="Complemento"
							optional
							formRegister="complement"
						/>

						<TextInput placeholder="Bairro" formRegister="district" />
						<TextInput placeholder="Cidade" formRegister="city" />
						<TextInput placeholder="UF" maxLength={2} formRegister="uf" />
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
						<PaymentMethodButton value="credit" />
						<PaymentMethodButton value="debit" />
						<PaymentMethodButton value="money" />
					</PaymentMethods>
				</OrderFormSection>
			</FormProvider>
		</form>
	)
}
