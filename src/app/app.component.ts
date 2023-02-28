import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular14';
  opcao = 'Área Interna';
  usuario = {id: 0};
  ngOnInit(): void { 
    const funcionarioStr = localStorage.getItem('Funcionario');
    if (funcionarioStr){
      this.usuario = JSON.parse(funcionarioStr);
    }
    if(this.usuario.id > 0){
      this.opcao = 'Desconectar';
    }else{
      this.opcao = 'Área Interna';
    }
  }
  deslogar(): void{
    localStorage.setItem('Funcionario', "");
    this.opcao = 'Área Interna';
  }
}
