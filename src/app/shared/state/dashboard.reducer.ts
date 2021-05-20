import * as cartActions from './dashboard.action';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';

export interface CartDataState extends EntityState<IShoppingCartItems> {
  isLoaded: boolean;
}

export const cartsAdapter = createEntityAdapter<IShoppingCartItems>();

const initialState: CartDataState = cartsAdapter.getInitialState({
  isLoaded: false,
});

const cartsReducer = createReducer(
  initialState,
  on(cartActions.loadItemsSuccess, (state, action) => {
    return cartsAdapter.setAll(action.carts, {
      ...state,
      isLoaded: true,
    });
  }),
  on(cartActions.updateCartDataSuccess, (state, action) => {
    return cartsAdapter.updateOne(action.cart, state);
  }),
  on(cartActions.deleteCartSucess, (state, action) => {
    return cartsAdapter.removeOne(action.cart.id, state);
  }),
  on(cartActions.removeAllCartSucess, (state) => {
    return cartsAdapter.removeAll({
      ...state,
      isLoaded: false,
    });
  })
);

export function reducer(state, action) {
  return cartsReducer(state, action);
}
