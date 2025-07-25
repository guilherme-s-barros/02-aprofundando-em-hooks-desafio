import { CreditCardIcon } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'

import { paymentMethodMap } from '../../../../contexts/cart-context'
import type { PaymentMethod } from '../../../../reducers/cart/reducer'
import { Button } from './styles'

interface PaymentMethodButtonProps {
	value: PaymentMethod
}

export function PaymentMethodButton({ value }: PaymentMethodButtonProps) {
	const { register } = useFormContext()

	return (
		<Button>
			<input
				type="radio"
				value={value}
				required
				{...register('paymentMethod')}
			/>

			<span>
				<CreditCardIcon size={16} />
				{paymentMethodMap[value]}
			</span>
		</Button>
	)
}
