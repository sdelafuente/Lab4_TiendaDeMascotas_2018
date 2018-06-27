import { Component, OnInit, Input, EventEmitter } from '@angular/core';

//  Servicios
import { ApiService } from '../servicios/api.service';

export class Mascota {
  public nro_ficha: any;
  public raza: any;
  public color: any;
  public edad: any;
  public tipo: any;
  public token: any;

  constructor() { }
}

@Component({
  selector: 'app-abm-mascota',
  templateUrl: './abm-mascota.component.html',
  styleUrls: ['./abm-mascota.component.css']
})

export class AbmMascotaComponent implements OnInit {

    public objMascota: Mascota;
    public miMascota = new Mascota();
    public mascotaFlag: Boolean;

    constructor(private service: ApiService) { }

  ngOnInit() {
      this.objMascota = new Mascota();
      this.mascotaFlag = false;
  }

  pedirMascota() {
      // this.validarCampos();
      this.objMascota.nro_ficha = this.miMascota.nro_ficha;
      this.objMascota.raza = this.miMascota.raza;
      this.objMascota.color = this.miMascota.color;
      this.objMascota.edad = this.miMascota.edad;
      this.objMascota.tipo = this.miMascota.tipo;
      this.objMascota.token = localStorage.getItem('token');

       // console.log(this.objMascota);
      this.service.postMascota( this.objMascota, '/mascota/' )
      .then( data => {
            this.mascotaFlag = true;
            console.log(data);
      })
      .catch( e => {
          console.log(e);
      } );


  }

}
