import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Para realizar una recoleccion buena de la información de un data service, es muy recomendable usar la interfaz de Angular "OnInit", que a su vez implica un desarrollo de esa interfaz o incluir el metodo "ngOnInit(): void {}" por defecto
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  empleados: Empleado[] = [];

  // Ahora se realiza la inyección mediante el constructor del componente principal, para usar el servicio
  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {

    // Recolección de los datos, para hacer posible la inyección del servicio
    // this.empleados = this.empleadosService.empleados;

  }

  // Metodo por defecto, que requiere la interfaz de Angular "OnInit" para que esta pueda funcionar
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
