import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AppsumComponent } from './appsum.component';
import { routing } from './appsum.routing';
import { ChartModule } from 'angular2-highcharts'; 
import { HttpModule,Http }  from '@angular/http';
export declare let require: any;
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    NgaModule,
    routing,
    ChartModule
  ],
  declarations: [
    AppsumComponent
  ]
})
export class AppsumModule {}