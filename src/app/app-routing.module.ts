import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './candidate/login/login.component';
import { DashboardComponent } from './candidate/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'candidate', children: [
  //     { path: 'login', component: LoginComponent },
  //     { path: 'dashboard', component: DashboardComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
