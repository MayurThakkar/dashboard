import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as CartActions from 'src/app/feature-dashboard/state/dashboard.action';
import * as CartSelector from 'src/app/feature-dashboard/state/dashboard.selector';
import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';
import { DashboardService } from '../../feature-dashboard/service/dashboard-service.service';
import { CartDataState } from 'src/app/feature-dashboard/state/dashboard.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  private _unsubscribe = new Subject<void>();
  shoppingCart$: Observable<IShoppingCartItems[]>;
  shoppingCart: IShoppingCartItems[];
  totalAmount: number;

  showClose: boolean = false;

  constructor(private dashboardService: DashboardService, private store: Store<CartDataState>) {
    this.shoppingCart$ = this.store.select(CartSelector.getCartData).pipe(takeUntil(this._unsubscribe));
  }

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadItemsRequested());
    this.getCartItems();
  }

  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();
  }

  getCartItems() {
    let amount = 0;
    this.store
      .select(CartSelector.getCartData)
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((cartList: IShoppingCartItems[]) => {
        if (cartList.length === 0) {
          this.totalAmount = 0;
          return;
        }
        cartList.forEach((element) => {
          amount += element.total;
          this.totalAmount = amount;
        });
      });
  }

  changeItem(value, item: IShoppingCartItems) {
    item.count = value;
    this.editCartItem(item);
  }

  updateCartItem(item: IShoppingCartItems, isAdd: boolean) {
    isAdd ? (item.count += 1) : (item.count -= 1);
    this.editCartItem(item);
  }

  editCartItem(item: IShoppingCartItems) {
    item.total = item.price * item.count;
    this.store.dispatch(CartActions.updateCartData({cart: item}));
  }

  removeCartItem(item: IShoppingCartItems) {
    this.store.dispatch(CartActions.deleteCartData({id: item.id}));
  }

  checkoutTheCart() {
    this.removeAll();
  }

  removeAll() {
    this.shoppingCart.forEach((item) => this.removeCartItem(item));
    this.getCartItems();
    this.totalAmount = 0;
    alert('The payment is finished successfully');
  }
}
