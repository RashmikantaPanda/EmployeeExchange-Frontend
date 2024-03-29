import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { JobsComponent } from './jobs/jobs.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';

const routes: Routes = [
  {
    path: 'candidate', children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'reigstration', component: RegistrationComponent },
      {path:'viewJobs',component:JobsComponent},
      {path:'appliedJobs',component:AppliedJobComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
