import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IShoppingCartItems } from 'src/app/feature-dashboard/model/cart-items.model';
import { CartDataState } from 'src/app/feature-dashboard/state/dashboard.reducer';
import { getCartData } from 'src/app/feature-dashboard/state/dashboard.selector';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  private _unSubscribe = new Subject<void>();
  openShoppingCart = false;
  cartItemSize$: Observable<IShoppingCartItems[]>;
  cartListLength: number;

  @ViewChild(CartComponent) cartComp: CartComponent;

  constructor(private store: Store<CartDataState>) {}

  ngOnInit(): void {
    this.cartItemSize$ = this.store.select(getCartData);
  }

  ngOnDestroy(): void {
    this._unSubscribe.unsubscribe();
  }
}
