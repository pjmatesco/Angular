import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  
  imageUrl = 'https://i.pinimg.com/originals/05/85/7c/05857c706487552b00e2c6c1752cd226.jpg';
  valorInicial = "Digite Algo";
  isDisable = true;

  constructor() {
    setTimeout(() => {
      this.isDisable = false;
      console.log('isDisable: ', this.isDisable);
    }, 3000);
   }



  ngOnInit(): void {
  }

}
