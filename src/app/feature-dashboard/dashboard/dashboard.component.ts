import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IShoppingCart } from '../cart-items.model';
import { DashboardService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private _unsubscribe = new Subject<void>();
  shoppingCart$: Observable<IShoppingCart>;
  showCategories = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.dashboardService.getCartItems();
  }

  ngOnDestroy(): void {
    // this._unsubscribe
  }
}
