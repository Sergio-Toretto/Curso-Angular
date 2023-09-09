// Archivo guardian, que velara por la seguridad de la aplicación web, redirigiendo a la pagina de LogIn, si no esta logueado el usuario que esta usando nuestra pagina o aplicación web

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.services";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardian implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.loginService.estasLogueado()) {

      return true;

    } else {

      this.router.navigate(['login']);
      return false;

    }

  }



}