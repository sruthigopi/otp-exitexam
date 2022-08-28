import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { OtpComponent } from './otp/otp.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:"",component:EmailComponent},{path:"otp",component:OtpComponent},{path:"welcome",component:WelcomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
