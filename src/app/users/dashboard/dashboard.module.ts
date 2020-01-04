import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
