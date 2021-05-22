import * as cartActions from './dashboard.action';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { CartDataState } from './dashboard.reducer';
import { DashboardService } from '../service/dashboard-service.service';
import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { getCartLoaded } from './dashboard.selector';

@Injectable()
export class DashBoardEffects {
  constructor(
    private actions$: Actions,
    private store: Store<CartDataState>,
    private dashBoardService: DashboardService
  ) {}

  loadCartRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.CartActionTypes.REQUEST_ITEMS),
      withLatestFrom(this.store.select(getCartLoaded)),
      switchMap(() =>
        this.dashBoardService.getCartItems().pipe(
          map((carts) => cartActions.loadItemsSuccess({ carts })),
          catchError(async (error) => cartActions.loadItemsFail({ error }))
        )
      )
    )
  );

  updateCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.CartActionTypes.UPDATE_AVAILABLE_CART_DATA),
      switchMap((action: any) =>
        this.dashBoardService.updateItem(action.cart).pipe(
          map(() => {
            const updateCart: Update<IShoppingCartItems> = {
              id: action.cart.id,
              changes: {
                ...action.cart,
              },
            };
            return cartActions.updateCartDataSuccess({ cart: updateCart });
          }),
          catchError(async (error) => cartActions.updateCartDataFail({ error }))
        )
      )
    )
  );

  deleteCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.CartActionTypes.DELETE_AVAILABLE_CART_DATA),
      switchMap((action: any) => {
        return this.dashBoardService.deleteItem(action.cart).pipe(
          map(() => cartActions.deleteCartSucess({ cart: action.cart })),
          catchError(async (error) => cartActions.deleteCartFail({ error }))
        );
      })
    )
  );

  removeAllCartItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.CartActionTypes.REMOVE_AVAILABLE_CART_DATA),
      switchMap(() =>
        this.dashBoardService.removeAllItems().pipe(
          map(() => cartActions.removeAllCartSucess()),
          catchError(async (error) => cartActions.removeAllCartFail({ error }))
        )
      )
    )
  );
}
