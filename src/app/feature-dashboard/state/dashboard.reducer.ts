import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { IShoppingCartItems } from '../model/cart-items.model';
import * as cartActions from './dashboard.action';

export interface CartDataState extends EntityState<IShoppingCartItems> {
  isLoaded: boolean;
}

export const cartsAdapter = createEntityAdapter<IShoppingCartItems>();

const initialState: CartDataState = cartsAdapter.getInitialState({
  isLoaded: false,
});

const _cartsReducer = createReducer(
    initialState,
    on(cartActions.updateCartDataSuccess, (state, action) => {
      return cartsAdapter.updateOne(action.cart, state);
    }),
    on(cartActions.deleteCartSucess, (state, { id }) => {
      return cartsAdapter.removeOne(id, state);
    }),
    on(cartActions.loadItemsSuccess, (state, action) => {
      return cartsAdapter.setAll(action.carts, {
        ...state,
        isLoaded: true,
      });
    })
  );

export function reducer(state, action) {
    return _cartsReducer(state, action);
}