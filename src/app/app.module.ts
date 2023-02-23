import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { LoginFuncionarioComponent } from './components/login-funcionario/login-funcionario.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClienteComponent,
    ClienteDetailsComponent,
    ClientesListComponent,
    AddFuncionarioComponent,
    LoginFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
