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
			const itemIndex = state.cart.findIndex(
				(item) => item.coffee.id === action.payload.item.coffee.id,
			)

			const itemAlreadyExists = itemIndex >= 0

			if (itemAlreadyExists) {
				return {
					...state,
					cart: state.cart.map((item) => {
						if (item.coffee.id === action.payload.item.coffee.id) {
							return {
								...item,
								quantity: action.payload.item.quantity,
							}
						}

						return item
					}),
				}
			}

			return {
				...state,
				cart: [...state.cart, action.payload.item],
			}
		}

		case 'INCREMENT_ITEM_QUANTITY': {
			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.coffee.id === action.payload.itemId) {
						return {
							...item,
							quantity: Math.min(item.quantity + 1, 99),
						}
					}

					return item
				}),
			}
		}

		case 'DECREMENT_ITEM_QUANTITY': {
			const itemIndex = state.cart.findIndex(
				(item) => item.coffee.id === action.payload.itemId,
			)

			const item = state.cart[itemIndex]

			if (item.quantity - 1 <= 0) {
				return {
					...state,
					cart: state.cart.filter(
						(item) => item.coffee.id !== action.payload.itemId,
					),
				}
			}

			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.coffee.id === action.payload.itemId) {
						return {
							...item,
							quantity: Math.max(item.quantity - 1, 0),
						}
					}

					return item
				}),
			}
		}

		case 'CHANGE_ITEM_QUANTITY': {
			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.coffee.id === action.payload.itemId) {
						return {
							...item,
							quantity: Math.max(0, Math.min(action.payload.newQuantity, 99)),
						}
					}

					return item
				}),
			}
		}

		case 'REMOVE_ITEM': {
			return {
				...state,
				cart: state.cart.filter(
					(item) => item.coffee.id !== action.payload.itemId,
				),
			}
		}

		case 'MAKE_ORDER': {
			return {
				...state,
				...action.payload.order,
				cart: [],
			}
		}
	}
}
