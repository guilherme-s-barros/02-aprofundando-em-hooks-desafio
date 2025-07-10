import { createContext, type ReactNode, useContext, useState } from 'react'

export interface Coffee {
	id: string
	image: string
	title: string
	description: string
	tags: string[]
	price: number
}

interface CartItem {
	coffee: Coffee
	quantity: number
}

interface CartContextData {
	cart: CartItem[]
	addCoffeeToCart(coffee: Coffee, quantity: number): void
}

interface CartContextProviderProps {
	children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cart, setCart] = useState<CartItem[]>([])

	function addCoffeeToCart(coffee: Coffee, quantity: number) {
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
		} satisfies CartItem

		setCart((state) => [...state, newCartItem])
	}

	return (
		<CartContext.Provider value={{ cart, addCoffeeToCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
