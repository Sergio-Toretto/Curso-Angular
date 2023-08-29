import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  titulo = 'Listado de Empleados';
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: Empleado[] = [];

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {

    // Recolección de los datos, para hacer posible la inyección del servicio
    // this.empleados = this.empleadosService.empleados;

  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    // Aqui realizamos el uso del servicio, ya que este metodo, contiene un boton, que una vez que hagamos click, ejecutara todas las instrucciones que contenga el servicio
    // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    // Aqui realizamos el uso del servicio, ya que este metodo, contiene un boton, que una vez que hagamos click, ejecutara todas las instrucciones que contenga el servicio
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

}
