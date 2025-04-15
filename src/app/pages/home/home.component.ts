import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart';
import { CATEGORIES, Category } from 'src/app/shared/category';
import { Product, PRODUTOS } from 'src/app/shared/products';
import { SimpleDialogComponent } from 'src/app/shared/simples-dialog/simples-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    private allProducts: Product[] = PRODUTOS;
    private _products: Product[] = PRODUTOS;
    private _categories: Category[] = CATEGORIES;
    private _searchInput: boolean = true;
    private _searchInputValue: string = '';
    private _cartButton: boolean = true;

    constructor(
      private router: Router,
      private cartService: CartService,
      private dialog: MatDialog
    ) {}

    get products() {
      return this._products;
    }
    
    get categories() {
      return this._categories;
    }
    
    get searchInput() {
      return this._searchInput;
    }
    
    get cartButton() {
      return this._cartButton;
    }
    
    getCategoryNameById(id: number): string {
      const category = this._categories.find(c => c.id === id);
      return category ? category.name : '';
    }

    trackById(index: number, item: Product | Category): number {
      return item.id;
    }    

    navigateToProductDetails(produto: Product) {
      this.router.navigate(['/details/', produto.id]);
    }

    filterByCategory(categoria: Category | null) {
      if (!categoria) {
        this._products = this.allProducts;
        return;
      }

      this._products = this.allProducts.filter(prod => prod.id_category === categoria?.id);
    }

    filterBySearchInput() {
      this._products = this.allProducts.filter(prod => 
        prod.nome.toLowerCase().includes(this._searchInputValue.toLowerCase())
      );
    }
  
    onSearchInputChange(value: string) {
      this._searchInputValue = value;
      this.filterBySearchInput();
    }

    addToCart(event: Event, product: Product): void {
      event.stopPropagation();
      this.cartService.addToCart(product);
    
      const dialogRef = this.dialog.open(SimpleDialogComponent, {
        data: { message: `${product.nome} foi adicionado ao carrinho!` },
        panelClass: 'notification-dialog-panel',
        hasBackdrop: false,
      });
    
      setTimeout(() => dialogRef.close(), 1000); // fecha automaticamente
    }
}
