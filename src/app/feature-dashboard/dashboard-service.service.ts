import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShoppingCart } from './cart-items.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient: HttpClient) {}

  getCartItems(): Observable<IShoppingCart> {
    return this._httpClient.get('../../assets/data/shopping_cart_items.json') as Observable<IShoppingCart>;
  }

  updateItem() {}
}
