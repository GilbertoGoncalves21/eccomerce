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

    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {}

    get searchInput() {
      return this._searchInput;
    }
    
    get cartButton() {
      return this._cartButton;
    }

    produto: Product | undefined;
    categoriaNome: string = '';
  
  
    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.produto = PRODUTOS.find(p => p.id === id);
      
      if (!this.produto) {
        // Produto não encontrado, exibe uma mensagem ou redireciona
        console.error('Produto não encontrado!');
        // Você pode usar o Router para redirecionar, se necessário:
        // this.router.navigate(['/home']);
      } else {
        const categoria = CATEGORIES.find(c => c.id === this.produto?.id_category);
        this.categoriaNome = categoria?.name || '';
      }
    }
    

    isImageModalOpen = false;

    onImageClick(): void {
      if (window.innerWidth < 768) {
        this.isImageModalOpen = true;
      }
    }

    closeImageModal(): void {
      this.isImageModalOpen = false;
    }

    navegateToHome(): void {
      this.router.navigate(['/']);
    }
}
