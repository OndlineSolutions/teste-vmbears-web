import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XmlViewRoutingModule } from './xml-view-routing.module';
import { XmlViewComponent } from './xml-view.component';
import { ConfirmModal } from 'src/app/modals/confirm-modal/confirm-modal';
import { MaterialModule } from 'src/app/modules/material.module';
import { LibVexModule } from 'src/app/modules/lib-vex.module';
import { DadosAusentesComponent } from 'src/app/dados-ausentes/dados-ausentes.component';

@NgModule({
  declarations: [
    XmlViewComponent, 
    ConfirmModal, 
    DadosAusentesComponent
  ],
  imports: [
    CommonModule,
    XmlViewRoutingModule,
    MaterialModule,
    LibVexModule
  ]
})
export class XmlViewModule { }
