export interface Product {
    id: number,
    nome: string,
    id_category: number,
    descricao: string,
    preco: number,
    imagem: string
}

export const PRODUTOS: Product[] = [
    {
      id: 1,
      nome: 'Combo 1',
      id_category: 1,
      descricao: 'Descrição do Produto 1',
      preco: 60.00,
      imagem: 'assets/lanche.jpg'
    },
    {
      id: 2,
      nome: 'Combo 2',
      id_category: 1,
      descricao: 'Descrição do Produto 2',
      preco: 50.00,
      imagem: 'assets/lanche.jpg'
    },
    {
      id: 3,
      nome: 'Combo 3',
      id_category: 2,
      descricao: 'Descrição do Produto 3',
      preco: 40.00,
      imagem: 'assets/lanche.jpg'
    },
    {
      id: 4,
      nome: 'Combo 4',
      id_category: 3,
      descricao: 'Descrição do Produto 4',
      preco: 70.00,
      imagem: 'assets/lanche.jpg'
    },
    {
      id: 5,
      nome: 'Combo 5',
      id_category: 5,
      descricao: 'Descrição do Produto 5',
      preco: 120.00,
      imagem: 'assets/lanche.jpg'
    },
  ];