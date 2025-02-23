import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { categories } from './data/categories';
import { products } from './data/products';
import { Category, Product } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <h1>Online Store</h1>
    
    <nav class="categories">
      @for (category of categories; track category.id) {
        <button 
          [class.active]="selectedCategory?.id === category.id"
          (click)="selectCategory(category)"
        >
          {{ category.name }}
        </button>
      }
    </nav>

    @if (selectedCategory) {
      <app-product-list [products]="filteredProducts" />
    }
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = categories;
  products = products;
  selectedCategory: Category | null = null;

  get filteredProducts(): Product[] {
    return this.selectedCategory
      ? this.products.filter(p => p.categoryId === this.selectedCategory?.id)
      : [];
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
