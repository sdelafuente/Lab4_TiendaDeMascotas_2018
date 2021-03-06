import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { AuthHttp } from 'angular2-jwt';
import { Usuario } from '../usuario';

@Injectable()
export class ApiService {

url = 'http://localhost/api';

constructor(public http: Http, private authHttp: AuthHttp) { }


    getObjs(ruta: string) {
      return this.http.get(this.url + ruta )
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError );
    }

    postObj(objeto: Object, ruta: string) {
        return this.http.post(this.url + ruta, objeto)
        .toPromise()
        .then( this.extractData )
        .catch( this.handleError );
    }

    postRegistrar(user: Object, ruta: string) {
        return this.http.post(this.url + ruta, user)
        .toPromise()
        .then( this.extractData )
        .catch( this.handleError );
    }

    postLogin(user: Object, ruta: string) {

        return this.http.post(this.url + ruta, user)
        .toPromise()
        .then( this.extractData )
        .catch( this.handleError );
    }

    postMascota(mascota: Object, ruta: string) {
        // console.log(mascota);
        return this.http.post(this.url + ruta, mascota)
        .toPromise()
        .then( this.extractData )
      .catch( this.handleError );
    }

    private extractData(res: Response) {
        const body = res.json();

        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error( errMsg );
        // console.error( 'CATCH' );
        return Observable.throw(errMsg);
    }


}
