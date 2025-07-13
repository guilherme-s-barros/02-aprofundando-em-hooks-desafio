import { CheckFatIcon, ShoppingCartIcon } from '@phosphor-icons/react'
import { type ChangeEvent, useEffect, useState } from 'react'
import type { KnownTarget } from 'styled-components/dist/types'

import { QuantityInput } from '../../../../components/quantity-input'
import { useCart } from '../../../../hooks/use-cart'
import type { Coffee } from '../../../../reducers/cart/reducer'
import {
	AddToCartButton,
	Card,
	CardBody,
	CardFooter,
	Control,
	SuccessButton,
	Tag,
	TagList,
} from './styles'

interface CoffeeCardProps {
	coffee: Coffee
	as?: KnownTarget
}

export function CoffeeCard({ coffee, as }: CoffeeCardProps) {
	const { cart, addToCart } = useCart()

	const [isItemAdded, setIsItemAdded] = useState(false)
	const [quantity, setQuantity] = useState(() => {
		const item = cart.find((item) => item.coffee.id === coffee.id)

		if (!item) {
			return 0
		}

		return item.quantity
	})

	const isSubmitDisabled = !quantity

	const priceFormattedParts = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).formatToParts(coffee.price)

	const currencySign = priceFormattedParts.find(
		(part) => part.type === 'currency',
	)?.value

	const priceAmount = priceFormattedParts
		.filter((part) => part.type !== 'currency')
		.filter((part) => part.type !== 'literal')
		.map((part) => part.value)
		.join('')

	useEffect(() => {
		const timeout = setTimeout(() => setIsItemAdded(false), 1000)

		return () => {
			if (timeout) {
				clearTimeout(timeout)
			}
		}
	}, [isItemAdded])

	function handleIncrementQuantity() {
		setQuantity((state) => Math.min(state + 1, 99))
	}

	function handleDecrementQuantity() {
		setQuantity((state) => Math.max(state - 1, 0))
	}

	function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
		const quantity = Number(event.target.value)

		if (Number.isNaN(quantity)) {
			setQuantity(0)
			return
		}

		setQuantity(Math.max(0, Math.min(quantity, 99)))
	}

	function handleAddCoffeeToCart() {
		addToCart({
			coffee,
			quantity,
		})

		setIsItemAdded(true)
	}

	return (
		<Card as={as}>
			<img src={coffee.image} alt={coffee.title} />

			<CardBody>
				<TagList>
					{coffee.tags.map((tag) => {
						return <Tag key={tag}>{tag}</Tag>
					})}
				</TagList>

				<h3>{coffee.title}</h3>
				<p>{coffee.description}</p>
			</CardBody>

			<CardFooter>
				<span>
					{currencySign} <strong>{priceAmount}</strong>
				</span>

				<Control>
					<QuantityInput
						value={String(quantity).padStart(2, '0')}
						onIncrement={handleIncrementQuantity}
						onDecrement={handleDecrementQuantity}
						onChange={handleChangeQuantity}
					/>

					{!isSubmitDisabled &&
						(isItemAdded ? (
							<SuccessButton
								type="button"
								title="Adicionado ao carrinho com sucesso"
								disabled
							>
								<CheckFatIcon weight="fill" size={24} />
							</SuccessButton>
						) : (
							<AddToCartButton
								type="button"
								title="Adicionar ao carrinho"
								onClick={handleAddCoffeeToCart}
							>
								<ShoppingCartIcon weight="fill" size={24} />
							</AddToCartButton>
						))}
				</Control>
			</CardFooter>
		</Card>
	)
}
