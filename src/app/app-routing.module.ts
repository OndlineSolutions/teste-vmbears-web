import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'xml',
        loadChildren: () =>
          import('./pages/xml-view/xml-view.module').then(
            (m) => m.XmlViewModule
          )
      },
      {
        path: 'agentes',
        loadChildren: () =>
          import('./pages/agentes/agentes.module').then(
            (m) => m.AgentesModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
