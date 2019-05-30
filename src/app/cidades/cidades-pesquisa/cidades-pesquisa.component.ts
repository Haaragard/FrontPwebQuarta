import { MessageService, ConfirmationService } from 'primeng/api';
import { CidadesService } from './../cidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  cidades = [];

  nomeBusca: string;

  constructor(
    private service:CidadesService,
    private msg:MessageService,
    private conf:ConfirmationService,
  ) { }

  // pesquisar(){
  //   this.service.pesquisar({nome:this.nomeBusca})
  //   .then((dados)=>{
  //     this.cidades=dados;
  //   });
  // }

  ngOnInit() {
    // this.pesquisar();
  }

  confirmarExclusao(cidade:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+cidade.nome+'?',
      accept: () => {
        this.excluir(cidade);
      }
    });
  }

  excluir(cidade: any){
    this.service.excluir(cidade.id).then(()=>{
      // this.pesquisar();
      this.msg.add({severity:'Excluido com Sucesso', summary:'Exclusão', detail:'Cidade '+cidade.nome+' excluída'});
    });
  }

}
