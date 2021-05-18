import { Action } from '@ngrx/store';
import { IShoppingCartItems } from '../model/cart-items.model';

export enum CartActionTypes {
  REQUEST_ITEMS = '[CartItem] Request cart item data',
  GET_AVAILABLE_CART_DATA = '[CartItem] Get cart item data',
  UPDATE_AVAILABLE_CART_DATA = '[CartItem] Update cart item data',
  DELETE_AVAILABLE_CART_DATA = '[CartItem] Delete cart item data',
}

export class LoadItemsRequested implements Action {
  readonly type = CartActionTypes.REQUEST_ITEMS;
}

export class GetCartData implements Action {
  readonly type = CartActionTypes.GET_AVAILABLE_CART_DATA;
  constructor(public payload: IShoppingCartItems[]) {}
}

export class UpdateCartData implements Action {
  readonly type = CartActionTypes.UPDATE_AVAILABLE_CART_DATA;
  constructor(public payload: IShoppingCartItems) {}
}

export class DeleteCartData implements Action {
  readonly type = CartActionTypes.DELETE_AVAILABLE_CART_DATA;
  constructor(public payload: IShoppingCartItems) {
    console.log('item action', payload);
  }
}

export type CartActions = LoadItemsRequested | GetCartData | UpdateCartData | DeleteCartData;
