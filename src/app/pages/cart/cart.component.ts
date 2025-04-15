import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart';
import { Product } from 'src/app/shared/products';

interface CartItem extends Product {
  quantidade: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private _searchInput: boolean = false;
  private _cartButton: boolean = false;
  private _cartProducts: Product[] = [];

  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  get searchInput() {
    return this._searchInput;
  }
  
  get cartButton() {
    return this._cartButton;
  }

  ngOnInit(): void {
    const cart = localStorage.getItem('cart');
    this.cartItems = this.cartService.getCart().map(product => ({ ...product, quantidade: 1 }));
    this.updateTotal();
    console.log('🛒 Produtos no carrinho:', this.cartItems);
  }
  
  trackById(index: number, item: CartItem): number {
    return item.id;
  }

  updateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.updateTotal();
  }

  increaseQuantity(item: CartItem): void {
    item.quantidade++;
    this.updateTotal();
  }
  
  decreaseQuantity(item: CartItem): void {
    if (item.quantidade > 1) {
      item.quantidade--;
      this.updateTotal();
    }
  }
}
