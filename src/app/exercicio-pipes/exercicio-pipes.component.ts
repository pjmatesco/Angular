import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  filme={
    titulo: 'Senhor dos Aneis',
    nota: '4.449899590',
    custoGravacao: '1570444',
    dataLancamento: new Date(1992,7,26),
  };

  compras = [{
    produto: 'lâmpada',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    peso: 29.33333,
    quantidade: 2,
    data: new Date(2020, 1, 10, 19, 30)
  }]

}
