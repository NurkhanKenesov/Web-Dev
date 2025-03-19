import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { Category } from './models/product.interface';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductListComponent
  ],
  template: `
    <div class="container">
      <h1>Online Store</h1>
      
      <nav class="categories">
        <button
          *ngFor="let category of categories"
          (click)="selectCategory(category.id)"
          [class.active]="selectedCategoryId === category.id"
        >
          {{ category.name }}
        </button>
      </nav>

      <app-product-list
        *ngIf="selectedCategoryId"
        [categoryId]="selectedCategoryId"
      ></app-product-list>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
    .categories {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .categories button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .categories button.active {
      background-color: #007bff;
      color: white;
    }
  `]
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId?: number;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
