import { CardComponent } from './card/card.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconCardComponent } from './icon-card/icon-card.component';
import { MaterialModule } from '../material.module';
import { NewsCardComponent } from './news-card/news-card.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const components = [DashboardComponent, CardComponent, IconCardComponent, NewsCardComponent, CardGridComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [components],
})
export class DashboardModule {}
