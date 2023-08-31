import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Para realizar una recoleccion buena de la información de un data service, es muy recomendable usar la interfaz de Angular "OnInit", que a su vez implica un desarrollo de esa interfaz o incluir el metodo "ngOnInit(): void {}" por defecto
export class AppComponent implements OnInit {


  // Ahora se realiza la inyección mediante el constructor del componente principal, para usar el servicio
  constructor() { }

  // Metodo por defecto, que requiere la interfaz de Angular "OnInit" para que esta pueda funcionar
  ngOnInit(): void { }

}
