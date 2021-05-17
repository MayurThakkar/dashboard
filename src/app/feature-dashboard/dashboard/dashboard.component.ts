import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isOpenCart: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  openShoppingCart(openEvent: boolean) {
    this.isOpenCart = openEvent;
  }

  closeShoppingCart() {
    this.isOpenCart = false;
  }
}
