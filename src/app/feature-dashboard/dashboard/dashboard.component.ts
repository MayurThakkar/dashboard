import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showCategories = false;
  isOpenCart: boolean;

  constructor() { }

  ngOnInit(): void {}

  openShoppingCart(openEvent: boolean) {
    this.isOpenCart = openEvent;
  }

  closeShoppingCart() {
    this.isOpenCart = false;
  }
}
