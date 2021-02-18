import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra!: string;
  @Input() cor! : string;
  @Output() clicado = new EventEmitter(); 

  imageUrl = 'https://i.pinimg.com/originals/05/85/7c/05857c706487552b00e2c6c1752cd226.jpg';
  valorInicial = "Digite Algo";
  isDisable = true;
  OutroTexto = "Outro Texto";
  valorDoInput ='';
  valorContador = 10;

  constructor() {
    setTimeout(() => {
      this.isDisable = false;
      console.log('isDisable: ', this.isDisable);
    }, 3000);
   }

   onClick($event: any){
     console.log('Clicou!', $event);
   }

   digitouAlgo($event: any){
     this.valorDoInput = $event.target.value;
     console.log($event);
   }

   onClickBotaoEmissor($event: any){
     console.log('Devo emitir informações para o componente pai.');
     this.clicado.emit(true);
   } 

   onValorAtualizado(valorMudou: any){
     this.valorContador = valorMudou;
     console.log('onValorAtualizado: ', valorMudou);
   }

  ngOnInit(): void {
  }

}
