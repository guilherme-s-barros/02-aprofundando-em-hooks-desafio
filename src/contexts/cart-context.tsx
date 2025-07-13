import { createContext, type ReactNode, useContext, useReducer } from 'react'

import {
	addToCartAction,
	changeItemQuantityAction,
	decrementItemQuantityAction,
	incrementItemQuantityAction,
	makeOrderAction,
	removeItemAction,
} from '../reducers/cart/actions'
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
	addToCart(item: Omit<Item, 'id'>): void
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

	function addToCart(item: Omit<Item, 'id'>) {
		dispatch(addToCartAction(item))
	}

	function incrementItemQuantity(itemId: string) {
		dispatch(incrementItemQuantityAction(itemId))
	}

	function decrementItemQuantity(itemId: string) {
		dispatch(decrementItemQuantityAction(itemId))
	}

	function changeItemQuantity(itemId: string, newQuantity: number) {
		dispatch(changeItemQuantityAction(itemId, newQuantity))
	}

	function removeItem(itemId: string) {
		dispatch(removeItemAction(itemId))
	}

	function makeOrder(order: Order) {
		dispatch(makeOrderAction(order))
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
