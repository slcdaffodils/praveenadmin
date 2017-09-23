import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DatabasematricsComponent } from './databasematrics.component';
import { routing } from './databasematrics.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    DatabasematricsComponent
  ]
})
export class DatabasematricsModule {}