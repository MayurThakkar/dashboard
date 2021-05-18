import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { DashboardService } from '../service/dashboard-service.service';
import { CartDataState } from './dashboard.reducer';
import * as cartActions from './dashboard.action';
import { getCartLoaded } from './dashboard.selector';
import { Update } from '@ngrx/entity';
import { IShoppingCartItems } from '../model/cart-items.model';

@Injectable()
export class DashBoardEffects {
  loadCartRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.CartActionTypes.REQUEST_ITEMS),
      withLatestFrom(this.store.select(getCartLoaded)),
      filter(([_, loaded]) => !loaded),
      exhaustMap(() =>
        this.dashBoardService.getCartItems().pipe(map((carts) => cartActions.loadItemsSuccess({ carts })))
      )
    )
  );

  updateCartItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.CartActionTypes.UPDATE_AVAILABLE_CART_DATA),
        switchMap((action: any) =>
          this.dashBoardService.updateItem(action.cart).pipe(
            map((cart) => {
              const updatedCart: Update<IShoppingCartItems> = {
                id: action.cart.id,
                changes: {
                  ...action.cart,
                },
              };
              cartActions.updateCartDataSuccess({ cart: updatedCart });
            })
          )
        )
      ),
    { dispatch: false }
  );

  deleteCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.CartActionTypes.DELETE_AVAILABLE_CART_DATA),
      switchMap((action: any) => {
        console.log(action);
        return this.dashBoardService
          .deleteItem(action.id)
          .pipe(map((result) => cartActions.deleteCartSucess({ id: action.id })));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<CartDataState>,
    private dashBoardService: DashboardService
  ) {}
}
