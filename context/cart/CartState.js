import { CartContext } from "./CartContext";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_CART,
	ADDED_TO_CART,
	INCREASE_QTY,
	DECREASE_QTY,
} from "./CartActionType";
import { cartReducer } from "./CartReducer";
import { useReducer } from "react";

export const CartState = ({ children }) => {
	const initailState = {
		cart: [],
		cartTotal: 0,
		isCompleted: false,
		isaddedToCart: false,
	};
	const [state, dispatch] = useReducer(cartReducer, initailState);

	const addToCart = (cartObj) => {
		dispatch({ type: ADD_TO_CART, payload: cartObj });
	};

	const addedToCart = (cartObjId) => {
		dispatch({ type: ADDED_TO_CART, payload: cartObjId });
	};
	const removeFromCart = (cartObjId) => {
		dispatch({ type: REMOVE_FROM_CART, payload: cartObjId });
	};

	const increaseQty = (cartObjId) => {
		dispatch({ type: INCREASE_QTY, payload: cartObjId });
	};

	const decreaseQty = (cartObjId) => {
		dispatch({ type: DECREASE_QTY, payload: cartObjId });
	};

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				isCompleted: state.isCompleted,
				cartTotal: state.cartTotal,
				addToCart,
				removeFromCart,
				dispatch,
				addedToCart,
				increaseQty,
				decreaseQty,
				...state,
			}}>
			{children}
		</CartContext.Provider>
	);
};
