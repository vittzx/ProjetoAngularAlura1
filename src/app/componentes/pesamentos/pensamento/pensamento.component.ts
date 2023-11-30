import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamentoInterface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  //pensamento recebe informacoes do componente pai.
  @Input() pensamento: Pensamento = {
    id:0,
    content: '',
    autorship: '',
    model:''
  }


  widthCard(): string {
    if(this.pensamento.content.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
  
}
