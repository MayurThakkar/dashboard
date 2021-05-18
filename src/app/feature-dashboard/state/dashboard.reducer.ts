import { IShoppingCartItems } from '../model/cart-items.model';
import * as cartActions from './dashboard.action';

export interface CartDataState {
  cartItem: IShoppingCartItems[];
  isLoaded: boolean;
  updateCartItem: IShoppingCartItems;
  deleteCartItem: IShoppingCartItems;
  error?: string | null;
}

const initialState: CartDataState = {
  cartItem: [],
  isLoaded: false,
  updateCartItem: null,
  deleteCartItem: null,
  error: null,
};

export function reducer(state = initialState, action: cartActions.CartActions) {
  switch (action.type) {
    case cartActions.CartActionTypes.GET_AVAILABLE_CART_DATA:
      return {
        ...state,
        isLoaded: true,
        cartItem: action.payload,
      };
    case cartActions.CartActionTypes.UPDATE_AVAILABLE_CART_DATA:
      return {
        ...state,
        updateCartItem: action.payload,
      };
    case cartActions.CartActionTypes.DELETE_AVAILABLE_CART_DATA:
      return {
        ...state,
        deleteCartItem: action.payload,
      };
    default:
      return state;
  }
}
