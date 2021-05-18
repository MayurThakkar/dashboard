import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './feature-dashboard/dashboard/dashboard.component';
import { NotFoundComponent } from './feature-not-found/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
