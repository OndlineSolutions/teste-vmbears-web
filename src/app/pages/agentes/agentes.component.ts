import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmModal } from 'src/app/modals/confirm-modal/confirm-modal';
import { DetalhesModal } from 'src/app/modals/detalhes-modal/detalhes-modal';
import { Agente } from 'src/app/model/agente';
import { RegiaoTable } from 'src/app/model/regiao-table';
import { AgenteService } from 'src/app/services/agente.service';
import icSync from '@iconify/icons-ic/sync'
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger20ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss'],
	animations: [
		fadeInUp400ms,
		stagger20ms
	]
})
export class AgentesComponent implements OnInit {
  
  @ViewChild(MatPaginator) set matPaginator(mp : MatPaginator){
    this.paginator = mp;
    this.agenteService.inilPaginator(this.paginator);

    this.setDataSourceAtributes();
  };

  setDataSourceAtributes(){
    this.dataSource.paginator = this.paginator;
  }
  paginator: MatPaginator;

  icSync = icSync;
  public carregando = false;

  displayedColumns: string[] = [
    'codigoAgente',
    'data',
    'sigla',
    'detalhes'
  ];
  dataSource = new MatTableDataSource<RegiaoTable>();

  regioes: RegiaoTable[] = []


  constructor(private agenteService: AgenteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obterAgentes();
  }

  obterAgentes(){
    this.carregando = true;
    this.agenteService.obterAgentes().subscribe(response=>{
      this.montarDados(response.body)
      this.carregando = false;
    }, (error)=>{
      this.carregando = false;
      console.log(error);
    })
  }

  montarDados(agentes: Agente[]){
    agentes.forEach(agente => {
      agente.regioes.forEach(regiao => {

        let regiaoTable = new RegiaoTable();
        regiaoTable.codigo = agente.codigo
        regiaoTable.data = agente.data
        regiaoTable.sigla = regiao.sigla
        regiaoTable.geracao = regiao.geracao
        regiaoTable.compra = regiao.compra
        regiaoTable.precoMedio = regiao.precoMedio

        this.regioes.push(regiaoTable)
      });
    });
    this.dataSource = new MatTableDataSource<RegiaoTable>(this.regioes);
  }

  abrirDetalhesModal(detalhes: RegiaoTable) {
		const dialogRef = this.dialog.open(DetalhesModal, {
      width: '60rem',
      height: '30rem',
			data: {detalhes}
		});
		dialogRef.afterClosed().subscribe(result => {
		});
	}

  abrirModalDeletar() {
    let label = " todos os itens da base de dados";
		const dialogRef = this.dialog.open(ConfirmModal, {
			data: {label}
		});
		dialogRef.afterClosed().subscribe(result => {
      this.carregando = true;
      this.agenteService.deletarDados().subscribe(()=> {
        this.carregando = false;
        this.dataSource = new MatTableDataSource<RegiaoTable>();
      });
		});
	}
}
