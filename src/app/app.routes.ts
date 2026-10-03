import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Produtos } from './pages/produtos/produtos';
import { Movimentacoes } from './pages/movimentacoes/movimentacoes';
import { Categorias } from './pages/categorias/categorias';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'produtos',
    component: Produtos
  },
  {
    path: 'movimentacoes',
    component: Movimentacoes
  },
  {
    path: 'categorias',
    component: Categorias
  }
];