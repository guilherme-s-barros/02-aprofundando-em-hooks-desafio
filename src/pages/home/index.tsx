import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { QuantityInput } from '../../components/quantity-input'
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
								<IconContainer $backgroundColor="yellowDark">
									<ShoppingCart weight="fill" size={16} />
								</IconContainer>
								Compra simples e segura
							</span>
							<span>
								<IconContainer $backgroundColor="gray">
									<Package weight="fill" size={16} />
								</IconContainer>
								Embalagem mantém o café intacto
							</span>
							<span>
								<IconContainer $backgroundColor="yellow">
									<Timer weight="fill" size={16} />
								</IconContainer>
								Entrega rápida e rastreada
							</span>
							<span>
								<IconContainer $backgroundColor="purple">
									<Coffee weight="fill" size={16} />
								</IconContainer>
								O café chega fresquinho até você
							</span>
						</FeaturesContainer>
					</div>

					<img src="/images/hero.svg" alt="Copo de café" />
				</HeroContent>
			</HeroSection>

			<CoffeesSection>
				<h2>Nossos cafés</h2>

				<CoffeeList>
					<CoffeeCard>
						<img
							src="/images/coffees/expresso.png"
							alt="Café expresso tradicional"
						/>

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
							</CoffeeTagList>

							<h3>Expresso Tradicional</h3>
							<p>O tradicional café feito com água quente e grãos moídos</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img
							src="/images/coffees/americano.png"
							alt="Café expresso americano"
						/>

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
							</CoffeeTagList>

							<h3>Expresso Americano</h3>
							<p>Expresso diluído, menos intenso que o tradicional</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img
							src="/images/coffees/expresso-cremoso.png"
							alt="Café expresso cremoso"
						/>

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
							</CoffeeTagList>

							<h3>Expresso Cremoso</h3>
							<p>Café expresso tradicional com espuma cremosa</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img
							src="/images/coffees/cafe-gelado.png"
							alt="Café expresso tradicional"
						/>

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
								<CoffeeTag>Gelado</CoffeeTag>
							</CoffeeTagList>

							<h3>Expresso Gelado</h3>
							<p>Bebida preparada com café expresso e cubos de gelo</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img
							src="/images/coffees/cafe-com-leite.png"
							alt="Café com leite"
						/>

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
								<CoffeeTag>Com leite</CoffeeTag>
							</CoffeeTagList>

							<h3>Café com Leite</h3>
							<p>Meio a meio de expresso tradicional com leite vaporizado</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/latte.png" alt="Latte" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
								<CoffeeTag>Com leite</CoffeeTag>
							</CoffeeTagList>

							<h3>Latte</h3>
							<p>
								Uma dose de café expresso com o dobro de leite e espuma cremosa
							</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/capuccino.png" alt="Capuccino" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
								<CoffeeTag>Com leite</CoffeeTag>
							</CoffeeTagList>

							<h3>Capuccino</h3>
							<p>
								Bebida com canela feita de doses iguais de café, leite e espuma
							</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/macchiato.png" alt="Macchiato" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
								<CoffeeTag>Com leite</CoffeeTag>
							</CoffeeTagList>

							<h3>Macchiato</h3>
							<p>
								Café expresso misturado com um pouco de leite quente e espuma
							</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/mocaccino.png" alt="Mocaccino" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Tradicional</CoffeeTag>
								<CoffeeTag>Com leite</CoffeeTag>
							</CoffeeTagList>

							<h3>Mocaccino</h3>
							<p>Café expresso com calda de chocolate, pouco leite e espuma</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img
							src="/images/coffees/chocolate-quente.png"
							alt="Chocolate quente"
						/>

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Especial</CoffeeTag>
								<CoffeeTag>Com leite</CoffeeTag>
							</CoffeeTagList>

							<h3>Chocolate Quente</h3>
							<p>
								Bebida feita com chocolate dissolvido no leite quente e café
							</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/cubano.png" alt="Cubano" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Especial</CoffeeTag>
								<CoffeeTag>Alcoólico</CoffeeTag>
								<CoffeeTag>Gelado</CoffeeTag>
							</CoffeeTagList>

							<h3>Cubano</h3>
							<p>
								Drink gelado de café expresso com rum, creme de leite e hortelã
							</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/havaiano.png" alt="Havaiano" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Especial</CoffeeTag>
							</CoffeeTagList>

							<h3>Havaiano</h3>
							<p>Bebida adocicada preparada com café e leite de coco</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/arabe.png" alt="Árabe" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Especial</CoffeeTag>
							</CoffeeTagList>

							<h3>Árabe</h3>
							<p>Bebida preparada com grãos de café árabe e especiarias</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
					<CoffeeCard>
						<img src="/images/coffees/irlandes.png" alt="Irlandês" />

						<CoffeeCardBody>
							<CoffeeTagList>
								<CoffeeTag>Especial</CoffeeTag>
								<CoffeeTag>Alcoólico</CoffeeTag>
							</CoffeeTagList>

							<h3>Irlandês</h3>
							<p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
						</CoffeeCardBody>

						<CoffeeCardFooter>
							<span>
								R$ <strong>9,90</strong>
							</span>

							<form>
								<QuantityInput />

								<AddToCartButton type="submit" title="Adicionar ao carrinho">
									<ShoppingCart weight="fill" size={24} />
								</AddToCartButton>
							</form>
						</CoffeeCardFooter>
					</CoffeeCard>
				</CoffeeList>
			</CoffeesSection>
		</main>
	)
}
