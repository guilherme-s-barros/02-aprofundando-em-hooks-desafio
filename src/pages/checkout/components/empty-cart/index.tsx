import { EmptyIcon } from '@phosphor-icons/react'

import { EmptyCartContainer } from './styles'

export function EmptyCart() {
	return (
		<EmptyCartContainer>
			<EmptyIcon size={56} weight="bold" />
			<strong>O carrinho está vazio</strong>
			<p>Adicione itens para começar a comprar</p>
		</EmptyCartContainer>
	)
}
