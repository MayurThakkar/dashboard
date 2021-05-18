import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IShoppingCartItems } from 'src/app/feature-dashboard/model/cart-items.model';
import { DashboardService } from 'src/app/feature-dashboard/service/dashboard-service.service';
import { CartDataState } from 'src/app/feature-dashboard/state/dashboard.reducer';
import { getCartData } from 'src/app/feature-dashboard/state/dashboard.selector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  private _unSubscribe = new Subject<void>();
  private _openCart = false;
  cartItemSize$: Observable<IShoppingCartItems[]>;

  @Output() openCart = new EventEmitter<boolean>();

  constructor(private store: Store<CartDataState>, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.cartItemSize$ = this.store.select(getCartData);
  }

  ngOnDestroy(): void {
    this._unSubscribe.unsubscribe();
  }

  openShoppingCart() {
    this._openCart = !this._openCart;
    this.openCart.emit(this._openCart);
  }
}
