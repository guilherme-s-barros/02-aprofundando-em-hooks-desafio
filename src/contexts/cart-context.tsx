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
}

interface CartContextProviderProps {
	children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cart, setCart] = useState<Item[]>([])

	function addToCart(coffee: Coffee, quantity: number) {
		const cartItemIndex = cart.findIndex(
			(cartItem) => cartItem.coffee.id === coffee.id,
		)

		const cartItemAlreadyExists = cartItemIndex >= 0

		if (cartItemAlreadyExists) {
			setCart((state) =>
				state.map((cartItem) => {
					if (cartItem.coffee.id === coffee.id) {
						return {
							...cartItem,
							quantity: cartItem.quantity + quantity,
						}
					}

					return cartItem
				}),
			)

			return
		}

		const newCartItem = {
			coffee,
			quantity,
		} satisfies Item

		setCart((state) => [...state, newCartItem])
	}

	function incrementItemQuantity(itemId: string) {
		setCart((state) =>
			state.map((cartItem) => {
				if (cartItem.coffee.id === itemId) {
					return {
						...cartItem,
						quantity: Math.min(cartItem.quantity + 1, 99),
					}
				}

				return cartItem
			}),
		)
	}

	function decrementItemQuantity(itemId: string) {
		setCart((state) =>
			state.map((cartItem) => {
				if (cartItem.coffee.id === itemId) {
					return {
						...cartItem,
						quantity: Math.max(cartItem.quantity - 1, 0),
					}
				}

				return cartItem
			}),
		)
	}

	function changeItemQuantity(itemId: string, newQuantity: number) {
		setCart((state) =>
			state.map((cartItem) => {
				if (cartItem.coffee.id === itemId) {
					return {
						...cartItem,
						quantity: Math.max(0, Math.min(newQuantity, 99)),
					}
				}

				return cartItem
			}),
		)
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				incrementItemQuantity,
				decrementItemQuantity,
				changeItemQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
