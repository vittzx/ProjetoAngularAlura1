import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";

@Component({
    selector: 'app-listar-pensamento',
    standalone: true,
    templateUrl: './listar-pensamento.component.html',
    styleUrl: './listar-pensamento.component.css',
    imports: [CommonModule, RouterLink, PensamentoComponent]
})
export class ListarPensamentoComponent {
    listaPensamentos = [
        // {
        //     content: 'Valores.',
        //     autorship: 'vittzx29.',
        //     model: 'modelo3'

        // },
        // {
        //     content: 'Componente pai se comunica com o filho pelo Input(), ai com isso ele passa os valores do pensamento para o pensamento',
        //     autorship: 'vittzx29.',
        //     model: 'modelo2'

        // }
    ];
}
