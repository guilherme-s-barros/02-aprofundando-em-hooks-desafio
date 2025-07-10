import type { Coffee } from '../../../../contexts/cart-context'
import { CoffeeCard } from '../coffee-card'
import { List } from './styles'

interface CoffeeListProps {
	coffees: Coffee[]
}

export function CoffeeList({ coffees }: CoffeeListProps) {
	return (
		<List>
			{coffees.map((coffee) => {
				return <CoffeeCard as="li" key={coffee.id} coffee={coffee} />
			})}
		</List>
	)
}
