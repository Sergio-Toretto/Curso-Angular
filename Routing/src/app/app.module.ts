import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

// Para empezar el ROUTING debemos de crear una constante de tipo ARRAY y de objeto tipo ROUTES y configurarla o añadir que componentes comprenderan la ruta en cuanto se navegue por la aplicación.
const appRoutes: Routes = [

  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'quienes', component: QuienesComponentComponent },
  { path: 'contacto', component: ContactoComponentComponent },
  // Para realizar el routing por paso de parametros, en el caso de tener información procedente de una base de datos, se le añade en el path, la /: y la variable o campo que representa a cada registro de la tabla de la base de datos
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  // Insertamos una ruta, en el caso de que ocurra algun error o una URl (ruta) incorrecta, es decir, error personalizado y siempre en la ultima de las rutas, para que no se produzcan errores.
  { path: '**', component: ErrorPersonalizadoComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Para un correcto funcionamiento del ROUTING, es imprescindible importar el modulo de ROUTER y mediante su metodo de forRoot le asignamos como parametro, la constante que dentro tiene todas las rutas creadas
    RouterModule.forRoot(appRoutes)
  ],
  // Insertamos dentro de los providers, el servicio creado o los servicios creados, creando la importación de manera automatica, si esta bien configurado los plugins o extensiones del IDE
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
