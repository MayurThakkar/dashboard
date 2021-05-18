import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { IShoppingCartItems } from '../model/cart-items.model';

export enum CartActionTypes {
  REQUEST_ITEMS = '[CartItem] Request cart item data',
  GET_AVAILABLE_CART_DATA = '[CartItem] Get cart item data',
  UPDATE_AVAILABLE_CART_DATA = '[CartItem] Update cart item data',
  UPDATE_CART_DATA_SUCCESS = '[CartItem] update post success',
  DELETE_AVAILABLE_CART_DATA = '[CartItem] Delete cart item data',
  DELETE_CART_DATA_SUCCESS = '[CartItem] Delete cart item data success'
}

export const updateCartData = createAction(
  CartActionTypes.UPDATE_AVAILABLE_CART_DATA,
  props<{ cart: IShoppingCartItems }>()
);

export const updateCartDataSuccess = createAction(
  CartActionTypes.UPDATE_CART_DATA_SUCCESS,
  props<{ cart: Update<IShoppingCartItems> }>()
);

export const deleteCartData = createAction(
  CartActionTypes.DELETE_AVAILABLE_CART_DATA,
  props<{ id: string }>()
);
export const deleteCartSucess = createAction(
  CartActionTypes.DELETE_CART_DATA_SUCCESS,
  props<{ id: string }>()
);

export const loadItemsRequested = createAction(CartActionTypes.REQUEST_ITEMS);
export const loadItemsSuccess = createAction(
  CartActionTypes.GET_AVAILABLE_CART_DATA,
  props<{ carts: IShoppingCartItems[] }>()
);
