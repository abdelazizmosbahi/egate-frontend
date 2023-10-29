import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashbComponent } from './dashb/dashb.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [

  {
    path: 'dashb',
    component: DashbComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  // {
  //   path: 'categories',
  //   component: CategoriesComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmininterfaceRoutingModule { }
