import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Servicios
import { ApiService } from '../servicios/api.service';

class Turno {
    nro_ficha: string;
    tipo: number;
}

@Component({
  selector: 'app-buscar-turnos',
  templateUrl: './buscar-turnos.component.html',
  styleUrls: ['./buscar-turnos.component.css']
})
export class BuscarTurnosComponent implements OnInit {

    public miTurno: Turno;
    public nro_ficha: string;
    public tipo_mascota: number;

    @Output() enviarTurno: EventEmitter<any> = new EventEmitter<any>();

    constructor(public service: ApiService) { }

     ngOnInit() {
        this.miTurno = new Turno();
      }

    Buscar() {

    //     this.miTurno.nro_ficha = this.nro_ficha;
    //     this.miTurno.tipo = this.tipo_mascota;
    // this.service.traerMascota(this.miTurno)
    //   .then(
    //       data => {
    //           if(typeof data!== "undefined"){
    //               this.miTurno = data;
    //              //  this.enviarTurno.emit(this.miMascota);
    //           }
    //   });
  }
}
