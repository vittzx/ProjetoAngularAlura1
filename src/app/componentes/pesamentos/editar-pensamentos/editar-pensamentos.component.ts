import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamentoInterface';
import { PesamentosService } from '../../pesamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-pensamentos.component.html',
  styleUrl: './editar-pensamentos.component.css'
})
export class EditarPensamentosComponent {
   pensamento: Pensamento = {
    id: 0,
    content: '',
    autorship: '',
    model: ''
  }

  constructor(private service: PesamentosService, private router: Router, private route: ActivatedRoute){}

  editarPensamento(){
    this.service.put(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listar-pensamento'])
    })
  }


  cancelarEditar(){
    this.router.navigate(['/listar-pensamento'])
  }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findByID(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }
}
