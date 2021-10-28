import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from '../errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { LogregverComponent } from './logregver.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';


const routes: Routes = [
  { path: '', component: ErrorpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verification', component: VerificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogregverRoutingModule { }
