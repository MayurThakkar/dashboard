import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  _openCart: boolean = false;

  @Output() openCart = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cart() {
    this._openCart = !this._openCart;
    this.openCart.emit(this._openCart);
  }
}