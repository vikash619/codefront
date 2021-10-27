import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'logregver', loadChildren: () => import('./logregver/logregver.module').then(m => m.LogregverModule) },
  { path: '**', component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
