import { Routes, RouterModule } from '@angular/router';

import { AppsumComponent } from './appsum.component';

const routes: Routes = [
  {
    path: '',
    component: AppsumComponent
  }
];

export const routing = RouterModule.forChild(routes);