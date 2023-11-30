import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pesamentos/pensamentoInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // significa que toda a aplicacao pode ter acesso | Injatavel em root
})
// todos os metodos do crud se aplicam nessa classe.
export class PesamentosService {


  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { 
  }

  listar(): Observable<Pensamento[]>{
    console.log(this.http.get<Pensamento[]>(this.API));
    return this.http.get<Pensamento[]>(this.API);
  };

  create(pensamento: Pensamento){
    return this.http.post<Pensamento>(this.API, pensamento);
  };


}
