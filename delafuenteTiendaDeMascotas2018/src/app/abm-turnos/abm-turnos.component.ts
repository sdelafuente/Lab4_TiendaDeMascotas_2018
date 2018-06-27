import { Component, OnInit, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

//  Servicios
import { ApiService } from '../servicios/api.service';

export class Mascota {
  public id: any;
  public nro_ficha: any;
  public raza: any;
  public color: any;
  public edad: any;
  public tipo: any;
  public usuario_id: any;

  constructor() { }
}

export class Turno {
  public id: any;
  public mascota_id: any;
  public usuario_id: any;
  public fecha: any;

  constructor() { }
}


@Component({
  selector: 'app-abm-turnos',
  templateUrl: './abm-turnos.component.html',
  styleUrls: ['./abm-turnos.component.css']
})
export class AbmTurnosComponent implements OnInit {

    //  Array de personas
    @Input() arrayMascotas: Array<any>;
    @Input() error: Array<any>;
    @Input() btnCheck: boolean;

    private estaCargado: boolean;
    private mostrarLista: boolean;
    token: any;
    tokenPayload: any;

    //   Objeto Mascota
    usuario: Mascota;
    turno: Turno;
    turnoSolicitado: boolean;
    public miMascota = new Mascota();

    constructor(private service: ApiService) {
        this.arrayMascotas = new Array<any>();
    }

  ngOnInit() {
      this.buscarTodos();
      this.estaCargado = false;
      this.mostrarLista = false;
      this.turnoSolicitado = false;
  }

  //  Traigo todas las personas
  buscarTodos() {
      this.token = localStorage.getItem('token');
      if (this.token !== null) {
          this.tokenPayload = jwt_decode(this.token);
          if (null !== this.tokenPayload.data.email) {

              this.service.getObjs('/mascota/mias/' + this.tokenPayload.data.email)
              .then( data => {
                  // console.log(data);
                  this.mostrarLista = true;
                  this.arrayMascotas = data;
                })
              .catch( error => { console.log(error); });
          }
      }
  }

  sacarTurno(mascota) {
        this.turno = new Turno();
        this.miMascota = mascota;
        // console.log(this.miMascota);
        this.turno.mascota_id = mascota.id;
        this.turno.usuario_id = mascota.usuario_id;
        this.turnoSolicitado = true;
  }

  cargarTurno() {
      // Pedimos un turno
      this.service.postObj( this.turno, '/turnos/' )
      .then( data => {
            this.turnoSolicitado = false;
            // console.log(data);
      })
      .catch( e => {
          console.log(e);
      } );
        // console.log(this.turno);
  }
}
