import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NetworkmetricsComponent } from './networkmetrics.component';
import { routing } from './networkmetrics.routing';
import {NetworkmetricsService} from './networkmetrics.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    NetworkmetricsComponent
  ],
  providers:[NetworkmetricsService]
})
export class NetworkmetricsModule {}