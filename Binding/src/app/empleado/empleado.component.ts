import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',

  // Creamos template inline
  // template: "<p>Aqui iria un empleado</p>",

  styleUrls: ['./empleado.component.css']

  // Creamos estilos inline
  // styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent {

  // Creamos las propiedades para usar la INTERPOLACIÓN
  nombre = "Guillermo";
  apellido = "Toretto";
  edad = 1;
  // empresa = "TSMotorSport";
  empresa2 = "TSMotorSport";

  // llamaEmpresa(value: String) {

  // }

  // Creamos una propiedades para usar property BINDING
  habilitacionCuadro = true;
  userRegistrado = false;
  // Creamos una propiedad para usar event BINDING
  textoRegistrado = "No hay nadie registrado";

  // Creamos una función para usar property BINDING
  getRegistroUsuario() {
    this.userRegistrado = false;
  }

  // Creamos una funcion para usar event BINDING -> Creamos una ventana emergente y la interpolacion de una propiedad
  setUsuarioRegistrado(event: Event) {

    if ((<HTMLInputElement>event.target).value == "Si") {
      alert("El empleado se acaba de registrar");
      this.textoRegistrado = "El empleado se acaba de registrar";
    } else {
      alert("El empleado no se acaba de registrar");
      this.textoRegistrado = "El empleado no se acaba de registrar";
    }

  }

}
