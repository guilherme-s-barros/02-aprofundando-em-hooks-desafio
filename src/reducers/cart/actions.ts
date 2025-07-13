import type { Action, Item, Order } from './reducer'

export function addToCartAction(item: Item): Action {
	return {
		type: 'ADD_TO_CART',
		payload: {
			item,
		},
	}
}

export function incrementItemQuantityAction(itemId: string): Action {
	return {
		type: 'INCREMENT_ITEM_QUANTITY',
		payload: {
			itemId,
		},
	}
}

export function decrementItemQuantityAction(itemId: string): Action {
	return {
		type: 'DECREMENT_ITEM_QUANTITY',
		payload: {
			itemId,
		},
	}
}

export function changeItemQuantityAction(
	itemId: string,
	newQuantity: number,
): Action {
	return {
		type: 'CHANGE_ITEM_QUANTITY',
		payload: {
			itemId,
			newQuantity,
		},
	}
}

export function removeItemAction(itemId: string): Action {
	return {
		type: 'REMOVE_ITEM',
		payload: {
			itemId,
		},
	}
}

export function makeOrderAction(order: Order): Action {
	return {
		type: 'MAKE_ORDER',
		payload: {
			order,
		},
	}
}
