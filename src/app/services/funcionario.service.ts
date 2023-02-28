import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

const baseUrl = 'http://localhost:8080/api/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl, data);
  }

}