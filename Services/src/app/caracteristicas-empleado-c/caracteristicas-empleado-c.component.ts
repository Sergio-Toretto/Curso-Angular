import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  // Creamos el decorador que traspasara información de un evento hijo a un evento padre. Tal y como requiere el decorador, se necesita utilizar un metodo de tipo "EventEmitter<string>()", que lo que hara es decirle a Angular que creara un evento emisor que contendra información de tipo string. Mas la creación de un metodo que lanzara esa información
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }

}
