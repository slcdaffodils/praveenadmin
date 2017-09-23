import { Routes, RouterModule } from '@angular/router';

import { NetworkmetricsComponent } from './networkmetrics.component';

const routes: Routes = [
  {
    path: '',
    component: NetworkmetricsComponent
  }
];

export const routing = RouterModule.forChild(routes);