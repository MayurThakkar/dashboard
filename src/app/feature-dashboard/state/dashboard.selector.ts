import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartDataState } from './dashboard.reducer';

export const getCartItemState = createFeatureSelector<CartDataState>('cartItemData');

export const getCartData = createSelector(getCartItemState, (state: CartDataState) => state.cartItem);

export const getCartLoaded = createSelector(getCartItemState, (state: CartDataState) => state.isLoaded);

export const updateCartData = createSelector(getCartItemState, (state: CartDataState) => state.updateCartItem);
export const deleteCartData = createSelector(getCartItemState, (state: CartDataState) => state.deleteCartItem);
