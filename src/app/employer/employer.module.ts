import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreatejobComponent } from './createjob/createjob.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { FormsModule } from '@angular/forms';
// import { BackButtonDirective } from '../back-button.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    CreatejobComponent,
    ViewApplicationsComponent,
    // BackButtonDirective
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    FormsModule,
  ],
 
})
export class EmployerModule { }
