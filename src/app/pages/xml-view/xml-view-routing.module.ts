import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XmlViewComponent } from './xml-view.component';

const routes: Routes = [
  {path:'', component: XmlViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XmlViewRoutingModule { }
