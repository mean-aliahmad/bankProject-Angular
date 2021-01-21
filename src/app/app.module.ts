import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HubServiceService } from './hub-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TermsAndConditionComponent } from './component/terms-and-condition/terms-and-condition.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TermsAndConditionComponent,
    ProfileComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
