import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Pensamento } from '../pensamentoInterface';
import { PesamentosService } from '../../pesamentos.service';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    content: 'Learning Angular',
    autorship: 'Vitor Cosso',
    model: 'modelo1'
  }

  constructor(
    private service: PesamentosService,
    private router: Router
    
    ){}


  criarPensamento(){
    this.service.create(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    });
  }

  cancelarPesamento(){
    alert("the quote has been canceled!");
  }
}
