import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherinterfaceRoutingModule } from './teacherinterface-routing.module';
import { RatingsComponent } from '../studentinterface/ratings/ratings.component';
import { OfferComponent } from './offer/offer.component';
import { BillsComponent } from './bills/bills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    RatingsComponent,
    OfferComponent,
    BillsComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
    TeacherinterfaceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherinterfaceModule { }
