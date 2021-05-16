import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './feature-dashboard/dashboard/dashboard.component';
import { DashboardService } from './feature-dashboard/dashboard-service.service';
import { NavBarComponent } from './feature-dashboard/nav-bar/nav-bar.component';
import { TopBarComponent } from './feature-dashboard/top-bar/top-bar.component';
import { CardComponent } from './feature-dashboard/card/card.component';
import { CartComponent } from './feature-dashboard/cart/cart.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './feature-dashboard/data.service';
import { OutsideClickDirective } from './directive/outside-click.directive';

@NgModule({
  declarations: [AppComponent, DashboardComponent, NavBarComponent, TopBarComponent, CardComponent, CartComponent, OutsideClickDirective],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
