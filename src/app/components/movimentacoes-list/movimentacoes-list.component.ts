import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { movimentacoesService } from 'src/app/services/movimentacoes.service';

@Component({
  selector: 'app-movimentacoes-list',
  templateUrl: './movimentacoes-list.component.html',
  styleUrls: ['./movimentacoes-list.component.css']
})


export class movimentacoesListComponent implements OnInit {
  movimentacoes:any;
  correntistas:any;
  correntista:any={};
  constructor(
    private movimentacoesService: movimentacoesService,
    private correntistaService: CorrentistaService,
    ) { }
  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  
  listMovimentacoes(): void {
    this.movimentacoesService.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}