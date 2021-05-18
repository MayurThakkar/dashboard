import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShoppingCartItems } from '../model/cart-items.model';

const URL = 'api/shopping_cart_items/';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getCartItems(): Observable<IShoppingCartItems[]> {
    return this.httpClient.get(URL) as Observable<IShoppingCartItems[]>;
  }

  updateItem(item: IShoppingCartItems): Observable<IShoppingCartItems> {
    return this.httpClient.put(URL + item.id, item) as Observable<IShoppingCartItems>;
  }

  deleteItem(item: IShoppingCartItems): Observable<IShoppingCartItems> {
    return this.httpClient.delete(URL + item.id) as Observable<IShoppingCartItems>;
  }
}
