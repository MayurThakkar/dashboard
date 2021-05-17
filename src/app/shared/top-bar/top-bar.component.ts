import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardService } from 'src/app/feature-dashboard/service/dashboard-service.service';
import { IShoppingCartItems } from '../../feature-dashboard/model/cart-items.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  private _unsubscribe = new Subject<void>();
  _openCart: boolean = false;
  cartItemSize$: Observable<IShoppingCartItems[]>;

  @Output() openCart = new EventEmitter<boolean>();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.cartItemSize$ = this.dashboardService.getCartItems().pipe(takeUntil(this._unsubscribe));
  }

  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();
  }

  openShoppingCart() {
    this._openCart = !this._openCart;
    this.openCart.emit(this._openCart);
  }
}
