import { api } from '../lib/api'

export interface CoffeeData {
	id: number
	image: string
	title: string
	description: string
	tags: string[]
	price: string
}

export async function getCoffees() {
	const coffees = await api.get<CoffeeData[]>('/coffees')

	return coffees.data
}
