import { Component, OnInit } from '@angular/core';

import { CartDataState } from './feature-dashboard/state/dashboard.reducer';
import { Store } from '@ngrx/store';
import { loadItemsRequested } from './feature-dashboard/state/dashboard.action';

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
