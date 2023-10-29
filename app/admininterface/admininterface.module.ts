import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmininterfaceRoutingModule } from './admininterface-routing.module';
import { CourComponent } from './cour/cour.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
  
    CourComponent,
       AboutComponent,
  ],
  imports: [
    CommonModule,
    AdmininterfaceRoutingModule
  ]
})
export class AdmininterfaceModule { }
