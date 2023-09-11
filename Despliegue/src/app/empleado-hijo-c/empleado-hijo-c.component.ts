import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  // Declaramos la directiva decoradora @Input(), para que reconozca la información procedente del componente padre. Insertando despues del parentesis el nombre de las variable que estan dentro del corchete dentro del componente padre, que se declaro en la etiqueta <app-empleado-hijo-c></app-empleado-hijo-c>

  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  // Incluimos un array de ejemplo y un metodo dentro del componente padre, para que el decorador o directiva @Output, nos permita establecer la comunicación entre componente hijo y componente padre

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
