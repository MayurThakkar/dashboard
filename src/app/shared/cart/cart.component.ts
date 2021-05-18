import * as CartActions from 'src/app/feature-dashboard/state/dashboard.action';
import * as CartSelector from 'src/app/feature-dashboard/state/dashboard.selector';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { CartDataState } from 'src/app/feature-dashboard/state/dashboard.reducer';
import { DashboardService } from '../../feature-dashboard/service/dashboard-service.service';
import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  private unSubscribe = new Subject<void>();
  shoppingCart$: Observable<IShoppingCartItems[]>;
  shoppingCart: IShoppingCartItems[];
  totalAmount = 0;

  showClose = false;
  emptyBadgeLength = false;

  constructor(private dashboardService: DashboardService, private store: Store<CartDataState>) {
    this.shoppingCart$ = this.store.select(CartSelector.getCartData).pipe(takeUntil(this.unSubscribe));
  }

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadItemsRequested());
    this.getCartItems();
  }

  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe();
  }

  getCartItems() {
    let amount = 0;
    this.store
      .select(CartSelector.getCartData)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe((cartList: IShoppingCartItems[]) => {
        this.shoppingCart = cartList;
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
    this.store.dispatch(CartActions.updateCartData({ cart: item }));
    this.getCartItems();
  }

  removeCartItem(item: IShoppingCartItems) {
    this.store.dispatch(CartActions.deleteCartData({ id: item.id }));
    this.getCartItems();
  }

  checkoutTheCart() {
    this.shoppingCart = [];
    this.emptyBadgeLength = true;
    alert('The payment is finished successfully');
  }
}
