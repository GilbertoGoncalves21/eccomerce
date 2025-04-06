import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private _searchInput: boolean = false;
  private _cartButton: boolean = false;

  constructor() {}

  get searchInput() {
    return this._searchInput;
  }
  
  get cartButton() {
    return this._cartButton;
  }
}
