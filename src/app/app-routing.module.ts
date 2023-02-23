import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { LoginFuncionarioComponent } from './components/login-funcionario/login-funcionario.component';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/:id', component: ClienteDetailsComponent },
  { path: 'add', component: AddClienteComponent },
  { path: 'login', component: LoginFuncionarioComponent },
  { path: 'cadastro', component: AddFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }