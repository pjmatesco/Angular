import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Seja Bem-Vindo!';
  pudim = 'Carro';
  color = 'azul';
  valorInicial = 10;

  eventoRecebido($event: any){
    console.log('Evento Recebido: ', true);
  }


 
  //titulo = 'só que em pt';
  //meuNumero = 10;

 // constructor() { }
    //console.log('passei por aqui');

   // setTimeout(() => {
   //   this.titulo = 'é pegadinha';
   //   this.meuNumero = 12369;
   //   console.log('passei por aqui dps de 3s');
   // }, 3000);
  
}
