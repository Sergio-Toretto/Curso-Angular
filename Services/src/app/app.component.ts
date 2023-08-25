import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  empleados: Empleado[] = [
    new Empleado("Guillermo", "Toretto", "Presidente", 7000),
    new Empleado("Sergio", "Toretto", "Gerente", 5000),
    new Empleado("Manoli", "Martinez", "Jefa Proyectos", 3000),
    new Empleado("Antonio", "Correa", "Gestor Financiero", 3000),
  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}
