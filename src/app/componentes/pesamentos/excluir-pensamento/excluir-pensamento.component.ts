import { Pensamento } from './../pensamentoInterface';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesamentosService } from '../../pesamentos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

  constructor(
    private service: PesamentosService,
    private router: Router,
    private route:  ActivatedRoute
    ){

  }

  pensamento :Pensamento = {
    id:0,
    content: '',
    autorship: '',
    model: ''
  }

  excluirPensamento(){
    if(this.pensamento.id){   
      this.service.delete(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamento'])
      })
    }
  } 

  cancelarExcluirPensamento(){
    this.router.navigate(['/listar-pensamento'])
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findByID(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }


}
