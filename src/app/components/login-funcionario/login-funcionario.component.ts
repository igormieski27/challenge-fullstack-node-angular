import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})

export class LoginFuncionarioComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
   ) { }
  email = "";
  senha = "";
  erro = false;
  sucesso = false;
  usuario = {};
  ngOnInit(): void {
    
  }
  onSubmit() {
    const url = 'http://localhost:8080/api/funcionarios/login'; // URL da rota de login no backend
    const data = { email: this.email, senha: this.senha }; // Dados do formulário
    console.log(data);
    this.http.post(url, data).subscribe(
      (response:any) => { 
        console.log(response);
        if (response['id']){
          this.usuario = response;
          const usuariostr = JSON.stringify(this.usuario);
          localStorage.setItem('Funcionario', usuariostr);
        }
         // Tratar a resposta do backend
        alert("Login realizado com sucesso!");
        this.router.navigate(['/clientes']);
        this.sucesso = true;
      },
      error => {
        this.erro = true;
      }
      
    
    );
  }

}
