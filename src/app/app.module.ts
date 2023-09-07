import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';;
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'

import { XmlViewModule } from './pages/xml-view/xml-view.module';
import { AgentesModule } from './pages/agentes/agentes.module';
import { MaterialModule } from './modules/material.module';
import { LibVexModule } from './modules/lib-vex.module';
import { DadosAusentesComponent } from './dados-ausentes/dados-ausentes.component';
import { TamanhoPipe } from './pipes/tamanho.pipe';

@NgModule({
	declarations: [AppComponent, TamanhoPipe],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatCheckboxModule,
		MatDialogModule,
		MatButtonModule,
		XmlViewModule,
		AgentesModule,
		MaterialModule,
		LibVexModule,

		// Vex
		VexModule,
		CustomLayoutModule
	],
	exports: [TamanhoPipe],
	providers: [TamanhoPipe],
	bootstrap: [AppComponent]
})
export class AppModule { }
