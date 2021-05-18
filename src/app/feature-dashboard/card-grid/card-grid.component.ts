import * as gridSizeJson from './grid-card-size.json';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  gridLayout$: Observable<any> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map(({ breakpoints }) => {
        if (breakpoints[Breakpoints.XSmall]) {
          return gridSizeJson.xSmall;
        }
        if (breakpoints[Breakpoints.Small]) {
          return gridSizeJson.small;
        }
        if (breakpoints[Breakpoints.Medium]) {
          return gridSizeJson.medium;
        }
        if (breakpoints[Breakpoints.Large]) {
          return gridSizeJson.large;
        }
        if (breakpoints[Breakpoints.XLarge]) {
          return gridSizeJson.xLarge;
        }
      })
    );
}
