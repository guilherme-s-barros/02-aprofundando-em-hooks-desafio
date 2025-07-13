import { createContext, type ReactNode, useContext, useReducer } from 'react'

import {
	type Address,
	cartReducer,
	type Item,
	initialCartState,
	type Order,
	type PaymentMethod,
} from '../reducers/cart/reducer'

interface CartContextData {
	cart: Item[]
	address: Address | null
	paymentMethod: PaymentMethod
	addToCart(item: Item): void
	incrementItemQuantity(itemId: string): void
	decrementItemQuantity(itemId: string): void
	changeItemQuantity(itemId: string, newQuantity: number): void
	removeItem(itemId: string): void
	makeOrder(order: Order): void
}

interface CartContextProviderProps {
	children: ReactNode
}

export const paymentMethodMap: Record<PaymentMethod, string> = {
	credit: 'Cartão de crédito',
	debit: 'Cartão de débito',
	money: 'Dinheiro',
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartState, dispatch] = useReducer(cartReducer, initialCartState)

	const { cart, address, paymentMethod } = cartState

	function addToCart(item: Item) {
		dispatch({
			type: 'ADD_TO_CART',
			payload: {
				item,
			},
		})
	}

	function incrementItemQuantity(itemId: string) {
		dispatch({
			type: 'INCREMENT_ITEM_QUANTITY',
			payload: {
				itemId,
			},
		})
	}

	function decrementItemQuantity(itemId: string) {
		dispatch({
			type: 'DECREMENT_ITEM_QUANTITY',
			payload: {
				itemId,
			},
		})
	}

	function changeItemQuantity(itemId: string, newQuantity: number) {
		dispatch({
			type: 'CHANGE_ITEM_QUANTITY',
			payload: {
				itemId,
				newQuantity,
			},
		})
	}

	function removeItem(itemId: string) {
		dispatch({
			type: 'REMOVE_ITEM',
			payload: {
				itemId,
			},
		})
	}

	function makeOrder(order: Order) {
		dispatch({
			type: 'MAKE_ORDER',
			payload: {
				order,
			},
		})
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				address,
				paymentMethod,
				addToCart,
				incrementItemQuantity,
				decrementItemQuantity,
				changeItemQuantity,
				removeItem,
				makeOrder,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
