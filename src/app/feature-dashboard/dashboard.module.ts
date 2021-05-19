import { CardComponent } from './card/card.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { CommonModule } from '@angular/common';
import { DashBoardEffects } from './state/dashboard.effects';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './service/dashboard-service.service';
import { EffectsModule } from '@ngrx/effects';
import { IconCardComponent } from './icon-card/icon-card.component';
import { MaterialModule } from '../material.module';
import { NewsCardComponent } from './news-card/news-card.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/dashboard.reducer';

const components = [DashboardComponent, CardComponent, IconCardComponent, NewsCardComponent, CardGridComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    StoreModule.forRoot(reducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([DashBoardEffects]),
    StoreModule.forFeature('cartItemData', reducer),
  ],
  exports: [components],
  providers: [DashboardService],
})
export class DashboardModule {}
