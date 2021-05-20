import * as CartActions from 'src/app/shared/state/dashboard.action';
import * as CartSelector from 'src/app/shared/state/dashboard.selector';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartDataState } from 'src/app/shared/state/dashboard.reducer';
import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  private unSubscribe = new Subject<void>();
  shoppingCart: IShoppingCartItems[];
  totalAmount: number;

  showClose = false;
  emptyBadgeLength = false;

  constructor(private store: Store<CartDataState>) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe();
  }

  getCartItems() {
    this.store
      .select(CartSelector.getCartData)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe((cartList: IShoppingCartItems[]) => {
        this.totalAmount = 0;
        this.shoppingCart = cartList;
        cartList.forEach((element) => {
          this.totalAmount += element.total;
        });
      });
  }

  changeItem(value, item: IShoppingCartItems) {
    item.count = value;
    this.editCartItem(item);
  }

  updateCartItem(item: IShoppingCartItems, isAdd: boolean) {
    if (isAdd) {
      item.count += 1;
    } else {
      if (item.count > 0) {
        item.count -= 1;
      }
    }
    this.editCartItem(item);
  }

  editCartItem(item: IShoppingCartItems) {
    item.total = item.price * item.count;
    this.store.dispatch(CartActions.updateCartData({ cart: item }));
  }

  removeCartItem(item: IShoppingCartItems) {
    this.store.dispatch(CartActions.deleteCartData({ cart: item }));
  }

  checkoutTheCart() {
    this.store.dispatch(CartActions.removeAllCartSucess());
    alert('The payment is finished successfully');
  }
}
