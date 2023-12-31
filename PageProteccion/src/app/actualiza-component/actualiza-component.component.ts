import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {


  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  indice: number;
  accion: number;
  empleados: Empleado[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

  }

  volverHome() {

    // Creamos el enrutamiento, mediante inyeccion, empleando el constructor de la clase creando un parametro y a su vez debemos de usar el metodo "navigate([])" y dentro de sus corchetes la ruta que establecimos anteriormente. Esto redirigira automatica a la pagina que le hemos dicho dentro de los corchetes. En este caso a la vista 'Home'
    this.router.navigate([""]);

  }

  // actualizaEmpleado() {
  //   let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

  //   // Aqui realizamos el uso del servicio, ya que este metodo, contiene un boton, que una vez que hagamos click, ejecutara todas las instrucciones que contenga el servicio
  //   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

  //   // Aqui realizamos el uso del servicio, ya que este metodo, contiene un boton, que una vez que hagamos click, ejecutara todas las instrucciones que contenga el servicio
  //   this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
  //   // Redireccionamiento automatico a la vista de Home
  //   this.router.navigate([""]);

  // }

  // eliminaEmpleado() {

  //   this.empleadosService.eliminarEmpleado(this.indice);

  //   this.router.navigate([""]);

  // }

  // Metodo que empleando QueryParams, podemos modificar o eliminar un registro, segun la opcion que haya hecho click el usuario
  tratarEmpleados() {

    if (this.accion == 1) {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
      this.router.navigate([""]);
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate([""]);
    }

  }

}
