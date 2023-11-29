import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamentoInterface';

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

  criarPensamento(){
    alert("quote has been created!");
  }

  cancelarPesamento(){
    alert("the quote has been canceled!");
  }
}
