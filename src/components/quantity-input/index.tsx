import { Minus, Plus } from 'phosphor-react'
import type { InputHTMLAttributes } from 'react'

import { InputBig, InputSmall, QuantityInputContainer } from './styles'

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: 'big' | 'small'
	onIncrement(): void
	onDecrement(): void
}

export function QuantityInput({
	variant = 'big',
	onIncrement,
	onDecrement,
	...rest
}: QuantityInputProps) {
	return (
		<QuantityInputContainer>
			<button type="button" title="Remover" onClick={onDecrement}>
				<Minus size={12} />
			</button>

			{variant === 'big' ? (
				<InputBig type="number" min={0} max={99} required {...rest} />
			) : (
				<InputSmall type="number" min={0} max={99} required {...rest} />
			)}

			<button type="button" title="Adicionar" onClick={onIncrement}>
				<Plus size={12} />
			</button>
		</QuantityInputContainer>
	)
}
