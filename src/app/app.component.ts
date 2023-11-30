import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CriarPensamentoComponent } from "./componentes/pesamentos/criar-pensamento/criar-pensamento.component"; // tem que importar para a leitura da tag <app-cabecalho> funcionamento do app.component.html
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from "./componentes/pesamentos/listar-pensamento/listar-pensamento.component";
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,RouterLink,CabecalhoComponent, RodapeComponent, CriarPensamentoComponent, FormsModule, ListarPensamentoComponent, HttpClientModule],
})


export class AppComponent {
  title = 'my-angular-app';
}

