import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes?: Cliente[];
  clientesContatados = [];
  currentCliente: Cliente = {};
  currentIndex = -1;
  currentIndexContatado = -1;
  nome = '';
  sucMsg = '';
  usuario = {id : 0, nome: ""};
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    const funcionarioStr = localStorage.getItem('Funcionario');
    console.log(funcionarioStr);
    if (funcionarioStr){
      this.usuario = JSON.parse(funcionarioStr);
    }
    this.retrieveClientes();
  }

  retrieveClientes(): void {
    this.clienteService.getAll()
      .subscribe({
        
        next: (data) => {
          this.clientes = data;
          if(this.clientes){
            this.clientes.forEach(cliente => {
              if(cliente.idFuncionario == this.usuario.id){
                cliente.visivel=true;
              }
              // corpo da função a ser executada para cada elemento do array
            });
          }
        },
        
        error: (e) => console.error(e)
      });
    
  }
  
  
  refreshList(): void {
    this.retrieveClientes();
    this.currentCliente = {};
    this.currentIndex = -1;
  }

  setActiveCliente(cliente: Cliente, index: number): void {
    this.currentCliente = cliente;
    this.currentIndex = index;
  }

  setActiveClienteContatado(cliente: Cliente, index: number): void {
    this.currentCliente = cliente;
    this.currentIndexContatado = index;
  }


  removeAllClientes(): void {
    this.clienteService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentCliente = {};
    this.currentIndex = -1;

    this.clienteService.findByTitle(this.nome)
      .subscribe({
        next: (data) => {
          this.clientes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}