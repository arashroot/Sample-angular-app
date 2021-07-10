import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: 'Home', loadChildren: () => import('./components/home-dashboard/home-dashboard.module').then(m => m.HomeDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
