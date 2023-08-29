// Data Service creado manualmente

import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

// Este decorador, hace posible la inyeccion de un servicio a otro
@Injectable()

export class EmpleadosService {

  // Estos datos formarian parte de la hipotetica base de datos en la que estariamos trabajando
  empleados: Empleado[] = [
    new Empleado("Guillermo", "Toretto", "Presidente", 7000),
    new Empleado("Sergio", "Toretto", "Gerente", 5000),
    new Empleado("Manoli", "Martinez", "Jefa Proyectos", 3000),
    new Empleado("Antonio", "Correa", "Gestor Financiero", 3000),
  ];

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {

  }

  // Metodo para agregar un nuevo empleado
  agregarEmpleadoServicio(empleado: Empleado) {

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va ha agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);

    this.empleados.push(empleado);

  }

}