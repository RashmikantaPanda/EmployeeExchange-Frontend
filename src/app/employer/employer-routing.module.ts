import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatejobComponent } from './createjob/createjob.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

const routes: Routes = [
  {
    path: 'employer', children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard/:id', component: DashboardComponent },
      { path: 'create/job', component: CreatejobComponent },
      { path: 'view/appliedJobs', component: AppliedJobsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
