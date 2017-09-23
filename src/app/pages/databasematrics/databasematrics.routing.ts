import { Routes, RouterModule } from '@angular/router';

import { DatabasematricsComponent } from './databasematrics.component';

const routes: Routes = [
  {
    path: '',
    component: DatabasematricsComponent
  }
];

export const routing = RouterModule.forChild(routes);