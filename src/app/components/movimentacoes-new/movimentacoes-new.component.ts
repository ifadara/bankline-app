
import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { movimentacoesService } from 'src/app/services/movimentacoes.service';

@Component({
  selector: 'app-movimentacoes-new',
  templateUrl: './movimentacoes-new.component.html',
  styleUrls: ['./movimentacoes-new.component.css']
})
export class movimentacoesNewComponent implements OnInit {
  correntistas:any;
  correntista:any;

  valor:any; 
  descricao:any;
  tipo:any;
  dataHora:any;

  constructor(
    private movimentacoesService: movimentacoesService,
    private correntistaService: CorrentistaService,
  ) { }

  

  ngOnInit(): void {
    this.exibirCorrentistas();
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

  save(): void {
    console.log(this.correntista)
    const movimentacoes = {
      valor: this.valor,
      descricao: this.descricao,
      tipo: this.tipo,
      idConta: this.correntista.id,
      dataHora: this.dataHora
    };
    console.log(movimentacoes);
    this.movimentacoesService.create(movimentacoes)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}