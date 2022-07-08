



import { TimeService } from '../shared/_services/time.service';

import { PosRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";


@NgModule({
  declarations: [BlogComponent,




  ],
  imports: [
    MatTableModule,
    CommonModule,
    PosRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ScrollingModule,
    BarcodeScannerLivestreamModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false})



  ],
  providers: [TimeService],
  bootstrap: []
})
export class PosModule { }
