import * as cartActions from './dashboard.action';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';

export interface CartDataState extends EntityState<IShoppingCartItems> {
  isLoaded: boolean;
  error?: string | null;
}

export const cartsAdapter = createEntityAdapter<IShoppingCartItems>();

const initialState: CartDataState = cartsAdapter.getInitialState({
  isLoaded: false,
  error: null,
});

const cartsReducer = createReducer(
  initialState,
  on(cartActions.loadItemsSuccess, (state, action) => {
    return cartsAdapter.setAll(action.carts, {
      ...state,
      isLoaded: true,
    });
  }),
  on(cartActions.loadItemsFail, (state, { error }) => {
    return cartsAdapter.removeAll({
      ...state,
      isLoaded: false,
      error,
    });
  }),
  on(cartActions.updateCartDataSuccess, (state, action) => {
    return cartsAdapter.updateOne(action.cart, state);
  }),
  on(cartActions.updateCartDataFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error,
    };
  }),
  on(cartActions.deleteCartSucess, (state, action) => {
    return cartsAdapter.removeOne(action.cart.id, state);
  }),
  on(cartActions.removeAllCartSucess, (state) => {
    return cartsAdapter.removeAll({
      ...state,
      isLoaded: false,
    });
  }),
  on(cartActions.removeAllCartFail, (state, { error }) => {
    return {
      ...state,
      isLoaded: false,
      error,
    };
  })
);

export function reducer(state, action) {
  return cartsReducer(state, action);
}
