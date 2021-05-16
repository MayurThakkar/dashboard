import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IShoppingCartItems } from '../cart-items.model';
import { DashboardService } from '../dashboard-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private _unsubscribe = new Subject<void>();
  shoppingCart: IShoppingCartItems[];
  totalAmount: number;

  showClose: boolean = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();
  }

  getCartItems() {
    let amount = 0;
    this.dashboardService.getCartItems().pipe(takeUntil(this._unsubscribe)).subscribe((cartList: IShoppingCartItems[]) => {
      this.shoppingCart = cartList;
      if(cartList.length === 0) {
        this.totalAmount = 0;
        return;
      }
      cartList.forEach(element => {
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
    isAdd ? item.count += 1 : item.count -= 1;
    this.editCartItem(item);
  }

  editCartItem(item: IShoppingCartItems) {
    item.total = item.price * item.count;
    this.dashboardService.updateItem(item).subscribe((res) => this.getCartItems());
  }

  removeCartItem(item: IShoppingCartItems) {
    const itemId = item.id;
    this.dashboardService.deleteItem(itemId).subscribe(() => {
      this.getCartItems();
    });
  }

  checkoutTheCart() {
    this.removeAll();
  }

  removeAll() {
    if(this.shoppingCart.length == 0) {
      return;
    }
    this.shoppingCart.forEach((item) => this.removeCartItem(item));
    this.getCartItems();
    this.totalAmount = 0;
    alert('The payment is finished successfully');
  }
}