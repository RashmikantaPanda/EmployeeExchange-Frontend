import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class CandidateModule { }
