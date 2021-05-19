import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const matModules = [
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
];

@NgModule({
  imports: [matModules],
  exports: [matModules],
})
export class MaterialModule {}
