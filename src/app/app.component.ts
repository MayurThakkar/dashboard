import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadItemsRequested } from './feature-dashboard/state/dashboard.action';
import { CartDataState } from './feature-dashboard/state/dashboard.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  constructor(private store: Store<CartDataState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadItemsRequested());
  }
}
