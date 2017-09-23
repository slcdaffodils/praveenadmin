import { Routes, RouterModule } from '@angular/router';

import { HostsumComponent } from './hostsum.component';

const routes: Routes = [
  {
    path: '',
    component: HostsumComponent
  }
];

export const routing = RouterModule.forChild(routes);