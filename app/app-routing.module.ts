import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './studentinterface/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './studentinterface/login/login.component';
import { DashbComponent } from './admininterface/dashb/dashb.component';
import { TdashboardComponent } from './teacherinterface/tdashboard/tdashboard.component';
import { SignupComponent } from './studentinterface/signup/signup.component';
import { DashboardComponent } from './studentinterface/dashboard/dashboard.component';
import { CategoriesComponent } from './admininterface/categories/categories.component';
import { CoursesComponent } from './studentinterface/courses/courses.component';
import { TcourseComponent } from './teacherinterface/tcourse/tcourse.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './studentinterface/payment/payment.component';
import { PaymentinfoComponent } from './studentinterface/paymentinfo/paymentinfo.component';
import { ChatComponent } from './studentinterface/chat/chat.component';
import { AppointmentComponent } from './teacherinterface/appointment/appointment.component';
import { AddcComponent } from './teacherinterface/tcourse/addc/addc.component';
import { UpdcComponent } from './teacherinterface/tcourse/updc/updc.component';
import { UsersComponent } from './admininterface/users/users.component';
import { UpdcategoryComponent } from './admininterface/categories/updcategory/updcategory.component';
import { PasswordComponent } from './profile/password/password.component';
import { CourComponent } from './admininterface/cour/cour.component';
import { AccountComponent } from './account/account.component';
import { MycoursesComponent } from './studentinterface/mycourses/mycourses.component';

import { ClistComponent } from './teacherinterface/clist/clist.component';
import { ContactComponent } from './admininterface/contact/contact.component';
import { AboutComponent } from './profile/about/about.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  useHash: true,
  anchorScrolling: 'enabled'
  // scrollOffset: [0, 64],
};

const routes: Routes = [

  { path: 'home',   
   component: HomeComponent 
  }, // Redirect to the home component

   

  {
    path: 'app',
    component: AppComponent
  },  
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'dashb',
    component: DashbComponent
  },  
  {
    path: 'tdashboard',
    component: TdashboardComponent
  },  
  {
    path: 'signup',
    component: SignupComponent
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent
  },  
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
  path: 'updcategory/:id',
  component: UpdcategoryComponent
},
  {path:'courses',
component: CoursesComponent}  ,
{path:'mycourses',
component: MycoursesComponent}  ,
{
  path: 'chat',
  component: ChatComponent
},

{
  path: 'profile/:id',
  component: ProfileComponent
},
{
  path: 'password/:id',
  component: PasswordComponent
},

{
  path: 'tcourse',
  component: TcourseComponent
}, {path:'addc',component: AddcComponent},
    {path:'updc/:id',component: UpdcComponent},

{
  path: 'payment/:id1/:id2',
  component: PaymentComponent
},

{
  path: 'paymentinfo',
  component: PaymentinfoComponent
},
{
  path: 'appointment',
  component: AppointmentComponent
},
{
  path: 'users',
  component: UsersComponent
},
{
  path: 'cour',
  component: CourComponent
},
{
  path: 'account/:id',
  component: AccountComponent
},
{
  path: 'about/:id',
  component: AboutComponent
},
{
  path: 'clist',
  component: ClistComponent
},
{
  path: 'contact',
  component: ContactComponent
},

 {
    path: '**',
    component: Page404Component /*the last component in the list  */
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
