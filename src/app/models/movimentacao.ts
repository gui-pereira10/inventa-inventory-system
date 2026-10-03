export interface Movimentacao {
  id: number;
  produtoId: number;
  tipo: 'entrada' | 'saida';
  quantidade: number;
  data: Date;
}