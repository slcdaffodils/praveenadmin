import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'appsum', pathMatch: 'full' },

      { path: 'appsum',  loadChildren: './appsummary/appsum.module#AppsumModule' },
      { path: 'networkflow',  loadChildren: './networkflow/networkflow.module#NetworkflowModule' },
      { path: 'hostsum',  loadChildren: './hostsum/hostsum.module#HostsumModule' },
      { path: 'jvmsum',  loadChildren: './jvmsum/jvmsum.module#JvmsumModule' },
      { path: 'requestbdown',  loadChildren: './requestbdown/requestbdown.module#RequestbdownModule' },
      { path: 'databasematrics',  loadChildren: './databasematrics/databasematrics.module#DatabasematricsModule' },
      { path: 'uristat',  loadChildren: './uristat/uristat.module#UristatModule' },
      { path: 'networkmetrics',  loadChildren: './networkmetrics/networkmetrics.module#NetworkmetricsModule' },

      { path: 'new',  loadChildren: './new/new.module#NewModule' }, 
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
