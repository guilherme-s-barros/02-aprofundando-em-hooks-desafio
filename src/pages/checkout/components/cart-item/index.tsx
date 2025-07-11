import { Trash } from 'phosphor-react'
import type { ChangeEvent } from 'react'

import { QuantityInput } from '../../../../components/quantity-input'
import { type Item, useCart } from '../../../../contexts/cart-context'
import {
	Actions,
	CartItemContainer,
	Details,
	Info,
	RemoveCartItemButton,
} from './styles'

interface CartItemProps {
	item: Item
}

export function CartItem({ item }: CartItemProps) {
	console.log(item)

	const { incrementItemQuantity, decrementItemQuantity, changeItemQuantity } =
		useCart()

	const priceFormatted = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(item.coffee.price)

	function handleDecrementItemQuantity() {
		decrementItemQuantity(item.coffee.id)
	}

	function handleIncrementItemQuantity() {
		incrementItemQuantity(item.coffee.id)
	}

	function handleChangeItemQuantity(event: ChangeEvent<HTMLInputElement>) {
		const quantity = Number(event.target.value)

		if (Number.isNaN(quantity)) {
			changeItemQuantity(item.coffee.id, 0)
			return
		}

		changeItemQuantity(item.coffee.id, Math.max(0, Math.min(quantity, 99)))
	}

	return (
		<CartItemContainer key={item.coffee.id}>
			<Info>
				<img src={item.coffee.image} alt={item.coffee.title} />

				<Details>
					<p>{item.coffee.title}</p>

					<Actions>
						<QuantityInput
							variant="small"
							onDecrement={handleDecrementItemQuantity}
							onIncrement={handleIncrementItemQuantity}
							onChange={handleChangeItemQuantity}
							value={String(item.quantity).padStart(2, '0')}
						/>

						<RemoveCartItemButton type="button">
							<Trash size={16} />
							Remover
						</RemoveCartItemButton>
					</Actions>
				</Details>
			</Info>
			<strong>{priceFormatted}</strong>
		</CartItemContainer>
	)
}
