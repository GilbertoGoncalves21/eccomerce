import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES, Category } from 'src/app/shared/category';
import { Product, PRODUTOS } from 'src/app/shared/products';

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

    constructor(private router: Router) {}

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
  
    // Método para atualizar o valor de searchInput e aplicar o filtro
    onSearchInputChange(value: string) {
      this._searchInputValue = value;
      this.filterBySearchInput(); // Chama o filtro sempre que o valor de pesquisa muda
    }
}
