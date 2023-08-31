// Data Service creado manualmente

import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

// Este decorador, hace posible la inyeccion de un servicio a otro
@Injectable()

export class EmpleadosService {

  empleados: Empleado[] = [];

  // // Estos datos formarian parte de la hipotetica base de datos en la que estariamos trabajando
  // empleados: Empleado[] = [
  //   new Empleado("Guillermo", "Toretto", "Presidente", 7000),
  //   new Empleado("Sergio", "Toretto", "Gerente", 5000),
  //   new Empleado("Manoli", "Martinez", "Jefa Proyectos", 3000),
  //   new Empleado("Antonio", "Correa", "Gestor Financiero", 3000),
  // ];

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices) {

  }

  // Metodo para obtener los registros almacenados en un array
  setEmpleados(misEmpleados: Empleado[]) {

    this.empleados = misEmpleados;

  }

  // Metodo que obtiene los datos de la base de datos Firebase
  obtenerEmpleados() {

    return this.dataService.cargarEmpleados();

  }

  // Metodo para agregar un nuevo empleado
  agregarEmpleadoServicio(empleado: Empleado) {

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va ha agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);

    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);

  }

  // Metodo para que funcione el enrutamiento pasado por parametros
  encontrarEmpleado(indice: number) {

    let empleado: Empleado = this.empleados[indice];

    return empleado;

  }

  actualizarEmpleado(indice: number, empleado: Empleado) {

    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);

  }

  eliminarEmpleado(indice: number) {

    this.empleados.splice(indice, 1);

    this.dataService.eliminarEmpleado(indice);

    // Instrucción para reconstruir la base de datos, despues de eliminar un registro que no sea el ultimo, con un condicional, para asegurarnos de que no este vacio
    if (this.empleados != null) this.dataService.guardarEmpleados(this.empleados);

  }

}