import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { Pensamento } from '../pensamentoInterface';

@Component({
    selector: 'app-listar-pensamento',
    standalone: true,
    templateUrl: './listar-pensamento.component.html',
    styleUrl: './listar-pensamento.component.css',
    imports: [CommonModule, RouterLink, PensamentoComponent]
})
export class ListarPensamentoComponent {
    listaPensamentos: Pensamento[] = [];
}
