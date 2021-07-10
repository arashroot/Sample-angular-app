import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule
  ]
})
export class HomeDashboardModule { }
