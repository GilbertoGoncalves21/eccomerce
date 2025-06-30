import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart';
import { CartItem } from 'src/app/shared/products';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  private _cartItems: CartItem[] = [];
  private _total: number = 0;
  private _searchInput: boolean = false;
  private _cartButton: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  get searchInput() {
    return this._searchInput;
  }
  
  get cartButton() {
    return this._cartButton;
  }

  get cartItems(): CartItem[] {
    return this._cartItems;
  }
  
  get total(): number {
    return this._total;
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this._cartItems = items;
      this.updateTotal();
    });
  }

  trackById(index: number, item: CartItem): number {
    return item.id;
  }

  updateTotal(): void {
    this._total = this._cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item.id);
  }

  increaseQuantity(item: CartItem): void {
    this.cartService.increaseQuantity(item.id);
  }

  decreaseQuantity(item: CartItem): void {
    this.cartService.decreaseQuantity(item.id);
  }

  finalizePurchase(): void {
    if (this._cartItems.length === 0) {
      return;
    }

    const messageLines = this._cartItems.map(
      item => `- ${item.nome} (x${item.quantidade})`
    );
    
    const message = 'Olá, gostaria de finalizar meu pedido:\n\n' + messageLines.join('\n') + `\n\n*Total:* R$ ${this._total.toFixed(2)}`;
    
    window.open(`https://wa.me/${environment.whatsappPhone}?text=${encodeURIComponent(message)}`, '_blank');
    
    for (let i = this._cartItems.length - 1; i >= 0; i--) {
        this.cartService.removeFromCart(this._cartItems[i].id);
    }

    this._cartItems = [];
    this.updateTotal();
    this._searchInput = false;
    this._cartButton = false;
    this.router.navigate(['/']);
  }
}
