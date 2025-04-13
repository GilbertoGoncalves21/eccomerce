import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES } from 'src/app/shared/category';
import { Product, PRODUTOS } from 'src/app/shared/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    private _searchInput: boolean = false;
    private _cartButton: boolean = true;
    private _product: Product | undefined;
    private _categoryName: string = '';
    private _isImageModalOpen: boolean = false;

    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {}

    get searchInput(): boolean {
      return this._searchInput;
    }
    
    get cartButton() {
      return this._cartButton;
    }

    get product(): Product | undefined {
      return this._product;
    }

    get categoryName(): string {
      return this._categoryName
    }
    
    get isImageModalOpen(): boolean {
      return this._isImageModalOpen;
    }  

    private ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this._product = PRODUTOS.find(p => p.id === id);
      
      if (!this._product) {
        console.error('Produto não encontrado!');
      } else {
        const categoria = CATEGORIES.find(c => c.id === this._product?.id_category);
        this._categoryName = categoria?.name || '';
      }
    }

    onImageClick(): void {
      if (window.innerWidth < 768) {
        this._isImageModalOpen = true;
      }
    }

    closeImageModal(): void {
      this._isImageModalOpen = false;
    }

    navegateToHome(): void {
      this.router.navigate(['/']);
    }
}
