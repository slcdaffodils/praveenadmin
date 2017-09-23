import { Routes, RouterModule } from '@angular/router';

import { JvmsumComponent } from './jvmsum.component';

const routes: Routes = [
  {
    path: '',
    component: JvmsumComponent
  }
];

export const routing = RouterModule.forChild(routes);