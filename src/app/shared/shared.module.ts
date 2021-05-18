import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';

const components = [CartComponent, LayoutComponent, NavBarComponent, TopBarComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
