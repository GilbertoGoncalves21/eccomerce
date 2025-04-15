import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    private _cartItemCount: number = 0;

    constructor(private router: Router, private cartService: CartService) {}

    @Input() searchInput: boolean = false;
    @Input() cartButton: boolean = false;
    @Output() searchInputChange = new EventEmitter<string>();

    get cartItemCount(): number {
        return this._cartItemCount;
    }

    ngOnInit(): void {
        this.cartService.cartCount$.subscribe(count => {
          this._cartItemCount = count;
        });
      }

    onSearchChange(value: string) {
        this.searchInputChange.emit(value);
    }

    navigateToHome() {
        this.router.navigate(['/']);
    }

    navigateToCart() {
        this.router.navigate(['/cart']);
    }
}
