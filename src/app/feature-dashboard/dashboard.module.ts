import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CardGridComponent } from './card-grid/card-grid.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconCardComponent } from './icon-card/icon-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { DashboardService } from './service/dashboard-service.service';
import { DashBoardEffects } from './state/dashboard.effects';
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
