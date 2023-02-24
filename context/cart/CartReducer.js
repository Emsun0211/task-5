import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADDED_TO_CART,
	INCREASE_QTY,
	DECREASE_QTY,
} from "./CartActionType";

export const cartReducer = (state, action) => {
	const { cart } = state;
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...cart, { ...payload, qty: 1 }],
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: cart.filter((cart) => cart.id !== payload),
			};
		case ADDED_TO_CART:
			return {
				...state,
				isaddedToCart: true,
			};
		case INCREASE_QTY:
			return {
				...state,
				cart: cart.map((cart) => {
					{
						if (cart.id === payload.id) {
							const updatedItem = {
								...cart,
								qty: payload.qty + 1,
							};
							return updatedItem;
						} else {
							return cart;
						}
					}
				}),
			};

		case DECREASE_QTY:
			return {
				...state,
				cart: cart.map((cart) => {
					{
						if (cart.id === payload.id) {
							const updatedItem = {
								...cart,
								qty: payload.qty > 1 ? payload.qty - 1 : 1,
							};
							return updatedItem;
						} else {
							return cart;
						}
					}
				}),
			};
		default:
			return state;
	}
};
