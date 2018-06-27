import { Component, OnInit, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

// Servicios
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-listar-turnos',
  templateUrl: './listar-turnos.component.html',
  styleUrls: ['./listar-turnos.component.css']
})
export class ListarTurnosComponent implements OnInit {


    @Input() arrayTurnos: Array<any>;
    private mostrarLista: boolean;
    token: any;
    tokenPayload: any;
  constructor(public service: ApiService) { }

  ngOnInit() {
     this.arrayTurnos = new Array<any>();
     this.mostrarLista = false;
     this.buscarTodos();
  }

  buscarTodos() {
      this.token = localStorage.getItem('token');
      if (this.token !== null) {
          this.tokenPayload = jwt_decode(this.token);

          if (null !== this.tokenPayload.data.email && this.tokenPayload.data.rol === 'cliente') {

              this.service.getObjs('/turnos/mias/' + this.tokenPayload.data.email)
              .then( data => {
                   // console.log(data);
                   this.mostrarLista = true;
                   this.arrayTurnos = data;
                })
              .catch( error => { console.log(error); });
          }
      }
  }

}
