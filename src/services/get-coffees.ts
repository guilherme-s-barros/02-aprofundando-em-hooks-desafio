import type { Coffee } from '../contexts/cart-context'
import { api } from '../lib/api'

export async function getCoffees() {
	const coffees = await api.get<Coffee[]>('/coffees')

	return coffees.data
}
