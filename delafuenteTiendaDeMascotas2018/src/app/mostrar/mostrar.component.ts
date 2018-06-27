import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

// Servicios
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

    private estaCargado: boolean;
    private mostrarLista: boolean;
    token: any;
    tokenPayload: any;
    tipoRol: any;

  constructor(public service: ApiService) { }

  ngOnInit() {
      this.verificarRol();

  }

  verificarRol() {
      // Busco el Token
      this.token = localStorage.getItem('token');
      // Si esta el token
      if (this.token !== null) {
          // Capturo el token
          this.tokenPayload = jwt_decode(this.token);

          if ('admin' === this.tokenPayload.data.rol) {
              this.tipoRol = 1;
          } else if ('cliente' === this.tokenPayload.data.rol) {
              this.tipoRol = 2;
          } else {
              this.tipoRol = 0;
          }
      } else {
          this.tipoRol = 0;
      }
    // return this.tipoRol;
    }



}
