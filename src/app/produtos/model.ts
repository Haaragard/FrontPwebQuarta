import { Categoria } from './../categorias/model';

export class Produto{
    id: number;
    nome: string;
    preco: number;
    categorias: Categoria[] = [];
}