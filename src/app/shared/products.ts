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
      nome: 'Combo Família',
      id_category: 1,
      descricao: '4 X-Salada, 200g de polenta frita, 200g de cebola frita, 350g de batata frita com cheddar e 100g de bacon.',
      preco: 60.00,
      imagem: 'assets/lanche.jpg'
    },
    {
      id: 2,
      nome: 'Lanche Kids',
      id_category: 2,
      descricao: 'Pão brioche, cebola, queijo prato, hamburguer bovino, tomate, alface, maionese. Lanche acompanha uma porção 200g de batata frita.',
      preco: 28.00,
      imagem: 'assets/lanche2.jpg'
    },
    {
      id: 3,
      nome: 'Combo para 1',
      id_category: 2,
      descricao: 'Monstruso, pão brioche, alface, cebola roxa, tomate, 2 carnes 200g de boi, cheddar, ketchuup. Lanche acompanha porção de batata e molho de ketchup.',
      preco: 40.00,
      imagem: 'assets/lanche3.jpg'
    },
    {
      id: 4,
      nome: 'Coca-Cola',
      id_category: 3,
      descricao: 'Refrigerante Coca-Cola 350ml',
      preco: 5.00,
      imagem: 'assets/bebida1.jpg'
    },
    {
      id: 5,
      nome: 'Água Mineral',
      id_category: 3,
      descricao: 'Água Mineral Crystal 500ml sem gás.',
      preco: 3.50,
      imagem: 'assets/bebida2.webp'
    },
    {
      id: 6,
      nome: 'Água Mineral com Gás',
      id_category: 3,
      descricao: 'Água Mineral Crystal 500ml com gás.',
      preco: 3.50,
      imagem: 'assets/bebida2.webp'
    },
];

export interface CartItem extends Product {
  quantidade: number;
}