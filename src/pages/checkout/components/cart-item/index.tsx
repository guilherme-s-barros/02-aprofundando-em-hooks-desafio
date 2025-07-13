import { TrashIcon } from '@phosphor-icons/react'
import type { ChangeEvent } from 'react'

import { QuantityInput } from '../../../../components/quantity-input'
import { useCart } from '../../../../contexts/cart-context'
import type { Item } from '../../../../reducers/cart/reducer'
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
	const {
		incrementItemQuantity,
		decrementItemQuantity,
		changeItemQuantity,
		removeItem,
	} = useCart()

	const priceFormatted = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(item.coffee.price)

	function handleDecrementItemQuantity() {
		decrementItemQuantity(item.id)
	}

	function handleIncrementItemQuantity() {
		incrementItemQuantity(item.id)
	}

	function handleChangeItemQuantity(event: ChangeEvent<HTMLInputElement>) {
		const quantity = Number(event.target.value)

		if (Number.isNaN(quantity)) {
			changeItemQuantity(item.id, 0)
			return
		}

		changeItemQuantity(item.id, Math.max(0, Math.min(quantity, 99)))
	}

	function handleRemoveItem() {
		removeItem(item.id)
	}

	return (
		<CartItemContainer key={item.id}>
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

						<RemoveCartItemButton type="button" onClick={handleRemoveItem}>
							<TrashIcon size={16} />
							Remover
						</RemoveCartItemButton>
					</Actions>
				</Details>
			</Info>
			<strong>{priceFormatted}</strong>
		</CartItemContainer>
	)
}
