import { api } from '../lib/api'
import type { Coffee } from '../reducers/cart/reducer'

export async function getCoffees() {
	const response = await api.get<Coffee[]>('/coffees')

	return response.data
}
