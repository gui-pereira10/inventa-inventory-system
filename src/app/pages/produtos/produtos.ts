import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {
  produtos = [
    {
      id: 1,
      nome: 'Arroz 5kg',
      categoria: 'Alimentos',
      quantidade: 10,
      estoqueMinimo: 3,
      preco: 25.90
    },
    {
      id: 2,
      nome: 'Café 500g',
      categoria: 'Alimentos',
      quantidade: 2,
      estoqueMinimo: 5,
      preco: 18.90
    },
    {
      id: 3,
      nome: 'Detergente',
      categoria: 'Limpeza',
      quantidade: 0,
      estoqueMinimo: 3,
      preco: 3.50
    },
    {
      id: 4,
      nome: 'Refrigerante 2L',
      categoria: 'Bebidas',
      quantidade: 15,
      estoqueMinimo: 5,
      preco: 9.90
    }
  ];

}
