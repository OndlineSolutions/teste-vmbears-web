import { Component, Inject, OnInit, Optional, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { DetalheTable } from "src/app/model/detalhes-table";
import { RegiaoTable } from "src/app/model/regiao-table";

@Component({
	selector: 'detalhes-modal',
	templateUrl: 'detalhes-modal.html',
	animations: [
		stagger60ms,
		fadeInUp400ms
	]

})
export class DetalhesModal implements OnInit {

	detalhes: RegiaoTable;

	detalhesTable: DetalheTable[] = [];

	displayedColumns: string[] = [
		'geracao',
		'compra',
		'precoMedio'
	];
	dataSource = new MatTableDataSource<DetalheTable>();

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
		this.detalhes = this.data.detalhes;
	}

	ngOnInit(): void {
		this.agrupaValores();
	}

	agrupaValores() {
		let valoresGeracao = [];
		let valoresCompra = [];
		let valoresPrecoMedio = [];
		
		this.detalhes.geracao.forEach(gc => valoresGeracao = gc.valor.split(","));
		this.detalhes.compra.forEach(c => valoresCompra = c.valor.split(","));
		this.detalhes.precoMedio.forEach(pm => valoresPrecoMedio = pm.valor.split(","));
		
		for (let i = 0; i < valoresGeracao.length; i++) {
			let detalhe = new DetalheTable();
			detalhe.valorGeracao = valoresGeracao[i];
			detalhe.valorCompra = valoresCompra[i];
			detalhe.valorPrecoMedio = valoresPrecoMedio[i];
			this.detalhesTable.push(detalhe);
		}

		this.dataSource = new MatTableDataSource<DetalheTable>(this.detalhesTable);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
		});
	}
}
