import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './servicios/api.service';
import { AuthService } from './servicios/auth.service';
import { VerificarJwtService } from './servicios/verificar-jwt.service';
import { JwtModule } from './jwt/jwt.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent   },
  { path: 'registro', component: RegistroComponent   },
  { path: 'inicio', component: InicioComponent, canActivate: [VerificarJwtService] },
  { path: '',   redirectTo: '/registro', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    JwtModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AuthService,
      VerificarJwtService,
      ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
