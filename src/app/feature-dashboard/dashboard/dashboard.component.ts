import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  showCategories = false;
  isOpenCart: boolean;
  breakpoint: number;

  constructor() {}

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 2 : 6;
  }

  openShoppingCart(openEvent: boolean) {
    this.isOpenCart = openEvent;
  }

  closeShoppingCart() {
    this.isOpenCart = false;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 2 : 6;
  }
}
