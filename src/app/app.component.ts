import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component"; // tem que importar para a leitura da tag <app-cabecalho> funcionamento do app.component.html

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CabecalhoComponent]
})
export class AppComponent {
  title = 'my-angular-app';
}
