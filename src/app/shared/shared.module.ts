import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { DashBoardEffects } from './state/dashboard.effects';
import { DashboardService } from './service/dashboard-service.service';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { OutsideClickDirective } from './directive/outside-click.directive';
import { StoreModule } from '@ngrx/store';
import { TopBarComponent } from './top-bar/top-bar.component';
import { reducer } from './state/dashboard.reducer';

const components = [CartComponent, OutsideClickDirective, LayoutComponent, NavBarComponent, TopBarComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature('cartItemData', reducer),
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
  ],
  exports: [LayoutComponent],
  providers: [DashboardService],
})
export class SharedModule {}
