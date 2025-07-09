import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { IconContainer } from '../../components/icon-container'
import { QuantityInput } from '../../components/quantity-input'
import { type CoffeeData, getCoffees } from '../../services/get-coffees'
import {
	AddToCartButton,
	CoffeeCard,
	CoffeeCardBody,
	CoffeeCardFooter,
	CoffeeList,
	CoffeesSection,
	CoffeeTag,
	CoffeeTagList,
	CopyContainer,
	FeaturesContainer,
	HeroContent,
	HeroSection,
} from './styles'

interface CartItem {
	coffee: CoffeeData
	quantity: number
}

export function Home() {
	const [coffees, setCoffees] = useState<CoffeeData[]>([])
	const [cart, setCart] = useState<CartItem[]>([])

	useEffect(() => {
		getCoffees().then((coffees) => setCoffees(coffees))
	}, [])

	function handleAddCoffeeToCart(coffee: CoffeeData) {
		const newCartItem = {
			coffee,
			quantity: 1,
		} satisfies CartItem

		setCart((state) => [...state, newCartItem])
	}

	console.log(cart)

	return (
		<main>
			<HeroSection>
				<HeroContent>
					<div>
						<CopyContainer>
							<h1>Encontre o café perfeito para qualquer hora do dia</h1>

							<p>
								Com o Coffee Delivery você recebe seu café onde estiver, a
								qualquer hora.
							</p>
						</CopyContainer>

						<FeaturesContainer>
							<span>
								<IconContainer $backgroundColor="yellowDark">
									<ShoppingCart weight="fill" size={16} />
								</IconContainer>
								<p>Compra simples e segura</p>
							</span>
							<span>
								<IconContainer $backgroundColor="gray">
									<Package weight="fill" size={16} />
								</IconContainer>
								<p>Embalagem mantém o café intacto</p>
							</span>
							<span>
								<IconContainer $backgroundColor="yellow">
									<Timer weight="fill" size={16} />
								</IconContainer>
								<p>Entrega rápida e rastreada</p>
							</span>
							<span>
								<IconContainer $backgroundColor="purple">
									<Coffee weight="fill" size={16} />
								</IconContainer>
								<p>O café chega fresquinho até você</p>
							</span>
						</FeaturesContainer>
					</div>

					<img src="/images/hero.svg" alt="Copo de café" />
				</HeroContent>
			</HeroSection>

			<CoffeesSection>
				<h2>Nossos cafés</h2>

				<CoffeeList>
					{coffees.map((coffee) => {
						return (
							<CoffeeCard key={coffee.id}>
								<img src={coffee.image} alt={coffee.title} />

								<CoffeeCardBody>
									<CoffeeTagList>
										{coffee.tags.map((tag) => {
											return <CoffeeTag key={tag}>{tag}</CoffeeTag>
										})}
									</CoffeeTagList>

									<h3>{coffee.title}</h3>
									<p>{coffee.description}</p>
								</CoffeeCardBody>

								<CoffeeCardFooter>
									<span>
										R$ <strong>{coffee.price}</strong>
									</span>

									<span>
										<QuantityInput />

										<AddToCartButton
											type="button"
											title="Adicionar ao carrinho"
											onClick={() => handleAddCoffeeToCart(coffee)}
										>
											<ShoppingCart weight="fill" size={24} />
										</AddToCartButton>
									</span>
								</CoffeeCardFooter>
							</CoffeeCard>
						)
					})}
				</CoffeeList>
			</CoffeesSection>
		</main>
	)
}
