import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
//  Servicios
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    //   Objeto Usuario
    usuario: Usuario;
    public miUsuario = new Usuario(0, '', 'admin', '');

    constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
  }

  private cargarUsuario() {

      const privUsuario = new Usuario(
          this.miUsuario.id,
          this.miUsuario.email,
          this.miUsuario.rol,
          this.miUsuario.password
      );

      this.service.postLogin( privUsuario, '/registro/' )
      .then( data => {
          console.log(data);
          this.router.navigateByUrl('/inicio');
          return true;
      })
      .catch( e => {
          console.log(e);
       console.error('Error guardando una usuario');
       return false;
      } );
  }

}
