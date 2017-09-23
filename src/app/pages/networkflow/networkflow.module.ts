import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NetworkflowComponent } from './networkflow.component';
import { routing } from './networkflow.routing';
import { ChartModule } from 'angular2-highcharts'; 
import { HttpModule,Http }  from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NetworksearchPipe} from '../../filters/networksearch.pipe'; 
export declare let require: any;
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    NgaModule,
    routing,
    ChartModule,
    NgbModule

  ],
  declarations: [
    NetworkflowComponent,
NetworksearchPipe
  ]
 
 
})
export class NetworkflowModule {}