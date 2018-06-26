import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ApiService } from './servicios/api.service';
import { AuthService } from './servicios/auth.service';
import { VerificarJwtService } from './servicios/verificar-jwt.service';
import { JwtModule } from './jwt/jwt.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { AbmMascotaComponent } from './abm-mascota/abm-mascota.component';
import { MascotasTurnosComponent } from './mascotas-turnos/mascotas-turnos.component';
import { AbmTurnosComponent } from './abm-turnos/abm-turnos.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent   },
  { path: 'registro', component: RegistroComponent   },
  { path: 'inicio', component: InicioComponent, canActivate: [VerificarJwtService] },
  { path: 'mascota', component: AbmMascotaComponent, canActivate: [VerificarJwtService] },
  { path: 'turnos', component: AbmTurnosComponent, canActivate: [VerificarJwtService] },
  { path: '',   redirectTo: '/registro', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    InicioComponent,
    AbmMascotaComponent,
    MascotasTurnosComponent,
    AbmTurnosComponent
  ],
  imports: [
    BrowserModule,
    JwtModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
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
