import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { JvmsumComponent } from './jvmsum.component';
import { routing } from './jvmsum.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    JvmsumComponent
  ]
})
export class JvmsumModule {}