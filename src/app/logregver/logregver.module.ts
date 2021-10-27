import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogregverRoutingModule } from './logregver-routing.module';
import { LogregverComponent } from './logregver.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';
// import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  declarations: [
    LogregverComponent,
    LoginComponent,
    SignupComponent,
    VerificationComponent,
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    LogregverRoutingModule
  ]
})
export class LogregverModule { }
