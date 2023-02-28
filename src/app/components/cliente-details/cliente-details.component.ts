import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentCliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    empresa: '',
    visivel: false
  };
  usuario = {id : 0, nome: ""};
  clientesUsuario = [];
  message = '';
  sucMsg = '';
  
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    ) { }
  
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCliente(this.route.snapshot.params["id"]);
    }
    const funcionarioStr = localStorage.getItem('Funcionario');
    console.log(funcionarioStr);
    if (funcionarioStr){
      this.usuario = JSON.parse(funcionarioStr);
    }
  }

  getCliente(id: string): void {
    this.clienteService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCliente = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      nome: this.currentCliente.nome,
      email: this.currentCliente.email,
      telefone: this.currentCliente.telefone,
      cidade: this.currentCliente.cidade,
      empresa: this.currentCliente.empresa,
      idFuncionario: this.usuario.id
    };

    this.message = '';

    this.clienteService.update(this.currentCliente.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentCliente.visivel = status;
          const nome = this.currentCliente.nome;
          this.currentCliente ={ nome: '',
          email: '',
          telefone: '', 
          cidade: '',
          empresa: '',
          visivel: false
        };
          this.message = res.message ? res.message : 'The status was updated successfully!';
          this.location.go(this.location.path());
          window.location.reload();
          alert('Você contatou '+nome+' com sucesso!');
        },
        error: (e) => console.error(e)
      });
  }

  updateCliente(): void {
    this.message = '';

    this.clienteService.update(this.currentCliente.id, this.currentCliente)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This cliente was updated successfully!';

        },
        error: (e) => console.error(e)
      });
  }

  deleteCliente(): void {
    this.clienteService.delete(this.currentCliente.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/clientes']);
        },
        error: (e) => console.error(e)
      });
  }

}