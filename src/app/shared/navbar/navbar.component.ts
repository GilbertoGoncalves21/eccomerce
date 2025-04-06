import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(private router: Router) {}

    @Input() searchInput: boolean = false;
    @Input() cartButton: boolean = false;
    @Output() searchInputChange = new EventEmitter<string>();

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
