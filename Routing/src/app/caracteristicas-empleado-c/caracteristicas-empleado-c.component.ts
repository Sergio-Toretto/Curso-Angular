import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {
  ngOnInit(): void {

  }

  // Creamos el decorador que traspasara información de un evento hijo a un evento padre. Tal y como requiere el decorador, se necesita utilizar un metodo de tipo "EventEmitter<string>()", que lo que hara es decirle a Angular que creara un evento emisor que contendra información de tipo string. Mas la creación de un metodo que lanzara esa información
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  // constructor(private miServicio: ServicioEmpleadosService) {}

  agregaCaracteristicas(value: string) {

    // Aqui realizamos el uso del servicio, ya que este metodo, contiene un boton, que una vez que hagamos click, ejecutara todas las instrucciones que contenga el servicio
    // this.miServicio.muestraMensaje(value);

    // this.caracteristicasEmpleados.emit(value);

  }

}
