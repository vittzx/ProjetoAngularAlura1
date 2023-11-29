import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pesamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pesamentos/listar-pensamento/listar-pensamento.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listar-pensamento',
        pathMatch: 'full'
    },
    {
        path: 'criar-pensamento',
        component: CriarPensamentoComponent
    },
    {
        path: 'listar-pensamento',
        component: ListarPensamentoComponent
    }
];



