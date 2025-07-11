import {
	CoffeeIcon,
	PackageIcon,
	ShoppingCartIcon,
	TimerIcon,
} from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { IconContainer } from '../../components/icon-container'
import type { Coffee } from '../../contexts/cart-context'
import { getCoffees } from '../../services/get-coffees'
import { CoffeeList } from './components/coffee-list'
import {
	CoffeesSection,
	CopyContainer,
	FeaturesContainer,
	HeroContent,
	HeroSection,
} from './styles'

export function Home() {
	const [coffees, setCoffees] = useState<Coffee[]>([])

	useEffect(() => {
		getCoffees().then((coffees) => setCoffees(coffees))
	}, [])

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
									<ShoppingCartIcon weight="fill" size={16} />
								</IconContainer>
								<p>Compra simples e segura</p>
							</span>
							<span>
								<IconContainer $backgroundColor="gray">
									<PackageIcon weight="fill" size={16} />
								</IconContainer>
								<p>Embalagem mantém o café intacto</p>
							</span>
							<span>
								<IconContainer $backgroundColor="yellow">
									<TimerIcon weight="fill" size={16} />
								</IconContainer>
								<p>Entrega rápida e rastreada</p>
							</span>
							<span>
								<IconContainer $backgroundColor="purple">
									<CoffeeIcon weight="fill" size={16} />
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

				<CoffeeList coffees={coffees} />
			</CoffeesSection>
		</main>
	)
}
