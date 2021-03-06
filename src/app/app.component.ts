import { Component, OnInit } from '@angular/core';

import { CartDataState } from './shared/state/dashboard.reducer';
import { Store } from '@ngrx/store';
import { loadItemsRequested } from './shared/state/dashboard.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<CartDataState>) {}

  ngOnInit() {
    this.store.dispatch(loadItemsRequested());
  }
}
