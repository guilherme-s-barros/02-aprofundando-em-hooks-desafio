import { Minus, Plus } from 'phosphor-react'
import { type ChangeEvent, useState } from 'react'

import { QuantityInputContainer } from './styles'

export function QuantityInput() {
	const [quantity, setQuantity] = useState(0)

	function handleIncrementQuantity() {
		if (quantity >= 99) {
			return
		}

		setQuantity((state) => state + 1)
	}

	function handleDecrementQuantity() {
		if (quantity <= 0) {
			return
		}

		setQuantity((state) => state - 1)
	}

	function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
		const quantity = Number(event.target.value)

		if (quantity > 99) {
			return
		}

		setQuantity(quantity)
	}

	return (
		<QuantityInputContainer>
			<button type="button" title="Remover" onClick={handleDecrementQuantity}>
				<Minus size={14} />
			</button>

			<input
				type="number"
				min={0}
				max={99}
				value={String(quantity).padStart(2, '0')}
				onChange={handleChangeQuantity}
			/>

			<button type="button" title="Adicionar" onClick={handleIncrementQuantity}>
				<Plus size={14} />
			</button>
		</QuantityInputContainer>
	)
}
