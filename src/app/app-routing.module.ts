import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ModalModule } from 'ngb-modal';
import { TermsAndConditionComponent } from './component/terms-and-condition/terms-and-condition.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'terms-and-condition',component:TermsAndConditionComponent},
    {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ModalModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
