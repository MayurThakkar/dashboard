import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { CartDataState } from 'src/app/shared/state/dashboard.reducer';
import { IShoppingCartItems } from 'src/app/feature-dashboard/model/cart-items.model';
import { Store } from '@ngrx/store';
import { getCartData } from 'src/app/shared/state/dashboard.selector';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  private unSubscribe = new Subject<void>();
  openShoppingCart = false;
  cartItemSize$: Observable<IShoppingCartItems[]>;

  constructor(private store: Store<CartDataState>) {}

  ngOnInit(): void {
    this.cartItemSize$ = this.store.select(getCartData).pipe(takeUntil(this.unSubscribe));
  }

  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe();
  }
}
