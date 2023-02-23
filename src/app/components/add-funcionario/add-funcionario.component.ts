import { Component } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent {

  funcionario: Funcionario = {
    nome: '',
    email: '',
    senha: ''
  };
  submitted = false;
  confirmado = false;

  constructor(private funcionarioService: FuncionarioService) { }

  saveFuncionario(): void {
    const data = {
      nome: this.funcionario.nome,
      email: this.funcionario.email,
      senha: this.funcionario.senha
    };
    
    this.funcionarioService.create(data)
      .subscribe({
        
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newFuncionario(): void {
    this.submitted = false;
    this.funcionario = {
      nome: '',
      email: '',
      senha: ''
    };
  }

  confirmar(): void{
    this.confirmado = true;
  }

}