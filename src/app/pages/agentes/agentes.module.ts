import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentesRoutingModule } from './agentes-routing.module';
import { AgentesComponent } from './agentes.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { LibVexModule } from 'src/app/modules/lib-vex.module';
import { DetalhesModal } from 'src/app/modals/detalhes-modal/detalhes-modal';

@NgModule({
  declarations: [
    AgentesComponent,
    DetalhesModal
  ],
  imports: [
    CommonModule,
    AgentesRoutingModule,
    MaterialModule,
    LibVexModule
  ]
})
export class AgentesModule { }
