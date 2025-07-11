import { createContext, type ReactNode, useContext, useState } from 'react'

export interface Coffee {
	id: string
	image: string
	title: string
	description: string
	tags: string[]
	price: number
}

export interface Item {
	coffee: Coffee
	quantity: number
}

interface CartContextData {
	cart: Item[]
	addToCart(coffee: Coffee, quantity: number): void
	incrementItemQuantity(itemId: string): void
	decrementItemQuantity(itemId: string): void
	changeItemQuantity(itemId: string, newQuantity: number): void
	removeItem(itemId: string): void
}

interface CartContextProviderProps {
	children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cart, setCart] = useState<Item[]>([])

	function addToCart(coffee: Coffee, quantity: number) {
		const itemIndex = cart.findIndex(
			(cartItem) => cartItem.coffee.id === coffee.id,
		)

		const itemAlreadyExists = itemIndex >= 0

		if (itemAlreadyExists) {
			setCart((state) =>
				state.map((item) => {
					if (item.coffee.id === coffee.id) {
						return {
							...item,
							quantity,
						}
					}

					return item
				}),
			)

			return
		}

		const item = {
			coffee,
			quantity,
		} satisfies Item

		setCart((state) => [...state, item])
	}

	function incrementItemQuantity(itemId: string) {
		setCart((state) =>
			state.map((item) => {
				if (item.coffee.id === itemId) {
					return {
						...item,
						quantity: Math.min(item.quantity + 1, 99),
					}
				}

				return item
			}),
		)
	}

	function decrementItemQuantity(itemId: string) {
		const item = cart.find((item) => item.coffee.id === itemId)

		if (!item) {
			return
		}

		if (item.quantity - 1 <= 0) {
			removeItem(itemId)
			return
		}

		setCart((state) =>
			state.map((item) => {
				if (item.coffee.id === itemId) {
					return {
						...item,
						quantity: Math.max(item.quantity - 1, 0),
					}
				}

				return item
			}),
		)
	}

	function changeItemQuantity(itemId: string, newQuantity: number) {
		setCart((state) =>
			state.map((item) => {
				if (item.coffee.id === itemId) {
					return {
						...item,
						quantity: Math.max(0, Math.min(newQuantity, 99)),
					}
				}

				return item
			}),
		)
	}

	function removeItem(itemId: string) {
		setCart((state) => state.filter((item) => item.coffee.id !== itemId))
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				incrementItemQuantity,
				decrementItemQuantity,
				changeItemQuantity,
				removeItem,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
