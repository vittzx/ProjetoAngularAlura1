import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  //pensamento recebe informacoes do componente pai.
  @Input() pensamento = {
    content: '',
    autorship: '',
    model:''
  }
}
