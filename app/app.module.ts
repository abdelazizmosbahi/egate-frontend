import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './studentinterface/home/home.component';
import { LoginComponent } from './studentinterface/login/login.component';
import { SignupComponent } from './studentinterface/signup/signup.component';
import { CategoriesComponent } from './admininterface/categories/categories.component';
import { DashbComponent } from './admininterface/dashb/dashb.component';
import { CoursesComponent } from './studentinterface/courses/courses.component';
import { DashboardComponent } from './studentinterface/dashboard/dashboard.component';
import { TdashboardComponent } from './teacherinterface/tdashboard/tdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TcourseComponent } from './teacherinterface/tcourse/tcourse.component';
import { PaymentComponent } from './studentinterface/payment/payment.component';
import { PaymentinfoComponent } from './studentinterface/paymentinfo/paymentinfo.component';
import { ChatComponent } from './studentinterface/chat/chat.component';
import { AppointmentComponent } from './teacherinterface/appointment/appointment.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddcComponent } from './teacherinterface/tcourse/addc/addc.component';
import { UpdcComponent } from './teacherinterface/tcourse/updc/updc.component';
import { UsersComponent } from './admininterface/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdcategoryComponent } from './admininterface/categories/updcategory/updcategory.component';
import { ClistComponent } from './teacherinterface/clist/clist.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PasswordComponent } from './profile/password/password.component';
import { AccountComponent } from './account/account.component';
import { MycoursesComponent } from './studentinterface/mycourses/mycourses.component';
import { ContactComponent } from './admininterface/contact/contact.component';
import { AboutComponent } from './profile/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    DashboardComponent,
    ChatComponent,
    UsersComponent,
    CoursesComponent,
    TdashboardComponent,
    DashbComponent,
    ProfileComponent,
    TcourseComponent,
    AddcComponent,
    UpdcComponent,
    UpdcategoryComponent,
    PaymentComponent,
    PaymentinfoComponent,
    AppointmentComponent,
    PasswordComponent,
    AccountComponent,
    MycoursesComponent,
    ClistComponent,
    ContactComponent,
    AboutComponent
    
/*bech tsir navigation kif ma sar fi probleme button login and signup tdeclari l component lehnee*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbDropdownModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
