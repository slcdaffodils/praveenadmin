import { Routes, RouterModule } from '@angular/router';

import { UristatComponent } from './uristat.component';

const routes: Routes = [
  {
    path: '',
    component: UristatComponent
  }
];

export const routing = RouterModule.forChild(routes);