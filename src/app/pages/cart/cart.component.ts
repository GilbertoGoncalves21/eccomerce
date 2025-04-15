import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart';
import { CartItem } from 'src/app/shared/products'; // Se CartItem for exportado lá

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

  constructor(private cartService: CartService) {}

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
}
