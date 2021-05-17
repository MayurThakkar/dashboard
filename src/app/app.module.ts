import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './feature-dashboard/service/data.service';
import { OutsideClickDirective } from './directive/outside-click.directive';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './feature-dashboard/dashboard.module';
import { CoreModule } from './shared/core.module';

@NgModule({
  declarations: [AppComponent, OutsideClickDirective],
  imports: [
    CoreModule,
    SharedModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
