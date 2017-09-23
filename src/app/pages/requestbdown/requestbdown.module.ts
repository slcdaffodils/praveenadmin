import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RequestbdownComponent } from './requestbdown.component';
import { routing } from './requestbdown.routing';
import { HttpModule,Http }  from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbModule,
    HttpModule
  ],
  declarations: [
    RequestbdownComponent
  ]
})
export class RequestbdownModule {}