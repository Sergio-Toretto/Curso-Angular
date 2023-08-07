import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  // templateUrl: './empleado.component.html',

  // Creamos template inline
  template: "<p>Aqui iria un empleado</p>",

  // styleUrls: ['./empleado.component.css']

  // Creamos estilos inline
  styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent {

}
