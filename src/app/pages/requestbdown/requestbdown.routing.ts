import { Routes, RouterModule } from '@angular/router';

import { RequestbdownComponent } from './requestbdown.component';

const routes: Routes = [
  {
    path: '',
    component: RequestbdownComponent
  }
];

export const routing = RouterModule.forChild(routes);