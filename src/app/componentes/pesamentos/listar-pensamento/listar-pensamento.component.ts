import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { Pensamento } from '../pensamentoInterface';
import { PesamentosService } from '../../pesamentos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-listar-pensamento',
    standalone: true,
    templateUrl: './listar-pensamento.component.html',
    styleUrl: './listar-pensamento.component.css',
    imports: [CommonModule, RouterLink, PensamentoComponent, HttpClientModule]
})
export class ListarPensamentoComponent {
    listaPensamentos: Pensamento[] = [];

    constructor(private service: PesamentosService){}

    ngOnInit(): void{
        this.service.listar().subscribe((listaPensamentoObtida) => {
            this.listaPensamentos = listaPensamentoObtida;
        });
    }

}
