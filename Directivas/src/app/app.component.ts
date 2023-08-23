import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre: string = "";
  apellido: string = "";
  cargo: string = "";
  entradas: any[];

  // Creamos el constructor para que podamos usar la directiva de atributo ngFor, dando valores al array creado
  constructor() {
    this.entradas = [
      { titulo: "Python cada dia mas presente" },
      { titulo: "Java presente desde hace mas de 20 años" },
      { titulo: "javaScript cada vez más funcional" },
      { titulo: "Kotlin potencia para tus Apps" },
      { titulo: "¿ Dónde quedo Pascal?" },
    ]
  }

  // Función que creamos para usar la directiva ngIf
  registraUsuario() {

    this.registrado = true
    this.mensaje = "Usuario registrado con exito"
  }
}
