import { createAction, props } from '@ngrx/store';

import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';
import { Update } from '@ngrx/entity';

export enum CartActionTypes {
  REQUEST_ITEMS = '[CartItem] Request cart item data',
  GET_AVAILABLE_CART_DATA_SUCCESS = '[CartItem] Get cart item data success',
  GET_AVAILABLE_CART_DATA_FAIL = '[CartItem] Get cart item data fail',
  UPDATE_AVAILABLE_CART_DATA = '[CartItem] Update cart item data',
  UPDATE_CART_DATA_SUCCESS = '[CartItem] update post success',
  UPDATE_CART_DATA_FAIL = '[CartItem] update post fail',
  DELETE_AVAILABLE_CART_DATA = '[CartItem] Delete cart item data',
  DELETE_CART_DATA_SUCCESS = '[CartItem] Delete cart item data success',
  DELETE_CART_DATA_FAIL = '[CartItem] Delete cart item data fail',
  REMOVE_AVAILABLE_CART_DATA = '[CartItem] Remove all cart item data',
  REMOVE_CART_DATA_SUCCESS = '[CartItem] Remove all cart item data success',
  REMOVE_CART_DATA_FAIL = '[CartItem] Remove all cart item data fail',
}

export const loadItemsRequested = createAction(CartActionTypes.REQUEST_ITEMS);
export const loadItemsSuccess = createAction(
  CartActionTypes.GET_AVAILABLE_CART_DATA_SUCCESS,
  props<{ carts: IShoppingCartItems[] }>(),
);

export const loadItemsFail = createAction(CartActionTypes.GET_AVAILABLE_CART_DATA_FAIL, props<{ error: any }>());

export const updateCartData = createAction(
  CartActionTypes.UPDATE_AVAILABLE_CART_DATA,
  props<{ cart: IShoppingCartItems }>(),
);

export const updateCartDataSuccess = createAction(
  CartActionTypes.UPDATE_CART_DATA_SUCCESS,
  props<{ cart: Update<IShoppingCartItems> }>(),
);

export const updateCartDataFail = createAction(CartActionTypes.UPDATE_CART_DATA_FAIL, props<{ error: any }>());

export const deleteCartData = createAction(
  CartActionTypes.DELETE_AVAILABLE_CART_DATA,
  props<{ cart: IShoppingCartItems }>(),
);

export const deleteCartSucess = createAction(
  CartActionTypes.DELETE_CART_DATA_SUCCESS,
  props<{ cart: IShoppingCartItems }>(),
);

export const deleteCartFail = createAction(CartActionTypes.DELETE_CART_DATA_FAIL, props<{ error: any }>());

export const removeAllCartData = createAction(CartActionTypes.REMOVE_AVAILABLE_CART_DATA);
export const removeAllCartSucess = createAction(CartActionTypes.REMOVE_CART_DATA_SUCCESS);
export const removeAllCartFail = createAction(CartActionTypes.REMOVE_CART_DATA_FAIL, props<{ error: any }>());
