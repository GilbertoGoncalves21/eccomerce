import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from 'src/app/shared/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  private get cart(): CartItem[] {
    return this.cartSubject.value;
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  private updateCart(cart: CartItem[]): void {
    this.cartSubject.next(cart);
    this.updateCartCount(cart);
  }

  private updateCartCount(cart: CartItem[] = this.cart): void {
    const total = cart.reduce((sum, item) => sum + item.quantidade, 0);
    this.cartCount.next(total);
  }

  addToCart(product: Product): void {
    const existing = this.cart.find(p => p.id === product.id);
    let updatedCart: CartItem[];

    if (existing) {
      updatedCart = this.cart.map(item =>
        item.id === product.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    } else {
      updatedCart = [...this.cart, { ...product, quantidade: 1 }];
    }

    this.updateCart(updatedCart);
  }

  removeFromCart(productId: number): void {
    const updatedCart = this.cart.filter(item => item.id !== productId);
    this.updateCart(updatedCart);
  }

  clearCart(): void {
    this.updateCart([]);
  }

  increaseQuantity(productId: number): void {
    const updatedCart = this.cart.map(item =>
      item.id === productId
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    );
    this.updateCart(updatedCart);
  }

  decreaseQuantity(productId: number): void {
    const item = this.cart.find(p => p.id === productId);
    if (!item) return;

    if (item.quantidade <= 1) {
      this.removeFromCart(productId);
    } else {
      const updatedCart = this.cart.map(p =>
        p.id === productId ? { ...p, quantidade: p.quantidade - 1 } : p
      );
      this.updateCart(updatedCart);
    }
  }
}

