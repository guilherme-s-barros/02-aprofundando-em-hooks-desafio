import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
	CoffeesSection,
	CopyContainer,
	FeaturesContainer,
	HeroContent,
	HeroSection,
	IconContainer,
} from './styles'

export function Home() {
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
								<IconContainer backgroundColor="yellowDark">
									<ShoppingCart weight="fill" size={16} />
								</IconContainer>
								Compra simples e segura
							</span>
							<span>
								<IconContainer backgroundColor="gray">
									<Package weight="fill" size={16} />
								</IconContainer>
								Embalagem mantém o café intacto
							</span>
							<span>
								<IconContainer backgroundColor="yellow">
									<Timer weight="fill" size={16} />
								</IconContainer>
								Entrega rápida e rastreada
							</span>
							<span>
								<IconContainer backgroundColor="purple">
									<Coffee weight="fill" size={16} />
								</IconContainer>
								O café chega fresquinho até você
							</span>
						</FeaturesContainer>
					</div>

					<img src="/images/hero.svg" alt="Copo de café" />
				</HeroContent>
			</HeroSection>

			<CoffeesSection>Coffees Section</CoffeesSection>
		</main>
	)
}
