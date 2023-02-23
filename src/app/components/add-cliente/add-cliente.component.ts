import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {

  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    empresa: '',
    visivel: true
  };
  submitted = false;
  confirmado = false;

  constructor(private clienteService: ClienteService) { }

  saveCliente(): void {
    const data = {
      nome: this.cliente.nome,
      email: this.cliente.email,
      telefone: this.cliente.telefone,
      cidade: this.cliente.cidade,
      empresa: this.cliente.empresa,
      visivel:true
    };
    this.clienteService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      empresa: '',
      visivel: true
    };
  }

  confirmar(): void{
    this.confirmado = true;
  }

}