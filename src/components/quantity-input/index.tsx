import { Minus, Plus } from 'phosphor-react'
import type { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'

import { InputBig, InputSmall, QuantityInputContainer } from './styles'

interface QuantityInputProps {
	size: 'big' | 'small'
}

export function QuantityInput({ size }: QuantityInputProps) {
	const { register, setValue, getValues } = useFormContext()

	function handleIncrementQuantity() {
		const quantity = getValues('quantity')
		setValue('quantity', Math.min(quantity + 1, 99))
	}

	function handleDecrementQuantity() {
		const quantity = getValues('quantity')
		setValue('quantity', Math.max(quantity - 1, 0))
	}

	function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
		const quantity = Number(event.target.value)

		if (Number.isNaN(quantity)) {
			setValue('quantity', 0)
			return
		}

		setValue('quantity', Math.max(0, Math.min(quantity, 99)))
	}

	return (
		<QuantityInputContainer>
			<button type="button" title="Remover" onClick={handleDecrementQuantity}>
				<Minus size={12} />
			</button>

			{size === 'big' ? (
				<InputBig
					type="number"
					min={0}
					max={99}
					{...register('quantity', {
						valueAsNumber: true,
						onChange: handleChangeQuantity,
					})}
				/>
			) : (
				<InputSmall
					type="number"
					min={0}
					max={99}
					{...register('quantity', {
						valueAsNumber: true,
						onChange: handleChangeQuantity,
					})}
				/>
			)}

			<button type="button" title="Adicionar" onClick={handleIncrementQuantity}>
				<Plus size={12} />
			</button>
		</QuantityInputContainer>
	)
}
