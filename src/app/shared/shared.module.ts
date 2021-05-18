import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const components = [CartComponent, LayoutComponent, NavBarComponent, TopBarComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
