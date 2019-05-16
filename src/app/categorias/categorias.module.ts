import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriasPesquisaComponent, CategoriasCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    CategoriasPesquisaComponent,
    CategoriasCadastroComponent
  ],
  providers: [
    MessageService
  ]
})
export class CategoriasModule { }
