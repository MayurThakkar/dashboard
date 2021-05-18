import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { DashboardService } from '../service/dashboard-service.service';
import { CartDataState } from './dashboard.reducer';
import * as cartActions from './dashboard.action';
import { deleteCartData, getCartLoaded, updateCartData } from './dashboard.selector';

@Injectable()
export class DashBoardEffects {
  loadCartRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.CartActionTypes.REQUEST_ITEMS),
      withLatestFrom(this.store.select(getCartLoaded)),
      filter(([_, loaded]) => !loaded),
      exhaustMap(() => this.dashBoardService.getCartItems().pipe(map((result) => new cartActions.GetCartData(result))))
    )
  );

  updateCartItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.CartActionTypes.UPDATE_AVAILABLE_CART_DATA),
        withLatestFrom(this.store.select(updateCartData)),
        switchMap((action: any) =>
          this.dashBoardService
            .updateItem(action[0].payload)
            .pipe(map((result) => new cartActions.UpdateCartData(result)))
        )
      ),
    { dispatch: false }
  );

  deleteCartItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.CartActionTypes.DELETE_AVAILABLE_CART_DATA),
        withLatestFrom(this.store.select(deleteCartData)),
        switchMap((action: any) => {
          return this.dashBoardService
            .deleteItem(action[0].payload)
            .pipe(map((result) => new cartActions.UpdateCartData(result)));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<CartDataState>,
    private dashBoardService: DashboardService
  ) {}
}
