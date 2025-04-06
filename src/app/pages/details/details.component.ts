import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    private _searchInput: boolean = false;
    private _cartButton: boolean = true;

    constructor() {}

    get searchInput() {
      return this._searchInput;
    }
    
    get cartButton() {
      return this._cartButton;
    }
}
