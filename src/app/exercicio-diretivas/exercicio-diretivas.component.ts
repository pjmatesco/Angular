import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  deveExibir = true;

  listaFrutas = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Pêra'
  ];

  listaCarros = [{
    placa: 'JND-7438',
    cor: 'branco',
  }, {
    placa: 'NDK-1320',
    cor: 'azul',
  }, {
    placa: 'IOA-8742',
    cor: 'cinza',
  }, {
    placa: 'QSA-6542',
    cor: 'preto',
  }];

  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master';
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  

  trocarValor(){
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: any, numero2: any){
    return numero1 + numero2;
  }

}
