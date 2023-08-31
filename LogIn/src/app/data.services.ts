// Servicio con el se trabajara con la Base de datos (BBDD) se ha hecho un CRUD

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

// Para que la inyeccion del modulo "HttpClientModule" pueda funcionar, es necesario importar el modulo de "@injectable", para que pueda usarse dentro de nuestros componentes
@Injectable()

export class DataServices {

  // Creamos el parametro para poder usar el modulo "httpClient"
  constructor(private httpClient: HttpClient) { }

  // Metodo para cargar los registros de una base de datos Firebase y los registros aparezcan por pantalla, usando el metodo "get" del modulo HttpClientModule
  cargarEmpleados() {

    return this.httpClient.get('https://mis-clientes-angular-d0125-default-rtdb.europe-west1.firebasedatabase.app/datos.json');

  }

  // Creamos un metodo para poder guardar empleados dentro de la base de datos
  guardarEmpleados(empleados: Empleado[]) {

    // Esto posibilitara guardar los empleados junto con la función "post" del metodo "HttpClientmodule", requiriendo la URL de la base de datos y el parametro u objetos a guardar dentro de la base de datos, mas seguidamente de la función subscribe, en la cual podemos insertar funciones flecha.
    this.httpClient.put('https://mis-clientes-angular-d0125-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(

      Response => console.log("Se han guardado los empleados: " + Response),
      error => console.log("Error: " + error),

    );

  }

  // Metodo para actualizar o modificar los registros de la base de datos, mediante su ID
  actualizarEmpleado(indice: number, empleado: Empleado) {

    let url = 'https://mis-clientes-angular-d0125-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

    this.httpClient.put(url, empleado).subscribe(

      Response => console.log("Se ha modificado correctamente el empleado: " + Response),
      error => console.log("Error: " + error),

    );

  }

  // Metodo para eliminar registros de la base de datos, mediante su ID
  eliminarEmpleado(indice: number) {

    let url = 'https://mis-clientes-angular-d0125-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

    this.httpClient.delete(url).subscribe(

      Response => console.log("Se ha eliminado correctamente el empleado: " + Response),
      error => console.log("Error: " + error),

    );

  }

}