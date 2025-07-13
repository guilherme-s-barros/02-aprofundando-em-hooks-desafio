import { produce } from 'immer'

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

export interface Address {
	cep: string
	street: string
	complement?: string
	number: string
	district: string
	city: string
	uf: string
}

export type PaymentMethod = 'credit' | 'debit' | 'money'

export interface Order {
	address: Address
	paymentMethod: PaymentMethod
}

interface CartState {
	cart: Item[]
	address: Address | null
	paymentMethod: PaymentMethod
}

type ActionMap = {
	ADD_TO_CART: { item: Item }
	INCREMENT_ITEM_QUANTITY: { itemId: string }
	DECREMENT_ITEM_QUANTITY: { itemId: string }
	CHANGE_ITEM_QUANTITY: { itemId: string; newQuantity: number }
	REMOVE_ITEM: { itemId: string }
	MAKE_ORDER: { order: Order }
}

type Action = {
	[Type in keyof ActionMap]: ActionMap[Type] extends null
		? { type: Type }
		: { type: Type; payload: ActionMap[Type] }
}[keyof ActionMap]

export const initialCartState: CartState = {
	cart: [],
	address: null,
	paymentMethod: 'credit',
}

export function cartReducer(state: CartState, action: Action): CartState {
	switch (action.type) {
		case 'ADD_TO_CART': {
			return produce(state, (draft) => {
				const item = draft.cart.find(
					(item) => item.coffee.id === action.payload.item.coffee.id,
				)

				if (item) {
					item.quantity = action.payload.item.quantity
					return
				}

				draft.cart.push(action.payload.item)
			})
		}

		case 'INCREMENT_ITEM_QUANTITY': {
			return produce(state, (draft) => {
				const item = draft.cart.find(
					(item) => item.coffee.id === action.payload.itemId,
				)

				if (item) {
					item.quantity = Math.min(item.quantity + 1, 99)
				}
			})
		}

		case 'DECREMENT_ITEM_QUANTITY': {
			return produce(state, (draft) => {
				const itemIndex = draft.cart.findIndex(
					(item) => item.coffee.id === action.payload.itemId,
				)

				if (itemIndex < 0) {
					return
				}

				const item = draft.cart[itemIndex]

				if (item.quantity - 1 <= 0) {
					draft.cart.splice(itemIndex, 1)
					return
				}

				item.quantity = Math.max(item.quantity - 1, 0)
			})
		}

		case 'CHANGE_ITEM_QUANTITY': {
			return produce(state, (draft) => {
				const item = draft.cart.find(
					(item) => item.coffee.id === action.payload.itemId,
				)

				if (item) {
					item.quantity = Math.max(0, Math.min(action.payload.newQuantity, 99))
				}
			})
		}

		case 'REMOVE_ITEM': {
			return produce(state, (draft) => {
				const itemIndex = draft.cart.findIndex(
					(item) => item.coffee.id === action.payload.itemId,
				)

				draft.cart.splice(itemIndex, 1)
			})
		}

		case 'MAKE_ORDER': {
			const { address, paymentMethod } = action.payload.order

			return produce(state, (draft) => {
				draft.address = address
				draft.paymentMethod = paymentMethod
				draft.cart = []
			})
		}
	}
}
