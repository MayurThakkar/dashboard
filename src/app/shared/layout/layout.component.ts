import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isOpenCart: boolean;

  constructor() {}

  ngOnInit(): void {}

  openShoppingCart(openEvent: boolean) {
    this.isOpenCart = openEvent;
  }
}
