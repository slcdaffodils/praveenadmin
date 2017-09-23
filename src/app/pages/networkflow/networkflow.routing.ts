import { Routes, RouterModule } from '@angular/router';

import { NetworkflowComponent } from './networkflow.component';

const routes: Routes = [
  {
    path: '',
    component: NetworkflowComponent
  }
];

export const routing = RouterModule.forChild(routes);