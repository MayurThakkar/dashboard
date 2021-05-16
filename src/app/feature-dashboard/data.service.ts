import * as cartJson from '../../assets/data/shopping_cart_items.json';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {}

  createDb() {
    let shopping_cart_items = cartJson.shopping_cart_items
    return {shopping_cart_items};
  }
}
