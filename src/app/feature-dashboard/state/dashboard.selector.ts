import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartDataState, cartsAdapter } from './dashboard.reducer';

export const getCartItemState = createFeatureSelector<CartDataState>('cartItemData');
export const cartsSelectors = cartsAdapter.getSelectors();

export const getCartData = createSelector(getCartItemState, cartsSelectors.selectAll);
export const getCartEntities = createSelector(getCartItemState, cartsSelectors.selectEntities);

export const getCartLoaded = createSelector(getCartItemState, (state: CartDataState) => state.isLoaded);
