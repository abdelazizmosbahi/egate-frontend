import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentinterfaceRoutingModule } from './studentinterface-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from '../profile/profile.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { PaymentComponent } from './payment/payment.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { SearchPipe } from '../shared/pipes/courses.pipe';
// import { MycoursesComponent } from './mycourses/mycourses.component';
// import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    // HomeComponent,
    // LoginComponent,
    // SignupComponent,
    // CoursesComponent,
    // ProfileComponent,
    ChatComponent,
    PaymentinfoComponent,
    SearchPipe,
    // MycoursesComponent

  ],
  imports: [
    CommonModule,
    StudentinterfaceRoutingModule
  ]
})
export class StudentinterfaceModule { }
