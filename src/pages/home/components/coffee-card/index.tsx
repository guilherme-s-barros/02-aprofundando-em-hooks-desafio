import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCart } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import type { KnownTarget } from 'styled-components/dist/types'
import z from 'zod'

import { QuantityInput } from '../../../../components/quantity-input'
import { type Coffee, useCart } from '../../../../contexts/cart-context'
import {
	AddToCartButton,
	Card,
	CardBody,
	CardFooter,
	Tag,
	TagList,
} from './styles'

interface CoffeeCardProps {
	coffee: Coffee
	as?: KnownTarget
}

const addCoffeeToCartFormData = z.object({
	quantity: z
		.number()
		.min(1, 'A quantidade mínima é de 1 para adicionar ao carrinho.')
		.max(99, 'A quantidade máxima é de 99 para adicionar ao carrinho.'),
})

type AddCoffeeToCartFormData = z.infer<typeof addCoffeeToCartFormData>

export function CoffeeCard({ coffee, as }: CoffeeCardProps) {
	const { addCoffeeToCart } = useCart()

	const addCoffeeToCartForm = useForm({
		resolver: zodResolver(addCoffeeToCartFormData),
		defaultValues: {
			quantity: 0,
		},
	})

	const { handleSubmit, watch, reset } = addCoffeeToCartForm

	const quantity = watch('quantity')
	const isSubmitDisabled = !quantity

	function handleAddCoffeeToCart(data: AddCoffeeToCartFormData) {
		addCoffeeToCart(coffee, data.quantity)
		reset()
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
					R$ <strong>{coffee.price}</strong>
				</span>

				<form onSubmit={handleSubmit(handleAddCoffeeToCart)}>
					<FormProvider {...addCoffeeToCartForm}>
						<QuantityInput size="big" />
					</FormProvider>
					{!isSubmitDisabled && (
						<AddToCartButton type="submit" title="Adicionar ao carrinho">
							<ShoppingCart weight="fill" size={24} />
						</AddToCartButton>
					)}
				</form>
			</CardFooter>
		</Card>
	)
}
