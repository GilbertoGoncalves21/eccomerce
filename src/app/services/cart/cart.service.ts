import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from 'src/app/shared/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantidade += 1;
    } else {
      this.cart.push({ ...product, quantidade: 1 });
    }
    this.updateCartCount();
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.updateCartCount();
  }

  clearCart(): void {
    this.cart = [];
    this.updateCartCount();
  }

  increaseQuantity(productId: number): void {
    const item = this.cart.find(p => p.id === productId);
    if (item) {
      item.quantidade += 1;
      this.updateCartCount();
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cart.find(p => p.id === productId);
    if (item) {
      item.quantidade -= 1;
      if (item.quantidade <= 0) {
        this.removeFromCart(productId);
      } else {
        this.updateCartCount();
      }
    }
  }

  getCartCount(): number {
    return this.cart.reduce((total, item) => total + item.quantidade, 0);
  }

  private updateCartCount(): void {
    this.cartCount.next(this.getCartCount());
  }
}
