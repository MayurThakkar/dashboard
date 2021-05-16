import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShoppingCartItems } from './cart-items.model';

const URL = 'api/shopping_cart_items/';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private _httpClient: HttpClient) {}

  getCartItems(): Observable<IShoppingCartItems[]> {
    return this._httpClient.get(URL) as Observable<IShoppingCartItems[]>;
  }

  updateItem(item: IShoppingCartItems): Observable<IShoppingCartItems> {
    return this._httpClient.put(URL + item.id, item) as Observable<IShoppingCartItems>;
  }

  deleteItem(itemID: string): Observable<IShoppingCartItems> {
    return this._httpClient.delete(URL + itemID) as Observable<IShoppingCartItems>;
  }
}
