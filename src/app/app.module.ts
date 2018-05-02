import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginService } from './login.service';

import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { BankServiceService } from './bank-service.service';
import { DetalleComponent } from './detalle/detalle.component';
import { IngresarUsuarioComponent } from './ingresar-usuario/ingresar-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    DetalleComponent,
    IngresarUsuarioComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    BankServiceService
/* . . . */
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }