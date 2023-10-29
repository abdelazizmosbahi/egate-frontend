import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { DashbComponent } from '../admininterface/dashb/dashb.component';
import { LoginComponent } from './login/login.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  // {
  //   path: 'courses',
  //   component: CoursesComponent
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },


  {
    path: 'dashb',
    component: DashbComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // }, 
  {
    path: 'courses',
    component: CoursesComponent
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentinterfaceRoutingModule { }
